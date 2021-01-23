import React, {Component} from 'react';
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";

export function Table(props) {
    const rawHistory = Array.isArray(props.pointHistory) ? props.pointHistory : [];
    const adjustedHistory = rawHistory
        .map(point => ({ ...point,  x: point.x.toFixed(1),y: point.y.toFixed(1), result: point.result ? 'True' : 'False' }))
        .reverse();

    return (
        <DataTable style={{background: "black", color: "white", padding: "25px"}} value={adjustedHistory}>
            <Column style={{width: "150px" }} field="x" header="X" bodyStyle={{ wordBreak: 'break-all', textAlign: "center" }}/>
            <Column style={{width: "150px"}} field="y" header="Y" bodyStyle={{ wordBreak: 'break-all', textAlign: "center" }}/>
            <Column style={{width: "150px"}} field="r" header="R" bodyStyle={{ wordBreak: 'break-all', textAlign: "center" }}/>
            <Column style={{width: "150px"}} field="result" header="Result" bodyStyle={{ wordBreak: 'break-all', textAlign: "center" }}/>
        </DataTable>
    );
}