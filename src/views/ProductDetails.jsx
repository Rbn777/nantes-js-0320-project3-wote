import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const ProductDetails = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Détails d&apos;un produit</SectionTitle>
      </MainHeader>
      <BurgerMenu />
    </MainContainerWithHeader>
  );
};

export default ProductDetails;
