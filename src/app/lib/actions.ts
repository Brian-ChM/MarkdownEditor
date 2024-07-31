"use server";

import { auth } from "@/auth";
import prisma from "./prisma";

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

export async function getCurrentUser() {
  const session = await auth();
  return session?.user;
}

export async function getMarkdowns() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    const markdown = await prisma.markdownText.findMany({
      where: { userId: user?.id },
      orderBy: { createdAt: "asc" },
    });

    return { success: true, message: "Success", data: markdown };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "Something went wrong",
    };
  }
}

export async function getMarkdownBySlug(slug: string) {
  try {
    if (!slug) {
      throw new Error("Slug is required");
    }

    const user = await getCurrentUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    const markdown = await prisma.markdownText.findUnique({
      where: { slug },
    });

    if (!markdown || markdown.userId !== user.id) {
      throw new Error("Markdown not found or user not authorized");
    }

    return { success: true, message: "Success", data: markdown };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "Something went wrong",
    };
  }
}

export async function addMarkdown(
  title: string,
  content: string,
  isFavorite: boolean = false
) {
  try {
    const user = await getCurrentUser();

    if (!user || !user.id) {
      throw new Error("Usuario no autenticado");
    } else if (!title.trim()) {
      throw new Error("Proporcione un título para el markdown.");
    } else if (!content.trim()) {
      throw new Error("Proporcione contenido para el markdown.");
    }

    const slug = createSlug(title);

    await prisma.markdownText.create({
      data: {
        title,
        content,
        slug,
        isFavorite,
        userId: user.id,
      },
    });

    return { success: true, message: "Markdown guardado!" };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "Something went wrong",
    };
  }
}

export async function deleteMarkdown(id: string) {
  try {
    if (!id) {
      throw new Error("Invalid ID");
    }

    const deletedMarkdown = await prisma.markdownText.delete({
      where: { id },
    });

    return deletedMarkdown;
  } catch (error) {
    console.error("Error deleting markdown:", error);
    return { message: "Something went wrong" };
  }
}

export async function toggleFavoriteMarkdown(id: string, isFavorite: boolean) {
  try {
    if (!id) {
      throw new Error("Invalid ID");
    }

    const updatedMarkdown = await prisma.markdownText.update({
      where: { id },
      data: { isFavorite: !isFavorite },
    });

    return updatedMarkdown;
  } catch (error) {
    console.error("Error updating favorite status:", error);
    return { message: "Something went wrong" };
  }
}

export async function editMarkdown(
  slug: string,
  title: string,
  content: string
) {
  try {
    const user = await getCurrentUser();

    if (!user || !user.id) {
      throw new Error("Usuario no autenticado");
    } else if (!title.trim()) {
      throw new Error("Proporcione un título para el markdown.");
    } else if (!content.trim()) {
      throw new Error("Proporcione contenido para el markdown.");
    }

    const newSlug = createSlug(title);

    const existingMarkdown = await prisma.markdownText.findUnique({
      where: { slug },
    });

    if (!existingMarkdown) {
      throw new Error("El registro de markdown no existe.");
    }

    const updatedMarkdown = await prisma.markdownText.update({
      where: { slug },
      data: {
        title,
        content,
        slug: newSlug,
      },
    });

    return {
      success: true,
      message: "Markdown actualizado!",
      data: updatedMarkdown,
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message || "Something went wrong",
    };
  }
}
