import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {
  ContainerDetailsIndicator,
  WrapperItemDetail,
  WrapperContentItemDetail,
  LogoSourceDiv,
} from '../styles/containers';
import { TitleItemDetail, TextSource } from '../styles/texts';

const LogoSourceImg = styled.img`
  width: 50%;
`;

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#b0afaf',
    color: '#f9f8f6',
    padding: 5,
  },
  body: {
    fontSize: 14,
    padding: 5,
  },
}))(TableCell);

const columns = [
  { id: 'country', label: 'Country', minWidth: 120 },
  { id: 'value', label: 'Rating value', minWidth: 50 },
  {
    id: 'source',
    label: 'Source Index',
    minWidth: 50,
  },
];

const IndicatorDetails = (props) => {
  const {
    description,
    logoOriginalLink,
    country,
    source,
    sourceLink,
    unit,
    ratings,
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
          <TextSource>
            Pays : {country ? country.frName : 'Non renseigné'}
          </TextSource>
          <TextSource>Site internet : {sourceLink}</TextSource>
        </WrapperContentItemDetail>
      </WrapperItemDetail>
      <WrapperItemDetail green={green} blue={blue} salmon={salmon} column>
        <TitleItemDetail green={green} blue={blue} salmon={salmon}>
          Données
        </TitleItemDetail>
        <WrapperContentItemDetail style={{ maxHeight: '25.5rem' }} column>
          <TextSource>Unité : {unit}</TextSource>
          <TextSource>Détails par pays : </TextSource>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <StyledTableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {ratings
                  .sort((a, b) => b.ratingValue - a.ratingValue)
                  .map((rating) => {
                    return (
                      <TableRow hover tabIndex={-1} key={rating.country.frName}>
                        <StyledTableCell>
                          {rating.country.frName}
                        </StyledTableCell>
                        <StyledTableCell>{rating.ratingValue}</StyledTableCell>
                        <StyledTableCell>{rating.sourceIndex}</StyledTableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </WrapperContentItemDetail>
      </WrapperItemDetail>
    </ContainerDetailsIndicator>
  );
};

export default IndicatorDetails;

IndicatorDetails.propTypes = {
  description: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  logoOriginalLink: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  sourceLink: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  ratings: PropTypes.arrayOf.isRequired,
  green: PropTypes.string.isRequired,
  salmon: PropTypes.string.isRequired,
  blue: PropTypes.string.isRequired,
};
