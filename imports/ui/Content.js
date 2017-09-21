import React from 'react';

export default class Content extends React.Component {
  render() {
    return (
      <div className="page-content">
        <p>Little Jo and Ivy brings you the flexible way to customize the product that you liked. Our products made from a fine & soft material, varies from the small multipurpose pouch to the most wanted blankets. We hope to give you the best service for each of your order.</p>
        <div>
          <h2>Our finest collections</h2>
          <h2></h2>
        </div>
        <div>
          <h2 id="how_to_order">How To Order</h2>
        </div>
        <div>
          <h2 id="contact_us">Follow Us</h2>
          <p><a href="https://www.instagram.com/littlejoandivy/" target="_blank">
            <img src="/images/if_entoni_instagram_330874.png" height="50" width="50" />
          </a></p>
        </div>
      </div>
    );
  }
};
