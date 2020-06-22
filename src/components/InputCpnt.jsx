import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DivInput = styled.div`
  display: flex;
  row-gap: 3px;
  flex-direction: column;
  width: 100%;
`;

const InputStyled = styled.input`
  background-color: ${(props) => props.theme.white};
  padding: 5px;
  border: none;
  border-radius: 8px;
`;

const LabelStyled = styled.label`
  align-self: start;
  color: ${(props) => props.theme.white};
`;

const InputCpnt = ({
  labelText,
  inputType,
  nameForInput,
  inputPlaceHolder,
  onChangeFunc,
}) => {
  return (
    <DivInput>
      <LabelStyled htmlFor={nameForInput}>{labelText}</LabelStyled>
      <InputStyled
        type={inputType}
        id={nameForInput}
        name={nameForInput}
        placeholder={inputPlaceHolder}
        onChange={onChangeFunc}
      />
    </DivInput>
  );
};

InputCpnt.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  nameForInput: PropTypes.string.isRequired,
  inputPlaceHolder: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default InputCpnt;
