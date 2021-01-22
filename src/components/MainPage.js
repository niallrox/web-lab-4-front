import React, {Component, useEffect, useState} from 'react';
import Graph from "./Graph";
import Header from "./Header";
import Form from "./Form";
import {Table} from "./Table";
import {useSelector} from "react-redux";
import {getUserPoints} from "../service/requests";
import {selectHistory} from "../store/slices/historySlice";

function MainPage (props){
    const [history, setHistory] = useState([]);
    const historyList = useSelector(selectHistory);

    useEffect(
        () => {
            getUserPoints()
                .then(response => response.json())
                .then(userPoints => {
                    setHistory(userPoints);
                });
        }, [historyList]
    );
    return (
        <div>
            <div className="header">
                <Header/>
            </div>
            <div style={{display: "flex"}}>
                <div className="graph">
                    <Graph pointHistory={history}/>
                </div>
                <div className="form">
                    <Form pointHistory={history}/>
                </div>
                <div className="table">
                    <Table pointHistory={history}/>
                </div>
            </div>
        </div>
    );
}

export default MainPage;