import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';

import FormCpnt from '../components/FormCpnt';
import InputCpnt from '../components/InputCpnt';
import Button from '../components/Button';
import { H1, TextParagraph } from '../styles/texts';
import { HeaderStyled, MainContainer } from '../styles/containers';
import { addUserToState } from '../actions/userActions';

const TextIntro = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.white};
`;

const Login = (props) => {
  const [emailUser, setEmailUser] = useState();
  const [passwordUser, setPasswordUser] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(
        'https://wote.website/login_api',
        {
          email: emailUser,
          password: passwordUser,
        },
        {
          headers: {
            'Content-Type': 'application.json',
          },
        }
      ).then((response) => {
        props.addUserToState(
          response.data.id,
          emailUser,
          response.data.activeProfile
        );
      });
      setTimeout(() => {
        props.history.push('/made-in-comparisons');
      }, 1500);
      toast.success(`${emailUser} est Loggé`, {});
    } catch (err) {
      toast.error(`${err.message}`, {});
    }
  };

  const handleEmail = (e) => {
    setEmailUser(e.target.value);
  };
  const handlePassword = (e) => {
    setPasswordUser(e.target.value);
  };

  return (
    <>
      <MainContainer>
        <HeaderStyled>
          <H1>WOTE</H1>
          <TextIntro>
            Votez pour le monde que vous voulez...
            <br />
            ...quand vous dépensez de l&apos;argent.
          </TextIntro>
        </HeaderStyled>
        <FormCpnt submitFuncToPass={handleSubmit}>
          <TextParagraph grey>Connectez-vous :</TextParagraph>
          <InputCpnt
            labelText="Email"
            inputType="email"
            nameForInput="userLogin"
            inputPlaceHolder="Email de connexion..."
            value={emailUser}
            onChangeFunc={handleEmail}
          />
          <InputCpnt
            labelText="Mot de passe"
            inputType="password"
            nameForInput="userPassword"
            inputPlaceHolder="Mot de passe..."
            value={passwordUser}
            onChangeFunc={handlePassword}
          />
          <Button buttonType="submit" greenBg withMarginTop hoverWhite>
            Entrer
          </Button>
        </FormCpnt>
        <Link to="/register">
          <TextParagraph center underline>
            Créer un compte utilisateur
          </TextParagraph>
        </Link>
        <ToastContainer
          position="bottom-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </MainContainer>
    </>
  );
};

Login.propTypes = {
  history: PropTypes.string.isRequired,
  addUserToState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserToState: (idUser, emailUser, activeProfile) =>
      dispatch(addUserToState(idUser, emailUser, activeProfile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
