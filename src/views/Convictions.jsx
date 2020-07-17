import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import {
  MainContainerWithHeader,
  DivButtonConvictions,
} from '../styles/containers';
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
      <Link to="/profil/priorities">
        <DivButtonConvictions>
          <FontAwesomeIcon icon={faCheckCircle} size="2x" />
        </DivButtonConvictions>
      </Link>
    </MainContainerWithHeader>
  );
};

export default Convictions;
