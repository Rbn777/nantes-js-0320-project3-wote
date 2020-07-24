import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const WrapperBackButton = styled.div`
  position: fixed;
  left: 20px;
  top: 25px;

  &.hoverBackButton:hover .hoverBackButton-icon {
    color: ${(props) => props.theme.darkGrey};
    cursor: pointer;
  }
`;

const BackButton = () => {
  const history = useHistory();

  return (
    <WrapperBackButton className="hoverBackButton">
      <FontAwesomeIcon
        icon={faAngleLeft}
        size="3x"
        color="white"
        className="hoverBackButton-icon"
        onClick={() => history.goBack()}
      />
    </WrapperBackButton>
  );
};

export default BackButton;
