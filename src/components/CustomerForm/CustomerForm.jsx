import React, { useState } from 'react'
import "./CustomerForm.css"

const CustomerForm = ({addNewCustomer}) => {
  const [customerName,setCustomerName]= useState(); //hook
  
  const handleSubmit = (event)=>{  
    event.preventDefault();    //prevent page refresh
    const NewCustomer={
      id: Math.random(),
      customerName,
    };
    addNewCustomer(NewCustomer); //props drilling
    setCustomerName(''); // after the adding data, clear input box
  }
  return (
    <form className='customer-form' onSubmit={handleSubmit}>
      <div className="input">
        <input type="text" className='customer-input' placeholder='  Add a new customer'onChange={(e)=>setCustomerName(e.target.value)}
        value={customerName}/>
        {/* We pull every changing data with onChange  */}
      </div>
      <div className="button">
        <button type="submit" class="btn btn-success">+</button>
      </div>
    </form>
  )
}

export default CustomerForm
//
//