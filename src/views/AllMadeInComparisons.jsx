import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import BurgerMenu from '../components/BurgerMenu';
import BackButton from '../components/BackButton';
import {
  MainContainerWithHeader,
  MainHeader,
  FlexDiv,
} from '../styles/containers';
import { SectionTitle } from '../styles/texts';
import ComparisonCard from '../components/ComparisonCard';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const AllMadeInComparisons = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const classes = useStyles();

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

  const filteredCountriesByScore = allCountries.sort((a, b) => {
    return b.score - a.score;
  });

  if (isLoading) {
    return (
      <div className={classes.root}>
        <CircularProgress style={{ color: '#6d6b6c' }} />
      </div>
    );
  }

  if (error) {
    return <div>Error !</div>;
  }

  return (
    <MainContainerWithHeader>
      <MainHeader>
        <BackButton />
        <SectionTitle>Comparer toutes les origines de fabrication</SectionTitle>
      </MainHeader>
      <BurgerMenu />
      <FlexDiv column>
        {filteredCountriesByScore.map((country) => (
          <ComparisonCard
            key={country.id}
            idCountry={country.id}
            name={country.name}
            note={Math.round(country.score)}
            frName={country.frName}
            noButton="noDisplay"
            noPointer
          />
        ))}
      </FlexDiv>
    </MainContainerWithHeader>
  );
};

export default AllMadeInComparisons;
