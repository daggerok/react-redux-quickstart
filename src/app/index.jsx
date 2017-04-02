import './styles.styl';
//
import React from 'react';
import { render } from 'react-dom';
//
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
//
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';

const Root = props => <div style={{
  padding: '2%',
}} {...props}/>;

const App = props => (
  <Router>
    <Root>
      <NavBar />
      <Switch>
        <Redirect from='/home' to='/'/>
        <Route exact path='/' render={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </Root>
  </Router>
);

render(
  <App />,
  document.querySelector('#app')
);
