export const addCountryToState = (idCountry, nameCountry, scoreCountry) => {
  return {
    type: 'ADD_COUNTRY',
    idCountry,
    nameCountry,
    scoreCountry,
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
