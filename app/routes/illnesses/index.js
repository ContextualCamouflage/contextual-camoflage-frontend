import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('https://con-camo-api.herokuapp.com/api/v1/illnesses');
  }
});
