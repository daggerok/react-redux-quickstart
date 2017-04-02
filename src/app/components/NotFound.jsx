import React from 'react';

export const NotFound = props => <div>
  <h1>=(</h1>
  <div>Sorry, but page with path <code>'{props.location.pathname}'</code> was not found...</div>
</div>;
