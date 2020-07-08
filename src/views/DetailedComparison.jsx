import React from 'react';

import {
  MainContainerWithHeader,
  MainHeader,
  FlexDiv,
  FlexDivDetailedComp,
  NoteDiv,
  DetailedDivSpec,
} from '../styles/containers';
import BurgerMenu from '../components/BurgerMenu';
import { SectionTitle } from '../styles/texts';
import DetailedComparisonItem from '../components/DetailedComparisonItem';

const notesCountries = ['31', '65', '82'];
const namesCountries = ['France', 'Allemagne', 'Espagne'];
const themes = ['Ecologie', 'Droits fondamentaux', 'Société'];

const DetailedComparison = () => {
  const nbCountries = namesCountries.length;
  const width = `calc(100%/${nbCountries})`;

  const handleClick = (index) => {
    const elToShowDiv = document.getElementById(`${index}`);
    const elToRotateArrow = document.getElementById(`toRotate${index}`);
    elToShowDiv.classList.toggle('open');
    elToRotateArrow.classList.toggle('rotate');
  };

  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>
          Comparaison détaillée des origines de fabrication
        </SectionTitle>
      </MainHeader>
      <BurgerMenu />
      <FlexDiv column>
        <FlexDiv mgBottom column>
          <FlexDivDetailedComp between>
            {notesCountries.map((note) => {
              return <NoteDiv style={{ width }}>{note}</NoteDiv>;
            })}
          </FlexDivDetailedComp>
          <FlexDivDetailedComp between>
            {namesCountries.map((name) => {
              return (
                <DetailedDivSpec style={{ width }} borderRight>
                  {name}
                </DetailedDivSpec>
              );
            })}
          </FlexDivDetailedComp>
        </FlexDiv>
        {themes.map((theme, index) => {
          return (
            <DetailedComparisonItem
              nbCountries={nbCountries}
              handleClick={handleClick}
              titleTheme={theme}
              id={index}
            />
          );
        })}
      </FlexDiv>
    </MainContainerWithHeader>
  );
};

export default DetailedComparison;
