import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };


  const [visiblity, setVisbility] = useState(false);

  
  const expenseHandler = () => {
    setVisbility(true);
  };
  
  const cancelHandler = ()=>{
    setVisbility(false)
  }
  
  // if (visiblity) {
  //   show = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={cancelHandler} />;
  // }else{
  //   show =  <button onClick={expenseHandler}>Add New Expenses</button>
  // }


  return (
    <div className="new-expense">
      {visiblity && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={cancelHandler} />}
      {!visiblity && <button onClick={expenseHandler}>Add New Expenses</button> }
    </div>
    
  );
};
export default NewExpense;
