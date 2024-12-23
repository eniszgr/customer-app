import { useState } from 'react';
import './App.css';
import CustomerForm from './components/CustomerForm/CustomerForm';
import CustomerList from './components/CustomerList/CustomerList';

function App() {
  const [customers,setCustomers] = useState([]);
  const addNewCustomer =(NewCustomer)=>{
    //setCustomers([...customers,NewCustomer]) different way
    setCustomers((prevState)=> [NewCustomer,...prevState])
  }
  return (
    <div className="App">
      <h2>Customer Management System</h2>
      <CustomerForm addNewCustomer={addNewCustomer}/>
      {customers.length === 0 && <p className="empty">there are no customers</p>}

      <CustomerList customers={customers} setCustomers = {setCustomers}/>
    </div>
  );
}

export default App;
