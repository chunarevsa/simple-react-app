import React, {useState} from 'react';
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Post', body: "Description"},
        {id: 2, title: 'Post', body: "Description"},
        {id: 3, title: 'Post', body: "Description"},
        {id: 4, title: 'Post', body: "Description"},
    ])

    return (
        <div className="App">
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}
            <PostList posts={posts} title="Список постов 1"/>
        </div>
    );
}

export default App;
