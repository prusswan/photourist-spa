import CitiesService from './cities.service';

/**
 * This state displays the city list.
 * It also provides a nested ui-view (viewport) for child states to fill in.
 *
 * The cities are fetched using a resolve.
 */
export const citiesState = {
  parent: 'app', // declares that 'cities' is a child of 'app'
  name: "cities",
  url: "/cities",
  resolve: {
    // Resolve all the cities.  The resolved cities are injected into the controller.
    cities: (CitiesService) => CitiesService.index()
  },
  data: { requiresAuth: true },
  component: 'cities'
};

/**
 * This state displays a single city.
 * The citie to display is fetched using a resolve, based on the `citieId` parameter.
 */
export const viewCityState = {
  name: 'cities.city',
  url: '/:cityId',
  resolve: {
    // Resolve the citie, based on the citieId parameter value.
    // The resolved citie is provided to the citieComponent's citie binding
    citie: (CitiesService, $transition$) => CitiesService.get($transition$.params().cityId)
  },
  component: 'cityView'
};


/**
 * This state allows a user to edit a citie
 *
 * The citie data to edit is injected from the parent state's resolve.
 *
 * This state uses view targeting to replace the parent ui-view (which would normally be filled
 * by 'cities.citie') with the edit citie template/controller
 */
export const editCityState = {
  name: 'cities.city.edit',
  url: '/edit',
  views: {
    // Relatively target the grand-parent-state's $default (unnamed) ui-view
    // This could also have been written using ui-view@state addressing: $default@cities
    // Or, this could also have been written using absolute ui-view addressing: !$default.$default.$default
    '^.^.$default': {
      bindings: { pristineCity: "city" },
      component: 'editCity'
    }
  }
};

/**
 * This state allows a user to create a new citie
 *
 * The citie data to edit is injected into the component from the parent state's resolve.
 */
export const newCityState = {
  name: 'cities.new',
  url: '/new',
  component: 'editCity'
};
