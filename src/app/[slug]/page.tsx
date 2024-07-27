import { MarkdownText } from "@/components/mdx/MarkdownText";
import { notFound } from "next/navigation";
import { getMarkdownBySlug } from "../lib/actions";

export default async function ReadMdx({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const getBySlug = await getMarkdownBySlug(slug);

  if (!getBySlug.success || !getBySlug.data) notFound();

  const {
    data: { content },
  } = getBySlug;

  return (
    <section className="w-full flex justify-center py-12">
      <MarkdownText text={content} />
    </section>
  );
}
