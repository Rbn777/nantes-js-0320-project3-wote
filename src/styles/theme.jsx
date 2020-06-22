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
  lightGrey: '#b0afaf',
  darkGrey: '#6d6b6c',
  white: '#f9f8f6',
  mainGreen: '#92be1f',
  salmon: '#f4AA79',
  mainBlue: '#94b5be',
  // Fonts.
  fontWeightNormal: 500,
  fontWeightBold: 900,
  // Media queries.
  mediaMax,
  mediaMin,
};
