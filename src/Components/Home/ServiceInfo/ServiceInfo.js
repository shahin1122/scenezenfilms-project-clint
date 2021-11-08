import React, { useEffect, useState } from 'react';
import InfoCard from '../InfoCard/InfoCard';
import img1 from '../../../image/movie.png'
import img2 from '../../../image/movie2.png'
import img3 from '../../../image/movie3.png'
import img4 from '../../../image/movie4.png'
import img5 from '../../../image/movie5.png'
import img6 from '../../../image/movie6.png'
import './ServiceInfo.css';

// const infoData = [
//     {
//         id:1,
//         title: 'TVC',
//         desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         icon:img1,
//         budget: 4200 ,
        
//     },
//     {
//         id:2,
//         title: 'OVC',
//         desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         icon:img2,
//         budget: 3200 ,
        
//     },
//     {
//         id:3,
//         title: 'TELEFILM',
//         desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         icon:img3,
//         budget: 1500 ,
        
//     },
//     {
//         id:4,
//         title: 'DOCUMENTARY',
//         desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         icon:img4,
//         budget: 1000 ,
       
//     },
//     {
//         id:5,
//         title: 'DRAMA',
//         desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         icon:img5,
//         budget: 1200 ,
        
//     },
//     {
//         id:6,
//         title: 'AV',
//         desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         icon:img6,
//         budget: 2200 ,
        
//     }
// ]

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