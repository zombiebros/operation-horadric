// @flow
import * as React from 'react';

type OwnProps = {};

class Auth extends React.Component<OwnProps, void> {
  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        Auth
      </div>
    );
  }
}

export default Auth;
