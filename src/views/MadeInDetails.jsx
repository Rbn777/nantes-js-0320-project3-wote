import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const MadeInDetails = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Détails d&apos;une origine de fabrication</SectionTitle>
      </MainHeader>
      <BurgerMenu />
    </MainContainerWithHeader>
  );
};

export default MadeInDetails;
