import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Caro from './components/Caro';
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <>
        <div>
          <Navbar />
          <Caro />
          <News />
        </div>
      </>
    )
  }
}

