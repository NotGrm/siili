import Ember from 'ember';

export default Ember.Controller.extend({
  role: 'employee',

  actions: {
    showForm: function() {
      this.toggleProperty('isAdding');
    },
    hideForm: function() {
      this.toggleProperty('isAdding');
    },
    addEmployee: function() {
      this.toggleProperty('isAdding');
      return true;
    }
  }
});
