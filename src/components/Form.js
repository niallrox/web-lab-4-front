import React, {Component, useState} from 'react';
import {clear, sendForm, serverError} from "../service/requests";

const FormStyle = {
    color: "white",
    backgroundColor: "#aec3d9",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "inset 0 0 6px black",
    marginLeft: "25px",
    marginBottom: "25px",
    textAlign: "center"
}
const SendStyle = {
    color: "white",
    width: "40%",
    cursor: "pointer",
    marginLeft: "25px",
    padding: "10px",
    borderRadius: "20px",
    borderColor: "white",
    backgroundColor: "#aec3d9",
    boxShadow: "inset 0 0 6px black"
}


export function Form() {
    const [x, setX] = useState(null);
    const [y, setY] = useState("");
    const [r, setR] = useState(null);
    const [validationY, setValidationY] = useState("<p>Введите Y</p>")
    const [validationX, setValidationX] = useState("<p>Введите X</p>")
    const [validationR, setValidationR] = useState("<p>Введите R</p>")

    function onChangeValueX(event) {
        setX(event.target.value)
        checkX(event.target.value)
    }

    function onChangeValueY(event) {
        setY(Number(event.target.value))
        checkY(Number(event.target.value))
    }

    function onChangeValueR(event) {
        setR(event.target.value)
        checkR(event.target.value)
    }

    function send() {
        checkY(y)
        checkX(x)
        checkR(r)
        if ((validationY === "") && (x !== null) && (r !== null)) {
            document.querySelector(".error").innerHTML = ""
            document.querySelector(".error").style.display = "none"
            sendForm(x, y, r, localStorage.getItem("auth"))
        } else {
            document.querySelector(".error").style.display = "block"
            document.querySelector(".error").innerHTML = validationY + validationX + validationR
        }
    }

    function checkY(y) {
        if (y != "") {
            if (Number.isFinite(y)) {
                if (y > -3 && y < 3) {
                    setValidationY("")
                } else {
                    setValidationY("<p>Y вышел за рамки дозволенного [-3:3]</p>")
                }
            } else {
                setValidationY("<p>Y не число(А что тогда?)</p>")
            }
        } else {
            setValidationY("<p>Введите Y</p>")
        }
    }
    function Val(){
        alert(validationX)
        alert(validationR)
        alert(validationY)
    }
    function checkX(x){
        if(x !== null){
            setValidationX("")
        } else {
            setValidationX("<p>Введите X</p>")
        }
    }

    function checkR(r){
        if(r !== null){
            setValidationR("")
        } else {
            setValidationR("<p>Введите R</p>")
        }
    }

    return (
        <div style={{width: "300px"}}>
            <div style={{display: "flex"}}>
                <div style={FormStyle}>
                    <strong>X VALUE:</strong>
                    <div onChange={onChangeValueX}>
                        <p>-3 <input type="radio" value="-3" name="X"/></p>
                        <p>-2 <input type="radio" value="-2" name="X"/></p>
                        <p>-1 <input type="radio" value="-1" name="X"/></p>
                        <p>0 <input style={{marginLeft: "6px"}} type="radio" value="0" name="X"/></p>
                        <p>1 <input style={{marginLeft: "6px"}} type="radio" value="1" name="X"/></p>
                        <p>2 <input style={{marginLeft: "6px"}} type="radio" value="2" name="X"/></p>
                        <p>3 <input style={{marginLeft: "6px"}} type="radio" value="3" name="X"/></p>
                        <p>4 <input style={{marginLeft: "6px"}} type="radio" value="4" name="X"/></p>
                        <p>5 <input style={{marginLeft: "6px"}} type="radio" value="5" name="X"/></p>
                    </div>
                </div>
                <div style={FormStyle}>
                    <strong>R VALUE: </strong>
                    <div onChange={onChangeValueR}>
                        <p>-3 <input type="radio" value="-3" name="R"/></p>
                        <p>-2 <input type="radio" value="-2" name="R"/></p>
                        <p>-1 <input type="radio" value="-1" name="R"/></p>
                        <p>0 <input style={{marginLeft: "6px"}} type="radio" value="0" name="R"/></p>
                        <p>1 <input style={{marginLeft: "6px"}} type="radio" value="1" name="R"/></p>
                        <p>2 <input style={{marginLeft: "6px"}} type="radio" value="2" name="R"/></p>
                        <p>3 <input style={{marginLeft: "6px"}} type="radio" value="3" name="R"/></p>
                        <p>4 <input style={{marginLeft: "6px"}} type="radio" value="4" name="R"/></p>
                        <p>5 <input style={{marginLeft: "6px"}} type="radio" value="5" name="R"/></p>
                    </div>
                </div>
            </div>
            <div style={FormStyle}>
                <strong>Y VALUE:</strong>
                <p><span className="error" style={{display: "none"}}></span></p>
                <p><input type="text" onChange={onChangeValueY} placeholder="Введите Y"/></p>
            </div>
            <div className="send_and_clear">
                <button type="button" style={SendStyle} onClick={send}><span
                    className="text_send_clear">Отправить</span></button>
                <button type="button" style={SendStyle} onClick={clear}><span className="text_send_clear">Очистить</span>
                </button>
            </div>
        </div>
    );
}

export default Form;