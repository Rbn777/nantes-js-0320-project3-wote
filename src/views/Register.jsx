import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Page Register</h2>
        <h2>
          <Link to="/register/terms-of-use">
            <p>Lisez les conditions d&apos;utilisation</p>
          </Link>
        </h2>
      </div>
    );
  }
}

export default Register;
