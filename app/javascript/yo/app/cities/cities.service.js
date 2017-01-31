import ngResource from 'angular-resource';

class CitiesService {
  /** @ngInject */
  constructor($resource) {
    var city = $resource('http://localhost:3000/api/cities',
      {}
    );

    return city;
  }
}

CitiesService.$inject = ['$resource'];

export default CitiesService;
