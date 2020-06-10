import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';
import PwdModification from '../components/PwdModification';
import TermsOfUse from '../components/TermsOfUse';
import MadeInComparisons from '../components/MadeInComparisons';
import Priorities from '../components/Priorities';
import Convictions from '../components/Convictions';
import MadeInDetails from '../components/MadeInDetails';
import AllMadeInComparisons from '../components/AllMadeInComparisons';
import Indicators from '../components/Indicators';
import IndicatorDetails from '../components/IndicatorDetails';
import IndicatorDetailsSource from '../components/IndicatorDetailsSource';
import IndicatorDetailsDatas from '../components/IndicatorDetailsDatas';
import ProductsComparisons from '../components/ProductsComparisons';
import ProductDetails from '../components/ProductDetails';
import AddProduct from '../components/AddProduct';
import AddProductManually from '../components/AddProductManually';

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
        <Route path="/profil/priorities/convictions" component={Convictions} />
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
