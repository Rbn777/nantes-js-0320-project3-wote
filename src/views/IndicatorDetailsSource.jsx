import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const IndicatorDetailsSource = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Rapport de source</SectionTitle>
      </MainHeader>
      <BurgerMenu />
    </MainContainerWithHeader>
  );
};

export default IndicatorDetailsSource;
