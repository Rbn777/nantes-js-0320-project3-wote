import React from 'react';
import FormCpnt from '../components/FormCpnt';
import InputCpnt from '../components/InputCpnt';
import Button from '../components/Button';
import { MainContainer, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const PwdModification = () => {
  return (
    <>
      <MainHeader>
        <SectionTitle>Modification de mot de passe</SectionTitle>
      </MainHeader>
      <MainContainer>
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
      </MainContainer>
    </>
  );
};

export default PwdModification;
