import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import FormCpnt from '../components/FormCpnt';
import InputCpnt from '../components/InputCpnt';
import Button from '../components/Button';
import MainheaderComp from '../components/MainHeader';
import { MainContainerWithHeader } from '../styles/containers';

const PwdModification = () => {
  return (
    <MainContainerWithHeader>
      <MainheaderComp title="Modification du mot de passe">
        <BurgerMenu />
      </MainheaderComp>
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
        <Button type="submit" greenBg>
          Enregistrer
        </Button>
      </FormCpnt>
    </MainContainerWithHeader>
  );
};

export default PwdModification;
