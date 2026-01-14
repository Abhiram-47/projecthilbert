import { useEffect, useState } from "react"
import Post from "./Post"

export default function App() {
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "posts/calculus.md")
      .then(res => res.text())
      .then(setContent)
  }, [])

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <Post content={content} />
    </div>
  )
}
