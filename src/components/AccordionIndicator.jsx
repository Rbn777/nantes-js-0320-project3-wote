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

const items = [
  { title: 'Premier indicateur', note: '10' },
  { title: 'Second indicateur', note: '70' },
  { title: 'Troisième indicateur', note: '10' },
  { title: 'Quatrième indicateur', note: '40' },
];

const AccordionIndicator = ({
  title,
  note,
  idDetailsIndicator,
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
        {items.map((item) => {
          return (
            <DetailItem>
              <DetailIndicatorTitle>{item.title}</DetailIndicatorTitle>
              {item.note <= 35 && (
                <NoteColor className="redNote">{item.note}</NoteColor>
              )}
              {item.note > 35 && item.note <= 65 && (
                <NoteColor className="yellowNote">{item.note}</NoteColor>
              )}
              {item.note > 65 && (
                <NoteColor className="greenNote">{item.note}</NoteColor>
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
  handleClick: PropTypes.func.isRequired,
};
