"use client";
import "katex/dist/katex.min.css";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { CodeBlocks } from "./Blocks/CodeBlocks";

export const MarkdownText = ({ text }: { text: string }) => {
  return (
    <Markdown
      className="prose prose-sm dark:prose-invert md:prose-base md:prose-code:prose-base break-words text-wrap block max-w-full"
      remarkPlugins={[remarkMath, [remarkGfm, { singleTilde: false }]]}
      rehypePlugins={[rehypeKatex, rehypeRaw, rehypeSanitize]}
      components={{
        code: CodeBlocks,
      }}
    >
      {text}
    </Markdown>
  );
};
