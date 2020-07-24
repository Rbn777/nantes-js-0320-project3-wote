import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import BackButton from '../components/BackButton';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const IndicatorDetailsSource = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <BackButton />
        <SectionTitle>Rapport de source</SectionTitle>
      </MainHeader>
      <BurgerMenu />
    </MainContainerWithHeader>
  );
};

export default IndicatorDetailsSource;
