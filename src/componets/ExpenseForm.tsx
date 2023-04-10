import React from 'react'
import {FieldValues,useForm} from 'react-hook-form'

const ExpenseForm = () => {
  const {
    register,
    handleSubmit
  }= useForm();
  const onSubmit=(data:FieldValues)=>{
      console.log('submintting the for ',data)
  }


  return (
 
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label  htmlFor="description"className="form-label">Description</label>
                <input {...register('description')} type="text" id="description" className="form-control"/>
            </div>
            <div className="mb-3">
                <label  htmlFor="montant"className="form-label">Montant</label>
                <input {...register('montant')}type="number" id="montant" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select  {...register('category')} className="form-select">
                  <option value="">Select category</option>
                  <option value="utilities">Utilities</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="groceries">Groceries</option>
                  <option value="debt">Debt repayemnt</option>

                </select>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" type="submit">Submit</button>
                </div>
        </form>
        
   
  )
}
export default ExpenseForm;