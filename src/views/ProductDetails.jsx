import React from 'react';

import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const ProductDetails = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Détails d&apos;un produit</SectionTitle>
      </MainHeader>
    </MainContainerWithHeader>
  );
};

export default ProductDetails;
