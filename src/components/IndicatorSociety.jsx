import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import {
  FlexDiv,
  WrapperCaretIconBlue,
  ContainerIndicators,
  WrapperIndicator,
  DetailsIndicatorDiv,
} from '../styles/containers';
import { TitleIndicator } from '../styles/texts';

const IndicatorSociety = () => {
  const [taxeEntrep, setTaxeEntrep] = useState(false);
  const [secretBanc, setSecretBanc] = useState(false);
  const [inegSoc, setInegSoc] = useState(false);
  const [aideDev, setAideDev] = useState(false);
  const [libEcon, setLibEcon] = useState(false);
  const [protectSoc, setProtectSoc] = useState(false);

  const handleClick = (funcToDo, varToPass) => {
    funcToDo(!varToPass);
  };

  return (
    <ContainerIndicators column>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setTaxeEntrep, taxeEntrep)}>
          <WrapperCaretIconBlue className={taxeEntrep && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconBlue>
          <TitleIndicator>Taux de taxe des entreprises</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!taxeEntrep && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setSecretBanc, secretBanc)}>
          <WrapperCaretIconBlue className={secretBanc && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconBlue>
          <TitleIndicator>Secret bancaire</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!secretBanc && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setInegSoc, inegSoc)}>
          <WrapperCaretIconBlue className={inegSoc && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconBlue>
          <TitleIndicator>Inégalités dans la société</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!inegSoc && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setAideDev, aideDev)}>
          <WrapperCaretIconBlue className={aideDev && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconBlue>
          <TitleIndicator>Besoin d&apos;aide au développement</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!aideDev && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setLibEcon, libEcon)}>
          <WrapperCaretIconBlue className={libEcon && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconBlue>
          <TitleIndicator>Liberalisme économique</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!libEcon && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setProtectSoc, protectSoc)}>
          <WrapperCaretIconBlue className={protectSoc && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconBlue>
          <TitleIndicator>Niveau de protection sociale</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!protectSoc && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
    </ContainerIndicators>
  );
};

export default IndicatorSociety;
