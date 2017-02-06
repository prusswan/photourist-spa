import {citiesState, editCityState, newCityState, viewCityState} from "./app/cities/cities.states";

export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/cities');

  $stateProvider
    .state({
      name: 'app',
      redirectTo: 'cities',
      component: 'cities'
    })
    .state(citiesState)
    .state(editCityState)
    .state(newCityState)
    .state(viewCityState);
}
