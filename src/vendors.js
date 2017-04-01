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

if (process.env.NODE_ENV || 'development' === process.env.NODE_ENV) {
  console.log('vendors', vendors);
}
