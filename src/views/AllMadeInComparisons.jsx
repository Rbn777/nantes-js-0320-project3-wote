import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import BackButton from '../components/BackButton';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const AllMadeInComparisons = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <BackButton />
        <SectionTitle>Comparer toutes les origines de fabrication</SectionTitle>
      </MainHeader>
      <BurgerMenu />
    </MainContainerWithHeader>
  );
};

export default AllMadeInComparisons;
