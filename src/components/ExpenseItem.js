import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Venkatesh Clicked me!!!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}> Click here</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
