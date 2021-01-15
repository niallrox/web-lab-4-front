import React, {Component, useState} from 'react';
import login from '../login.css'
import LoginForm from "./LoginForm";
import Header from "./Header";

export function Login() {

    return (
        <div>
            <Header/>
            <LoginForm/>
        </div>
    );
}

export default Login;