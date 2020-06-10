import React from 'react';

import { Button, MainWrapper } from '../styles/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainWrapper>
          <h2>Page Login</h2>
          <Button>Bouton</Button>
          <Button>Primary</Button>
        </MainWrapper>
      </div>
    );
  }
}

export default Login;
