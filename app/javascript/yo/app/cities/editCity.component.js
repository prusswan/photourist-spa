import EditCityController from './editCity.controller';

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
        <button class="btn btn-primary" ng-click="$ctrl.save($ctrl.city)"><i class="fa fa-save"></i><span>{{ $ctrl.city.id ? 'Update' : 'Create' }}</span></button>
      </div>
    </div>
`};
