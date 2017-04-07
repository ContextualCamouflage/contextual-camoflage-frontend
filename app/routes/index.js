import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    city: {
      refreshModel: true
    },
    lat: {
      refreshModel: false
    },
    lng: {
      refreshModel: false
    },
    zoom: {
      refreshModel: false
    }
  },

  model(params) {
    return Ember.$.getJSON('/api/v1/submissions', { city: params.city }); }
});
