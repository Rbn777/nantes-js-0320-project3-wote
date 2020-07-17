import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  ContainerDetailsIndicator,
  WrapperItemDetail,
  WrapperContentItemDetail,
  DivCarte,
  LogoSourceDiv,
} from '../styles/containers';
import { TitleItemDetail, TextSource } from '../styles/texts';

const LogoSourceImg = styled.img`
  width: 50%;
`;

const IndicatorDetails = (props) => {
  const {
    description,
    logoOriginalLink,
    source,
    sourceLink,
    unit,
    green,
    salmon,
    blue,
  } = props;

  return (
    <ContainerDetailsIndicator column>
      <WrapperItemDetail green={green} blue={blue} salmon={salmon} column>
        <TitleItemDetail green={green} blue={blue} salmon={salmon}>
          Description
        </TitleItemDetail>
        <WrapperContentItemDetail column>
          {description}
        </WrapperContentItemDetail>
      </WrapperItemDetail>
      <WrapperItemDetail green={green} blue={blue} salmon={salmon} column>
        <TitleItemDetail green={green} blue={blue} salmon={salmon}>
          Source
        </TitleItemDetail>
        <WrapperContentItemDetail column>
          <LogoSourceDiv>
            <LogoSourceImg src={logoOriginalLink} alt="Logo de la source" />
          </LogoSourceDiv>
          <TextSource>Nom : {source}</TextSource>
          <TextSource>Nature : {}</TextSource>
          <TextSource>Pays : {}</TextSource>
          <TextSource>Site internet : {sourceLink}</TextSource>
        </WrapperContentItemDetail>
      </WrapperItemDetail>
      <WrapperItemDetail green={green} blue={blue} salmon={salmon} column>
        <TitleItemDetail green={green} blue={blue} salmon={salmon}>
          Données
        </TitleItemDetail>
        <WrapperContentItemDetail column>
          <TextSource>Unité : {unit}</TextSource>
          <TextSource>Détails par pays : </TextSource>
          <DivCarte>{}</DivCarte>
        </WrapperContentItemDetail>
      </WrapperItemDetail>
    </ContainerDetailsIndicator>
  );
};

export default IndicatorDetails;

IndicatorDetails.propTypes = {
  description: PropTypes.string.isRequired,
  logoOriginalLink: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  sourceLink: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  green: PropTypes.string.isRequired,
  salmon: PropTypes.string.isRequired,
  blue: PropTypes.string.isRequired,
};
