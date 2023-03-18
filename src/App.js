import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";
const  App = () =>{
  const expenses = [  // defining the expense items
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


    <div>
      <h2>Let's Get Stared</h2>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
