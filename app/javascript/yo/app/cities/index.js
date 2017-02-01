import angular from 'angular';
import ngResource from 'angular-resource';

import CitiesService from './cities.service';
import {cities} from './cities';

export const citiesModule = 'cities';

angular
  .module(citiesModule, ['ngResource'])
  .service('CitiesService', CitiesService)
  .component('cities', cities);
