/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import Selector from './Selector';

import BurgerMenu from './BurgerMenu';
import { MainHeaderRights, DivButtonConvictions } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const ConvictionsRights = () => {
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
      <MainHeaderRights>
        <SectionTitle>Droits fondamentaux</SectionTitle>
      </MainHeaderRights>
      <BurgerMenu />
      <Selector
        titleSelect="Politique environementale"
        color="#f4AA79"
        textSelect="la politique environementale lorem ipsum dolor..."
        colorSelect="#f4AA79"
      />
      <Selector
        titleSelect="Emission CO2"
        color="#f4AA79"
        textSelect="Emission Co2 lorem dolor..."
        colorSelect="#f4AA79"
      />
      <Selector
        titleSelect="Empreinte écologique"
        color="#f4AA79"
        textSelect="Il faut limiter l'empreinte de l'activité humaine sur la planète"
        colorSelect="#f4AA79"
      />
      <Selector
        titleSelect="Proximité géographique"
        color="#f4AA79"
        textSelect="Il faut éviter de consommer des produits"
        colorSelect="#f4AA79"
      />
      <Selector
        titleSelect="Taux de nucléaire"
        color="#f4AA79"
        textSelect="Il faut augmenter le taux du nucléaire dans la production d'énergie"
        colorSelect="#f4AA79"
      />
      <Selector
        titleSelect="Taux d'énergie renouvelable"
        color="#f4AA79"
        textSelect="Il faut que l'énergie vienne de sources renouvelables"
        colorSelect="#f4AA79"
      />
      <Selector
        titleSelect="Sobriété énergétique"
        color="#f4AA79"
        textSelect="Il faut limiter la consommation de toute façon"
        colorSelect="#f4AA79"
      />
      <DivButtonConvictions>
        <FontAwesomeIcon icon={faCheckCircle} size="2x" />
      </DivButtonConvictions>
    </>
  );
};

export default ConvictionsRights;
