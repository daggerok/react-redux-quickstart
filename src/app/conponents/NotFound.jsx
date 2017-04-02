import React, { Component } from 'react';
import { connect } from 'react-redux';
// to able using decorators @decoratorName you need to
// yarn add -ED babel-plugin-transform-decorators-legacy
// add plugins: [ "transform-decorators-legacy" ] to .babelrc
@connect(
  state => (state, ownProps) => (
    {
      ...ownProps,
      counter: state.first,
    }
  )
)
export class StatefulNotFound extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <h1>=(</h1>
        <div>
          Sorry, but page with path <code>'{location.pathname}'</code> was not found...
        </div>
        <code>component props</code>
        <pre><code>{JSON.stringify(this.props, null, 2)}</code></pre>
      </div>
    );
  }
}
