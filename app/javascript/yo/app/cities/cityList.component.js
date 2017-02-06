/**
 * This component renders a list of cities.
 *
 * At the top is a "new city" button.
 * Each list item is a clickable link to the `cities.city` details substate
 */
export const cityList = {
  bindings: { cities: '<' },

  template: `

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Created at</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="city in $ctrl.cities" ui-sref-active="selected">
          <td><a ui-sref=".city({cityId: city._id})">{{ city.id }}</a></td>
          <td>{{ city.name }}</td>
          <td>{{ city.created_at }}</td>
          <td>
            <button class="btn btn-default btn-xs" ui-sref=".edit">Edit</button>
            <div class="btn btn-xs btn-danger"><a>Destroy</div>
          </td>
        </tr>
      </tbody>
    </table>

    <ul class="selectlist list-unstyled flex nogrow">
      <li>
        <!-- This link is a relative ui-sref to the cities.new state. -->
        <a ui-sref=".new">
          <button class="btn btn-primary">
            <i class="fa fa-pencil"></i><span>New city</span>
          </button>
        </a>
      </li>
    </ul>
`
};
