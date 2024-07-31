"use client";

import useMarkdownStore from "@/store";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const TextareaSection = () => {
  const { title, content, expand, setText, setTitle } = useMarkdownStore();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const expandStyle = expand ? "hidden" : "flex";

  return (
    <section
      className={`${expandStyle} flex flex-col max-w-full h-[calc(50dvh-33px)] md:grow md:h-[calc(100dvh-66px)] gap-1`}
    >
      <Input
        value={title}
        className="h-[38px]"
        onChange={handleTitleChange}
        placeholder="Titulo del documento"
      />

      <div className="flex flex-1 shrink-0">
        <Textarea
          onChange={handleTextChange}
          value={content}
          className="resize-none flex-1 shrink-0"
        />
      </div>
    </section>
  );
};
