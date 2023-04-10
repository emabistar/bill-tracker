import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './componets/ExpenseForm'
import Expense from './componets/Expense'
import ExpenseFilter from './componets/ExpenseFilter'
//import Item from './componets/Item'
interface ItemData{
  description:string,
  amount:number,
  category:string
 }
function App() {
  const [items, setItems] = useState(
    [
      {description:'todo oner',amount:5,category:'Food'}
    ]
  )
 // Add item to items
 const addItem = ({description,amount,category}:ItemData)=>{
     const itemObj  = [...items,{description,amount,category}]
     setItems(itemObj)
 }
const deleteItem =(index:number)=>{
   const newItem = [...items]
   setItems(newItem.splice(index,1))
}
   // onSelectedCategory
   const [onSelectedCategory,setSelectedCategory]=useState('')

   const [expenses,setExpenses]=useState([
    {id:1,description:"aaaa",amount:5,category:"Utilities"},
    {id:2,description:"bbbb",amount:5,category:"Food"},
    {id:3,description:"cccc",amount:5,category:"Cars"}
   ])

   const onDelete=(id:number)=>{
    setExpenses(expenses.filter(expense=>expense.id !== id))
   }
   const visibleExpenses = onSelectedCategory ?
    (expenses.filter((e)=>e.category===onSelectedCategory)):
    expenses;



  return (
    <>
    <div className="text-center">
      <h3>Expense tracker</h3>
    </div>
   
    <h2 className="text-center">Expenses</h2>
    <div className="col-md-6 offset-3 mb-3">
    <ExpenseForm/>
    <ExpenseFilter onSelectedCategory={category =>setSelectedCategory(category)}/>
    </div>
    
    <div className="col-md-6 offset-3">
    <Expense expenses={visibleExpenses } onDelete={onDelete}/>
    </div>
     
     
    </>
  )
}

export default App
