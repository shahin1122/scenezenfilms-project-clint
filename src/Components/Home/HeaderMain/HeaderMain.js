import React from 'react';
import './HeaderMain.css'
import camera from '../../../image/Untitled-4-min.png'
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style={{height: '900px'}} className="row d-flex align-items-center backgroundSet mx-0 px-0">
            <div className="col-md-6 offset-md-1">
                <img className="img-fluid headerImage" src={camera} alt=""/>
            </div>

            <div className="col-md-4 textBackground text-center">
                <h1>Who Are We</h1>
                    <p className="text-secondary">"We are committed to deliver the best support through TVC/OVC production to enhance your brands and product promotions. SceneZen Films is a production house solely dedicated in producing larger than life Electronic Media Commercials. A compact team of highly skilled and coordinated members ensures international quality of service for your TVC/OVC." 
                    </p>
                <button className="exploreBtn"> <Link to="/booking" style={{ textDecoration: 'none' , color:'white'}}> Explore and Booking Service</Link> </button>
            </div>
        </main>
    );
};

export default HeaderMain;