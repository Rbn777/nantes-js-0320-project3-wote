import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FormCpnt from '../components/FormCpnt';
import InputCpnt from '../components/InputCpnt';
import Button from '../components/Button';
import { H1, TextParagraph } from '../styles/texts';
import { HeaderStyled } from '../styles/containers';

const TextIntro = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.grey};
`;

const Login = () => {
  return (
    <>
      <HeaderStyled>
        <H1>WOTE</H1>
        <TextIntro grey>
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
        <Button buttonType="submit">Entrer</Button>
      </FormCpnt>
      <Link to="/register">
        <TextParagraph grey>Créer un compte utilisateur</TextParagraph>
      </Link>
    </>
  );
};

export default Login;
