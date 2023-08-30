import React, {useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Post', body: "Description"},
        {id: 2, title: 'Post', body: "Description"},
        {id: 3, title: 'Post', body: "Description"},
        {id: 4, title: 'Post', body: "Description"},
    ])
    const [post, setPost] = useState({title: '', body: ''})

    // const bodyInputRef = useRef()

    function addNewPost(e) {
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }

    return (
        <div className="App">
            <form>
                {/*Управляемый (контролируемый) компонент*/}
                <MyInput
                    value={post.title}
                    onChange={a => setPost({
                        ...post, title: a.target.value
                    })}
                    type="text"
                    placeholder="Название поста"/>

                {/*НЕ управляемый (НЕ контролируемый) компонент*/}
                {/*<MyInput*/}
                {/*    ref={bodyInputRef}*/}
                {/*    type="text"*/}
                {/*    placeholder="Описание"/>*/}
                {/*<MyButton onClick={addNewPost}> Опубликовать пост </MyButton>*/}

                <MyInput
                    value={post.body}
                    onChange={a => setPost({
                        ...post, body: a.target.value
                    })}
                    type="text"
                    placeholder="Описание"/>

                <MyButton onClick={addNewPost}> Опубликовать пост </MyButton>
            </form>
            <PostList posts={posts} title="Список постов 1"/>
        </div>
    );
}

export default App;
