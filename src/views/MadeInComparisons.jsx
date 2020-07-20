import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  addCountryToState,
  deleteAllCountriesFromState,
  deleteCountryFromState,
} from '../actions/chosenCountriesActions';

import Button from '../components/Button';
import BurgerMenu from '../components/BurgerMenu';
import ComparisonCard from '../components/ComparisonCard';
import { SectionTitle } from '../styles/texts';
import {
  MainContainerWithHeader,
  MainHeader,
  FlexDiv,
  SelectWrapper,
} from '../styles/containers';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  inputRoot: {
    color: 'white',
    borderColor: 'white',
    '& .MuiOutlinedInput-notchedOutline': { border: '1px solid white' },
    '&:hover MuiOutlinedInput-notchedOutline': { border: '6px solid white' },
  },
}));

const MadeInComparisons = (props) => {
  const [allCountries, setAllCountries] = useState([]);
  const [value, setValue] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const classes = useStyles();

  const { chosenCountries } = props;

  const addCountry = () => {
    props.addCountryToState(value.id, value.name, Math.round(value.score));
  };

  const removeCountry = (id) => {
    props.deleteCountryFromState(id);
  };

  const removeAllCountries = () => {
    props.deleteAllCountriesFromState();
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        const { data } = await Axios.get(`https://wote.website/api/countries`, {
          headers: { Accept: 'application/json' },
        });
        setAllCountries(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getCountries();
  }, []);

  if (isLoading) {
    return (
      <div className={classes.root}>
        <CircularProgress style={{ color: '#6d6b6c' }} />
      </div>
    );
  }

  if (error) {
    return <div>Error !</div>;
  }

  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Comparer les origines de fabrication</SectionTitle>
      </MainHeader>
      <BurgerMenu />
      <FlexDiv className="selectSide">
        <Autocomplete
          value={value}
          classes={{ inputRoot: classes.inputRoot }}
          onChange={(event, newCountry) => {
            setValue(newCountry);
          }}
          id="combo-box-demo"
          options={allCountries}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <TextField {...params} label="Search" variant="outlined" />
          )}
        />
        <Button withBorder minSize sideMargin functionToClick={addCountry}>
          +
        </Button>
      </FlexDiv>
      {chosenCountries.map((country) => (
        <ComparisonCard
          key={country.idCountry}
          idCountry={country.idCountry}
          name={country.nameCountry}
          note={country.scoreCountry}
          removeCountry={() => removeCountry(country.idCountry)}
        />
      ))}
      <SelectWrapper mgTop className="bottomButtons">
        <Button withBorder minSize functionToClick={removeAllCountries}>
          Vider la liste
        </Button>
        <Link to="/detailed-comparison">
          <Button withBorder minSize maxSideMargin className="rightButton">
            Comparaison détaillée
          </Button>
        </Link>
      </SelectWrapper>
    </MainContainerWithHeader>
  );
};

const mapStateToProps = (state) => {
  return {
    chosenCountries: state.chosenCountries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCountryToState: (idCountry, nameCountry, scoreCountry) =>
      dispatch(addCountryToState(idCountry, nameCountry, scoreCountry)),
    deleteCountryFromState: (idCountry) =>
      dispatch(deleteCountryFromState(idCountry)),
    deleteAllCountriesFromState: () => dispatch(deleteAllCountriesFromState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MadeInComparisons);
MadeInComparisons.propTypes = {
  addCountryToState: PropTypes.func.isRequired,
  deleteAllCountriesFromState: PropTypes.func.isRequired,
  deleteCountryFromState: PropTypes.func.isRequired,
  chosenCountries: PropTypes.arrayOf.isRequired,
};
