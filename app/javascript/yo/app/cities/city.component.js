/**
 * This component renders details for a single city
 *
 * A button messages the city by linking to `mymessages.compose` state passing the email as a state parameter.
 * Another button edits the city by linking to `citys.city.edit` state.
 */

export const cityView = {
  bindings: {city: '<'},

  template: `
    <div class="city">

      <city-detail city="$ctrl.city"></city-detail>

      <!-- This button has a relative ui-sref to the cities.edit state. -->
      <button class="btn btn-primary" ui-sref=".edit">
        <i class="fa fa-pencil"></i><span>Edit city</span>
      </button>

    </div>
`};
