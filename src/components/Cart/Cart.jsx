/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
// import "./Cart.css";
import './Cart.css'

const Cart = ({ selectedCourse,remaining,totalCost }) => {
    console.log(selectedCourse);
    return (
        <div className='container-div'>
            
            <h4> <span className='remaining '>Remaining Hour: </span>  {remaining}</h4>
            <hr />

            <h3 className='total-selected-course'>
                Total Selected Course : {selectedCourse.length}
            </h3>
            <hr />
<h4 className='course-Name'>Course Name :</h4>

            {
                selectedCourse.map((courses) => (
                    <ol className='olclass' key={courses.id}>{courses.title}</ol>
                ))}

<h4 className='total-hour'>Total Hour: {totalCost}</h4>

        </div>
    );
};

export default Cart;