"use client";

import useTextStore from "@/store";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useEffect } from "react";

export const TextareaSection = () => {
  const { content, setText, setTitle } = useTextStore();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <section className="flex flex-col flex-1 h-[calc(100dvh-66px)] gap-1">
      <Input onChange={handleTitleChange} placeholder="Titulo del documento" />
      <Textarea
        onChange={handleTextChange}
        value={content}
        className="grow resize-none rounded-md border p-2"
      />
    </section>
  );
};
