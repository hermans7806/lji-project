import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router';
import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__content">
          <div>
            <h1 className="header__title">Little Jo And Ivy</h1>
            <h2>CALL US: 90726146</h2>
          </div>
          <div>
            <img src="/images/LJIlogonew-100px-01.png" width="80"/>
          </div>
          <div>
            { (Meteor.userId()) ?
              (<p>Welcome,
              <button className="button button--link-text" onClick={() => Accounts.logout()}>Logout</button></p>)
            :
              <Link to="/login">Login / Signup</Link>
            }
          </div>
        </div>
        <div className="header__content">
          <Navigation/>
        </div>
      </div>
    );
  }
};
