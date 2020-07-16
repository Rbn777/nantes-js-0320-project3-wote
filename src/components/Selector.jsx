import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { DivCursor } from '../styles/containers';
import { DivCursorTitle } from '../styles/texts';

const options = [
  { value: -100, label: 'Tout à fait le contraire' },
  { value: -50, label: 'Le contraire' },
  { value: -25, label: 'Un peu le contraire ' },
  { value: 0, label: 'Indifférent' },
  { value: 25, label: 'Un peu d’accord' },
  { value: 50, label: 'D’accord' },
  { value: 100, label: 'Tout à fait d’accord' },
];

const Selector = ({
  titleSelect,
  textSelect,
  colorSelect,
  funcToPass,
  valueToPass,
}) => {
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

  return (
    <DivCursor>
      <DivCursorTitle>{titleSelect}</DivCursorTitle>
      <p>{textSelect}</p>
      <Select
        styles={customStyles}
        onChange={funcToPass}
        options={options}
        defaultValue={options.filter((elt) => elt.value === valueToPass)[0]}
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
  funcToPass: PropTypes.func.isRequired,
  valueToPass: PropTypes.func.isRequired,
};

export default Selector;
