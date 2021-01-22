import React, {Component, useState} from 'react';
import {register, sendLogin} from "../service/requests";

export function LoginForm(props) {
    const [login, setLogin] = useState(null)
    const [password, setPassword] = useState(null)
    const [validationLog, setValidationLog] = useState("")
    const [validationPas, setValidationPas] = useState("")


    function validationLogin(event) {
        setLogin(event.target.value)
        if (event.target.value !== "") {
            setValidationLog("")
        } else {
            setValidationLog("Введите логин")
        }
    }

    function validationPassword(event) {
        setPassword(event.target.value)
        if (event.target.value !== "") {
            setValidationPas("")
        } else {
            setValidationPas("Введите пароль")
        }
    }

    function sendLog() {
        if (((validationLog == "") && (validationPas == "")) && ((login != null) && (password != null))) {
            sendLogin(login, password).then(response => {
                if (response.ok) {
                    response.text().then(text => {
                            localStorage.setItem("authKey", text)
                        document.location.href = "/~s286535/lab4/";
                        }
                    );
                }
            });
        } else {
        }
    }

    function sendReg() {
        if (((validationLog == "") && (validationPas == "")) && ((login != null) && (password != null))) {
            register(login, password).then(response => {
                if (response.ok) {
                    response.text().then(text => {
                            localStorage.setItem("authKey", text);
                            document.location.href = "/~s286535/lab4/";
                        }
                    );
                }
            });
        } else {
        }
    }

    return (
        <div>
            <div className="box">
                <h1>Login</h1>
                <p style={{color: "red"}}>{validationLog}</p>
                <input type="text" name="" placeholder="Username" onInput={validationLogin}/>
                <p style={{color: "red"}}>{validationPas}</p>
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