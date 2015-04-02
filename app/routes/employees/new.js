import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('employee');
  },

  actions: {
    submit: function() {
      this.modelFor('employees.new').save().then(function() {
        this.transitionTo('employees');
      }.bind(this));
    },

    willTransition: function() {
      this.modelFor('employees.new').rollback();
      return true;
    }
  }
});
