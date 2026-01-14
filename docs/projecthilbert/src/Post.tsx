import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import Prism from "prismjs"

type Props = {
  content: string
}

export default function Post({ content }: Props) {
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({ inline, className, children }) {
            if (!inline) {
              Prism.highlightAll()
              return (
                <pre className={className}>
                  <code>{children}</code>
                </pre>
              )
            }
            return <code>{children}</code>
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
