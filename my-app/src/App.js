
import React from "react";
import ExpenseItem from "./components/ExpenseItem";

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
            <ExpenseItem 
            date={expense[0].date} 
            title={expense[0].title} 
            amount={expense[0].amount}>
            </ExpenseItem>
            <ExpenseItem 
            date={expense[1].date} 
            title={expense[1].title} 
            amount={expense[1].amount}>
            </ExpenseItem>
            <ExpenseItem 
            date={expense[2].date} 
            title={expense[2].title} 
            amount={expense[2].amount}>
            </ExpenseItem>
            <ExpenseItem 
            date={expense[3].date} 
            title={expense[3].title} 
            amount={expense[3].amount}>
            </ExpenseItem>
        </div>
    );

}
export default App;