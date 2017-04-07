import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "https://con-camo-api.herokuapp.com",
  namespace: "api/v1"
});
