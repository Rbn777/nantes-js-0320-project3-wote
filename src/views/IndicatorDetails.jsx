import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import BackButton from '../components/BackButton';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const IndicatorDetails = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <BackButton />
        <SectionTitle>Données d&apos;un indicateur</SectionTitle>
      </MainHeader>
      <BurgerMenu />
    </MainContainerWithHeader>
  );
};

export default IndicatorDetails;
