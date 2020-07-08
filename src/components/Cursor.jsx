import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

import { DivCursor } from '../styles/containers';
import { DivCursorTitle } from '../styles/texts';

const DivCursorNoBorder = styled(DivCursor)`
  border: none;
  text-align: center;
  padding-bottom: 0rem;
`;

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '100',
  },
];

const Cursor = ({
  titleCursor,
  handleCursor,
  textCursor,
  colorCursor,
  value,
}) => {
  const PrettoSlider = withStyles({
    root: {
      color: colorCursor,
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: 'fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    mark: {
      height: 0,
    },
    markLabel: {
      color: '#f9f8f6',
      marginTop: 3,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  return (
    <DivCursorNoBorder>
      <DivCursorTitle>{titleCursor}</DivCursorTitle>
      <p>{textCursor}</p>
      <PrettoSlider
        min={0}
        max={100}
        defaultValue={value}
        valueLabelDisplay="auto"
        onChangeCommitted={handleCursor}
        marks={marks}
      />
    </DivCursorNoBorder>
  );
};

export default Cursor;

Cursor.propTypes = {
  titleCursor: PropTypes.string.isRequired,
  handleCursor: PropTypes.func.isRequired,
  textCursor: PropTypes.string.isRequired,
  colorCursor: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
