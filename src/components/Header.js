import React from "react";


const HeaderStyle = {
    display: "flex",
    padding: "1%",
    backgroundColor: "#0a0c18",
    fontSize: "x-large",
    color: "white",
}

function back() {
    localStorage.clear()
    window.location.reload()
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <header style={HeaderStyle}>
                    <a href="https://youtu.be/OzPrpAfvb6k">СРОЧНО К ПРОСМОТРУ</a>
                    Леднев Иван, Рыбальченко Максим P3231 Вариант 2759
                    {localStorage.getItem("auth")}
                    <input className="exit" type="button" onClick={back} value="Выйти"/>
                </header>
            </div>
        );
    }
}

export default Header;