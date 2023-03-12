import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense = [
    {
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 7, 20),
    },
    {
      title: "Car Insurance",
      amount: 294.12,
      date: new Date(2023, 3, 23),
    },
    {

      title: "paper Towel",
      amount: 394.65,
      date: new Date(2023, 2, 1),
    },
  ];
  return (
    <div className="App">
      <h2>Let's get Started</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
   
   <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
   
   <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
   
    </div>
  );
}

export default App;
