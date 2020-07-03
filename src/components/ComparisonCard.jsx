import React from 'react';
import PropTypes from 'prop-types';

import {
  CountryCard,
  WrapperCountryText,
  FlexDiv,
  RoundNote,
  DeleteCard,
} from '../styles/containers';
import { TitleComparison, TextParagraph } from '../styles/texts';

const ComparisonCard = ({ country, note, colorBg, removeCountry }) => {
  return (
    <CountryCard>
      <WrapperCountryText column>
        <TextParagraph>Made in</TextParagraph>
        <TitleComparison>{country}</TitleComparison>
      </WrapperCountryText>
      <FlexDiv>
        <RoundNote className={colorBg}>
          <TextParagraph>{note}/100</TextParagraph>
        </RoundNote>
        <DeleteCard onClick={removeCountry}>x</DeleteCard>
      </FlexDiv>
    </CountryCard>
  );
};

export default ComparisonCard;

ComparisonCard.propTypes = {
  country: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  colorBg: PropTypes.string.isRequired,
  removeCountry: PropTypes.func.isRequired,
};
