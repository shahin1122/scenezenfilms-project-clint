import React, { useEffect, useState } from 'react';
import InfoCard from '../InfoCard/InfoCard';
import img1 from '../../../image/movie.png'
import img2 from '../../../image/movie2.png'
import img3 from '../../../image/movie3.png'
import img4 from '../../../image/movie4.png'
import img5 from '../../../image/movie5.png'
import img6 from '../../../image/movie6.png'
import './ServiceInfo.css';


const ServiceInfo = () => {
     const [newEvent , setNewEvent] = useState([])

     useEffect(()=>{
         fetch('https://guarded-springs-77725.herokuapp.com/newEvent')
         .then(res=> res.json())
         .then(data=>setNewEvent(data))

     },[])
    
    return (
        <section className="row parentSection px-0 mx-0">
            <h1>Our Service</h1>
            
            {
                newEvent.map(info => <InfoCard info={info}></InfoCard>)
            }

        </section>
    );
};

export default ServiceInfo;