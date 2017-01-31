import angular from 'angular';
import 'angular-mocks';
import Cities from './cities';

describe('Cities service', () => {
  beforeEach(() => {
    angular
      .module('Cities', [])
      .service('Cities', Cities);
    angular.mock.module('Cities');
  });

  it('should', angular.mock.inject(Cities => {
    expect(Cities.getData()).toEqual(3);
  }));
});
