import './styles.styl';
//
import React from 'react';
import { render } from 'react-dom';
//
import { Provider, connect } from 'react-redux';
//
import { store } from './redux/store';
import { add } from './redux/first/actions';

// const mapStateToProps = state => ({
//   // // because of combineReducer, see ./redux/first/reducer.js
//   // counter: state,
//   counter: state.first,
// });
const mapStateToProps = (state, props) => Object.assign({}, props,
  { state },
  { counter: state.first, }
);

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(add(1))
  },
});

const StatelessApp = ({ increment, counter }) => (
  <StylingContainer onClick={increment}>
    Hello, you have clicked {counter} times!
  </StylingContainer>
);

const StylingContainer = props => <div style={{
  padding: '2%',
}} {...props}/>;

const StatefulApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StatelessApp);

render(
  <Provider store={store}>
    <StatefulApp />
  </Provider>,
  document.querySelector('#app')
);
