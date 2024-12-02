import React from 'react'

function CustomerItem({customer}) {
    console.log(customer);
  return (
    <li className='customer-item' unikey={customer.id}>
          <div className='customer-info'> 
            <img src="https://i.pravatar.cc/300" alt="" className='custome-avatar'/>  
            <span className='customer-name'>{customer.customerName}</span>
          </div>     
          <button type="button" class="btn btn-danger">Delete</button>
      </li>
  )
}

export default CustomerItem