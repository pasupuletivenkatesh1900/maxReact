import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount,setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("")
  // const [UserInput, setUserInput]=useState({
  //   enteredTitle:'',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })
  

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState)=>{
    //   return { ...prevState, enteredTitle: event.target.value}
    // })
  };

  const amountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value);
    // setUserInput((prevState)=>{
    //   return { ...prevState, enteredAmount: event.target.value}
    // })
    //console.log(event.target.value)
  }

  const dateChangeHandler =(event) =>{
    setEnteredDate(event.target.value)
    // setUserInput((prevState)=>{
    //   return { ...prevState, enteredDate: event.target.value}
    // })
    // console.log(event.target.value)
  }

  
  const submitHandler =(event) =>{
    event.preventDefault();
    const enteredData = {
       title:enteredTitle,
       amount: enteredAmount,
       date : new Date(enteredDate) 
    }
    console.log(enteredData)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Date</label>
          <input type="date" min="2021-03-01" max="2023-03-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
