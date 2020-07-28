import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Axios from 'axios';

import Cursor from '../components/Cursor';
import BurgerMenu from '../components/BurgerMenu';
import {
  MainContainerWithHeader,
  MainHeader,
  FlexDiv,
  GridDiv,
} from '../styles/containers';
import { SectionTitle, TextParagraph } from '../styles/texts';
import Button from '../components/Button';

const HeightGridDiv = styled(GridDiv)`
  height: 75vh;
`;

const TextParagraphCenter = styled(TextParagraph)`
  text-align: center;
`;

const Priorities = (props) => {
  const [rateEcology, setRateEcology] = useState(0);
  const [rateRights, setRateRights] = useState(0);
  const [rateSociety, setRateSociety] = useState(0);
  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    const AsyncFunc = async () => {
      try {
        const response = await Axios.get(
          `https://wote.website${props.user.activeProfile}`,
          {
            headers: { Accept: 'application/json' },
          }
        );
        setPriorities(response.data.priorities);
        return priorities;
      } catch (err) {
        return err.message;
      }
    };
    AsyncFunc();
  }, []);

  useEffect(() => {
    if (priorities[0]) {
      priorities.forEach((priority) => {
        if (priority.theme.title === 'Ecology') {
          setRateEcology(priority.value);
        }
        if (priority.theme.title === 'Fundamuntal rights') {
          setRateRights(priority.value);
        }
        if (priority.theme.title === 'Society choices') {
          setRateSociety(priority.value);
        }
      });
    }
  }, [priorities]);

  const handleEcology = (e, newValue) => {
    const arrEcology = priorities.filter((elt) => elt.theme.id === 1);
    Axios.put(
      `https://wote.website/api/priorities/${arrEcology[0].id}`,
      {
        value: newValue,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    setRateEcology(newValue);
  };

  const handleRights = (e, newValue) => {
    const arrRights = priorities.filter((elt) => elt.theme.id === 2);
    Axios.put(
      `https://wote.website/api/priorities/${arrRights[0].id}`,
      {
        value: newValue,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    setRateRights(newValue);
  };

  const handleSociety = (e, newValue) => {
    const arrSociety = priorities.filter((elt) => elt.theme.id === 3);
    Axios.put(
      `https://wote.website/api/priorities/${arrSociety[0].id}`,
      {
        value: newValue,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    setRateSociety(newValue);
  };

  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Mes priorités</SectionTitle>
      </MainHeader>
      <BurgerMenu />
      <HeightGridDiv spaceEvly templateCol="80%" jstfyContent="center">
        <TextParagraphCenter>
          Répartissez vos priorités sur 100...
        </TextParagraphCenter>
        <FlexDiv column>
          <Cursor
            colorCursor="#92be1f"
            handleCursor={handleEcology}
            value={rateEcology}
            titleCursor="Ecologie"
          />
          <FlexDiv center>
            <Link to="/profil/priorities/convictions/ecology">
              <Button hoverGreenBg white>
                Aller voir...
              </Button>
            </Link>
          </FlexDiv>
        </FlexDiv>

        <FlexDiv column>
          <Cursor
            colorCursor="#f4AA79"
            handleCursor={handleRights}
            value={rateRights}
            titleCursor="Droits fondamentaux"
          />
          <FlexDiv center>
            <Link to="/profil/priorities/convictions/rights">
              <Button hoverSalmonBg white>
                Aller voir...
              </Button>
            </Link>
          </FlexDiv>
        </FlexDiv>

        <FlexDiv column>
          <Cursor
            colorCursor="#94b5be"
            handleCursor={handleSociety}
            value={rateSociety}
            titleCursor="Société"
          />
          <FlexDiv center>
            <Link to="/profil/priorities/convictions/society">
              <Button hoverBlueBg white>
                Aller voir...
              </Button>
            </Link>
          </FlexDiv>
        </FlexDiv>
      </HeightGridDiv>
    </MainContainerWithHeader>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Priorities);

Priorities.propTypes = {
  user: PropTypes.string.isRequired,
};
