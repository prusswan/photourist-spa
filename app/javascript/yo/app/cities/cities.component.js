// class CitiesController {
//   constructor(citiesService) {
//     this.citiesService = citiesService;
//     this.cities = citiesService.index();
//   }

//   showAll() {
//     this.citiesService.get();
//   }

//   cities() {
//     return showAll();
//   }
// }

// CitiesController.$inject = ['CitiesService'];

export const cities = {
  bindings: { cities: '<' },
  template: require('./cities.html')
};
