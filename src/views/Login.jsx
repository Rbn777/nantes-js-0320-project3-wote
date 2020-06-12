import React from 'react';

import Button from '../components/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Page Login</h2>
        <Button greenBg>Bouton</Button>
        <Button salmonBg>Bouton</Button>
        <Button blueBg>Bouton</Button>
      </div>
    );
  }
}

export default Login;
