import { Link } from "react-router-dom";

const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <div className="blog-preview" key={index}>
          <Link to={`/blogs/${blog.id}`} >
            <h2>{ blog.title }</h2>
            <p>{ blog.preview }</p>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;