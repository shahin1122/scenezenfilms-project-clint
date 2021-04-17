import React, { useState } from 'react';
import {useHistory} from 'react-router';
import './infoCard.css'





const InfoCard = ({info}) => {
    const [cardId , setCardId] = useState([])
    // const [cardIdDetail , setCardIdDetail] = ([info])
    const history = useHistory()

    


    const handleClick = (cardId) => {
        //console.log(cardId);
        history.push(`/cardbooking/${cardId}`)
    }

    return (
        <div className="col-md-6 col-lg-4 cardParent">
           
            <div className="mx-5 my-5 p-5 text-center cardSection">
                <img style={{width:'100px' ,height:'100px'}} src={info.imageUrl} alt=""/>
                <h5>{info.type}</h5>
                <small>{info.detail}</small>
                <p>Budget : <strong>{info.price} $</strong></p>
                <button onClick={()=>handleClick(info.price)} className="btn btn-info text-light">Contact</button>


            </div>
        </div>
    );
};

export default InfoCard;