import React from 'react';

let BlogPost = ( {blogs, blog, removeBlog, editBlog} ) => 
    <div>
        <h2 className="header">{blog.title}</h2>
        <h3>{`Written By: ${blog.userId}`}</h3>
        <p>{blog.body}</p>
        <button onClick= {() => removeBlog(blogs, blog)}>Remove Blog</button>
        <button onClick= {() => editBlog(blogs, blog)}>Edit Blog</button>
    </div>

export default BlogPost;

