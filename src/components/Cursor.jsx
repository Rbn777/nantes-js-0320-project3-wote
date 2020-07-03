import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import { DivCursor } from '../styles/containers';
import { DivCursorTitle } from '../styles/texts';

const Cursor = ({ titleCursor, handleCursor, textCursor, colorCursor }) => {
  const PrettoSlider = withStyles({
    root: {
      color: colorCursor,
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
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
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  return (
    <DivCursor>
      <DivCursorTitle>{titleCursor}</DivCursorTitle>
      <p>{textCursor}</p>
      <PrettoSlider
        defaultValue={0}
        min={-100}
        max={100}
        onChange={handleCursor}
      />
      {/* <input type="range" onChange={handleCursor} /> */}
    </DivCursor>
  );
};

export default Cursor;

Cursor.propTypes = {
  titleCursor: PropTypes.string.isRequired,
  handleCursor: PropTypes.func.isRequired,
  textCursor: PropTypes.string.isRequired,
  colorCursor: PropTypes.string.isRequired,
};
