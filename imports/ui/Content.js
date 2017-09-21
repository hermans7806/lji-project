import React from 'react';

export default class Content extends React.Component {
  render() {
    return (
      <div className="page-content">
        <p>Little Jo and Ivy bla bla bla</p>
        <div>
          <h2>Our finest collections</h2>
          <h2></h2>
        </div>
        <div>
          <h2>Follow Us</h2>
          <p><a href="https://www.instagram.com/littlejoandivy/" target="_blank">
            <img src="/images/if_entoni_instagram_330874.png" height="50" width="50" />
          </a></p>
        </div>
      </div>
    );
  }
};
