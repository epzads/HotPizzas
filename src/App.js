import React from 'react';
import { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import CustomizeMenu from './components/CustomizeMenu'
import Checkout from './components/Checkout'
import Maincontainer from './components/Maincontainer'
import pizza from './pizza.png'
class App extends Component {

  handleClick= () => {

  }

  render() {
    return (
      // <div style={{ backgroundImage: `url(${pizza})`, backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat' }}>

      <div>
            <Maincontainer/>
           
      </div>
    

    )
  }
}

export default App;
