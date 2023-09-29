/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Cart from '../Cart/Cart';
import "./Home.css"

const Home = () => {



    useEffect(() => {
fetch("./data.json")
.then((res) => res.json())
.then((data) => console.log(data))
    }, []);






    return (
        <div className='container' >
            <div className='card-container'>
                <div className='card'>
                    <div className='card-img'>
                        <img className='photo' src="https://i.ibb.co/5BbvFv9/Rectangle-2-1.png" alt="" />

                    </div>
                    <h2>Anthony</h2>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga odio recusandae, vel ad quo doloremque quam ipsa officia aperiam, error voluptates</small></p>
                    <div className='info'>
                        <p>salary :</p>
                        <p>Credit :</p>
                    </div>
                    <button className='card-btn'>Select</button>
                </div>
            </div>
        </div>
    );
};

export default Home;