import React from 'react'

interface expense{
    id:number,
    description:string
    amount:number,
    category:string
}
interface Props {
    expenses:expense[],
    onDelete:(id:number)=>void
  }
function Expense({expenses,onDelete}:Props) {
    if (expenses.length ===0) return null
  return (
    <table className="table table-bordered">
       <thead>
        
        <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Delete</th>
        </tr>

       </thead>
       <tbody>
       {expenses.map(expense=>
        <tr>
             
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
                <button className="btn btn-outline-danger" onClick={()=>onDelete(expense.id)}>Delete</button>
            </td>
        </tr>
        
        )}
       </tbody>
       <tfoot>
        <tr>
            <td>Total</td>
            <td>£{expenses.reduce((acc,expense)=>expense.amount+acc,0).toFixed(2)}</td>
            <td></td>
            <td></td>
        </tr>
       </tfoot>
    </table>

  )
}

export default Expense