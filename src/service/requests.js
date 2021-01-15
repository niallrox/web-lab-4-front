import {backendHost} from "./config";

export let serverError = "";
export let serverPoints = [];


export function getUserPoints() {
    let xhrUserName = new XMLHttpRequest()
    let bodyXYR = 'name=' + encodeURIComponent(localStorage.getItem("auth"));
    xhrUserName.open('POST', `${backendHost}/usr/getPoints`, true);
    xhrUserName.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhrUserName.send(bodyXYR)
    xhrUserName.onreadystatechange = function () {
        if (xhrUserName.readyState===4) {
            if (xhrUserName.status != 0) {
                if (xhrUserName.status != 400) {
                    serverError = ""
                    document.querySelector(".error").style.display = "none"
                    serverPoints = xhrUserName.response
                } else {
                    serverError = "<p>Вы смогли обмануть клиент, но не обманули сервер</p>"
                    document.querySelector(".error").innerHTML = serverError
                    document.querySelector(".error").style.display = "block"
                }
            } else {
                serverError = "<p>Запрос вышел за сигаретами и не вернулся</p>"
                document.querySelector(".error").innerHTML = serverError
                document.querySelector(".error").style.display = "block"
            }
        }
    }
}

export function sendForm(x, y, r, name) {
    let xhrXYR = new XMLHttpRequest()
    let bodyXYR = 'x=' + encodeURIComponent(x) + '&y=' + encodeURIComponent(y) + '&r=' + encodeURIComponent(r) + '&name=' + encodeURIComponent(name);
    xhrXYR.open('POST', `${backendHost}/usr/addPoint`, true);
    xhrXYR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhrXYR.send(bodyXYR)
    xhrXYR.onreadystatechange = function () {
        if (xhrXYR.readyState===4) {
            if (xhrXYR.status != 0) {
                if (xhrXYR.status != 400) {
                    serverError = ""
                    document.querySelector(".error").style.display = "none"
                    alert(xhrXYR.response)
                } else {
                    serverError = "<p>Вы смогли обмануть клиент, но не обманули сервер</p>"
                    document.querySelector(".error").innerHTML = serverError
                    document.querySelector(".error").style.display = "block"
                }
            } else {
                serverError = "<p>Запрос вышел за сигаретами и не вернулся</p>"
                document.querySelector(".error").innerHTML = serverError
                document.querySelector(".error").style.display = "block"
            }
        }
    }
}


export function sendLogin(name, password) {
    let xhrLog = new XMLHttpRequest()
    let bodyLog = 'username=' + encodeURIComponent(name) +
        '&password=' + encodeURIComponent(password);
    xhrLog.open('POST', `${backendHost}/usr/login`, true);
    xhrLog.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhrLog.send(bodyLog)
    xhrLog.onreadystatechange = function () {
        if (xhrLog.readyState===4) {
            if (xhrLog.status != 0) {
                if (xhrLog.status != 400) {
                    serverError = ""
                    document.querySelector(".errorLog").style.display = "none"
                    localStorage.setItem("auth", name);
                    document.location.replace("/");
                } else {
                    serverError = "<p>Неверный логин или пароль</p>"
                    document.querySelector(".errorLog").innerHTML = serverError
                    document.querySelector(".errorLog").style.display = "block"
                }
            } else {
                serverError = "<p>Запрос вышел за сигаретами и не вернулся</p>"
                document.querySelector(".errorLog").innerHTML = serverError
                document.querySelector(".errorLog").style.display = "block"
            }
        }
    }
}

export function register(name, password) {
    let xhrReg = new XMLHttpRequest()
    let bodyReg = 'username=' + encodeURIComponent(name) +
        '&password=' + encodeURIComponent(password);
    xhrReg.open('POST', `${backendHost}/usr/create`, true);
    xhrReg.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhrReg.send(bodyReg)
    localStorage.setItem("auth", name);
    xhrReg.onreadystatechange = function () {
        if (xhrReg.readyState===4) {
            if (xhrReg.status != 0) {
                if (xhrReg.status != 400) {
                    serverError = ""
                    document.querySelector(".errorLog").style.display = "none"
                    localStorage.setItem("auth", name);
                    document.location.replace("/");

                } else {
                    serverError = "<p>Этот логин уже занят</p>"
                    document.querySelector(".errorLog").innerHTML = serverError
                    document.querySelector(".errorLog").style.display = "block"
                }
            } else {
                serverError = "<p>Запрос вышел за сигаретами и не вернулся</p>"
                document.querySelector(".errorLog").innerHTML = serverError
                document.querySelector(".errorLog").style.display = "block"
            }
        }
    }
}
export function clear() {
    let xhrUserName = new XMLHttpRequest()
    let bodyXYRget = 'name=' + encodeURIComponent(localStorage.getItem("auth"));
    xhrUserName.open('POST', `${backendHost}/usr/clear`, true);
    xhrUserName.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhrUserName.send(bodyXYRget)
    xhrUserName.onreadystatechange = function () {
        if (xhrUserName.readyState === 4) {
            if (xhrUserName.status != 0) {
                if (xhrUserName.status != 400) {
                    serverError = ""
                    document.querySelector(".error").style.display = "none"
                    alert(xhrUserName.response)
                } else {
                    serverError = "<p>Вы смогли обмануть клиент, но не обманули сервер</p>"
                    document.querySelector(".error").innerHTML = serverError
                    document.querySelector(".error").style.display = "block"
                }
            } else {
                serverError = "<p>Запрос вышел за сигаретами и не вернулся</p>"
                document.querySelector(".error").innerHTML = serverError
                document.querySelector(".error").style.display = "block"
            }
        }
    }
}