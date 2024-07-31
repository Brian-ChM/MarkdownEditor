import { getMarkdownBySlug } from "@/app/lib/actions";
import { MarkdownSection } from "@/components/editor/MarkdownSection";
import { TextareaSection } from "@/components/editor/TextareaSection";
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!slug) redirect("/");

  const { data } = await getMarkdownBySlug(slug);

  return (
    <div className="grid grid-col-1 grid-rows-2 h-[calc(100dvh-66px)] md:grid-rows-1 md:grid-cols-2 gap-1 m-2">
      <TextareaSection />
      <MarkdownSection
        currentTittle={data?.title}
        currentContent={data?.content}
      />
    </div>
  );
}
