import 'normalize.css/normalize.css';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

const vendors = [
  React,
  Component,
  render,
  createStore,
  combineReducers,
  Provider,
  connect
];

if (DEVELOPEMNT) {
  console.log('import vendors', vendors);
}
