import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FormCpnt from '../components/FormCpnt';
import InputCpnt from '../components/InputCpnt';
import Button from '../components/Button';
import { H1, TextParagraph } from '../styles/texts';
import { HeaderStyled, MainContainer } from '../styles/containers';

const TextIntro = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.white};
`;

const Login = () => {
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
        <FormCpnt>
          <TextParagraph grey>Connectez-vous :</TextParagraph>
          <InputCpnt
            labelText="email"
            inputType="email"
            nameForInput="userLogin"
            inputPlaceHolder="Email de connexion..."
          />
          <InputCpnt
            labelText="mot de passe"
            inputType="password"
            nameForInput="userPassword"
            inputPlaceHolder="Mot de passe..."
          />
          <Button buttonType="submit" greenBg>
            Entrer
          </Button>
        </FormCpnt>
        <Link to="/register">
          <TextParagraph grey>Créer un compte utilisateur</TextParagraph>
        </Link>
      </MainContainer>
    </>
  );
};

export default Login;
