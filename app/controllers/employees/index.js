import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleOnConfirm: function(employee) {
      var employeeId = employee.get('id');

      Ember.$('.delete__confirm').css('visibility', 'hidden');
      Ember.$('.delete__button').css('visibility', 'visible');


      Ember.$('.delete__confirm--' + employeeId).css('visibility', 'visible');
      Ember.$('.delete__button--' + employeeId).css('visibility', 'hidden');
    },

    toggleOffConfirm: function(employee) {
      var employeeId = employee.get('id');
      Ember.$('.delete__confirm--' + employeeId).css('visibility', 'hidden');
      Ember.$('.delete__button--' + employeeId).css('visibility', 'visible');
    }
  }
});
