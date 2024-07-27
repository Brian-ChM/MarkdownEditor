import { MarkdownSection } from "@/components/editor/MarkdownSection";
import { TextareaSection } from "@/components/editor/TextareaSection";

export default function Home() {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2 gap-1 m-2">
      <TextareaSection />
      <MarkdownSection />
    </div>
  );
}
