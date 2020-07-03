import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const ProductsComparisons = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Détails des produits</SectionTitle>
      </MainHeader>
      <BurgerMenu />
    </MainContainerWithHeader>
  );
};

export default ProductsComparisons;
