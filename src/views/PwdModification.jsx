import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import FormCpnt from '../components/FormCpnt';
import InputCpnt from '../components/InputCpnt';
import Button from '../components/Button';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const PwdModification = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Modifier le mot de passe</SectionTitle>
      </MainHeader>
      <BurgerMenu />
      <FormCpnt>
        <InputCpnt
          labelText="Ancien mot de passe"
          inputType="password"
          nameForInput="userPassword"
          inputPlaceHolder="..."
        />
        <InputCpnt
          labelText="Nouveau mot de passe"
          inputType="password"
          nameForInput="userPassword"
          inputPlaceHolder="..."
        />
        <InputCpnt
          labelText="Confirmez nouveau mot de passe"
          inputType="password"
          nameForInput="userPassword"
          inputPlaceHolder="..."
        />
        <Button type="submit" greenBg withMarginTop hoverWhite>
          Enregistrer
        </Button>
      </FormCpnt>
    </MainContainerWithHeader>
  );
};

export default PwdModification;
