// rcc

import React, { Component } from 'react';
// if you are importing the DEFAULT export, it doesn't need curly braces
import Home from './views/Home';
import Nav from './components/Nav';
import News from './views/News';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Feed from './views/Feed';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 0,
      age: 9000
      // To keep the state the same on page changes
    }
  }

  happyBirthday = () => {
    // this.state.age += 1 //This way is incorrect - instead use the SETTER method
    this.setState({ age: this.state.age + 1 })
  }
  // This method must live in APP if we want it's state to not change on page change

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path='/' element={<Home testVar={this.state.test} x='5000' age={this.state.age} happyBirthday={this.happyBirthday} />} />

            <Route path='/news' element={<News />} />
            <Route path='/feed' element={<Feed />} />
          </Routes>

        </div>
      </BrowserRouter>
    )
  }
}
