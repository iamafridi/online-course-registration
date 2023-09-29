/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import "./Home.css"

const Home = () => {

    const [course, setCourse] = useState([]);


    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setCourse(data))
    }, []);

    // console.log(course);






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
                                <p>salary : {courses.price} </p>
                                <p>Credit : {courses.credit_hour}hr </p>
                            </div>
                            <button className='card-btn'>Select</button>
                        </div>))
                    }
                </div>

                <div className='cart'>
                    <h1>This is cart</h1>

                </div>
            </div>
        </div>
    );
};

export default Home;