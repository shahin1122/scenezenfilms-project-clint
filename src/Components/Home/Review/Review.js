import React, { useEffect, useState } from 'react';
import ReviewDeatls from '../ReviewDeatls/ReviewDeatls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faStarHalf } from '@fortawesome/free-solid-svg-icons'

const Review = () => {
const [reviewars , setReviewars] = useState([])
useEffect(()=>{
   fetch('https://guarded-springs-77725.herokuapp.com/events') 
   .then(res=> res.json())
   .then(data=>setReviewars(data))

},[])

    return (
        <div className="row parentDiv mx-0 px-0">
            <h1 className="text-light my-5">Review</h1>
            {
                reviewars.map(details=> <ReviewDeatls details={details}></ReviewDeatls>)
            }
            
            
        </div>

    );
};

export default Review;