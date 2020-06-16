import { css } from 'styled-components';

// ----------------------
// Media queries
// ----------------------

const sizes = {
  xLarge: 1200,
  large: 1024,
  normal: 974,
  small: 768,
  xSmall: 576,
  xxSmall: 350,
};

const mediaMax = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${(sizes[label] - 1) / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const mediaMin = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default {
  // Colors.
  grey: '#707070',
  lightGrey: '#F2F0ED',
  darkGrey: '#2c2c2c',
  white: '#f9f8f6',
  lightGreen: '#6bed5c',
  salmon: '#FF9C71',
  lightBlue: '#A0C1B8',
  // Fonts.
  fontWeightNormal: 500,
  fontWeightBold: 900,
  // Media queries.
  mediaMax,
  mediaMin,
};
