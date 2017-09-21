import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <a>Home</a> |
        <a>Bags & Pouches</a> |
        <a>Babies & Kids</a> |
        <a>Travel Essentials</a> |
        <a href="#how_to_order">How To Order</a> |
        <a href="#contact_us">Contact us</a>
      </div>
    );
  }
};
