import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "https://con-camo-api.herokuapp.com",
  namespace: "api/v1",
  header: {
    BASIC_AUTH_USER: 'contextual@camoflage.com',
    BASIC_AUTH_PASSWORD: 'camocon2017!$'
  }
});
