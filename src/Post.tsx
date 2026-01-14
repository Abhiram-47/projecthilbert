import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import * as Prism from "prismjs"


export default function Post({ content }: { content: string }) {
  return (
    <div className="markdown">
        <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              code({ node, className, children, ...props }) {
                const isInline = !className
            
                if (!isInline) {
                  Prism.highlightAll()
                  return (
                    <pre className={className}>
                      <code>{children}</code>
                    </pre>
                  )
                }
            
                return <code {...props}>{children}</code>
              }
            }}
        >
        {content}
      </ReactMarkdown>
    </div>
  )
}
