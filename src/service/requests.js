import {backendHost} from "./config";
import {back} from "../components/Header";

export let serverError = "";
export let serverPoints = [];


export function getUserPoints() {
    return fetch(`${backendHost}/points`,
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("authKey")
            }
        }
    );
}
export function clearPoints() {
    return fetch(`${backendHost}/points`,
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("authKey")
            }
        }
    );
}

export function sendForm(x, y, r) {
    return fetch(`${backendHost}/points`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("authKey")
            },
            body: JSON.stringify({"x": x, "y": y, "r": r})
        }
    );
}


export function sendLogin(name, password) {
    return fetch(`${backendHost}/usr/login`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"name": name, "pass": password})
        }
    );
}

export function register(name, password) {
    return fetch(`${backendHost}/usr/create`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"name": name, "pass": password})
        }
    ); 
}

export function logOut() {
    return fetch(`${backendHost}/usr/logout`,
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("authKey")
            },
        }).then(() => {
        back()
    })

}