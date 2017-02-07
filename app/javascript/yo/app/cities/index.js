import angular from 'angular';
import ngResource from 'angular-resource';

import CitiesService from './cities.service';

// import {contactDetail} from "./contactDetail.component";
import {cityList} from "./cityList.component";
import {cities} from './cities.component';
import {cityView} from "./city.component";
import {editCity} from "./editCity.component";


// const contactsAppModule = {
//   components: {contactView, contacts, editContact, contactDetail, contactList},
//   states: [contactsState, newContactState, viewContactState, editContactState]
// };


export const citiesModule = 'cities';

angular
  .module(citiesModule, ['ngResource'])
  .service('CitiesService', CitiesService)
  .component('editCity', editCity)
  .component('cityView', cityView)
  .component('cityList', cityList)
  .component('cities', cities);
