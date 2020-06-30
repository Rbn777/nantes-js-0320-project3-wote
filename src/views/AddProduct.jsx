import React from 'react';

import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const AddProduct = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Scanner un produit</SectionTitle>
      </MainHeader>
    </MainContainerWithHeader>
  );
};

export default AddProduct;
