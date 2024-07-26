"use client";
import { addMarkdown } from "@/app/lib/actions";
import { MarkdownText } from "@/components/mdx/MarkdownText";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { toast } from "@/components/ui/use-toast";
import useTextStore from "@/store";
import { ExternalLink, Maximize, Save } from "lucide-react";
import { useRouter } from "next/navigation";

export const MarkdownSection = () => {
  const { title, content, setTitle, setText } = useTextStore();
  const route = useRouter();

  const handleSave = (variant: "default" | "destructive", message: string) => {
    toast({
      variant,
      description: message,
    });
  };

  const handleChange = async () => {
    const save = await addMarkdown(title, content);

    if (!save.success) handleSave("destructive", save.message);
    if (save.message === "Usuario no autenticado") route.push("/auth/login");
    if (save.message === "Markdown guardado!") {
      route.refresh();
      handleSave("default", save.message);
      setTitle("");
      setText("");
    }
  };

  return (
    <section className="flex flex-col flex-1 h-[calc(100dvh-66px)] gap-1">
      <div className="border rounded-sm flex justify-between items-center">
        <Button variant="ghost" onClick={handleChange}>
          <Save className="mr-2 w-4 h-4" />
          Guardar
        </Button>

        <div>
          <Button variant="ghost">
            <Maximize className="mr-2 w-4 h-4" />
            Expandir
          </Button>
          <Button variant="ghost">
            <ExternalLink className="mr-2 w-4 h-4" />
            Abrir
          </Button>
        </div>
      </div>

      <ScrollArea className="rounded-md border flex-1 w-[calc(50vw-4px)] p-2">
        <MarkdownText text={content} />
        <ScrollBar />
      </ScrollArea>
    </section>
  );
};
