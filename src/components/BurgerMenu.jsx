import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './BurgerMenu.css';

const BurgerMenu = () => {
  return (
    <Menu right width="80%">
      <p>email@dur.com</p>
      <Link to="/profil/priorities">Mes Convictions et priorités</Link>
      <Link to="/made-in-comparisons">
        Comparer des origines de fabrication
      </Link>
      <Link to="/all-made-in-comparisons">Comparer tous les pays</Link>
      <Link to="/indicators">Explorer les indicateurs</Link>
      <Link to="/products-comparisons">Comparer des produits</Link>
      <Link to="/">Se déconnecter</Link>
      <Link to="/pwd-modification">Modifier le mot de passe</Link>
      <Link to="/register/terms-of-use">
        Consulter les conditions d&apos;utilisation
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
