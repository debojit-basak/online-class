import React from 'react';
import './course.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Course = (props) => {
    
    return (
        <div className="items text-center">
            <h3>{props.item}</h3>
            <h2>Price: {props.price}$</h2>
            
            <Button className="btn btn-info" onClick={() => props.addEvent(props.pdt)} >Enroll Now</Button>
        </div>
    );
};

export default Course;