import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DivInput = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.rowReverse ? 'row-reverse' : 'column')};
  justify-content: ${(props) => props.rowReverse && 'space-around'};
  width: 100%;
  margin: 20px 0;
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
  value,
  onChangeFunc,
  rowReverse,
  inputRequired,
}) => {
  return (
    <DivInput rowReverse={rowReverse}>
      <LabelStyled htmlFor={nameForInput}>{labelText}</LabelStyled>
      <InputStyled
        type={inputType}
        id={nameForInput}
        name={nameForInput}
        value={value}
        placeholder={inputPlaceHolder}
        onChange={onChangeFunc}
        required={inputRequired}
      />
    </DivInput>
  );
};

InputCpnt.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  nameForInput: PropTypes.string.isRequired,
  inputPlaceHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
  rowReverse: PropTypes.string.isRequired,
  inputRequired: PropTypes.bool.isRequired,
};

export default InputCpnt;
