// @flow
import * as React from 'react';

type OwnProps = {
  children: React.Node,
}

const Root = (props: OwnProps) => (
  <div>
    {props.children}
  </div>
);

export default Root;
