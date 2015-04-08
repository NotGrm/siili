import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNames: ['table-row'],

  roles: ['employee', 'hr', 'administrator'],

  actions: {
    showEdit: function() {
      this.toggleProperty('isEditing');
    },
    hideEdit: function() {
      this.toggleProperty('isEditing');
    },
    editModel: function() {
      this.toggleProperty('isEditing');
      this.sendAction('editModel', this.get('model'));
    },
    deleteModel: function() {
      this.sendAction('deleteModel', this.get('model'));
    }
  }
});
