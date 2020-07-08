/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import {
  FlexDiv,
  WrapperCaretIconGrey,
  WrapperTitleAccordion,
  WrapperHeadAccordion,
  DetailsIndicators,
  DetailItem,
  FlexDivAccordionDetailed,
  DetailedDiv,
  DetailedNoteCountry,
  NoteDivColor,
} from '../styles/containers';
import {
  TitleIndicatorDetail,
  NoteColor,
  DetailIndicatorTitle,
} from '../styles/texts';

const themesWithNotes = [
  { theme: 'Ecologie', note: '56' },
  { theme: 'Droits fondamentaux', note: 'XX' },
  { theme: 'Société', note: 'XX' },
];

const items = [
  { title: 'Premier indicateur', notes: ['10', 'XX', 'XX'] },
  { title: 'Second indicateur', notes: ['70', 'XX', 'XX'] },
  { title: 'Troisième indicateur', notes: ['10', 'XX', 'XX'] },
  { title: 'Quatrième indicateur', notes: ['40', 'XX', 'XX'] },
];

const DetailedComparisonItem = ({
  nbCountries,
  handleClick,
  titleTheme,
  id,
}) => {
  const width = `calc(100%/${nbCountries})`;

  return (
    <>
      <FlexDiv>
        <FlexDivAccordionDetailed column all>
          <WrapperHeadAccordion
            padDetailed
            topOnly
            pointer
            onClick={() => handleClick(id)}
          >
            <WrapperTitleAccordion>
              <WrapperCaretIconGrey id={`toRotate${id}`}>
                <FontAwesomeIcon icon={faCaretRight} />
              </WrapperCaretIconGrey>
              <TitleIndicatorDetail>{titleTheme}</TitleIndicatorDetail>
            </WrapperTitleAccordion>
          </WrapperHeadAccordion>
          <FlexDiv>
            {themesWithNotes.map((themeNote) => {
              return (
                <DetailedNoteCountry style={{ width }} borderRight>
                  {themeNote.note <= 35 && (
                    <NoteDivColor className="redDiv">
                      {themeNote.note}
                    </NoteDivColor>
                  )}
                  {themeNote.note > 35 && themeNote.note <= 65 && (
                    <NoteDivColor className="yellowDiv">
                      {themeNote.note}
                    </NoteDivColor>
                  )}
                  {themeNote.note > 65 && (
                    <NoteDivColor className="greenDiv">
                      {themeNote.note}
                    </NoteDivColor>
                  )}
                  {isNaN(themeNote.note) && (
                    <NoteDivColor className="greyDiv">
                      {themeNote.note}
                    </NoteDivColor>
                  )}
                </DetailedNoteCountry>
              );
            })}
          </FlexDiv>
          <DetailsIndicators id={id.toString(10)}>
            {items.map((item) => {
              return (
                <DetailItem column>
                  <DetailIndicatorTitle start>
                    {item.title}
                  </DetailIndicatorTitle>
                  <FlexDiv>
                    {item.notes.map((note) => {
                      return (
                        <DetailedDiv style={{ width }} borderRight white>
                          {note <= 35 && (
                            <NoteColor className="redNote">{note}</NoteColor>
                          )}
                          {note > 35 && note <= 65 && (
                            <NoteColor className="yellowNote">{note}</NoteColor>
                          )}
                          {note > 65 && (
                            <NoteColor className="greenNote">{note}</NoteColor>
                          )}
                          {isNaN(note) && <NoteColor>{note}</NoteColor>}
                        </DetailedDiv>
                      );
                    })}
                  </FlexDiv>
                </DetailItem>
              );
            })}
          </DetailsIndicators>
        </FlexDivAccordionDetailed>
      </FlexDiv>
    </>
  );
};

export default DetailedComparisonItem;

DetailedComparisonItem.propTypes = {
  nbCountries: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  titleTheme: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
