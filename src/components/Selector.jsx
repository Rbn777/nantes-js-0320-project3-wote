/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { DivCursor } from '../styles/containers';
import { DivCursorTitle } from '../styles/texts';

const options = [
  { value: -100, label: 'Pas du tout' },
  { value: -50, label: 'Pas vraiment' },
  { value: 0, label: 'Sans opinion' },
  { value: 50, label: 'Un peu' },
  { value: 100, label: 'Beaucoup' },
];

const Selector = ({ titleSelect, textSelect, colorSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: '10px',
      marginTop: '5%',
      border: `0.2px solid ${colorSelect}`,
      backgroundColor: '#f9f8f6',
      color: '#6d6b6c',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: '#f9f8f6',
      color: state.isSelected ? `${colorSelect}` : '#6d6b6c',
    }),
    menu: (provided) => ({
      ...provided,
      width: '100%',
      padding: 0,
    }),
  };

  const handleChange = (option) => {
    setSelectedOption({ option });
  };

  return (
    <DivCursor>
      <DivCursorTitle>{titleSelect}</DivCursorTitle>
      <p>{textSelect}</p>
      <Select
        styles={customStyles}
        onChange={handleChange}
        options={options}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: `${colorSelect}`,
          },
        })}
      />
    </DivCursor>
  );
};

Selector.propTypes = {
  titleSelect: PropTypes.string.isRequired,
  textSelect: PropTypes.string.isRequired,
  colorSelect: PropTypes.string.isRequired,
};

export default Selector;
