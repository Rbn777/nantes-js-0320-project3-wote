import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DivInput = styled.div`
  display: flex;
  row-gap: 3px;
  flex-direction: ${(props) => (props.rowReverse ? 'row-reverse' : 'column')};
  justify-content: ${(props) => props.rowReverse && 'space-around'};
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
`;

const InputCpnt = ({
  labelText,
  inputType,
  nameForInput,
  inputPlaceHolder,
  onChangeFunc,
  rowReverse,
}) => {
  return (
    <DivInput rowReverse={rowReverse}>
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
  rowReverse: PropTypes.string.isRequired,
};

export default InputCpnt;
