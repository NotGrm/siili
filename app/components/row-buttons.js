import Ember from 'ember';

export default Ember.Component.extend({
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
    confirmRemove: function() {
      this.toggleProperty('isShowingConfirmation');
      this.sendAction('remove', this.get('param'));
    },
  }
});
