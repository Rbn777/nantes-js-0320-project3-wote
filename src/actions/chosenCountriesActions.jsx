export const addCountryToState = (
  idCountry,
  nameCountry,
  scoreCountry,
  frNameCountry
) => {
  return {
    type: 'ADD_COUNTRY',
    idCountry,
    nameCountry,
    scoreCountry,
    frNameCountry,
  };
};

export const deleteCountryFromState = (idCountry) => {
  return {
    type: 'DELETE_COUNTRY',
    idCountry,
  };
};

export const deleteAllCountriesFromState = () => {
  return {
    type: 'DELETE_ALL_COUNTRIES',
  };
};
