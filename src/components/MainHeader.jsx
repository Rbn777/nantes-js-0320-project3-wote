import React from 'react';
import PropTypes from 'prop-types';

import { MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const MainheaderComp = ({ title }) => {
  return (
    <MainHeader>
      <SectionTitle>{title}</SectionTitle>
    </MainHeader>
  );
};

export default MainheaderComp;

MainheaderComp.propTypes = {
  title: PropTypes.string.isRequired,
};
