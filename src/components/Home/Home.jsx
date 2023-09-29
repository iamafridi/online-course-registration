/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import "./Home.css"

const Home = () => {

    const [course, setCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);


    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setCourse(data))
    }, []);

    // console.log(course);


    const handleSelectCourse = (courses) => {
        const isExist = selectedCourse.find((item) => item.id == courses.id);

        // for price of the couse

        let count = courses.credit_hour;
        if (isExist) {
            return alert("You Have Already Selected The Course")
        }
        else {

            selectedCourse.forEach((item) => {
                count += item.credit_hour;
            });
            // console.log(count);
            const totalremainingCredit = 20 - count;

            if (count > 20) {
                return alert("You Can Enroll In More Than 20 Credits")
            }
            else {
                setTotalCost(count);
                setRemaining(totalremainingCredit);
                setSelectedCourse([...selectedCourse, courses]);

            }
        }

    };
    // console.log(selectedCourse);


    return (
        <div className='container' >
            <h1 className='course-title'>Course Registration</h1>
            <div className='home-container'>
                <div className="card-container">
                    {
                        course.map(courses => (<div key={courses.id} className='card'>
                            <div className='card-img'>
                                <img className='photo' src={courses.cover_image} alt="" />

                            </div>
                            <h2 className='card-title'>{courses.title}</h2>
                            <p className='card-description'><small>{courses.description}</small></p>
                            <div className='info'>
                                <p>Price : ${courses.price} </p>
                                <p>Credit : {courses.credit_hour}hr </p>
                            </div>
                            <button onClick={() => handleSelectCourse(courses)} className='card-btn'>Select</button>
                        </div>))
                    }
                </div>

                <div className='cart'>
                    <Cart selectedCourse={selectedCourse}
                        remaining={remaining}
                        totalCost={totalCost}></Cart>

                </div>
            </div>
        </div>
    );
};

export default Home;