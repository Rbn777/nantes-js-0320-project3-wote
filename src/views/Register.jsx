import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FormCpnt from '../components/FormCpnt';
import InputCpnt from '../components/InputCpnt';
import Button from '../components/Button';
import { FlexDiv } from '../styles/containers';

const RegisterContainer = styled(FlexDiv)`
  height: 100vh;
  justify-content: end;
  background-color: ${(props) => props.theme.darkGrey};
  padding: 4rem 1rem;
`;

const Register = () => {
  return (
    <RegisterContainer column>
      <FormCpnt>
        <InputCpnt
          labelText="Email"
          inputType="email"
          nameForInput="userLogin"
          inputPlaceHolder="Email de connexion..."
        />
        <InputCpnt
          labelText="Mot de passe"
          inputType="password"
          nameForInput="userPassword"
          inputPlaceHolder="Mot de passe..."
        />
        <InputCpnt
          labelText="Confirmation du mot de passe"
          inputType="password"
          nameForInput="userPasswordCheck"
          inputPlaceHolder="Mot de passe..."
        />
        <InputCpnt
          labelText={
            <p>
              J&apos;accepte les{' '}
              <Link to="/register/terms-of-use">
                conditions d&apos;utilisation
              </Link>
            </p>
          }
          inputType="checkbox"
          nameForInput="termsOfUseCheckbox"
          rowReverse
        />
        <Button buttonType="submit" greenBg>
          Enregistrer
        </Button>
      </FormCpnt>
    </RegisterContainer>
  );
};

export default Register;
