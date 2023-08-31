import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            {/*Управляемый (контролируемый) компонент*/}
            <MyInput
                value={post.title}
                onChange={a => setPost({
                    ...post, title: a.target.value
                })}
                type="text"
                placeholder="Название поста"/>
            <h1></h1>
            <MyInput
                value={post.body}
                onChange={a => setPost({
                    ...post, body: a.target.value
                })}
                type="text"
                placeholder="Описание"/>
            <h1></h1>
            <MyButton onClick={addNewPost}> Опубликовать пост </MyButton>
        </form>
    );
};

export default PostForm;