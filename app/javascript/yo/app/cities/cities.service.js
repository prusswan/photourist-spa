class CitiesService {
  /** @ngInject */
  constructor($resource) {
    var city = $resource('http://localhost:3000/api/cities/:id',
      { },
      {
        index: { method: 'GET', isArray: true, responseType: 'json' },
        show:  { method: 'GET', responseType: 'json' },
        update:  { method: 'PUT', responseType: 'json' }
      }
    );

    return city;
  }

}

CitiesService.$inject = ['$resource'];

export default CitiesService
