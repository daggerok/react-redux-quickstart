import React from 'react';
//
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
//
import { NavBar } from './NavBar';
import { StatefulNotFound } from './NotFound';
//
/*
const mapStateToProps = (state, ownProps) => ({
  // // // because of combineReducer, see ../redux/first/reducer.js
  // // counter: state,
  counter: state.first,
});
*/
//
const mapStateToProps = (state, ownProps) => Object.assign({}, state, ownProps);
//
import { add, mul } from '../redux/first/actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  incr: () => {
    dispatch(add(1))
  },
  doub: () => {
    dispatch(mul(2))
  },
});
//
const Root = props => <div style={{
  padding: '2%',
}} {...props}/>;
//
const StatelessApp = ({ first, incr, doub }) => (
  <Router basepath='/' children={Root}>
    <Root>
      <NavBar/>
      <Switch>
        <Route exact path='/home' render={props => <div>
          Hello, you have clicked {first} times!
          <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
          <Route render={() => <button onClick={incr}> + </button>}/>
          <Route render={() => <button onClick={doub}> * </button>}/>
        </div>}/>
        <Redirect exact path='/' to='/home' />
        <Route component={StatefulNotFound}/>
      </Switch>
    </Root>
  </Router>
);

export const StatefulApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatelessApp);
