import { useState } from 'react';
import './App.css';
import CustomerForm from './components/CustomerForm/CustomerForm';
import CustomerList from './components/CustomerList/CustomerList';

function App() {
  const [customers,setCustomers] = useState([]);

  const addNewCustomer =(NewCustomer)=>{
    setCustomers([...customers,NewCustomer])
  }
  return (
    <div className="App">
      <h2>Customer Management System</h2>
      <CustomerForm addNewCustomer={addNewCustomer}/>
      <CustomerList customers={customers}/>
    </div>
  );
}

export default App;
