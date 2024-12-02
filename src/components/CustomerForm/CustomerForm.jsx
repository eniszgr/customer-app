import React, { useState } from 'react'
import "./CustomerForm.css"

const CustomerForm = ({addNewCustomer}) => {
  const [customerName,setCustomerName]= useState();
  
  const handleSubmit = (event)=>{  
    event.preventDefault();    //sayfa yenilenmesini engeller
    const NewCustomer={
      id: Math.random(),
      customerName,
    };
    addNewCustomer(customerName);
  }
  return (
    <form className='customer-form' onSubmit={handleSubmit}>
      <div className="input"><input type="text" className='customer-input' placeholder='  Add a new customer'
      onChange={(e)=>setCustomerName(e.target.value)}/></div>
      <div className="button"><button type="submit" class="btn btn-success">+</button></div>
    </form>
  )
}

export default CustomerForm
//
//