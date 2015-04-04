import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    deleteEmployee: function(employee) {
      employee.destroyRecord();
    },
    addEmployee: function() {
      this.store.createRecord('employee', {
        firstName: this.controller.get('firstName'),
        lastName: this.controller.get('lastName'),
        email: this.controller.get('email'),
        hourlyPlan: this.controller.get('hourlyPlan'),
        role: this.controller.get('role'),
      })
      .save()
        .then(function() {
          this.controller.setProperties({
            firstName: '',
            lastName: '',
            email: '',
            hourlyPlan: '',
            role: ''
          });
        }.bind(this));
    }
  }
});
