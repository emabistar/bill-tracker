import React, { PropsWithoutRef } from 'react'
interface Props{
    onSelectedCategory:(item:string)=>void
}
function ExpenseFilter({onSelectedCategory}:Props) {
  return (
    
    <select  
     className="form-select"
     onChange={(event)=>onSelectedCategory(event.target.value)}
     >
    <option  value="">All Categories</option>
     <option value="Utilities">Utilities</option>
     <option value="Cars">Cars</option>
     <option value="Groceries">Groceries</option>
     <option value="Utilities">Utilities</option>
     <option value="Utilities"></option>
    </select>
  )
}

export default ExpenseFilter