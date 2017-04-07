import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.$.getJSON('https://con-camo-api.herokuapp.com/api/v1/illnesses/'+params.illness_id);
  }
});
