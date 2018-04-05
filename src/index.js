import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: 'https://nx9zvp49q7.lp.gql.zone/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  // $FlowIgnore
  document.getElementById('root'),
);

registerServiceWorker();
