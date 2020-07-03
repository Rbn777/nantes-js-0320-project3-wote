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

const ComparisonCard = ({ country, note, colorBg, noButton, noPointer }) => {
  return (
    <CountryCard>
      <WrapperCountryText column noPointer={noPointer}>
        <TextParagraph grey>Made in</TextParagraph>
        <TitleComparison grey>{country}</TitleComparison>
      </WrapperCountryText>
      <FlexDiv>
        <RoundNote className={colorBg}>
          <TextParagraph>{note}/100</TextParagraph>
        </RoundNote>
        <DeleteCard className={noButton}>x</DeleteCard>
      </FlexDiv>
    </CountryCard>
  );
};

export default ComparisonCard;

ComparisonCard.propTypes = {
  country: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  colorBg: PropTypes.string.isRequired,
  noButton: PropTypes.string.isRequired,
  noPointer: PropTypes.string.isRequired,
};
