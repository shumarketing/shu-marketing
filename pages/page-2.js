import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello
        </h1>
        <p>Welcome to page 2</p>
        <Link to={prefixLink('/')}>Go back to the homepage</Link>
      </div>
    );
  }
}
