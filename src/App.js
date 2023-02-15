import React from 'react';

import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';

import { routes } from './config/Router';

import './App.css';
import Layout from './components/Layout';
import Home from '../src/pages/Home'
import Detail from "../src/pages/Detail";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => ( //Iteraing through routes and adding paths
          <Route exact={route.exact} path={route.path}>
            <Layout>{route.component}</Layout>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
