import React from 'react';
import Navigation from './Navigation';

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
            <input type="text" placeholder="Search for products"/>
            <button className="button">Search</button>
          </div>
        </div>
        <div className="header__content">
          <Navigation/>
        </div>
      </div>
    );
  }
};
