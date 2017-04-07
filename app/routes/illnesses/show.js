import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.$.getJSON('/api/v1/illnesses/'+params.illness_id);
  }
});
