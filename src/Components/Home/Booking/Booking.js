import React from 'react';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import Review from '../Review/Review';
import img from '../../../image/Screenshot (252).png'
import './Booking.css'
import Navbar from '../Navbar/Navbar'

const Booking = () => {

   

  

    return (
       
       <div >
            <Navbar></Navbar>

            <div className="bookingDiv">
            <h1>About US</h1>
            <img src={img} alt=""/>

            </div>
          
       </div>

           
            
        
    );
};

export default Booking;