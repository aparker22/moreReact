export let removeBlog = (blogs, blogToDelete) => {
    let { id } = blogToDelete;
    let removeBlogList = blogs.filter( (blog) => blog.id !== id);
    return this.setState({blogs: removeBlogList});
}

export let editBlog = (blogs, blogToEdit) => {
    let editedBlog = blogs.find( (blog) => blog.id === blogToEdit.id);
    return this.setState({blogBeingEdited : editedBlog});
}

export let saveBlog = (blogs, blogToSave) => {
    return this.setSetate({blogBeingEdited : null})
}

