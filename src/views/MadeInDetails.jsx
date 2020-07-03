import React from 'react';

import BurgerMenu from '../components/BurgerMenu';
import ComparisonCard from '../components/ComparisonCard';
import AccordionIndicator from '../components/AccordionIndicator';
import {
  MainContainerWithHeader,
  MainHeader,
  ContainerAccordions,
  WrapperAccordion,
} from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const indicators = [
  { titlePrinc: 'Ecologie', notePrinc: '86' },
  { titlePrinc: 'Droits fondamentaux', notePrinc: '57' },
  { titlePrinc: 'Société', notePrinc: '25' },
];

const MadeInDetails = () => {
  const handleClick = (index) => {
    const elToShowDiv = document.getElementById(`${index}`);
    const elToRotateArrow = document.getElementById(`toRotate${index}`);
    const elToChangeBorder = document.getElementById(`toChangeBorder${index}`);
    elToShowDiv.classList.toggle('open');
    elToRotateArrow.classList.toggle('rotate');
    elToChangeBorder.classList.toggle('noBorderRadius');
  };

  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Détails d&apos;une origine de fabrication</SectionTitle>
      </MainHeader>
      <BurgerMenu />
      <ComparisonCard
        country="Espagne"
        note="86"
        colorBg="green"
        noButton="noDisplay"
        noPointer
      />
      <ContainerAccordions column>
        <WrapperAccordion column>
          {indicators.map((item, index) => {
            return (
              <AccordionIndicator
                title={item.titlePrinc}
                note={item.notePrinc}
                idDetailsIndicator={index}
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
