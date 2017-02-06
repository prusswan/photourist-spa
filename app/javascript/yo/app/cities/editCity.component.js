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
    this.Cities = CitiesService;
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

  /** Ask for confirmation, then delete the citie, then go to the grandparent state ('cities') */
  remove(city) {
    this.Cities.remove(city)
        .then(() => this.canExit = true)
        .then(() => this.$state.go("^.^", null, { reload: true }));
  }

  /** Save the city, then go to the grandparent state ('cities') */
  save(city) {
    this.Cities.save(city)
        .then(() => this.canExit = true)
        .then(() => this.$state.go("^", null, { reload: true }));
  }
}

/**
 * This component edits a single city.
 *
 * Editable fields are bound to the city.
 * A button cancels editing and returns to the citie view by linking to the parent state using `^` relative addressing.
 * Another button saves the citie.
 * A third button deletes the bcitie.
 */
export const editCity =  {
  bindings: { pristineCity: '<' },

  controller: EditCityController,

  template: `
    <div class="city">
      <div class="details">
        <div><label>Name</label>   <input type="text" ng-model="$ctrl.city.name"></div>
      </div>

      <hr>

      <div>
        <!-- This button's ui-sref relatively targets the parent state, i.e., cities.city -->
        <button class="btn btn-primary" ui-sref="^"><i class="fa fa-close"></i><span>Cancel</span></button>
        <button class="btn btn-primary" ng-click="$ctrl.save($ctrl.city)"><i class="fa fa-save"></i><span>Save</span></button>
        <button class="btn btn-primary" ng-click="$ctrl.remove($ctrl.city)"><i class="fa fa-close"></i><span>Delete</span></button>
      </div>
    </div>
`};
