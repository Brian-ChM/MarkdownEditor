"use client"

import useTextStore from "@/store"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

export const TextareaSection = () => {
  const setText = useTextStore((state) => state.setText)
  const text = useTextStore((state) => state.text)

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <section className="flex flex-col flex-1 h-[calc(100dvh-66px)] gap-1">
      <Input placeholder="Titulo del documento" />
      <Textarea onChange={handleTextChange} value={text} className="grow resize-none rounded-md border p-2" />
    </section>
  )
}