import React, { useState } from 'react'
import CustomerItem from '../CustomerItem/CustomerItem'



function CustomerList ({customers}) {
  return (
    <ul className='customer-list'>
      {customers.map((customer)=>(
        <CustomerItem customer ={customer}/>
      ))}
     
    </ul>
  )
}

export default CustomerList