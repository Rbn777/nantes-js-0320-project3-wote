import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import BackButton from '../components/BackButton';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const AddProduct = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <BackButton />
        <SectionTitle>Scanner un produit</SectionTitle>
      </MainHeader>
      <BurgerMenu />
    </MainContainerWithHeader>
  );
};

export default AddProduct;
