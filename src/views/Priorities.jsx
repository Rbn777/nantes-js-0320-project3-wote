import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Cursor from '../components/Cursor';
import BurgerMenu from '../components/BurgerMenu';
import {
  MainContainerWithHeader,
  MainHeader,
  FlexDiv,
  GridDiv,
} from '../styles/containers';
import { SectionTitle, TextParagraph } from '../styles/texts';
import Button from '../components/Button';

const HeightGridDiv = styled(GridDiv)`
  height: 75vh;
`;

const TextParagraphCenter = styled(TextParagraph)`
  text-align: center;
`;

const Priorities = () => {
  const [rateEcology, setRateEcology] = useState(0);
  const [rateRights, setRateRights] = useState(0);
  const [rateSociety, setRateSociety] = useState(0);
  const [sumTemp, setSumTemp] = useState(0); // not really useful variable

  const checkPercents = (thisValue, otherValue1, otherValue2) => {
    const thisValueMax = 100 - (otherValue1 + otherValue2);
    setSumTemp(sumTemp - thisValue); // a useless calculation to change the state and render
    if (thisValue >= thisValueMax) {
      return thisValueMax;
    }
    return thisValue;
  };

  const handleEcology = (e, newValue) => {
    setRateEcology(checkPercents(newValue, rateRights, rateSociety));
  };
  const handleRights = (e, newValue) => {
    setRateRights(checkPercents(newValue, rateEcology, rateSociety));
  };
  const handleSociety = (e, newValue) => {
    setRateSociety(checkPercents(newValue, rateEcology, rateRights));
  };

  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Mes priorités</SectionTitle>
      </MainHeader>
      <BurgerMenu />
      <HeightGridDiv spaceEvly templateCol="80%" jstfyContent="center">
        <TextParagraphCenter>
          Répartissez vos priorités sur 100...
        </TextParagraphCenter>
        <FlexDiv column>
          <Cursor
            colorCursor="#92be1f"
            handleCursor={handleEcology}
            value={rateEcology}
            titleCursor="Ecologie"
          />
          <FlexDiv center>
            <Link to="/profil/priorities/convictions/ecology">
              <Button hoverGreenBg white>
                Aller voir...
              </Button>
            </Link>
          </FlexDiv>
        </FlexDiv>

        <FlexDiv column>
          <Cursor
            colorCursor="#f4AA79"
            handleCursor={handleRights}
            value={rateRights}
            titleCursor="Droits fondamentaux"
          />
          <FlexDiv center>
            <Link to="/profil/priorities/convictions/rights">
              <Button hoverSalmonBg white>
                Aller voir...
              </Button>
            </Link>
          </FlexDiv>
        </FlexDiv>

        <FlexDiv column>
          <Cursor
            colorCursor="#94b5be"
            handleCursor={handleSociety}
            value={rateSociety}
            titleCursor="Société"
          />
          <FlexDiv center>
            <Link to="/profil/priorities/convictions/society">
              <Button hoverBlueBg white>
                Aller voir...
              </Button>
            </Link>
          </FlexDiv>
        </FlexDiv>
      </HeightGridDiv>
    </MainContainerWithHeader>
  );
};

export default Priorities;
