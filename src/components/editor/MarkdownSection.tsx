"use client";
import { addMarkdown, editMarkdown } from "@/app/lib/actions";
import { MarkdownText } from "@/components/mdx/MarkdownText";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { toast } from "@/components/ui/use-toast";
import useMarkdownStore from "@/store";
import { Maximize, Save } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

type MdxSectionEdit = {
  currentTittle?: string;
  currentContent?: string;
};

export const MarkdownSection = ({
  currentTittle,
  currentContent,
}: MdxSectionEdit) => {
  const { title, content, expand, setExpand, setTitle, setText } =
    useMarkdownStore();
  const route = useRouter();
  const path = usePathname();
  const { slug } = useParams();
  const markdownSlug = Array.isArray(slug) ? slug[0] : slug;

  const handleSave = (variant: "default" | "destructive", message: string) => {
    toast({
      variant,
      description: message,
    });
  };

  useEffect(() => {
    if (
      markdownSlug &&
      path.split("/")[1] === "edit" &&
      currentContent &&
      currentTittle
    ) {
      setTitle(currentTittle);
      setText(currentContent);
    }
  }, [currentContent, currentTittle, markdownSlug, path, setText, setTitle]);

  const handleChange = async () => {
    if (
      markdownSlug &&
      path.split("/")[1] === "edit" &&
      currentContent &&
      currentTittle
    ) {
      const save = await editMarkdown(markdownSlug, title, content);

      if (!save.success) handleSave("destructive", save.message);
      if (save.message === "Usuario no autenticado") route.push("/auth/login");
      if (save.message === "El registro de markdown no existe.")
        route.push("/");
      if (save.message === "Markdown actualizado!") {
        route.refresh();
        handleSave("default", save.message);
        setTitle("");
        setText("");
      }
    } else {
      const save = await addMarkdown(title, content);

      if (!save.success) handleSave("destructive", save.message);
      if (save.message === "Usuario no autenticado") route.push("/auth/login");
      if (save.message === "Markdown guardado!") {
        route.refresh();
        handleSave("default", save.message);
        setTitle("");
        setText("");
      }
    }
  };

  const expandStyle =
    expand &&
    "col-span-1 row-span-2 md:col-span-2 row-span-1 h-[calc(100dvh-66px)]";

  return (
    <section
      className={`${expandStyle} flex  max-w-[calc(100vw-18px)] flex-col md:grow md:h-[calc(100dvh-66px)] gap-1`}
    >
      <div className="border rounded-sm flex justify-end items-center">
        <Button variant="ghost" onClick={handleChange}>
          <Save className="mr-2 w-4 h-4" />
          Guardar
        </Button>

        <Button variant="ghost" onClick={setExpand}>
          <Maximize className="mr-2 w-4 h-4" />
          Expandir
        </Button>
      </div>

      <ScrollArea
        id="mdxparent"
        className="rounded-md border flex flex-1 shrink-0 p-3"
      >
        <MarkdownText text={content} />
        <ScrollBar />
      </ScrollArea>
    </section>
  );
};
