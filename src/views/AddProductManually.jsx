import React from 'react';

import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const AddProductManually = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Ajouter un produit</SectionTitle>
      </MainHeader>
    </MainContainerWithHeader>
  );
};

export default AddProductManually;
