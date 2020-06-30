import React from 'react';
import { useParams } from 'react-router-dom';

import { MainContainerWithHeader } from '../styles/containers';
import ConvictionsEcology from '../components/ConvictionsEcology';
import ConvictionsRights from '../components/ConvictionsRights';
import ConvictionsSociety from '../components/ConvictionsSociety';

const Convictions = () => {
  const { type } = useParams();

  return (
    <MainContainerWithHeader>
      {type === 'ecology' && <ConvictionsEcology />}
      {type === 'rights' && <ConvictionsRights />}
      {type === 'society' && <ConvictionsSociety />}
    </MainContainerWithHeader>
  );
};

export default Convictions;
