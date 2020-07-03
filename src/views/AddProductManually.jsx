import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const AddProductManually = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Ajouter un produit</SectionTitle>
      </MainHeader>
      <BurgerMenu />
    </MainContainerWithHeader>
  );
};

export default AddProductManually;
