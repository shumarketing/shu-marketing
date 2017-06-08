import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Contact Us
        </h1>
        <p>Let us know how we can help you.</p>
        <ul>
          <li>713.863.0980</li>
          <li>hi@shumarketing.com</li>
        </ul>
        <Link to={prefixLink('/')}>Go back to the homepage</Link>
      </div>
    );
  }
}
