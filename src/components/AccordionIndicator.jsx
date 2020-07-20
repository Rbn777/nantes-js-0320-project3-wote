/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import {
  WrapperAccordion,
  WrapperHeadAccordion,
  WrapperTitleAccordion,
  WrapperCaretIconGrey,
  DetailsIndicators,
  NoteDetails,
  DetailItem,
} from '../styles/containers';
import {
  TitleIndicatorDetail,
  TextParagraph,
  NoteColor,
  DetailIndicatorTitle,
} from '../styles/texts';

const AccordionIndicator = ({
  title,
  note,
  idDetailsIndicator,
  criteria,
  handleClick,
}) => {
  let colorNote = '';
  const setColorNote = () => {
    if (note <= 35) {
      colorNote = 'red';
    } else if (note > 35 && note <= 65) {
      colorNote = 'yellow';
    } else {
      colorNote = 'green';
    }
  };
  setColorNote();

  return (
    <WrapperAccordion column>
      <WrapperHeadAccordion
        pointer
        id={`toChangeBorder${idDetailsIndicator}`}
        onClick={() => handleClick(idDetailsIndicator)}
      >
        <WrapperTitleAccordion>
          <WrapperCaretIconGrey id={`toRotate${idDetailsIndicator}`}>
            <FontAwesomeIcon icon={faCaretRight} />
          </WrapperCaretIconGrey>
          <TitleIndicatorDetail>{title}</TitleIndicatorDetail>
        </WrapperTitleAccordion>
        <NoteDetails className={colorNote}>
          <TextParagraph>{note}/100</TextParagraph>
        </NoteDetails>
      </WrapperHeadAccordion>
      <DetailsIndicators id={idDetailsIndicator.toString(10)}>
        {criteria.map((item) => {
          return (
            <DetailItem>
              <DetailIndicatorTitle>{item.title}</DetailIndicatorTitle>
              {item.score <= 35 && (
                <NoteColor className="redNote">{item.score}</NoteColor>
              )}
              {item.score > 35 && item.score <= 65 && (
                <NoteColor className="yellowNote">{item.score}</NoteColor>
              )}
              {item.score > 65 && (
                <NoteColor className="greenNote">{item.score}</NoteColor>
              )}
              {isNaN(item.score) && (
                <NoteColor className="greyNote">NC</NoteColor>
              )}
            </DetailItem>
          );
        })}
      </DetailsIndicators>
    </WrapperAccordion>
  );
};

export default AccordionIndicator;

AccordionIndicator.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  idDetailsIndicator: PropTypes.number.isRequired,
  criteria: PropTypes.arrayOf.isRequired,
  handleClick: PropTypes.func.isRequired,
};
