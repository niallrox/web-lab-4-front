import React from "react";
import {logOut} from "../service/requests";

const HeaderStyle = {
    display: "flex",
    padding: "1%",
    fontSize: "x-large",
    color: "white",
    backgroundColor: "black",
}

export function back() {
    localStorage.clear()
    window.location.reload()
}
function exit(){
    if (localStorage.getItem("authKey") === null){
        return <span></span>
    } else return <input style={{borderRadius: "25px", marginLeft: "15px", padding: "5px"}}
                         className="exit" type="button" onClick={logOut} value="Выйти"/>
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <div style={HeaderStyle}>
                    Леднев Иван, Рыбальченко Максим P3231 Вариант 2759
                    {exit()}
                </div>
            </div>
        );
    }
}

export default Header;