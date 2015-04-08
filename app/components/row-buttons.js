import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  classNames: ['table-row__col--actions'],
  isShowingConfirmation: false,

  mouseLeave: function(event, view) {
    this.set('isShowingConfirmation', false);
  },

  actions: {
    showConfirmation: function() {
      this.toggleProperty('isShowingConfirmation');
    },
    hideConfirmation: function() {
      this.toggleProperty('isShowingConfirmation');
    },
    editRow: function() {
      this.sendAction('edit', this.get('param'));
    },
    deleteRow: function() {
      this.toggleProperty('isShowingConfirmation');
      this.sendAction('remove', this.get('param'));
    },
  }
});
