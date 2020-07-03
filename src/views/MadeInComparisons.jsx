import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const MadeInComparisons = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Comparer les origines de fabrication</SectionTitle>
      </MainHeader>
      <BurgerMenu />
    </MainContainerWithHeader>
  );
};

export default MadeInComparisons;
