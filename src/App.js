import { useState } from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

const dummyData = [  // defining the expense items
    {
      id: 'e1',
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 7, 20),
    },
    {
      id: 'e3',
      title: "Car Insurance",
      amount: 294.12,
      date: new Date(2023, 3, 23),
    },
    {
      id: 'e4',
      title: "paper Towel",
      amount: 394.65,
      date: new Date(2023, 2, 1),
    },
  ];
const  App = () =>{
    const [expenses,setExpenses]=useState(dummyData)

    const addExpenseHandler = (expense) =>{
      setExpenses((prevExpenses)=>{
              return [expense, ...prevExpenses]
                });;
    }
  return (


    <div>
      <NewExpense onAddExpense ={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
