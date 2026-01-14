import { useEffect, useState } from "react"
import Post from "./Post"

export default function App() {
  const [content, setContent] = useState("")

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "posts/test.md")
      .then(r => r.text())
      .then(setContent)
  }, [])

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "2rem" }}>
      <Post content={content} />
    </div>
  )
}
