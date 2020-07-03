import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

import InputCpnt from '../components/InputCpnt';
import Button from '../components/Button';
import BurgerMenu from '../components/BurgerMenu';
import ComparisonCard from '../components/ComparisonCard';
import { SectionTitle } from '../styles/texts';
import {
  MainContainerWithHeader,
  MainHeader,
  FlexDiv,
} from '../styles/containers';

const MadeInComparisons = () => {
  const [countries, setCountry] = useState([1, 2, 3]);

  const addCountry = () => {
    const newCountry = countries[countries.length - 1] + 1;
    setCountry(countries.concat([newCountry]));
  };

  const removeCountry = (country) => {
    const index = countries.indexOf(country);

    if (index > -1) {
      countries.splice(index, 1);
      setCountry(countries);
    }
  };

  useEffect(() => {
    removeCountry(countries);
  }, [countries]);

  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Comparer les origines de fabrication</SectionTitle>
      </MainHeader>
      <BurgerMenu />
      <FlexDiv>
        <InputCpnt
          inputType="text"
          nameForInput="userLogin"
          inputPlaceHolder="Rechercher un pays"
        />
        <Button greenBg functionToClick={addCountry}>
          Recherche
        </Button>
      </FlexDiv>
      {countries.map((country) => (
        <ComparisonCard
          key={country}
          removeCountry={() => removeCountry(country)}
        />
      ))}
      <Button withBorder greyBg>
        Rechercher
      </Button>
    </MainContainerWithHeader>
  );
};

export default MadeInComparisons;
