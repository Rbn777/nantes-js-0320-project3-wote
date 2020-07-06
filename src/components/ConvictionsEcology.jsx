/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import Selector from './Selector';

import BurgerMenu from './BurgerMenu';
import { MainHeaderEcology, DivButtonConvictions } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const ConvictionsEcology = () => {
  const [politEnv, setPolitEnv] = useState();
  const [emissionCo2, setEmissionCo2] = useState();
  const [empreintEco, setEmpreinteEco] = useState();
  const [proximGeo, setProximGeo] = useState();
  const [tauxNucleaire, setTauxNucleaire] = useState();
  const [tauxEnergRenouv, setTauxEnergRenouv] = useState();
  const [sobrEnerg, setSobrEnerg] = useState();

  const politEnvFunc = (e) => {
    setPolitEnv(e.target.value);
  };

  const emissionCo2Func = (e) => {
    setEmissionCo2(e.target.value);
  };

  const empreintEcoFunc = (e) => {
    setEmpreinteEco(e.target.value);
  };

  const proximGeoFunc = (e) => {
    setProximGeo(e.target.value);
  };

  const tauxNucleaireFunc = (e) => {
    setTauxNucleaire(e.target.value);
  };

  const tauxEnergRenouvFunc = (e) => {
    setTauxEnergRenouv(e.target.value);
  };

  const sobrEnergFunc = (e) => {
    setSobrEnerg(e.target.value);
  };

  return (
    <>
      <MainHeaderEcology>
        <SectionTitle>Ecologie</SectionTitle>
      </MainHeaderEcology>
      <BurgerMenu />
      <Selector
        titleSelect="Politique environementale"
        color="#92be1f"
        textSelect="la politique environementale lorem ipsum dolor..."
        colorSelect="#92be1f"
      />
      <Selector
        titleSelect="Emission CO2"
        color="#92be1f"
        textSelect="Emission Co2 lorem dolor..."
        colorSelect="#92be1f"
      />
      <Selector
        titleSelect="Empreinte écologique"
        color="#92be1f"
        textSelect="Il faut limiter l'empreinte de l'activité humaine sur la planète"
        colorSelect="#92be1f"
      />
      <Selector
        titleSelect="Proximité géographique"
        color="#92be1f"
        textSelect="Il faut éviter de consommer des produits"
        colorSelect="#92be1f"
      />
      <Selector
        titleSelect="Taux de nucléaire"
        color="#92be1f"
        textSelect="Il faut augmenter le taux du nucléaire dans la production d'énergie"
        colorSelect="#92be1f"
      />
      <Selector
        titleSelect="Taux d'énergie renouvelable"
        color="#92be1f"
        textSelect="Il faut que l'énergie vienne de sources renouvelables"
        colorSelect="#92be1f"
      />
      <Selector
        titleSelect="Sobriété énergétique"
        color="#92be1f"
        textSelect="Il faut limiter la consommation de toute façon"
        colorSelect="#92be1f"
      />
      <DivButtonConvictions>
        <FontAwesomeIcon icon={faCheckCircle} size="2x" />
      </DivButtonConvictions>
    </>
  );
};

export default ConvictionsEcology;
