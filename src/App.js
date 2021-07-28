import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe("pk_test_51JEz2YSJr1dGGnXFvgpI39pyCjT6b8ZgfMcsY07HGdKA1LidDjFJh8uIbv1Fl2l57DwNjlNmm8z4JArt3tmazWnu00i6RmYIw8");


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the component loads
    auth.onAuthStateChanged(authUser => {
      console.log('user is >>>', authUser);

      if(authUser) {
        
        //user logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {

        //user logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])


  return (
    // BEM2
      <Router>
    <div className="App">


      <Switch>

      <Route path="/Orders">
      <Header />
        <Orders />
        </Route>

      <Route path="/login">
        <Login />
        </Route>

        <Route path="/checkout">
        <Header />
        <Checkout />
        </Route>

        <Route path="/Payment">
        <Header />
        <Elements stripe={promise}>
          <Payment />
        </Elements>
        
        </Route>

        <Route path="/">
        <Header />
        <Home />
        </Route>

      </Switch>

     
    </div>
    
    </Router>
  );
}

export default App;
