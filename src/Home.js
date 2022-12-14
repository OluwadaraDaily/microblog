import { useState, useEffect } from "react" 
import BlogList from "./BlogList"

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)

  const handleDelete = id => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log('Data =>', data)
        setBlogs(data)
        setIsPending(false)
      })
  }, [])
  return (
    <div className="home">
      { isPending && <div> Loading... </div> }
      { blogs && <BlogList blogs={blogs} handleDelete={handleDelete} /> }
    </div>
  )
}

export default Home