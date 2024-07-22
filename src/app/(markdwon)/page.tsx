import { MarkdownSection } from "@/components/editor/MarkdownSection";
import { TextareaSection } from "@/components/editor/TextareaSection";

export default function Home() {
  return (
    <div className="flex flex-1 gap-1 m-2">
      <TextareaSection />
      <MarkdownSection />
    </div >
  )
}