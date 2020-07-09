const initState = [];

const chosenCountriesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_COUNTRY':
      return [
        ...state,
        {
          idCountry: action.idCountry,
          nameCountry: action.nameCountry,
          scoreCountry: action.scoreCountry,
        },
      ];
    case 'DELETE_COUNTRY':
      return state.filter((item) => item.idCountry !== action.idCountry);
    case 'DELETE_ALL_COUNTRIES':
      return [];
    default:
      return state;
  }
};

export default chosenCountriesReducer;
