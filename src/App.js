import React, { Component } from 'react';
import './App.css';
import AllBlogs from './BlogList.js';
import getPosts from './getPosts.js';
import Header from './header.js';

class Page extends Component {
    constructor (props) {
		super(props);
		this.state = {blogs: [], blogBeingEdited: null, userID: ''}
    }

    componentDidMount() {
        this.fetchData() 
    } 

    fetchData() {
        getPosts(this.state.userID)
        .then(res => this.setState({blogs: res}) )  
    }
   
    render () {
        let {blogs, blogBeingEdited, userID} = this.state;

        let updateUserID = (event) => {
            this.setState({userID: event.target.value})
            return this.fetchData();
        }

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

        let removeBlog = (blogs, blogToDelete) => {
            let { id } = blogToDelete;
            let removeBlogList = blogs.filter( (blog) => blog.id !== id);
            return this.setState({blogs: removeBlogList});
        }
        
        let editBlog = (blogs, blogToEdit) => {
            let editedBlog = blogs.find( (blog) => blog.id === blogToEdit.id);
            return this.setState({blogBeingEdited : editedBlog});
        }
        
        let saveBlog = (blogs, blogToSave) => {
            return this.setSetate({blogBeingEdited : null})
        }

        return <div>
        <Header userID={userID} updateUserID={updateUserID}/>
        <AllBlogs 
        blogs={blogs} 
        blogBeingEdited={blogBeingEdited} 
        removeBlog={removeBlog} 
        editBlog={editBlog} 
        saveBlog={saveBlog} 
        updateActions={updateActions} />
        </div>;
    };
};

export default Page;