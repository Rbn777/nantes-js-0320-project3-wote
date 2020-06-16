import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 20px;
  background-color: ${(props) => props.theme.lightGrey};
`;

const TitleStyled = styled.h2`
  align-self: start;
`;

const FormCpnt = ({ formTitle, children, formMethod, submitFuncToPass }) => {
  return (
    <FormStyled method={formMethod} onSubmit={submitFuncToPass}>
      {formTitle && <TitleStyled>{formTitle}</TitleStyled>}
      {children}
    </FormStyled>
  );
};

FormCpnt.propTypes = {
  formTitle: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  formMethod: PropTypes.string.isRequired,
  submitFuncToPass: PropTypes.func.isRequired,
};

export default FormCpnt;
