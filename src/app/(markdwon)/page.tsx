import { MarkdownSection } from "@/components/editor/MarkdownSection";
import { TextareaSection } from "@/components/editor/TextareaSection";

export default function Home() {
  return (
    <div className="grid grid-col-1 grid-rows-2 h-[calc(100dvh-66px)] md:grid-rows-1 md:grid-cols-2 gap-1 m-2">
      <TextareaSection />
      <MarkdownSection />
    </div>
  );
}
