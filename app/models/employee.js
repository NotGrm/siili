import DS from 'ember-data';

var Employee = DS.Model.extend({
  role: DS.attr('string'),
  firstName: DS.attr('string', {defaultValue: ''}),
  lastName: DS.attr('string', {defaultValue: ''}),
  email: DS.attr('string'),
  hourlyPlan: DS.attr('number'),

  fullName: function() {
    return this.get('firstName').capitalize() + ' ' + this.get('lastName').toUpperCase();
  }.property('firstName', 'lastName')
});

Employee.reopenClass({
  FIXTURES: [
    {
      id: 1,
      firstName: 'christophe',
      lastName: 'bartell',
      email: 'christophe.bartell@example.com',
      role: 'administrator',
      hourlyPlan: 35
    },
    {
      id: 2,
      firstName: 'kirsten',
      lastName: 'greenholt',
      email: 'kirsten.greenholt@example.com',
      role: 'hr',
      hourlyPlan: 35
    },
    {
      id: 3,
      firstName: 'anibal',
      lastName: 'lockman',
      email: 'anibal.lockman@6cure.com',
      role: 'employee',
      hourlyPlan: 35
    },
  ]
});

export default Employee;
