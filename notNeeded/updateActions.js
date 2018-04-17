let updateTitle = (blogs, blogToUpdate, event) => {
    let blog = blogs.find( (blog) => blog.id === blogToUpdate.id)
    blog.title = event.target.value;
    return this.setState({blogBeingEdited:blogToUpdate})
};

let updateBody = (blogs, blogToUpdate, event) => {
    let blog = blogs.find( (blog) => blog.id === blogToUpdate.id)
    blog.body = event.target.value;
    return this.setState({blogBeingEdited:blogToUpdate})
};

let updateActions = {
    'updateTitle': updateTitle,
    'updateBody': updateBody
}

export default updateActions;