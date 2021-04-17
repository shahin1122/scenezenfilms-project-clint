import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import './Navbar.css'
import {Link} from 'react-router-dom';
import image from '../../../image/logo.png';



const Navbar = () => {
  // let user = JSON.parse(localStorage.getItem('token'))
  // console.log(user);
  const history = useHistory()

  const logOut =()=>{
    localStorage.clear();
    history.push('/')
  }





  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav class="navbar navbar-expand-lg  navbar-light navItem">
        <div class="container-fluid">
        <Link class="navbar-brand text-light"  to="/"><img src={image} style={{height:'90px',width:'150px'}} alt=""/></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <Link class="nav-link text-light mx-5 px-3" aria-current="page" to="/">Home</Link>
        <Link class="nav-link text-light mx-5 px-3" to="/addService">Admin</Link>
        <Link class="nav-link text-light mx-5 px-3" to="/booking">About Us</Link>
        

        <button onClick={logOut}> <a href="/">Logout</a> </button>
      </div>
    </div>
  </div>
</nav>

        
    );
};

export default Navbar;