import React from 'react';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import Review from '../Review/Review';
import Navbar from '../Navbar/Navbar'
import {GiNotebook} from 'react-icons/gi'
import {BsPencilSquare} from 'react-icons/bs';
import {BiCameraMovie} from 'react-icons/bi'
import {MdContentPaste} from 'react-icons/md'
import './Booking.css'

const Booking = () => {

   return (
       <div >
            <Navbar></Navbar>
            <h1 className="text-info bg-dark">Booking Card</h1>
            
            <div className="card-parent">
                    <div className="row m-0 p-0">
                        {/* card-1 */}

                        <div className="col-md-6 small-display-sizing">
                            <div className="card-section row">
                            <div className="col-lg-8 col-md-6 title-section">
                                    <GiNotebook className="icon-class"/>
                                    <h3>Scripting and Copywriting</h3>
                            </div>
                                <div className="col-lg-4 col-md-6 paragraph-secton">
                                    <p className="my-3 booking-para">Dedicated to writing great video scripts for a variety of video. This skill is a valuable asset for your company setting foot into video content today.</p>
                                </div>
                            </div>
                        </div>


                        {/* card-2 */}

                        <div className="col-md-6">
                            <div className="card-section row">
                            <div className="col-lg-8 col-md-6 title-section">
                                    <BsPencilSquare className="icon-class"/>
                                    <h3>Storyboarding</h3>
                            </div>
                                <div className="col-lg-4 col-md-6 paragraph-secton">
                                    <p className="my-3 booking-para">Most people associate storyboards with big movie set , storyboarding even for a small video production is highly necessary. They serve as  cheat sheet for the camera.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <hr />
                    <div className="row m-0 p-0">
                        {/* card-3 */}

                        <div className="col-md-6 small-display-sizing">
                            <div className="card-section row">
                            <div className="col-lg-8 col-md-6 title-section">
                                    <BiCameraMovie className="icon-class"/>
                                    <h3>Production</h3>
                            </div>
                                <div className="col-lg-4 col-md-6 paragraph-secton">
                                    <p className="my-3 booking-para">“Lights! Camera! Action!” as cliché as it may sound yet its all that explains best the phase of a production with optimum efficiency   </p>
                                </div>
                            </div>
                        </div>


                        {/* card-4 */}

                        <div className="col-md-6">
                            <div className="card-section row">
                            <div className="col-lg-8 col-md-6 title-section">
                                    <MdContentPaste className="icon-class"/>
                                    <h3>Final Content Generation</h3>
                            </div>
                                <div className="col-lg-4 col-md-6 paragraph-secton">
                                    <p className="my-3 booking-para">The final phase which we like to call as “What you get is exactly what you want”, Delivers the client with a fully furnished, global standard Video Production.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    </div>



            


               
         
        </div>
        );
};

export default Booking;