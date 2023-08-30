import React, {useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Post', body: "Description"},
        {id: 2, title: 'Post', body: "Description"},
        {id: 3, title: 'Post', body: "Description"},
        {id: 4, title: 'Post', body: "Description"},
    ])

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts={posts} title="Список постов 1"/>
        </div>
    );
}

export default App;
