import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            {/* <h6 className="container"> Poke Times - React Routers revisited </h6> */}
            <Navbar /> 
            <Switch>
              <Route exact path='/' component = {Home} /> 
              <Route path='/About' component = {About} /> 
              <Route path='/Contact' component = {Contact} /> 
              <Route path='/:post_id' component = {Post} /> 
              </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
