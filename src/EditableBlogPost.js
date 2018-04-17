import React from 'react';

let EditableBlogPost = ({blogs, blog, removeBlog, editBlog, saveBlog, updateActions}) => 
    <form className="edit-form"> 
        <input name="title" value={blog.title} onChange={ (event) => updateActions.updateTitle(blogs, blog, event)}></input>
        <h3>{`Written By: ${blog.userId}`}</h3>
        <input name="body" value={blog.body} onChange={ (event) => updateActions.updateBody(blogs, blog, event)}></input>
        <button onClick= {() => blog.removeBlog(blog.blog)}>Remove Blog</button>
        <button onClick= {() => blog.saveBlog(blog.blog)}>Save Blog</button>
    </form>;

export default EditableBlogPost;