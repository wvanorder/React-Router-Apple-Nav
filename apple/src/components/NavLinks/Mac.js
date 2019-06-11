import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './NavLink.scss';
import Image from './Image';

export default class SubNav extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {
    return (
        <div>
            <div className="subNavBar">
                {this.props.tab.subcats.map(subcat => (
                    <div className="subNavBox">
                        <NavLink to={`/${this.props.tab.name}/${subcat.name}`} className="basic"><h2><subcat.icon /></h2></NavLink>
                        <h3>{subcat.name}</h3>
                    </div>
                ))}
            </div>
            {this.props.tab.subcats.map(subcat => (
              <Route path={`/${this.props.tab.name}/${subcat.name}`} render={(props) => (<Image subcat={subcat} {...props}/>)} />
          ))}   
        </div>
       
   
    );
  }
}