import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  MainContainerWithHeader,
  MainHeader,
  FlexDiv,
  FlexDivDetailedComp,
  NoteDiv,
  DetailedDivSpec,
} from '../styles/containers';
import BurgerMenu from '../components/BurgerMenu';
import BackButton from '../components/BackButton';
import { SectionTitle } from '../styles/texts';
import DetailedComparisonItem from '../components/DetailedComparisonItem';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const DetailedComparison = (props) => {
  const [themes, setThemes] = useState([]);
  const [chosenCountriesDatas, setChosenCountriesDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const { chosenCountries } = props;

  const classes = useStyles();

  const nbCountries = chosenCountries.length;
  const width = `calc(100%/${nbCountries})`;

  const handleClick = (index) => {
    const elToShowDiv = document.getElementById(`${index}`);
    const elToRotateArrow = document.getElementById(`toRotate${index}`);
    elToShowDiv.classList.toggle('open');
    elToRotateArrow.classList.toggle('rotate');
  };

  useEffect(() => {
    const getThemes = async () => {
      try {
        const { data } = await Axios.get(`https://wote.website/api/themes`, {
          headers: { Accept: 'application/json' },
        });
        setThemes(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getThemes();

    const getChosenCountriesDatas = async () => {
      const promisedDatas = chosenCountries.map((id) => {
        return Axios.get(
          `https://wote.website/api/scores/countries?country=${id.idCountry}`,
          {
            headers: { Accept: 'application/json' },
          }
        );
      });
      try {
        setIsLoading(true);
        const result = await Promise.all(promisedDatas);
        const datas = result.map((res) => res.data);
        setChosenCountriesDatas(datas);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getChosenCountriesDatas();
  }, [chosenCountries]);

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
        <SectionTitle>
          Comparaison détaillée des origines de fabrication
        </SectionTitle>
      </MainHeader>
      <BurgerMenu />
      <FlexDiv column>
        <FlexDiv mgBottom column>
          <FlexDivDetailedComp between>
            {chosenCountries.map((note) => {
              return <NoteDiv style={{ width }}>{note.scoreCountry}</NoteDiv>;
            })}
          </FlexDivDetailedComp>
          <FlexDivDetailedComp between>
            {chosenCountries.map((name) => {
              return (
                <DetailedDivSpec style={{ width }} borderRight>
                  {name.nameCountry}
                </DetailedDivSpec>
              );
            })}
          </FlexDivDetailedComp>
        </FlexDiv>
        {themes.map((theme, index) => {
          return (
            <DetailedComparisonItem
              id={index}
              nbCountries={nbCountries}
              handleClick={handleClick}
              titleTheme={theme.title}
              chosenCountriesDatas={chosenCountriesDatas}
            />
          );
        })}
      </FlexDiv>
    </MainContainerWithHeader>
  );
};

const mapStateToProps = (state) => {
  return {
    chosenCountries: state.chosenCountries,
  };
};

export default connect(mapStateToProps)(DetailedComparison);

DetailedComparison.propTypes = {
  chosenCountries: PropTypes.arrayOf.isRequired,
};
