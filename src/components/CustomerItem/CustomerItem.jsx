import React from 'react'
import "./CustomerItem.css"

function CustomerItem({customer, handleDelete}) {
    
  return (
    <li className='customer-item' unikey={customer.id}>
          <div className='customer-info'> 
            <img src="https://i.pravatar.cc/300" alt="" className='custome-avatar'/>  
            <span className='customer-name'>{customer.customerName}</span>
          </div>     
          <div className="button"><button type="button" class="btn btn-danger" onClick={()=> handleDelete(customer)}>Delete</button></div>
          {/* handleDelete props drilling */}
      </li>
  )
}

export default CustomerItem