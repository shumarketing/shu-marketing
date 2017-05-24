import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';
import { rhythm } from '../utils/typography';

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any
    };
  },
  render() {
    return (
      <div>
        <Helmet
          meta = {[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
          title={config.siteTitle}
        />
        <div
          style={{
            background: '#433e35',
            marginBottom: rhythm(1)
          }}
        >
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                style={{
                  background: `url('${prefixLink('/')}images/shu.svg') no-repeat`,
                  color: 'white',
                  display: 'block',
                  height: 26,
                  textDecoration: 'none',
                  width: 240
                }}
                to={prefixLink('/')}
              >
                <span style={{ display: 'none' }}>shu marketing associates</span>
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
});
