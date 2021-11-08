import React , { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import googleImage from '../../image/google-logo-9808.png'
import Navbar from '../Home/Navbar/Navbar'




const Login = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };



    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app(); 
     }


     const handleGoogleSignIn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
    
    
    
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                
                var credential = result.credential;
                var token = credential.accessToken;
                //console.log(result.user);
                var {displayName , email , photoURL } = result.user;
                const signedInUser = {namee: displayName , email , photoURL}
                setLoggedInUser(signedInUser);
                history.replace(from);
    
                //console.log(user);

                setUserToken();
               
                //return signedInUser;

               
    
               
            })

           
            
            .catch((error) => {
                
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
               
            });


            
          const setUserToken = () => {
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                sessionStorage.setItem('token' , idToken)
                // ...
              }).catch(function(error) {
                // Handle error
              });
          }  
    
    
    
    }

   

     

    
        return (
            <div>
                
                
        
              
               <Navbar></Navbar>
               <div className="loginArea">
                    
              
                   <img src={googleImage} className="d-flex justify-content-center center" alt=""/>
                   <button onClick={handleGoogleSignIn} className="googleloginBtn btn my-5 px-5 d-flex justify-content-center">Login With Google</button>
                   <label className="text-light d-flex justify-content-center center " htmlFor="">Don't want to get any service?</label>
                   <button className="btn btn-warning d-flex justify-content-center center "> <a className="decoration-none" href="/">Home </a></button>

                 
                  
                   
                </div>


    
                
            </div>
        );
    };
    
    export default Login;