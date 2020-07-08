import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountry] = useState([]);
  const [value, setValue] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const addCountry = () => {
    const newCountry = countries.concat({
      id: value.id,
      name: value.name,
      score: Math.round(value.score),
    });

    setCountry(newCountry);
  };

  const removeCountry = (id) => {
    const newCountries = countries.filter((country) => country.id !== id);

    setCountry(newCountries);
  };

  const removeAllCountries = () => {
    const emptyCountries = [];

    setCountry(emptyCountries);
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        const { data } = await Axios.get(`https://wote.website/api/countries`, {
          headers: { Accept: 'application/json' },
        });
        setAllCountries(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getCountries();
  }, []);

  if (isLoading) {
    return <div>Super loader...</div>;
  }

  if (error) {
    return <div>Error !</div>;
  }

  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Comparer les origines de fabrication</SectionTitle>
      </MainHeader>
      <BurgerMenu />
      <FlexDiv>
        <Autocomplete
          value={value}
          onChange={(event, newCountry) => {
            setValue(newCountry);
          }}
          id="combo-box-demo"
          options={allCountries}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <TextField {...params} label="Search" variant="outlined" />
          )}
        />
        <Button withBorder minSize functionToClick={addCountry}>
          +
        </Button>
      </FlexDiv>
      {countries.map((country) => (
        <ComparisonCard
          key={country.id}
          name={country.name}
          note={country.score}
          removeCountry={() => removeCountry(country.id)}
        />
      ))}
      <FlexDiv mgTop between>
        <Button withBorder minSize functionToClick={removeAllCountries}>
          Vider la liste
        </Button>
        <Link to="/detailed-comparison">
          <Button withBorder minSize>
            Comparaison détaillée
          </Button>
        </Link>
      </FlexDiv>
    </MainContainerWithHeader>
  );
};

export default MadeInComparisons;
