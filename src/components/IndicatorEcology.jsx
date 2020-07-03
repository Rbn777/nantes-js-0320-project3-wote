import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import {
  FlexDiv,
  WrapperCaretIconGreen,
  ContainerIndicators,
  WrapperIndicator,
  DetailsIndicatorDiv,
} from '../styles/containers';
import { TitleIndicator } from '../styles/texts';

const IndicatorEcology = () => {
  const [politEnv, setPolitEnv] = useState(false);
  const [emissionCo2, setEmissionCo2] = useState(false);
  const [empreintEco, setEmpreinteEco] = useState(false);
  const [proximGeo, setProximGeo] = useState(false);
  const [tauxNucleaire, setTauxNucleaire] = useState(false);
  const [tauxEnergRenouv, setTauxEnergRenouv] = useState(false);
  const [sobrEnerg, setSobrEnerg] = useState(false);

  const handleClick = (funcToDo, varToPass) => {
    funcToDo(!varToPass);
  };

  return (
    <ContainerIndicators column>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setPolitEnv, politEnv)}>
          <WrapperCaretIconGreen className={politEnv && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconGreen>
          <TitleIndicator>Politique environnementale</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!politEnv && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv
          pointer
          onClick={() => handleClick(setEmissionCo2, emissionCo2)}
        >
          <WrapperCaretIconGreen className={emissionCo2 && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconGreen>
          <TitleIndicator>Emission de CO2</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!emissionCo2 && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv
          pointer
          onClick={() => handleClick(setEmpreinteEco, empreintEco)}
        >
          <WrapperCaretIconGreen className={empreintEco && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconGreen>
          <TitleIndicator>Empreinte écologique</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!empreintEco && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setProximGeo, proximGeo)}>
          <WrapperCaretIconGreen className={proximGeo && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconGreen>
          <TitleIndicator>Proximité géographique</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!proximGeo && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv
          pointer
          onClick={() => handleClick(setTauxNucleaire, tauxNucleaire)}
        >
          <WrapperCaretIconGreen className={tauxNucleaire && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconGreen>
          <TitleIndicator>Taux de nucléaire</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!tauxNucleaire && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv
          pointer
          onClick={() => handleClick(setTauxEnergRenouv, tauxEnergRenouv)}
        >
          <WrapperCaretIconGreen className={tauxEnergRenouv && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconGreen>
          <TitleIndicator>Taux d&apos;énergie renouvelable</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!tauxEnergRenouv && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
      <WrapperIndicator column>
        <FlexDiv pointer onClick={() => handleClick(setSobrEnerg, sobrEnerg)}>
          <WrapperCaretIconGreen className={sobrEnerg && 'rotate'}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconGreen>
          <TitleIndicator>Sobriété énergétique</TitleIndicator>
        </FlexDiv>
        <DetailsIndicatorDiv className={!sobrEnerg && 'hide'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          similique debitis nostrum ad odit, amet voluptatum nisi rerum nulla
          voluptate atque deleniti veritatis dolore dicta perspiciatis aliquid
          aut eius non!
        </DetailsIndicatorDiv>
      </WrapperIndicator>
    </ContainerIndicators>
  );
};

export default IndicatorEcology;
