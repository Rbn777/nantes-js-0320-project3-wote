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
import { TextParagraph } from '../styles/texts';
import {
  HeaderStyled,
  MainContainer,
  ImgLogo,
  FlexDiv,
} from '../styles/containers';
import { addUserToState } from '../actions/userActions';

import Logo from '../medias/logo_wote-13.svg';

const TextIntro = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.white};
`;

const Login = (props) => {
  const [datas, setDatas] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post('https://wote.website/login_api', {
        ...datas,
      }).then((response) => {
        props.addUserToState(
          response.data.id,
          datas.email,
          response.data.activeProfile
        );
      });
      setTimeout(() => {
        props.history.push('/made-in-comparisons');
      }, 1500);
      toast.success(`${datas.email} est Loggé`, {});
    } catch (err) {
      toast.error(`${err.message}`, {});
    }
  };

  const handleChange = (e) => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <MainContainer>
        <HeaderStyled>
          <FlexDiv column center align>
            <ImgLogo alt="logo-wote" src={Logo} />
            <TextIntro>
              Votez pour le monde que vous voulez...
              <br />
              ...quand vous dépensez de l&apos;argent.
            </TextIntro>
          </FlexDiv>
        </HeaderStyled>
        <FormCpnt submitFuncToPass={handleSubmit}>
          <TextParagraph grey>Connectez-vous :</TextParagraph>
          <InputCpnt
            labelText="Email"
            inputType="email"
            nameForInput="email"
            inputPlaceHolder="Email de connexion..."
            value={datas.email}
            onChangeFunc={handleChange}
          />
          <InputCpnt
            labelText="Mot de passe"
            inputType="password"
            nameForInput="password"
            inputPlaceHolder="Mot de passe..."
            value={datas.password}
            onChangeFunc={handleChange}
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
