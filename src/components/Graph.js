import React, {useEffect} from "react";
import {sendForm} from "../service/requests";
import {useDispatch, useSelector} from "react-redux";
import {selectLastPoint} from "../store/slices/lastAddedPointSlice";
import {addPointToHistory} from "../store/slices/historySlice";

export function Graph(props) {
    const GraphStyle = {
        backgroundColor: "#aec3d9",
        boxShadow: "inset 0 0 6px"
    }
    let globalR = localStorage.getItem("currentR");
    const lastPoint = useSelector(selectLastPoint);
    const dispatch = useDispatch();
    const graph = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    const drawPreviousPoints = (pointsArray) => {
        document.querySelectorAll('.target-dot').forEach(function (elem) {
            elem.remove();
        });
        pointsArray.forEach(point => drawPreviousPoint(point.x, point.y, localStorage.getItem("currentR"), point.result));
    };

    useEffect(
        () => {
            drawPreviousPoints(Array.isArray(props.pointHistory) ? props.pointHistory : []);
        },
        [props.pointHistory]
    );
    useEffect(
        () => {
            if (props.pointHistory == "") {
                clearPoints()
            }
        },
        [props.pointHistory]
    );


    useEffect(
        () => updatePoints(localStorage.getItem("currentR")),
        [lastPoint]
    );

    const updatePoints = (r) => {
        (Array.isArray(props.pointHistory) ? props.pointHistory : []).forEach(point => drawPreviousPoint(point.x, point.y, r, point.result));
    }


    const clearPoints = () => document.querySelectorAll('.target-dot').forEach(function (elem) {
        elem.remove();
    });


    const drawPoint = (_x, _y, _r, _result) => {
        if (_x == null || _y == null || _r == null || _result == null) return;
        let x = Number(_x);
        let y = Number(_y);
        let r = Number(_r);
        let color = _result ? "#600BBF" : "#BF0B10";
        let dot = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        dot.setAttribute("r", "3");
        dot.setAttribute("cx", String(200 + x * 180 / r));
        dot.setAttribute("cy", String(200 - y * 180 / r));
        dot.setAttribute("data-r", String(r));
        dot.setAttribute("class", "target-dot");
        dot.setAttribute("fill", color);
        dot.setAttribute("style", "visibility: visible");
        graph.current.appendChild(dot);
    };

    const handleClick = (e) => {
        e.preventDefault();
        let htmlCoordinatesPoint = graph.current.createSVGPoint();
        htmlCoordinatesPoint.x = e.clientX;
        htmlCoordinatesPoint.y = e.clientY;
        let svgPoint = htmlCoordinatesPoint.matrixTransform(graph.current.getScreenCTM().inverse());
        let r = localStorage.getItem("currentR")
        sendForm((((Number(svgPoint.x) - 150) * localStorage.getItem("currentR")) / 100), (((150 - Number(svgPoint.y)) * localStorage.getItem("currentR")) / 100), localStorage.getItem("currentR"))
            .then(response => response.json())
            .then(point => {
                dispatch(addPointToHistory(point));
            });
    };
    const drawPreviousPoint = (x, y, r, result) => {
        let calcX = ((x * 100 / r) - 50) * r / 180;
        let calcY = (-50 - (y * 100 / r)) * r / -180;
        drawPoint(calcX, calcY, r, result)

    }


    return (
        <div>
            <svg ref={graph} style={GraphStyle} onClick={event => handleClick(event)} className="graph content"
                 height="300" width="300" id="graph" xmlns="http://www.w3.org/2000/svg">
                <line className="axis" x1="0" x2="300" y1="150" y2="150" stroke="black"></line>
                <line x1="150" x2="150" y1="0" y2="300" stroke="black"></line>
                <polygon points="150,0 144,15 156,15" stroke="black"></polygon>
                <polygon points="300,150 285,156 285,144" stroke="black"></polygon>

                <line x1="200" x2="200" y1="155" y2="145" stroke="black"></line>
                <line x1="250" x2="250" y1="155" y2="145" stroke="black"></line>

                <line x1="50" x2="50" y1="155" y2="145" stroke="black"></line>
                <line x1="100" x2="100" y1="155" y2="145" stroke="black"></line>

                <line x1="145" x2="155" y1="100" y2="100" stroke="black"></line>
                <line x1="145" x2="155" y1="50" y2="50" stroke="black"></line>

                <line x1="145" x2="155" y1="200" y2="200" stroke="black"></line>
                <line x1="145" x2="155" y1="250" y2="250" stroke="black"></line>

                <text x="195" y="140">R/2</text>
                <text x="248" y="140">R</text>

                <text x="40" y="140">-R</text>
                <text x="90" y="140">-R/2</text>

                <text x="160" y="105">R/2</text>
                <text x="160" y="55">R</text>

                <text x="160" y="205">-R/2</text>
                <text x="160" y="255">-R</text>

                <polygon points="150,150 100,150 100,50 150,50"
                         fill="#0a0c18" fill-opacity="0.3" stroke="white"></polygon>

                <path d="M 150 200 A 50 50 90 0 0 200 150 L 150 150 Z"
                      fill="#0a0c18" fill-opacity="0.3" stroke="white"></path>

                <polygon points="150,200 50,150 150,150"
                         fill="#0a0c18" fill-opacity="0.3" stroke="white"></polygon>

                <circle r="3" cx="150" cy="150" id="point" fill="black"></circle>
            </svg>
            <br/>
            <iframe width="300" height="200" src="https://www.youtube.com/embed/OzPrpAfvb6k" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        </div>

    );
}

export default Graph;