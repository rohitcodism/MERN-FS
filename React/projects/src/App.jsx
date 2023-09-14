import { Routes, Route } from "react-router-dom"
import { Postlists } from "./Postlists"
import { Post } from "./Post"
import { AddPost } from "./AddPost"

function App() {

  return (
    <div>
      <h1>Awesome Blog</h1>
      <Routes>
        <Route path="/" element={<Postlists />}/>
        <Route path="/posts/:id" element={<Post />}/>
        <Route path="/new" element={<AddPost />}/>
      </Routes>
    </div>
  )
}

export default App
