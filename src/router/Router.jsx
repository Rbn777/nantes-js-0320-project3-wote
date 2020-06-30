import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../views/Login';
import Register from '../views/Register';
import PwdModification from '../views/PwdModification';
import TermsOfUse from '../views/TermsOfUse';
import MadeInComparisons from '../views/MadeInComparisons';
import Priorities from '../views/Priorities';
import Convictions from '../views/Convictions';
import MadeInDetails from '../views/MadeInDetails';
import AllMadeInComparisons from '../views/AllMadeInComparisons';
import Indicators from '../views/Indicators';
import IndicatorDetails from '../views/IndicatorDetails';
import IndicatorDetailsSource from '../views/IndicatorDetailsSource';
import IndicatorDetailsDatas from '../views/IndicatorDetailsDatas';
import ProductsComparisons from '../views/ProductsComparisons';
import ProductDetails from '../views/ProductDetails';
import AddProduct from '../views/AddProduct';
import AddProductManually from '../views/AddProductManually';

const ProjectRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/pwd-modification" component={PwdModification} />
        <Route path="/register/terms-of-use" component={TermsOfUse} />
        <Route path="/made-in-comparisons" component={MadeInComparisons} />
        <Route exact path="/profil/priorities" component={Priorities} />
        <Route
          path="/profil/priorities/convictions/:type"
          component={Convictions}
        />
        <Route path="/made-in-details" component={MadeInDetails} />
        <Route path="/indicator-details" component={IndicatorDetails} />
        <Route
          path="/indicator-details/source"
          component={IndicatorDetailsSource}
        />
        <Route
          path="/indicator-details/datas"
          component={IndicatorDetailsDatas}
        />
        <Route
          path="/all-made-in-comparisons"
          component={AllMadeInComparisons}
        />
        <Route path="/indicators" component={Indicators} />
        <Route
          exact
          path="/products-comparisons"
          component={ProductsComparisons}
        />
        <Route
          path="/products-comparisons/product-details"
          component={ProductDetails}
        />
        <Route
          path="/products-comparisons/add-product"
          component={AddProduct}
        />
        <Route
          path="/products-comparisons/add-product-manually"
          component={AddProductManually}
        />
      </Switch>
    </Router>
  );
};

export default ProjectRouter;
