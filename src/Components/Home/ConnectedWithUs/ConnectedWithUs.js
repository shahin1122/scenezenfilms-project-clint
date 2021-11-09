import React from 'react';
import './ConnectedWithUs.css';

const ConnectedWithUs = () => {
    return (
        <section className="parentDiv">
            <div className="connectedInfo text-center py-5 text-light">
                <h4>CONTACT US</h4>
                <h1>Always Connected With Us</h1>
                <input className="email w-50 py-2 my-2" placeholder="Enter Your Email*" type="text"/><br/>
                <input className="subject w-50 py-2 my-2" placeholder="Subject*" type="text"/><br/>
                <input className="yourMessage w-50 py-5 my-2" placeholder="Your Text*" type="text"/><br/>
                <button style={{background:' linear-gradient(to right, #C33764 0%, #1D2671 100%) '}} className="btn px-3 py-2">Submit</button>
            </div>
        </section>
    );
};

export default ConnectedWithUs;