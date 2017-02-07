/**
 * The controller for the editCity component
 *
 * This component is used by both `cities.city.edit` and `cities.new` states.
 *
 * The component makes a copy of the contact data for editing.
 * The new copy and original (pristine) copy are used to determine if the citie is "dirty" or not.
 * If the user navigates to some other state while the citie is "dirty", the `uiCanExit` component
 * hook asks the user to confirm navigation away, losing any edits.
 *
 * The Delete City button is wired to the `remove` method, which:
 * - asks for confirmation from the user
 * - deletes the resource from REST API
 * - navigates back to the cities grandparent state using relative addressing `^.^`
 *   the `reload: true` option re-fetches the cities list from the server
 *
 * The Save City button is wired to the `save` method which:
 * - saves the REST resource (PUT or POST, depending)
 * - navigates back to the parent state using relative addressing `^`.
 *   when editing an existing citie, this returns to the `cities.citie` "view citie" state
 *   when creating a new citie, this returns to the `cities` list.
 *   the `reload: true` option re-fetches the cities resolve data from the server
 */
class EditCityController {
  constructor($state, CitiesService) {
    this.$state = $state;
    // this.DialogService = DialogService;
    this.CitiesService = CitiesService;
  }

  $onInit() {
    // Make an editable copy of the pristineCity
    this.city = angular.copy(this.pristineCity);
  }

  uiCanExit() {
    if (this.canExit || angular.equals(this.city, this.pristineCity)) {
      return true;
    }

    let message = 'You have unsaved changes to this citie.';
    let question = 'Navigate away and lose changes?';
    // return this.DialogService.confirm(message, question);
    return true;
  }

  /** Ask for confirmation, then delete the city, then go to the grandparent state ('cities') */
  remove(city) {
    if (confirm('Delete?')) {
      this.CitiesService.remove({id: city.id}).$promise
          .then(() => this.canExit = true)
          .then(() => this.$state.go("cities", null, { reload: true }));
    }
  }

  /** Save the city, then go to the grandparent state ('cities') */
  save(city) {
    let promise;
    if (city.id) {
      promise = this.CitiesService.update({id: city.id}, city).$promise;
    }
    else {
      promise = this.CitiesService.save(city).$promise;
    }

    promise
        .then(() => this.canExit = true)
        .then(() => this.$state.go("^", null, { reload: true }));
  }
}

export default EditCityController
