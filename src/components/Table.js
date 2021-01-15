import React, {Component} from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {serverPoints} from "../service/requests";
import MainPage from "./MainPage";

export function Table() {

    return (
        <DataTable value={serverPoints}>
            <Column field="x" header="X" bodyStyle={{ wordBreak: 'break-all' }}/>
            <Column field="y" header="Y" bodyStyle={{ wordBreak: 'break-all' }}/>
            <Column field="r" header="R" bodyStyle={{ wordBreak: 'break-all' }}/>
            <Column field="result" header="Result"/>
        </DataTable>
    );
}
export default Table;