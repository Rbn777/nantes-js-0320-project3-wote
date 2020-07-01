import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Cursor = ({ titleCursor, handleCursor, textCursor }) => {
  return (
    <div>
      <Typography gutterBottom>{titleCursor}</Typography>
      <p>{textCursor}</p>
      <input type="range" onChange={handleCursor} />
    </div>
  );
};

export default Cursor;

Cursor.propTypes = {
  titleCursor: PropTypes.string.isRequired,
  handleCursor: PropTypes.func.isRequired,
  textCursor: PropTypes.string.isRequired,
};
