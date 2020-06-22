import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
  font-family: 'MuseoNormal';
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.greenBg && props.theme.mainGreen};
  background-color: ${(props) => props.salmonBg && props.theme.salmon};
  background-color: ${(props) => props.blueBg && props.theme.mainBlue};
  &:hover {
    color: white;
  }
`;

const Button = ({ children, buttonType, greenBg, salmonBg, blueBg }) => {
  return (
    <ButtonStyled
      type={buttonType}
      greenBg={greenBg}
      salmonBg={salmonBg}
      blueBg={blueBg}
    >
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  greenBg: PropTypes.string.isRequired,
  salmonBg: PropTypes.string.isRequired,
  blueBg: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
};

export default Button;
