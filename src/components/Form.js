import React, {useState} from 'react';
import {clearPoints, sendForm} from "../service/requests";
import {useDispatch} from "react-redux";
import {addPoint} from "../store/slices/lastAddedPointSlice";
import {addPointToHistory} from "../store/slices/historySlice";
import {updateHistory} from "../store/slices/historySlice";
import manePage from '../manePage.css'

const FormStyle = {
    color: "white",
    backgroundColor: "#aec3d9",
    borderRadius: "20px",
    padding: "20px",
    height: "200px",
    boxShadow: "inset 0 0 6px black",
    marginLeft: "25px",
    marginBottom: "25px",
    textAlign: "center"
}
const FormStyleY = {
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
    const [validationY, setValidationY] = useState("Введите Y")
    const [validationX, setValidationX] = useState("Введите X")
    const [validationR, setValidationR] = useState("Введите R")
    const dispatch = useDispatch();

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
        localStorage.setItem("currentR",event.target.value)
    }

    function send() {
        checkY(y)
        checkX(x)
        checkR(r)
        if ((validationY === "") && (x !== null) && (validationR === "")) {
            sendForm(x, y, r).then(response => response.json())
                .then(point => {
                    dispatch(addPoint(point.x, point.y, point.r, point.result));
                    dispatch(addPointToHistory(point));
                });

        } else {

        }
    }

    function clear() {
        clearPoints().then(() => {
            dispatch(addPointToHistory());
        })
    }

    function checkY(y) {
        if (y !== "") {
            if (Number.isFinite(y)) {
                if (y > -3 && y < 3) {
                    setValidationY("")
                } else {
                    setValidationY("Y вышел за рамки дозволенного [-3:3]")
                }
            } else {
                setValidationY("Y не число(А что тогда?)")
            }
        } else {
            setValidationY("Введите Y")
        }
    }

    function Val() {
        alert(validationX)
        alert(validationR)
        alert(validationY)
    }

    function checkX(x) {
        if (x !== null) {
            setValidationX("")
        } else {
            setValidationX("Введите X")
        }
    }

    function checkR(r) {
        if (r == null) {
            setValidationR("Введите R")
        } else {
            if (r >= 0) {
                setValidationR("")
            } else {
                setValidationR("Чумба, R не может быть меньше 0")
            }
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
            <div style={FormStyleY}>
                <strong>Y VALUE:</strong>
                <p style={{color: "red"}}>{validationX}</p>
                <p style={{color: "red"}}>{validationY}</p>
                <p style={{color: "red"}}>{validationR}</p>
                <p><input type="text" onChange={onChangeValueY} placeholder="Введите Y"/></p>
            </div>
            <div className="send_and_clear">
                <button type="button" style={SendStyle} onClick={send}><span
                    className="text_send_clear">Отправить</span></button>
                <button type="button" style={SendStyle} onClick={clear}><span
                    className="text_send_clear">Очистить</span>
                </button>
            </div>
        </div>
    );
}

export default Form;