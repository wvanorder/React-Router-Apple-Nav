import React, { Component } from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';
import {Route} from 'react-router-dom';
import Welcome from'./welcome';




export default class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  
  
  componentDidUpdate(){
    console.log(this.state.activeLink);
  }
  

  render() {
    return (
      <div>
        <NavWrapper navData={this.state.navData}/>
        <Route exact path="/" render={() => <Welcome />} />
      </div>   
    );
  }
};