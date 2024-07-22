import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

/**
 * @todo -> arreglar bloque de codigo cuando no se indica el lenguaje
 * @idea -> hacer match si hay tres (`), en el languaje agarrar en el match si es que hay 
 */

export const CodeBlocks = (props: any) => {
  const { children, className, node, ...rest } = props
  const match = /language-(\w+)/.exec(className || '')

  return match ? (
    <SyntaxHighlighter
      {...rest}
      PreTag="div"
      language={match[1]}
      style={nord}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code {...rest} className={`${className} bg-neutral-500/20 py-1 px-2 rounded-md`}>
      {children}
    </code>
  )
}