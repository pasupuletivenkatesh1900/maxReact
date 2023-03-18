import React ,{useState}from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [eventTitle , setEventTitle]=useState('')
  const recordHandler = (event)=>{
    setEventTitle(event)
    console.log(event)
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
        <label> Title</label>
        <input type="text" onChange={recordHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
        <label> Amount</label>
        <input type="number" min="0.01" step="0.01" />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
        <label> Date</label>
        <input type="date" min="2021-03-01" max="2023-03-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
