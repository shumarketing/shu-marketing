import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from '../utils/typography';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div style={{
          fontSize: '1.33rem',
          lineHeight: `${rhythm(4 / 3)}`,
          padding: `0 0 ${rhythm(3 / 4)}`
        }}>
          <b>shu marketing associates</b> brings together years of experience with business intelligence, strategic planning, product marketing, market research, knowledge management, marketing communications, internal communications and sales channel support.
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <div style={{
            background: 'white url(https://placeimg.com/294/180/tech) no-repeat center top',
            boxShadow: `0 ${rhythm(1 / 3)} ${rhythm(2 / 3)} 0 rgba(224, 224, 224, 50)`,
            padding: `${rhythm(22 / 3)} ${rhythm(2 / 3)} ${rhythm(2 / 3)}`,
            width: 294
          }}>
            <h2 style={{
              fontSize: '1.125rem',
              lineHeight: `${rhythm(3 / 4)}`
            }}>international marketing management</h2>
            <p>
              {/*text*/}
            </p>
          </div>
          <div style={{
            background: 'white url(https://placeimg.com/294/180/tech/sepia) no-repeat center top',
            boxShadow: `0 ${rhythm(1 / 3)} ${rhythm(2 / 3)} 0 rgba(224, 224, 224, 50)`,
            padding: `${rhythm(22 / 3)} ${rhythm(2 / 3)} ${rhythm(2 / 3)}`,
            width: 294
          }}>
            <h2 style={{
              fontSize: '1.125rem',
              lineHeight: `${rhythm(3 / 4)}`
            }}>strategic and business analysis</h2>
            <p>
              {/*text*/}
            </p>
          </div>
          <div style={{
            background: 'white url(https://placeimg.com/294/180/people) no-repeat center top',
            boxShadow: `0 ${rhythm(1 / 3)} ${rhythm(2 / 3)} 0 rgba(224, 224, 224, 50)`,
            padding: `${rhythm(22 / 3)} ${rhythm(2 / 3)} ${rhythm(2 / 3)}`,
            width: 294
          }}>
            <h2 style={{
              fontSize: '1.125rem',
              lineHeight: `${rhythm(3 / 4)}`
            }}>communications and event marketing</h2>
            <p>
              {/*text*/}
            </p>
          </div>
        </div>
        {/* <Link to={prefixLink('/page-2/')}>Go to page 2</Link> */}
      </div>
    );
  }
}
