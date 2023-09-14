import { Routes, Route } from "react-router-dom"
import { Postlists } from "./Postlists"
import { Post } from "./Post"
import { AddPost } from "./EditPost"

function App() {

  return (
    <div>
      <h1>Awesome Blog</h1>
      <Routes>
        <Route path="/" element={<Postlists />}/>
        <Route path="/posts/:id" element={<Post />}/>
        <Route path="/posts/:id/add" element={<AddPost />}/>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </div>
  )
}

export default App
