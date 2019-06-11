import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './NavWrapper.scss';
import TabInfo from '../TabInfo';
import {Route} from 'react-router-dom';
import SubNav from './NavLinks/Mac';

export default class NavWrapper extends Component {
  constructor(props) {
    super(props);
    this.state={
      navData: [],
      activeLink: '',
    }
  }

  componentDidMount(){
    this.setState({
      navData: TabInfo,
    })
  }

  render() {
    return (
      <div>
        <div className="nav">
          <NavLink to='/'><h2>Apple</h2></NavLink>
          <div className="nav-links">
          {this.state.navData.map(tab => (
              <NavLink to={`/${tab.name}`}className="navLink" name={tab.name}>{tab.name}</NavLink>
          ))}  
          </div>  
        </div>
        {this.state.navData.map(tab => (
              <Route path={`/${tab.name}`} render={(props) => (<SubNav tab={tab} {...props}/>)} />
          ))}  
      </div>
      
    );
  }
}


// {/* //</div> */}