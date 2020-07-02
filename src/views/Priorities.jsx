import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const Priorities = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Mes priorités</SectionTitle>
      </MainHeader>
      <BurgerMenu />
    </MainContainerWithHeader>
  );
};

export default Priorities;
