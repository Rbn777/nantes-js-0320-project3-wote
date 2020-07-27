/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
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

const DetailedComparisonItem = ({
  nbCountries,
  handleClick,
  titleTheme,
  chosenCountriesDatas,
  id,
}) => {
  const [detailedScoresState, setDetailedScoresState] = useState([]);
  const detailedScores = [];

  useEffect(() => {
    chosenCountriesDatas.forEach((chosenCountryDatas) => {
      chosenCountryDatas.forEach((countryScoresDetails) => {
        if (countryScoresDetails.theme && !countryScoresDetails.criterion) {
          const theme = detailedScores.find(
            (el) => el.themeName === countryScoresDetails.theme.title
          );
          if (theme) {
            if (countryScoresDetails.value === null) {
              theme.themeValue.push('NC');
            } else {
              theme.themeValue.push(Math.round(countryScoresDetails.value));
            }
          } else if (countryScoresDetails.value === null) {
            detailedScores.push({
              themeName: countryScoresDetails.theme.title,
              themeValue: ['NC'],
              criteria: [],
            });
          } else {
            detailedScores.push({
              themeName: countryScoresDetails.theme.title,
              themeValue: [Math.round(countryScoresDetails.value)],
              criteria: [],
            });
          }
        }
        if (countryScoresDetails.theme && countryScoresDetails.criterion) {
          const theme = detailedScores.find(
            (el) => el.themeName === countryScoresDetails.theme.title
          );
          if (theme.criteria) {
            const criterion = theme.criteria.find(
              (el) => el.criterionName === countryScoresDetails.criterion.title
            );
            if (criterion) {
              if (countryScoresDetails.value === null) {
                criterion.criterionValue.push('NC');
              } else {
                criterion.criterionValue.push(
                  Math.round(countryScoresDetails.value)
                );
              }
            } else if (countryScoresDetails.value === null) {
              theme.criteria.push({
                criterionName: countryScoresDetails.criterion.title,
                criterionValue: ['NC'],
              });
            } else {
              theme.criteria.push({
                criterionName: countryScoresDetails.criterion.title,
                criterionValue: [Math.round(countryScoresDetails.value)],
              });
            }
          }
        }
      });
    });
    setDetailedScoresState(detailedScores);
  }, [chosenCountriesDatas]);

  const width = `calc(100%/${nbCountries})`;

  return (
    <>
      {detailedScoresState
        .filter((el) => el.themeName === titleTheme)
        .map((el) => (
          <FlexDiv>
            <FlexDivAccordionDetailed column all>
              <WrapperHeadAccordion
                padDetailed
                topOnly
                pointer
                onClick={() => handleClick(id)}
              >
                <WrapperTitleAccordion>
                  <WrapperCaretIconGrey
                    id={`toRotate${id}`}
                    className="resetCaretIconToNormal"
                  >
                    <FontAwesomeIcon icon={faCaretRight} />
                  </WrapperCaretIconGrey>
                  <TitleIndicatorDetail>{el.themeName}</TitleIndicatorDetail>
                </WrapperTitleAccordion>
              </WrapperHeadAccordion>
              <FlexDiv>
                {el.themeValue.map((themeNote) => {
                  return (
                    <DetailedNoteCountry style={{ width }} borderRight>
                      {themeNote <= 35 && (
                        <NoteDivColor className="redDiv">
                          {themeNote}
                        </NoteDivColor>
                      )}
                      {themeNote > 35 && themeNote <= 65 && (
                        <NoteDivColor className="yellowDiv">
                          {themeNote}
                        </NoteDivColor>
                      )}
                      {themeNote > 65 && (
                        <NoteDivColor className="greenDiv">
                          {themeNote}
                        </NoteDivColor>
                      )}
                      {isNaN(themeNote) && (
                        <NoteDivColor className="greyDiv">NC</NoteDivColor>
                      )}
                    </DetailedNoteCountry>
                  );
                })}
              </FlexDiv>
              <DetailsIndicators
                id={id.toString(10)}
                className="resetDisplayToNone"
              >
                {el.criteria.map((item) => {
                  return (
                    <DetailItem column>
                      <DetailIndicatorTitle start>
                        {item.criterionName}
                      </DetailIndicatorTitle>
                      <FlexDiv>
                        {item.criterionValue.map((criterionNote) => {
                          return (
                            <DetailedDiv style={{ width }} borderRight white>
                              {criterionNote <= 35 && (
                                <NoteColor className="redNote">
                                  {criterionNote}
                                </NoteColor>
                              )}
                              {criterionNote > 35 && criterionNote <= 65 && (
                                <NoteColor className="yellowNote">
                                  {criterionNote}
                                </NoteColor>
                              )}
                              {criterionNote > 65 && (
                                <NoteColor className="greenNote">
                                  {criterionNote}
                                </NoteColor>
                              )}
                              {isNaN(criterionNote) && (
                                <NoteColor className="greyNote">NC</NoteColor>
                              )}
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
        ))}
    </>
  );
};

export default DetailedComparisonItem;

DetailedComparisonItem.propTypes = {
  nbCountries: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  titleTheme: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  chosenCountriesDatas: PropTypes.arrayOf.isRequired,
};
