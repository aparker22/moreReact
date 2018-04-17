import React from 'react';
import BlogPost from './BlogPost.js';
import EditableBlogPost from './EditableBlogPost.js';

let AllBlogs = ({blogs, removeBlog, blogBeingEdited, editBlog, saveBlog, updateActions}) =>
<div>{ 
blogs.map( (blog) => {
if (blog === blogBeingEdited ) {
    return <EditableBlogPost 
    key={blog.id} 
    blogs={blogs} blog={blog} 
    removeBlog={removeBlog} 
    editBlog={editBlog} 
    saveBlog={saveBlog} 
    updateActions={updateActions} />;
} else {
    return <BlogPost 
    key={blog.id} 
    blogs={blogs} 
    blog={blog} 
    removeBlog={removeBlog} 
    editBlog={editBlog} 
    saveBlog={saveBlog} 
    updateActions={updateActions} />;
}
})
}</div>;

export default AllBlogs;