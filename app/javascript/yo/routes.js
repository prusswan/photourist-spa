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
      template: '<ui-view/>'
    })
    .state(citiesState)
    .state(editCityState)
    .state(newCityState)
    .state(viewCityState);
}

routesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
