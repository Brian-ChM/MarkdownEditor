import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const CodeBlocks = (props: any) => {
  const { children, className, node, ...rest } = props;
  const match = /language-(\w+)/.exec(className || "");

  return match ? (
    <SyntaxHighlighter {...rest} PreTag="div" language={match[1]} style={nord}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code
      {...rest}
      className={`${className} bg-neutral-500/20 py-1 px-2 rounded-md`}
    >
      {children}
    </code>
  );
};
