import 'normalize.css/normalize.css';
import 'primereact/resources/primeng.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//import { ComponentName } from 'primereact/components/componentname/componentname';
import {
  Accordion,
  AccordionTab,
} from 'primereact/components/accordion/Accordion';

const vendors = [
  React,
  Component,
  render,
  Router,
  Route,
  Switch,
  Link,
  Accordion,
  AccordionTab,
];

if ('development' === process.env.NODE_ENV) {
  console.log('import vendors', vendors);
}
