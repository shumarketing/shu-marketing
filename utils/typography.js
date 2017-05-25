import ReactDOM from 'react-dom/server';
import React from 'react';
import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';

const options = {
  baseFontSize: '18px',
  baseLineHeight: 1.50,
  scaleRatio: 2.00,
  plugins: [new CodePlugin()],
  headerFontFamily: ['Raleway', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  headerGray: 10,
  headerWeight: 300,
  bodyFontFamily: ['Open Sans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyGray: 27,
  bodyWeight: 400,
  googleFonts: [
    {
      name: 'Raleway',
      styles: [
        '300'
      ]
    },
    {
      name: 'Open Sans',
      styles: [
        '400',
        '400i',
        '700',
        '700i'
      ]
    }
  ],
  overrideStyles: ({ rhythm, scale }, options) => ({
    [MOBILE_MEDIA_QUERY]: {
      // Make baseFontSize on mobile 16px.
      html: {
        fontSize: `${16 / 16 * 100}%`
      }
    }
  })
};

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
