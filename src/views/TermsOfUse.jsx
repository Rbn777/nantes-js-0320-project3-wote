import React from 'react';
import { MainHeader, MainContainerWithHeader } from '../styles/containers';
import { SectionTitle, TextParagraph } from '../styles/texts';

const TermsOfUse = () => {
  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Conditions d&apos;utilisation</SectionTitle>
      </MainHeader>
      <TextParagraph>
        Données personnelles <br />
        <br />
        Conformément à l&apos;article 34 de la loi &laquo;Informatique et
        Libertés&raquo;, wote garantit à l&apos;utilisateur un droit
        d&apos;opposition, d&apos;accès et de rectification sur les données
        nominatives le concernant. L&apos;utilisateur a la possibilité
        d&apos;exercer ce droit en utilisant le formulaire de contact mis à sa
        disposition. <br />
        <br />
        Pour utiliser certains services wote, vous devez créer un compte. Wote
        demande certaines informations personnelles: une adresse e-mail valide
        et un mot de passe qui est utilisé pour protéger votre compte contre
        tout accès non-autorisé. Les champs &laquo;Nom&raquo; et
        &laquo;Prénom&raquo; peuvent être requis pour le bon fonctionnement du
        logiciel, mais il n&apos;est pas nécessaire qu&apos;ils révèlent votre
        véritable identité. <br />
        <br />
        Tout comme d&apos;autres services en ligne, wote enregistre
        automatiquement certaines informations concernant votre utilisation du
        service telles que l&apos;activité du compte (exemple: stockage occupé,
        nombre d&apos;entrées, mesures prises), les données données affichées ou
        cliquées (exemple: liens, éléments de l&apos;interface utilisateur), et
        d&apos;autres informations pour vous identifier (exemple: type de
        navigateur, adresse IP, date et heure de l&apos;accès, URL de
        référence).
        <br />
        <br />
        Nous utilisons ces informations en interne pour vous améliorer
        l&apos;interface utilisateur des services wote et maintenir une
        expérience utilisateur cohérente et fiable.
        <br />
        <br />
        Ces données ne sont ni vendues, ni transmises à des tiers.
      </TextParagraph>
    </MainContainerWithHeader>
  );
};

export default TermsOfUse;
