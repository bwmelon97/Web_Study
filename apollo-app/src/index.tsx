import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from 'react-router-dom';

import client from "./apollo";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client} >
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
