import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import BackButton from '../components/BackButton';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const ProductsComparisons = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <BackButton />
        <SectionTitle>Détails des produits</SectionTitle>
      </MainHeader>
      <BurgerMenu />
    </MainContainerWithHeader>
  );
};

export default ProductsComparisons;
