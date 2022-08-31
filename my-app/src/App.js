
import React from "react";
import Expenses from "./components/Expenses";

function App(){
    let expense=[
        {
            id:'e1',
            title: 'School Fee',
            date: new Date(2022, 2, 12),
            amount:200
        },
        {
            id:'e2',
            title: 'Book Fee',
            date: new Date(2022, 7, 12),
            amount:300
        },
        {
            id:'e3',
            title: 'bus Fee',
            date: new Date(2022, 9, 12),
            amount:400
        },
        {
            id:'e4',
            title: 'house Fee',
            date: new Date(2022, 22, 12),
            amount:200
        }
    ]
    return (
        <div>
            <Expenses items={expense}/>
        </div>
    );
}
export default App;