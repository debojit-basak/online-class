import React, { useState } from 'react';
import './App.css';
import Course from './components/Course/course';
import Order from './components/Order/order';

function App() {
  const card = [
    {name:'HTML' , price : '10'},
    {name:'CSS' , price : '20'},
    {name:'BootStrap' , price : '30'},
    {name:'JavaScript' , price : '40'},
    {name:'REACT' , price : '50'},
    {name:'C' , price : '60'},
    {name:'C++' , price : '70'},
    {name:'DJANGO' , price : '80'},
    {name:'PYTHON' , price : '90'},
    {name:'WORDPRESS' , price : '100'},
    {name:'SHOPIFY' , price : '200'},
    {name:'MONGODB' , price : '400'},
    {name:'JAVA' , price : '500'},
    {name:'JQUERY' , price : '600'}
];     

      const [count,setCount] = useState([]);

      const add = (item) => {
        // console.log(item);
        const newCount = [...count,item];
        setCount(newCount); 
      };
      
  return (
    <div className="App">
        <h1>Online Tutorials</h1>
        <hr/>
        <div className="container-fluid">
          <div className="courses">
            {
              card.map(x => <Course addEvent={add} pdt={x} item = {x.name} price = {x.price}></Course>)
            }           
          </div>
          <div className="cart">
              <Order quantity = {count}  ></Order>
          </div>
        </div>
    </div>
  );
}

export default App;