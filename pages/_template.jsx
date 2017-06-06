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
            { name: 'description', content: 'Houston based marketing firm, providing strategic marketing and branding expertise' },
            { name: 'keywords', content: 'marketing, strategy, strategic marketing, branding' }
          ]}
          title={config.siteTitle}
        />
        <div
          style={{
            background: `black url('${prefixLink('/')}images/homepage.svg') no-repeat right top`,
            maxHeight: 600,
            marginBottom: rhythm(1)
          }}
        >
          <div
            // Navigation bar
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
          <div
            // text over imagery
            style={{
              background: `url('${prefixLink('/')}images/bullhorn.svg') 650px center / 270px no-repeat`,
              margin: '0 auto',
              maxWidth: 960,
              padding: `${rhythm(1)} ${rhythm(3 / 4)}`
            }}
          >
            <h1 style={{
              color: '#8DC63F',
              fontSize: '3.5rem'
            }}>
              Market This.
            </h1>
            <h2 style={{
              color: '#FFF',
              fontSize: '2.5rem',
              fontWeight: 200
            }}>
              Do That.
            </h2>
            <p style={{
              color: 'white',
              maxWidth: 540
            }}>
              We create tailored solutions for our customers, including international marketing management, strategic and business analysis, communications and event marketing.
            </p>
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
