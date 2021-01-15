import React, {Component, useState} from 'react';
import {register, sendLogin} from "../service/requests";

export function LoginForm(props) {
    const [login, setLogin] = useState(null)
    const [password, setPassword] = useState(null)
    const [validationLog, setValidationLog] = useState("<p>Введите логин</p>")
    const [validationPas, setValidationPas] = useState("<p>Введите пароль</p>")


    function validationLogin(event) {
        setLogin(event.target.value)
        if (event.target.value !== "") {
            setValidationLog("")
        } else {
            setValidationLog("<p>Введите логин</p>")
        }
    }

    function validationPassword(event) {
        setPassword(event.target.value)
        if (event.target.value !== "") {
            setValidationPas("")
        } else {
            setValidationPas("<p>Введите пароль</p>")
        }
    }

    function sendLog() {
        if ((validationLog !== "") || (validationPas !== "")) {
            document.querySelector(".errorLog").innerHTML = validationLog + validationPas
            document.querySelector(".errorLog").style.display = "block"
        } else {
            document.querySelector(".errorLog").style.display = "none"
            sendLogin(login, password)
        }
    }
    function sendReg() {
        if ((validationLog !== "") || (validationPas !== "")) {
            document.querySelector(".errorLog").innerHTML = validationLog + validationPas
            document.querySelector(".errorLog").style.display = "block"
        } else {
            document.querySelector(".errorLog").style.display = "none"
            register(login, password)
        }
    }

    return (
        <div>
            <div className="box">
                <h1>Login</h1>
                <span style={{display: "none", color: "red"}} className="errorLog"></span>
                <input type="text" name="" placeholder="Username" onInput={validationLogin}/>
                <input type="password" name="" placeholder="Password" onInput={validationPassword}/>
                <div className="sign">
                    <input type="button" name="" value="Sign in" onClick={sendLog}/>
                    <input type="button" name="" value="Sign up" onClick={sendReg}/>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;