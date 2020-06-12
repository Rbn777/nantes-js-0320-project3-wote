import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.greenBg && props.theme.lightGreen};
  background-color: ${(props) => props.salmonBg && props.theme.salmon};
  background-color: ${(props) => props.lightBlue && props.theme.lightBlue};
  &:hover {
    color: white;
  }
`;

const Button = ({ children, greenBg, salmonBg, lightBlue }) => {
  return (
    <ButtonStyled greenBg={greenBg} salmonBg={salmonBg} lightBlue={lightBlue}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  greenBg: PropTypes.string.isRequired,
  salmonBg: PropTypes.string.isRequired,
  lightBlue: PropTypes.string.isRequired,
};

export default Button;
