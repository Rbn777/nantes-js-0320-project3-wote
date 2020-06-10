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

const fontFamilyNormal = 'Arial';
const mainTextColor = 'blue';

export default {
  // Colors.
  featureColor: '#c8a195',
  featureColorLighter: '#e2bbaf',
  secondaryFeatureColor: '#aec0bd',
  featureColorDarker: '#D9B7A8',
  darkGrey: 'rgba(45,44,44,0.5)',
  white: '#f9f8f6',
  lightGrey: '#F2F0ED',
  lightBlack: '#2D2D2C',
  reviewTextColor: '#A6A6A6',
  mainTextColor: 'blue',
  // Fonts.
  fontWeightNormal: 500,
  fontWeightLight: 300,
  fontWeightBold: 600,
  fontFamilyNormal,
  mainFont: css`
    font-family: ${fontFamilyNormal};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: ${(props) => (props.bold ? '600' : '400')};
    font-variant: none;
    font-feature-settings: normal;
    color: ${mainTextColor};
  `,
  // Media queries.
  mediaMax,
  mediaMin,
};
