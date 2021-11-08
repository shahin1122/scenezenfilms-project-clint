import React from 'react';
import work1 from '../../../image/work1.png'
import work2 from '../../../image/work2.png'
import work3 from '../../../image/work3.png'
import work4 from '../../../image/work4.png'
import './PreviousWork.css'

const PreviousWork = () => {
    return (
        <div className="row text-center parentDiv mx-0 px-0">
            <h1>Our Previous Work</h1>
            <div className="col-lg-12 col-md-12 ">
                <a href="https://youtu.be/NzdEYdx-nZo" target="_blank"><img className="w-75 mx-4 my-4 childDiv" src={work1} alt=""/></a>
                <h5 className="text-light">Anti Drug TVC</h5>
            
            </div>

            <div className="col-lg-4 col-md-6 ">
                <a href="https://youtu.be/3fNhoXC4Aww" target="_blank"><img className="w-75 my-5 childDiv" src={work2} alt=""/></a>
                <h5 className="text-light">Ridisha Badam Biscut</h5>

            </div>

            <div className="col-lg-4 col-md-6 ">
                <a href="https://youtu.be/JVCrtO2Yb5s" target="_blank"><img className="w-75 my-5 childDiv" src={work3} alt=""/></a>
                <h5 className="text-light">Ridisha Crunchy Toast</h5>
            </div>

            <div className="col-lg-4 col-md-6 ">
                <a href="https://youtu.be/6fG0TOI7x98" target="_blank"><img className="w-75 my-5 childDiv" src={work4} alt=""/></a>
                <h5 className="text-light">Bashundhara Instant Noodles</h5>
            </div>

            
        </div>
    );
};

export default PreviousWork;