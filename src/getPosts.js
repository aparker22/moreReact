let getPosts = ({userID}) => {
    let id = userID || '';
    return fetch('https://jsonplaceholder.typicode.com/posts' + id)
        .then(res => res.json())
}

export default getPosts;