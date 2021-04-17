import React, { useEffect, useState } from 'react';
import ReviewDeatls from '../ReviewDeatls/ReviewDeatls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faStarHalf } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// const reviewars = [
//     {
//         name: 'Mirazul Islam',
//         detailsInfo:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         icon: faStar ,
//         icon2: faStarHalf
//     },
//     {
//         name: 'Imamuzzaman Bipro',
//         detailsInfo:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         icon: faStar ,
//         icon2: faStarHalf
//     },
//     {
//         name: 'Shahin Shah',
//         detailsInfo:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         icon: faStar ,
//         icon2: faStarHalf
//     }
// ]


const Review = () => {

    
const [reviewars , setReviewars] = useState([])


useEffect(()=>{
   fetch('https://guarded-springs-77725.herokuapp.com/events') 
   .then(res=> res.json())
   .then(data=>setReviewars(data))

},[])

    return (
        <div className="row parentDiv">
            <h1 className="text-light my-5">Review</h1>
            {
                reviewars.map(details=> <ReviewDeatls details={details}></ReviewDeatls>)
            }
            
            
        </div>

    );
};

export default Review;