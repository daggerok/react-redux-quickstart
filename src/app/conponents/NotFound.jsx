import React from 'react';
import { connect } from 'react-redux';

const StatelessNotFound = props => <div>
  <h1>=(</h1>
  <div>
    Sorry, but page with path <code>'{props.location.pathname}'</code> was not found...
  </div>
  <code>component props</code>
  <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
</div>;

export const StatefulNotFound = connect(
  state => (state, ownProps) => (Object.assign({}, ownProps, { counter: state.first }))
)(StatelessNotFound);
