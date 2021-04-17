import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Booking from './Components/Home/Booking/Booking';
import Footer from './Components/Home/Footer/Footer';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import CardBooking from './Components/Home/InfoCard/CardBooking';
import AddService from './Components/AddService/AddService';
import { Navbar } from 'react-bootstrap';

export const UserContext = createContext();


function App() {
  const [loggedInUser , SetLoggedInUser] = useState({})
  return (

  
    <UserContext.Provider value={[loggedInUser , SetLoggedInUser]}>
    <Router>
      
      <Switch>
      
        <Route exact path="/">
          <Home></Home>

        </Route>

        <Route path="/booking">
          <Booking></Booking>
        </Route>

        <PrivateRoute path="/CardBooking/:cardId">
            <CardBooking></CardBooking>
        </PrivateRoute>

        <PrivateRoute path="/addService">
          <AddService></AddService>
        </PrivateRoute>





        <Route path="/login">
          <Login></Login>

        </Route>

       
        
      </Switch>
      
     
      </Router>
  </UserContext.Provider>
  



    
  );
}

export default App;
