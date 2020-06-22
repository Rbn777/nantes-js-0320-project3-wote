import React from 'react';
import FormCpnt from '../components/FormCpnt';
import InputCpnt from '../components/InputCpnt';
import Button from '../components/Button';
import { MainHeader, MainContainerWithHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const PwdModification = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Modification de mot de passe</SectionTitle>
      </MainHeader>
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
