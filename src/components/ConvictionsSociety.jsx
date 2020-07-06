/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import Selector from './Selector';

import BurgerMenu from './BurgerMenu';
import { MainHeaderSociety, DivButtonConvictions } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const ConvictionsSociety = () => {
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
      <MainHeaderSociety>
        <SectionTitle>Société</SectionTitle>
      </MainHeaderSociety>
      <BurgerMenu />
      <Selector
        titleSelect="Politique environementale"
        color="#94b5be"
        textSelect="la politique environementale lorem ipsum dolor..."
        colorSelect="#94b5be"
      />
      <Selector
        titleSelect="Emission CO2"
        color="#94b5be"
        textSelect="Emission Co2 lorem dolor..."
        colorSelect="#94b5be"
      />
      <Selector
        titleSelect="Empreinte écologique"
        color="#94b5be"
        textSelect="Il faut limiter l'empreinte de l'activité humaine sur la planète"
        colorSelect="#94b5be"
      />
      <Selector
        titleSelect="Proximité géographique"
        color="#94b5be"
        textSelect="Il faut éviter de consommer des produits"
        colorSelect="#94b5be"
      />
      <Selector
        titleSelect="Taux de nucléaire"
        color="#94b5be"
        textSelect="Il faut augmenter le taux du nucléaire dans la production d'énergie"
        colorSelect="#94b5be"
      />
      <Selector
        titleSelect="Taux d'énergie renouvelable"
        color="#94b5be"
        textSelect="Il faut que l'énergie vienne de sources renouvelables"
        colorSelect="#94b5be"
      />
      <Selector
        titleSelect="Sobriété énergétique"
        color="#94b5be"
        textSelect="Il faut limiter la consommation de toute façon"
        colorSelect="#94b5be"
      />
      <DivButtonConvictions>
        <FontAwesomeIcon icon={faCheckCircle} size="2x" />
      </DivButtonConvictions>
    </>
  );
};

export default ConvictionsSociety;
