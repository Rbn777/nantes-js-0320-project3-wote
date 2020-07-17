/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import {
  FlexDiv,
  WrapperCaretIcon,
  ContainerIndicators,
  WrapperIndicator,
  DetailsIndicatorDiv,
} from '../styles/containers';
import { TitleIndicator } from '../styles/texts';
import IndicatorDetails from './IndicatorDetails';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const IndicatorsCpnt = ({ criteria }) => {
  const [allCriterion, setAllCriterion] = useState([]);
  const [openIndicator, setOpenIndicator] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const classes = useStyles();

  useEffect(() => {
    const getCriterias = async () => {
      const promisedCriteria = criteria.map((c) => {
        return Axios.get(`https://wote.website${c}`, {
          headers: { Accept: 'application/json' },
        });
      });
      try {
        setIsLoading(true);
        const result = await Promise.all(promisedCriteria);

        const datas = result.map((res) => res.data);
        setAllCriterion(datas);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getCriterias();
  }, [criteria]);

  const handleClick = (id) => {
    if (id === openIndicator) {
      setOpenIndicator('');
    } else {
      setOpenIndicator(id);
    }
  };

  if (isLoading) {
    return (
      <div className={classes.root}>
        <CircularProgress style={{ color: '#f9f8f6' }} />
      </div>
    );
  }

  if (error) {
    return <div>Error !</div>;
  }

  return (
    <ContainerIndicators column>
      {allCriterion.map((crit) => {
        return (
          <WrapperIndicator column>
            <FlexDiv pointer onClick={() => handleClick(crit.id)}>
              {crit.theme === '/api/themes/1' && (
                <WrapperCaretIcon
                  greenIcon
                  className={crit.id === openIndicator && 'rotate'}
                >
                  <FontAwesomeIcon icon={faCaretRight} />
                </WrapperCaretIcon>
              )}
              {crit.theme === '/api/themes/2' && (
                <WrapperCaretIcon
                  salmonIcon
                  className={crit.id === openIndicator && 'rotate'}
                >
                  <FontAwesomeIcon icon={faCaretRight} />
                </WrapperCaretIcon>
              )}
              {crit.theme === '/api/themes/3' && (
                <WrapperCaretIcon
                  blueIcon
                  className={crit.id === openIndicator && 'rotate'}
                >
                  <FontAwesomeIcon icon={faCaretRight} />
                </WrapperCaretIcon>
              )}
              <TitleIndicator>{crit.designation}</TitleIndicator>
            </FlexDiv>
            <DetailsIndicatorDiv
              className={crit.id !== openIndicator && 'hide'}
            >
              {crit.theme === '/api/themes/1' && (
                <IndicatorDetails {...crit} green />
              )}
              {crit.theme === '/api/themes/2' && (
                <IndicatorDetails {...crit} salmon />
              )}
              {crit.theme === '/api/themes/3' && (
                <IndicatorDetails {...crit} blue />
              )}
            </DetailsIndicatorDiv>
          </WrapperIndicator>
        );
      })}
    </ContainerIndicators>
  );
};

export default IndicatorsCpnt;

IndicatorsCpnt.propTypes = {
  criteria: PropTypes.arrayOf.isRequired,
};
