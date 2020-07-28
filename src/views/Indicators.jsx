import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  MainContainerWithHeader,
  MainHeader,
  FlexDiv,
} from '../styles/containers';
import { SectionTitle } from '../styles/texts';
import BurgerMenu from '../components/BurgerMenu';
import IndicatorsCpnt from '../components/IndicatorsCpnt';
import BackButton from '../components/BackButton';

const Tab = styled.div`
  padding: 0.4rem;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  background-color: ${(props) => props.theme.lightGrey};

  &.green {
    background-color: ${(props) => props.theme.mainGreen};
  }
  &.salmon {
    background-color: ${(props) => props.theme.salmon};
  }
  &.blue {
    background-color: ${(props) => props.theme.mainBlue};
  }
`;

const WrapperTab = styled(FlexDiv)`
  justify-content: space-between;

  ${(props) => props.theme.mediaMin.normal`
    justify-content: space-evenly;
  `};
`;

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const Indicators = () => {
  const [themes, setThemes] = useState([]);
  const [criterias, setCriterias] = useState([]);
  const [active, setActive] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const classes = useStyles();

  useEffect(() => {
    const getThemes = async () => {
      try {
        const { data } = await Axios.get(`https://wote.website/api/themes`, {
          headers: { Accept: 'application/json' },
        });
        const colors = {
          1: 'green',
          2: 'salmon',
          3: 'blue',
        };
        const coloredDatas = data.map((theme) => {
          return {
            ...theme,
            color: colors[theme.id],
          };
        });
        setThemes(coloredDatas);

        const { criteria } = coloredDatas.find((t) => t.id === 1);
        setCriterias(criteria);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getThemes();
  }, []);

  const chooseTab = (id) => {
    const { criteria } = themes.find((t) => t.id === id);
    setActive(id);
    setCriterias(criteria);
  };

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
        <SectionTitle>Les indicateurs</SectionTitle>
      </MainHeader>
      <BurgerMenu />
      <WrapperTab>
        {themes.map((t) => {
          return (
            <Tab
              onClick={() => chooseTab(t.id)}
              className={t.id === active && t.color}
              key={t.id}
            >
              {t.title}
            </Tab>
          );
        })}
      </WrapperTab>
      <IndicatorsCpnt criteria={criterias} />
    </MainContainerWithHeader>
  );
};

export default Indicators;
