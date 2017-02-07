import angular from 'angular';
import uiRouter from 'angular-ui-router';

import 'angular-ui-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

import {techsModule} from './app/techs/index';
import {citiesModule} from './app/cities/index';

import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.scss';

import { Visualizer } from 'ui-router-visualizer';

function uiRouterConfig($uiRouter){
  var pluginInstance = $uiRouter.plugin(Visualizer);
}

uiRouterConfig.$inject = ['$uiRouter'];

angular
  .module('app', [techsModule, citiesModule, uiRouter, 'ui.bootstrap'])
  .config(routesConfig)
  .component('app', main)
  .run(uiRouterConfig);
