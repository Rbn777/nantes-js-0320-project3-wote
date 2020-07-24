import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';

import FormCpnt from '../components/FormCpnt';
import InputCpnt from '../components/InputCpnt';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import { MainHeader, MainContainerWithHeader } from '../styles/containers';
import { SectionTitle, TextParagraph } from '../styles/texts';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [termsOfUseCheck, setTermsOfUseCheck] = useState(false);
  const [isPasswordOk, setIsPasswordOk] = useState(false);

  const checkPasswordStandard = (pass) =>
    pass.length >= 8 ? setIsPasswordOk(true) : setIsPasswordOk(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPassword = (e) => {
    setPassword(e.target.value);
    checkPasswordStandard(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setPasswordCheck(e.target.value);
  };

  const handleTermsOfUseCheck = () => {
    setTermsOfUseCheck(!termsOfUseCheck);
  };

  const handleSubmit = async (e) => {
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
    } else if (!isPasswordOk) {
      toast.error(
        'Le mot de passe doit comporter 8 caractères au minimum...',
        {}
      );
    } else if (password !== passwordCheck) {
      toast.error('Les mots de passe doivent correspondre', {});
    } else if (!termsOfUseCheck) {
      toast.error("Les conditions d'utilisation doivent être approuvées", {});
    } else {
      try {
        await axios.post(`http://localhost:4545/api/users`, {
          email,
          password,
        });
        setTimeout(() => {
          props.history.push('/pwd-modification');
        }, 2500);
        toast.success(`L'utilisateur a été ajouté avec succès !`, {});
      } catch (error) {
        toast.error(
          `Erreur lors de l'ajout d'un utilisateur : ${error.message}`,
          {}
        );
      }
    }
  };

  return (
    <MainContainerWithHeader>
      <MainHeader>
        <BackButton />
        <SectionTitle>Enregistrement</SectionTitle>
      </MainHeader>
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
            <TextParagraph underline>
              <Link to="/register/terms-of-use">
                J&apos;accepte les conditions d&apos;utilisation
              </Link>
            </TextParagraph>
          }
          inputType="checkbox"
          nameForInput="termsOfUseCheckbox"
          value={termsOfUseCheck}
          onChangeFunc={handleTermsOfUseCheck}
          inputRequired
          rowReverse
        />
        <Button buttonType="submit" greenBg hoverWhite>
          Enregistrer
        </Button>
      </FormCpnt>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </MainContainerWithHeader>
  );
};

Register.propTypes = {
  history: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
};

export default Register;
