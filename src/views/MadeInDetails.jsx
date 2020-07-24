import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import BurgerMenu from '../components/BurgerMenu';
import BackButton from '../components/BackButton';
import ComparisonCard from '../components/ComparisonCard';
import AccordionIndicator from '../components/AccordionIndicator';
import {
  MainContainerWithHeader,
  MainHeader,
  ContainerAccordions,
  WrapperAccordion,
} from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const MadeInDetails = () => {
  const [countryScores, setCountryScores] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const classes = useStyles();
  const { idCountry } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      try {
        const { data } = await Axios.get(
          `https://wote.website/api/scores/countries?country=${idCountry}`,
          {
            headers: { Accept: 'application/json' },
          }
        );
        const scores = {
          name: data[0].country.name,
          score: data[0].value === null ? 'NC' : Math.round(data[0].value),
          themes: data
            .filter((theme) => !theme.criterion && theme.theme)
            .map((theme) => {
              const { title } = theme.theme;
              return {
                theme: title,
                score: theme.value === null ? 'NC' : Math.round(theme.value),
                criterias: data
                  .filter(
                    (criteria) =>
                      criteria.criterion && title === criteria.theme.title
                  )
                  .map((criteria) => {
                    return {
                      title: criteria.criterion.title,
                      score:
                        criteria.value === null
                          ? 'NC'
                          : Math.round(criteria.value),
                    };
                  }),
              };
            }),
        };
        setCountryScores(scores);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getCountry();
  }, []);

  const handleClick = (index) => {
    const elToShowDiv = document.getElementById(`${index}`);
    const elToRotateArrow = document.getElementById(`toRotate${index}`);
    const elToChangeBorder = document.getElementById(`toChangeBorder${index}`);
    elToShowDiv.classList.toggle('open');
    elToRotateArrow.classList.toggle('rotate');
    elToChangeBorder.classList.toggle('noBorderRadius');
  };

  if (isLoading) {
    return (
      <div className={classes.root}>
        <CircularProgress style={{ color: '#f9f8f6' }} />
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
        <SectionTitle>Détails d&apos;une origine de fabrication</SectionTitle>
      </MainHeader>
      <BurgerMenu />
      <ComparisonCard
        name={countryScores.name}
        note={countryScores.score}
        colorBg="green"
        noButton="noDisplay"
        noPointer
      />
      <ContainerAccordions column>
        <WrapperAccordion column>
          {countryScores.themes.map((item, index) => {
            return (
              <AccordionIndicator
                title={item.theme}
                note={item.score}
                idDetailsIndicator={index}
                criteria={item.criterias}
                handleClick={handleClick}
              />
            );
          })}
        </WrapperAccordion>
      </ContainerAccordions>
    </MainContainerWithHeader>
  );
};

export default MadeInDetails;
