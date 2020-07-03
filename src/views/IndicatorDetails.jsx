import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const IndicatorDetails = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Données d&apos;un indicateur</SectionTitle>
      </MainHeader>
      <BurgerMenu />
    </MainContainerWithHeader>
  );
};

export default IndicatorDetails;
