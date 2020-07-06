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

const ComparisonCard = ({ name, note, colorBg, noButton, noPointer }) => {
  return (
    <CountryCard>
      <WrapperCountryText column noPointer={noPointer}>
        <TextParagraph grey>Made in</TextParagraph>
        <TitleComparison grey>{name}</TitleComparison>
      </WrapperCountryText>
      <FlexDiv>
        <RoundNote className={colorBg}>
          <TextParagraph>{note}/100</TextParagraph>
        </RoundNote>
        <DeleteCard className={noButton} onClick={removeCountry}>x</DeleteCard>
      </FlexDiv>
    </CountryCard>
  );
};

export default ComparisonCard;

ComparisonCard.propTypes = {
  name: PropTypes.string.isRequired,
  removeCountry: PropTypes.func.isRequired,
  note: PropTypes.string.isRequired,
  colorBg: PropTypes.string.isRequired,
  noButton: PropTypes.string.isRequired,
  noPointer: PropTypes.string.isRequired,
};
