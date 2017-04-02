import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      disorders: this.get('store').findAll('disorder')
    });
  }
});
