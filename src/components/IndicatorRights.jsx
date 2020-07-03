import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import {
  FlexDiv,
  WrapperCaretIconSalmon,
  ContainerIndicators,
  WrapperIndicator,
  DetailsIndicatorDiv,
} from '../styles/containers';
import { TitleIndicator } from '../styles/texts';

const IndicatorRights = () => {
  const [droitsH, setDroitsH] = useState(false);
  const [corrup, setCorrup] = useState(false);
  const [pascifisme, setPascifisme] = useState(false);
  const [femmePolit, setFemmePolit] = useState(false);
  const [libPress, setLibPress] = useState(false);
  const [libMorale, setLibMorale] = useState(false);
  const [democratie, setDemocratie] = useState(false);
  const [peineMort, setPeineMort] = useState(false);
  const [droitsW, setDroitsW] = useState(false);

  const handleClick = (funcToDo, varToPass) => {
    funcToDo(!varToPass);
  };

  return (
    <ContainerIndicators column>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setDroitsH, droitsH)}>
          <WrapperCaretIconSalmon className={droitsH && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconSalmon>
          <TitleIndicator>Droits de l&apos;homme</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!droitsH && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setCorrup, corrup)}>
          <WrapperCaretIconSalmon className={corrup && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconSalmon>
          <TitleIndicator>Corruption</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!corrup && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setPascifisme, pascifisme)}>
          <WrapperCaretIconSalmon className={pascifisme && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconSalmon>
          <TitleIndicator>Pascifisme</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!pascifisme && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setFemmePolit, femmePolit)}>
          <WrapperCaretIconSalmon className={femmePolit && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconSalmon>
          <TitleIndicator>Présence de femmes en politique</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!femmePolit && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setLibPress, libPress)}>
          <WrapperCaretIconSalmon className={libPress && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconSalmon>
          <TitleIndicator>Liberté de la presse</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!libPress && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setLibMorale, libMorale)}>
          <WrapperCaretIconSalmon className={libMorale && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconSalmon>
          <TitleIndicator>Liberté morale</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!libMorale && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setDemocratie, democratie)}>
          <WrapperCaretIconSalmon className={democratie && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconSalmon>
          <TitleIndicator>Démocratie</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!democratie && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setPeineMort, peineMort)}>
          <WrapperCaretIconSalmon className={peineMort && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconSalmon>
          <TitleIndicator>Peine de mort</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!peineMort && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setDroitsW, droitsW)}>
          <WrapperCaretIconSalmon className={droitsW && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconSalmon>
          <TitleIndicator>Droits des travailleurs</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!droitsW && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
    </ContainerIndicators>
  );
};

export default IndicatorRights;
