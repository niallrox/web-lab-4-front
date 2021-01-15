import React, {Component, useEffect, useState} from 'react';
import Graph from "./Graph";
import Header from "./Header";
import Form from "./Form";
import Table from "./Table";
import {getUserPoints} from "../service/requests";


function MainPage (){
    getUserPoints()
    return (
        <div>
            <div className="header">
                <Header/>
            </div>
            <div style={{display: "flex"}}>
                <div className="graph">
                    <Graph/>
                </div>
                <div className="form">
                    <Form/>
                </div>
                <div className="table">
                    <Table/>
                </div>
            </div>
        </div>
    );
}

export default MainPage;