import angular from 'angular';
import ngResource from 'angular-resource';

import CitiesService from './cities.service';

// import {contactDetail} from "./contactDetail.component";

import {cityView} from "./city.component";

import EditCityController from "./editCity.controller";
import {editCity} from "./editCity.component";

import {cityList} from "./cityList.component";
import {cities} from './cities.component';

export const citiesModule = 'cities';

angular
  .module(citiesModule, ['ngResource'])
  .service('CitiesService', CitiesService)
  .component('editCity', editCity)
  .component('cityView', cityView)
  .component('cityList', cityList)
  .component('cities', cities);
