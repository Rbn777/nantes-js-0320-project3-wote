import { combineReducers } from 'redux';
import userReducer from './reducer_users';
import chosenCountriesReducer from './reducer_chosen_countries';

const rootReducer = combineReducers({
  user: userReducer,
  chosenCountries: chosenCountriesReducer,
});

export default rootReducer;
