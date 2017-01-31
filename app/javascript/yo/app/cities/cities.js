class CitiesController {
  constructor(citiesService) {
    this.citiesService = citiesService;
  }

  showAll() {
    this.citiesService
  }

  cities() {
    return []
  }
}

CitiesController.$inject = ['CitiesService'];

export const cities = {
  template: require('./cities.html'),
  controller: CitiesController
};
