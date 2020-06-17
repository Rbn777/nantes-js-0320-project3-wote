import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { ToastContainer, toast } from 'react-toastify';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [termsOfUseCheck, setTermsOfUseCheck] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setPasswordCheck(e.target.value);
  };

  const handleTermsOfUseCheck = () => {
    setTermsOfUseCheck(!termsOfUseCheck);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !passwordCheck || !termsOfUseCheck) {
      toast.warn(`Tous les champs doivent être renseignés...`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (password !== passwordCheck) {
      toast.error('Les mots de passe doivent correspondre', {});
    } else if (!termsOfUseCheck) {
      toast.error("Les conditions d'utilisation doivent être approuvées", {});
    } else {
      axios
        .post(`http://localhost:4545/api/users`, { email, password })
        .then((response) => response.data)
        .then((res) => {
          toast.success(`L'utilisateur a été ajouté avec l'ID ${res.id} !`, {});
        })
        .catch((error) => {
          toast.success(
            `Erreur lors de l'ajout d'un utilisateur : ${error.message}`,
            {}
          );
        });
    }
  };

  return (
    <RegisterContainer column>
      <FormCpnt submitFuncToPass={handleSubmit}>
        <InputCpnt
          labelText="Email"
          inputType="email"
          nameForInput="userLogin"
          inputPlaceHolder="Email de connexion..."
          value={email}
          onChangeFunc={handleEmail}
          inputRequired
        />
        <InputCpnt
          labelText="Mot de passe"
          inputType="password"
          nameForInput="userPassword"
          inputPlaceHolder="Mot de passe..."
          value={password}
          onChangeFunc={handleNewPassword}
          inputRequired
        />
        <InputCpnt
          labelText="Confirmation du mot de passe"
          inputType="password"
          nameForInput="userPasswordCheck"
          inputPlaceHolder="Mot de passe..."
          value={passwordCheck}
          onChangeFunc={handleConfirmPassword}
          inputRequired
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
          value={termsOfUseCheck}
          onChangeFunc={handleTermsOfUseCheck}
          inputRequired
          rowReverse
        />
        <Button buttonType="submit" greenBg>
          Enregistrer
        </Button>
      </FormCpnt>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </RegisterContainer>
  );
};

export default Register;
