import 'normalize.css/normalize.css';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const vendors = [
  React,
  Component,
  render,
  createStore,
  combineReducers,
  Provider,
  connect,
  Router,
  Route,
  Switch,
  Link
];

if ('development' === process.env.NODE_ENV) {
  console.log('import vendors', vendors);
}
