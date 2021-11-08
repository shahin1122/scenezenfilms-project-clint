import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BsFillStarFill , BsStarHalf , BsStar } from 'react-icons/bs';

const ReviewDeatls = ({details}) => {
    return (
        <div className="col-md-4 text-center">
            <div className="bg-light rounded p-4 m-4">
                <BsFillStarFill/>
                <BsFillStarFill/>
                <BsFillStarFill/>
                <BsStarHalf/>
                <BsStar/>
                
                <h1 className="text-dark">{details.name}</h1>
                <p>{details.disc}</p>

                <FontAwesomeIcon icon={details.icon}></FontAwesomeIcon>
                <FontAwesomeIcon icon={details.icon}></FontAwesomeIcon>
                <FontAwesomeIcon icon={details.icon}></FontAwesomeIcon>
                <FontAwesomeIcon icon={details.icon}></FontAwesomeIcon>
                <FontAwesomeIcon icon={details.icon2}></FontAwesomeIcon>
            </div>
            
        </div>
    );
};

export default ReviewDeatls;