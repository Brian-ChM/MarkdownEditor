import { ButtonEdit, ButtonFavorite } from "@/components/mdx/card/ButtonsCard";
import { MarkdownText } from "@/components/mdx/MarkdownText";
import { notFound } from "next/navigation";
import { getMarkdownBySlug } from "../lib/actions";

type ReadMdxProps = {
  params: { slug: string };
};

export default async function ReadMdx({ params }: ReadMdxProps) {
  const { slug: mdxslug } = params;

  const getBySlug = await getMarkdownBySlug(mdxslug);

  if (!getBySlug.success || !getBySlug.data) notFound();

  const {
    data: { id, isFavorite, slug, content },
  } = getBySlug;

  return (
    <section className="w-full flex justify-center py-12">
      <div className="max-w-[calc(100vw-16px)] md:max-w-2xl">
        <MarkdownText text={content} />
      </div>
      <div className="fixed bottom-10 right-10 flex flex-col gap-3">
        <ButtonFavorite
          id={id}
          variant="outline"
          style="float"
          isFavorite={isFavorite}
        />

        <ButtonEdit style="float" slug={slug} />
      </div>
    </section>
  );
}
