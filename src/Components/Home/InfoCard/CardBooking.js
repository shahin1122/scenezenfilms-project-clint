import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {UserContext} from '../../../App'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';
import { useForm } from "react-hook-form";
import NewReview from './NewReview';
import Footer from '../Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar'

// const infoCardData = [
//     {
//         id:1,
//         budget:4200
//     },

//     {
//         id:2,
//         budget:3200
//     },

//     {
//         id:3,
//         budget:1500
//     },

//     {
//         id:4,
//         budget:1000
//     },

//     {
//         id:5,
//         budget:1200
//     },

//     {
//         id:6,
//         budget:2200
//     },
// ]


const CardBooking = () => {

   

    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const {cardId} = useParams();
    const [cart , setCart] = useState();

    const [newData , setNewData] = useState([]);
    console.log(newData);

    console.log(cardId);
    console.log(loggedInUser);

    useEffect(()=>{
        fetch('https://guarded-springs-77725.herokuapp.com/newEvent')
        .then(res=> res.json())
        .then(data=> setNewData(data))
    },[])
    
    
    

    const product =  newData.find(pd=> pd.price == cardId)
    // console.log(product.budget);
    //console.log(cardId);


    

    return (
        <div className="row m-0 p-0">
            <Navbar></Navbar>
            <div className="col-md-1">
            </div>
                <div className="col-md-5">
                <form className="w-80">
                    <div class="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <p>{loggedInUser.namee}</p>
                    </div>
                    <div class="form-group">
                    <label for="formGroupExampleInput2">Email</label>
                    <p>{loggedInUser.email}</p>
                    <h4 className="p-4 text-center">Service Price: {cardId}  $</h4>

                    <h4 className="text-center">Payment Getway</h4>
                    <div className="border border-danger ">
                        <ProcessPayment></ProcessPayment>
                    </div>
                    </div>
                </form>
               </div>

               <div className="col-md-5 text-center">
                   <NewReview></NewReview>
                  
               </div>
               <div className="col-md-12 mb-5 pb-5">
                   


                </div>

                <Footer></Footer>
                
                            
        </div>
    );
};

export default CardBooking;