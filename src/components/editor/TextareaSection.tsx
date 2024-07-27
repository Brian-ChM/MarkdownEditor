"use client";

import useTextStore from "@/store";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const TextareaSection = () => {
  const { content, setText, setTitle } = useTextStore();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <section className="flex flex-col h-[calc(50dvh-33px)] md:grow md:h-[calc(100dvh-66px)] gap-1">
      <Input
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
