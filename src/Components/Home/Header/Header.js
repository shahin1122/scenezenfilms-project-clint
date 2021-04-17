import React from 'react';
import ConnectedWithUs from '../ConnectedWithUs/ConnectedWithUs';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import PreviousWork from '../PreviousWork/PreviousWork';
import Review from '../Review/Review';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <ServiceInfo></ServiceInfo>
            <PreviousWork></PreviousWork>
            <Review></Review>
            <ConnectedWithUs></ConnectedWithUs>
            <Footer></Footer>
            
        </div>
    );
};

export default Header;