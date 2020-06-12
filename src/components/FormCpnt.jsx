import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${(props) => props.theme.salmon};
`;

const TitleStyled = styled.h2`
  align-self: start;
`;

const FormCpnt = ({ formTitle }) => {
  return (
    <FormStyled>
      {formTitle && <TitleStyled>{formTitle}</TitleStyled>}
    </FormStyled>
  );
};

FormCpnt.propTypes = {
  formTitle: PropTypes.string.isRequired,
};

export default FormCpnt;
