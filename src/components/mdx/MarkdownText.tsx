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
      className="markdown break-words w-[calc(50vw-20px)]"
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
