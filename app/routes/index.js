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
    },
    spread: {
      refreshModel: true
    }
  },

  model(params) {
    return Ember.$.getJSON('https://con-camo-api.herokuapp.com/api/v1/submissions', { city: params.city }); }
});
