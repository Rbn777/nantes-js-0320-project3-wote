import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

import {
  CountryCard,
  WrapperCountryText,
  FlexDiv,
  RoundNote,
  DeleteCard,
} from '../styles/containers';
import { TitleComparison, TextParagraph } from '../styles/texts';

const ComparisonCard = ({
  idCountry,
  name,
  note,
  colorBg,
  noButton,
  noPointer,
  removeCountry,
  frName,
}) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <CountryCard>
      <WrapperCountryText column noPointer={noPointer}>
        {pathname === '/made-in-comparisons' ? (
          <Link to={`/made-in-comparisons/made-in-details/${idCountry}`}>
            <TextParagraph grey>Made in</TextParagraph>
            <TitleComparison grey>
              {name} / {frName}
            </TitleComparison>
          </Link>
        ) : (
          <>
            <TextParagraph grey>Made in</TextParagraph>
            <TitleComparison grey>
              {name} / {frName}
            </TitleComparison>
          </>
        )}
      </WrapperCountryText>
      <FlexDiv>
        <RoundNote className={colorBg}>
          <TextParagraph>{note}/100</TextParagraph>
        </RoundNote>
        <DeleteCard className={noButton} onClick={removeCountry}>
          x
        </DeleteCard>
      </FlexDiv>
    </CountryCard>
  );
};

export default ComparisonCard;

ComparisonCard.propTypes = {
  idCountry: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  frName: PropTypes.string.isRequired,
  removeCountry: PropTypes.func.isRequired,
  note: PropTypes.string.isRequired,
  colorBg: PropTypes.string.isRequired,
  noButton: PropTypes.string.isRequired,
  noPointer: PropTypes.string.isRequired,
};
