import React from 'react';
import { Button } from 'react-bootstrap';
import './order.css'

const Order = (props) => {
    const card = props.quantity;
    const total = card.reduce((total,y) => total + Number(y.price) , 0);
    return (
        <div style={{position:'fixed', marginLeft:'10px'}}>
            <h4>Order Summary</h4>
              <hr/>
              <p>Courses: {props.quantity.length}</p>
              <p>Total : {total}$</p>
              <Button className="btn btn-danger" >Confirm Order</Button>
        </div>
    );
};

export default Order;