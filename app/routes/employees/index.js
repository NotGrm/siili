import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteEmployee: function(employee) {
      employee.destroyRecord();
    }
  }
});
