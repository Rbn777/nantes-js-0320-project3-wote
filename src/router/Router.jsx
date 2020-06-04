import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';
import TermsOfUse from '../components/TermsOfUse';

const ProjectRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/register/terms-of-use" component={TermsOfUse} />
      </Switch>
    </Router>
  );
};

export default ProjectRouter;
