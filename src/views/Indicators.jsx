import React, { useState } from 'react';
import styled from 'styled-components';

import {
  MainContainerWithHeader,
  MainHeader,
  FlexDiv,
} from '../styles/containers';
import { SectionTitle } from '../styles/texts';
import IndicatorEcology from '../components/IndicatorEcology';
import IndicatorRights from '../components/IndicatorRights';
import IndicatorSociety from '../components/IndicatorSociety';

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
  const [activeEco, setActiveEco] = useState(true);
  const [activeDroits, setActiveDroits] = useState(false);
  const [activeSoc, setActiveSoc] = useState(false);

  const handleClick = (
    funcToSetActive,
    varToSetActive,
    funcToSetFalseOne,
    funcToSetFalseTwo
  ) => {
    if (!varToSetActive) {
      funcToSetActive(!varToSetActive);
      funcToSetFalseOne(false);
      funcToSetFalseTwo(false);
    }
  };

  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Les indicateurs</SectionTitle>
      </MainHeader>
      <WrapperTab>
        <Tab
          onClick={() =>
            handleClick(setActiveEco, activeEco, setActiveDroits, setActiveSoc)
          }
          className={activeEco && 'green'}
        >
          Ecologie
        </Tab>
        <Tab
          onClick={() =>
            handleClick(
              setActiveDroits,
              activeDroits,
              setActiveEco,
              setActiveSoc
            )
          }
          className={activeDroits && 'salmon'}
        >
          Droits fondamentaux
        </Tab>
        <Tab
          onClick={() =>
            handleClick(setActiveSoc, activeSoc, setActiveEco, setActiveDroits)
          }
          className={activeSoc && 'blue'}
        >
          Société
        </Tab>
      </WrapperTab>

      {activeEco && <IndicatorEcology />}
      {activeDroits && <IndicatorRights />}
      {activeSoc && <IndicatorSociety />}
    </MainContainerWithHeader>
  );
};

export default Indicators;
