import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './BurgerMenu.css';

const BurgerMenu = (props) => {
  const { user } = props;
  return (
    <Menu right width="330px">
      <span className="email">{user.emailUser}</span>
      <Link to="/profil/priorities">Mes Convictions et priorités</Link>
      <Link to="/made-in-comparisons">
        Comparer des origines de fabrication
      </Link>
      <Link to="/all-made-in-comparisons">Comparer tous les pays</Link>
      <Link to="/indicators">Explorer les indicateurs</Link>
      <Link to="/products-comparisons">Comparer des produits</Link>
      <span className="smallLinks">
        <Link to="/">
          <p>Se déconnecter</p>
        </Link>
        <Link to="/pwd-modification">
          <p>Modifier le mot de passe</p>
        </Link>
        <Link to="/register/terms-of-use">
          <p>Consulter les conditions d&apos;utilisation</p>
        </Link>
      </span>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(BurgerMenu);
BurgerMenu.propTypes = {
  emailUser: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
