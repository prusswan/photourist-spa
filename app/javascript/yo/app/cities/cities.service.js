class CitiesService {
  /** @ngInject */
  constructor($resource) {
    var city = $resource('http://localhost:3000/api/cities/:id',
      { id: '@id' },
      {
        index: { method: 'GET', isArray: true, responseType: 'json' },
        show:  { method: 'GET', responseType: 'json' }
      }
    );

    return city;
  }

}

CitiesService.$inject = ['$resource'];

export default CitiesService
