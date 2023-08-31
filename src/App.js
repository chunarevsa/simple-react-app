import React, {useEffect, useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./api/PostService";
import Loader from "./components/UI/loader/Loader";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostsLoading, setIsPostsLoading] = useState(false)

    useEffect(() => {
        fetchPosts()
    }, [])

    function createPost(newPost) {
        setPosts([...posts, newPost])
        setModal(false)
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    async function fetchPosts() {
        setIsPostsLoading(true)
        const posts = await PostService.getAll()
        setPosts(posts)
        setIsPostsLoading(false)
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={fetchPosts}>
                Получить посты
            </MyButton>
            <h1></h1>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <hr style={{margin: '15px 0'}}/>
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                : <PostList
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title="Список постов 1"/>
            }

        </div>
    );
}

export default App;
