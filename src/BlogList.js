import { useState } from "react";

const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <div className="blog-preview" key={index}>
          <h2>{ blog.title }</h2>
          <p>{ blog.preview }</p>
          <p>Written by { blog.author }</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;