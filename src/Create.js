import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Mario')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = e => {
    // Prevent default event submission behavior
    e.preventDefault();
    // Get data to be sent to the DB
    const blog = { title, body, author }
    setIsPending(true)

    // Make POST request
    fetch("http://localhost:8000/blogs", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false)
      history.push("/")
    })
  }

    return ( 
      <div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Blog Title</label>
            <input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Blog Body</label>
            <textarea 
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            >
            </textarea>
          </div>
          <div>
            <label>Blog Author</label>
            <select
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="Mario">Mario</option>
              <option value="Yoshi">Yoshi</option>
              <option value="Serge">Serge</option>
            </select>
          </div>
          <div className="btn-div">
            {!isPending && <button>Add Blog</button>}
            {isPending && <button disabled>Loading...</button>}
          </div>
          <p>TITLE: {title}</p>
          <p>BODY: {body}</p>
          <p>AUTHOR: {author}</p>
        </form>
      </div>
     );
}
 
export default Create;