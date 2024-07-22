"use client"
import useTextStore from '@/store';
import 'katex/dist/katex.min.css';
import Markdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math';
import { CodeBlocks } from './Blocks/CodeBlocks';

interface TextState {
  text: string
  setText: (text: string) => void
}

export const MarkdownText = () => {
  const text = useTextStore((state) => state.text)

  return (
    <Markdown
      className="markdown"
      remarkPlugins={[remarkMath, [remarkGfm, { singleTilde: false }]]}
      rehypePlugins={[rehypeKatex]}
      components={{
        code: CodeBlocks
      }}
    >
      {text}
    </Markdown>

  )
}