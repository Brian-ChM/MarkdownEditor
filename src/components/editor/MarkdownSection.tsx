import { DownloadIcon, EnterFullScreenIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import { MarkdownText } from "../mdx/MarkdownText"
import { Button } from "../ui/button"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

export const MarkdownSection = () => {
  return (
    <section className="flex flex-col flex-1 h-[calc(100dvh-66px)] gap-1">
      <div className="border rounded-sm flex items-center">
        <Button variant="ghost">
          <EnterFullScreenIcon className="mr-2 w-4 h-4" />
          Expandir
        </Button>
        <Button variant="ghost">
          <ExternalLinkIcon className="mr-2 w-4 h-4" />
          Abrir
        </Button>
        <Button variant="ghost">
          <DownloadIcon className="mr-2 w-4 h-4" />
          Exportar
        </Button>
      </div>


      <ScrollArea className="rounded-md border grow p-2">
        <MarkdownText />
        <ScrollBar />
      </ScrollArea>
    </section>
  )
}