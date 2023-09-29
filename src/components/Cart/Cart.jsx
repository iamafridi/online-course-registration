/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
// import "./Cart.css";

const Cart = ({ selectedCourse }) => {
    console.log(selectedCourse);
    return (
        <div>
            <h5>
                Total Selected Course : {selectedCourse.length}
            </h5>
            {
                selectedCourse.map((courses) => (
                    <li key={courses.id}>{courses.title}</li>
                ))}
        </div>
    );
};

export default Cart;