import React from 'react';
import './Footer.css'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineTwitter , AiFillGithub , AiFillLinkedin} from 'react-icons/ai'



const Footer = () => {
    return (
    <footer style={{marginTop :'0px'}} class="footer-distributed">
 
 <div class="footer-left">
 
 <h3>SceneZen<span>Films</span></h3>
 
 <p class="footer-links">
 <a href="#">Home</a>
 ·
 <a href="#">Blog</a>
 ·
 <a href="#">Pricing</a>
 ·
 <a href="#">About</a>
 ·
 <a href="#">Faq</a>
 ·
 <a href="#">Contact</a>
 </p>
 
 <p class="footer-company-name">SceneZen Films &copy; 2021</p>
 </div>
 
 <div class="footer-center">
 
 <div>
 <i class="fa fa-map-marker"></i>
 <p><span>Niketon</span> Banani , BanglaDesh</p>
 </div>
 
 <div>
 <i class="fa fa-phone"></i>
 <p>+8801758224633</p>
 </div>
 
 <div>
 <i class="fa fa-envelope"></i>
 <p><a href="mailto:support@company.com">shahin15-10044@diu.edu.bd</a></p>
 </div>
 
 </div>
 
 <div class="footer-right">
 
 <p class="footer-company-about">
 <span>About the company</span>
 SceneZen FILMS is a film House that make TVC , Drama , &amp;  Telefilm .
 </p>
 
 <div class="footer-icons">
        <a href="#"><FiFacebook className="facebook-icon-color"/></a>
        <a href="#"><AiOutlineTwitter className="twiter-icon-color"/></a>
        <a href="#"><AiFillLinkedin className="linkedin-icon"/></a>
        <a href="#"><AiFillGithub className="github-icon"/></a>
 </div>
 
 </div>
 
 </footer>
    );
};

export default Footer;