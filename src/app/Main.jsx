import React from 'react';
import { render } from 'react-dom';
//
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//
import { store } from './redux/store';
import { add } from './redux/first/actions';

const mapStateToProps = state => ({
  // // because of combineReducer, see ./redux/first/reducer.js
  // counter: state,
  counter: state.first,
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(add(1))
  }
});

const StatelessApp = ({ counter, increment, }) => (
  <Router>
    <StylingContainer>
      <Route exact path='/' render={() => <div onClick={increment}>
        Hello, you have clicked {counter} times!
      </div>}/>
    </StylingContainer>
  </Router>
);

const StylingContainer = props => <div style={{
  padding: '2%',
}} {...props}/>;

const NotFound = ({ location }) => <div>
  <h1>=(</h1>
  <div>Sorry, but page with path <code>'{location.pathname}'</code> was not found...</div>
</div>;

const StatefullApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatelessApp);

render(
  <Provider store={store}>
    <StatefullApp />
  </Provider>,
  document.querySelector('#app')
);
