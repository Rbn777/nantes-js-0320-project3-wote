import React, { useState } from 'react';
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

const CountryList = [
  {
    id: 1,
    name: 'Espagne',
  },
  {
    id: 2,
    name: 'France',
  },
  {
    id: 3,
    name: 'Allemagne',
  },
];

const MadeInComparisons = () => {
  const [countries, setCountry] = useState(CountryList);
  const [newValue, setNewValue] = useState();

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const addCountry = () => {
    const newCountry = countries.concat({
      name: newValue,
      id: countries.length + 1,
    });

    setCountry(newCountry);
  };

  const removeCountry = (id) => {
    const newCountries = countries.filter((country) => country.id !== id);

    setCountry(newCountries);
  };

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
          onChangeFunc={handleChange}
          value={newValue}
        />
        <Button functionToClick={addCountry}>Rechercher</Button>
      </FlexDiv>
      {countries.map((country) => (
        <ComparisonCard
          key={country.id}
          name={country.name}
          removeCountry={() => removeCountry(country.id)}
        />
      ))}
      <Button withBorder greyBg>
        Comparaison détaillée
      </Button>
    </MainContainerWithHeader>
  );
};

export default MadeInComparisons;
