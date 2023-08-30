import React, {useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Post A', body: "Description Z"},
        {id: 2, title: 'Post B', body: "Description X"},
        {id: 3, title: 'Post C', body: "Description Y"},
        {id: 4, title: 'Post D', body: "Description R"},
    ])

    const [selectedSort, setSelectedSort] = useState('')

    function sortPosts(sort) {
        setSelectedSort(sort)
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function deletePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
            {posts.length !== 0
                ? <PostList remove={deletePost} posts={posts} title="Список постов 1"/>
                : <h1 style={{textAlign: 'center'}}>Список пуст</h1>
            }
        </div>
    );
}

export default App;
