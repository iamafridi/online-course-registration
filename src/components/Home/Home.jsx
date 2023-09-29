/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import "./Home.css"

const Home = () => {

    const [course, setCourse] = useState([]);
const [selectedCourse, setSelectedCourse] = useState([]);

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setCourse(data))
    }, []);

    // console.log(course);

const handleSelectCourse = (courses) => {
    const isExist = selectedCourse.find((item) => item.id == courses.id);
    if(isExist){
       return alert("You Have Already Selected The Course")
    }
    else{ 
        setSelectedCourse([...selectedCourse, courses]);
    }
    
};
// console.log(selectedCourse);


    return (
<div className='container' >
<div className='home-container'>
<div className="card-container">
    {
        course.map(courses => (<div  key={courses.id} className='card'>
            <div className='card-img'>
                <img className='photo' src={courses.cover_image} alt="" />

            </div>
            <h2>{courses.title}</h2>
            <p><small>{courses.description}</small></p>
            <div className='info'>
                <p>salary : ${courses.price} </p>
                <p>Credit : {courses.credit_hour}hr </p>
            </div>
            <button onClick={() =>handleSelectCourse(courses)} className='card-btn'>Select</button>
        </div>))
    }
</div>

<div className='cart'>
   <Cart selectedCourse={selectedCourse} ></Cart>

</div>
</div>
</div>
    );
};

export default Home;