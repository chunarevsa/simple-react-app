import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Page for Login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Your login"/>
                <MyInput type="password" placeholder="Your password"/>
                <MyButton>Go</MyButton>
            </form>
        </div>
    );
};

export default Login;