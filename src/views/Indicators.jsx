import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import {
  MainContainerWithHeader,
  MainHeader,
  FlexDiv,
} from '../styles/containers';
import { SectionTitle } from '../styles/texts';
import BurgerMenu from '../components/BurgerMenu';
import IndicatorsCpnt from '../components/IndicatorsCpnt';

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

const Indicators = () => {
  const [themes, setThemes] = useState([]);
  const [criterias, setCriterias] = useState([]);
  const [active, setActive] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

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
    return <div>Super loader...</div>;
  }

  if (error) {
    return <div>Error !</div>;
  }

  return (
    <MainContainerWithHeader>
      <MainHeader>
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
