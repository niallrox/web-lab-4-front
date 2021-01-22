import React from "react";
import {logOut} from "../service/requests";


const HeaderStyle = {
    display: "flex",
    padding: "1%",
    backgroundColor: "#0a0c18",
    fontSize: "x-large",
    color: "white",
}

export function back() {
    localStorage.clear()
    window.location.reload()
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <header style={HeaderStyle}>
                    Леднев Иван, Рыбальченко Максим P3231 Вариант 2759
                    {localStorage.getItem("auth")}
                    <input className="exit" type="button" onClick={logOut} value="Выйти"/>
                </header>
            </div>
        );
    }
}

export default Header;