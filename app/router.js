import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('testimonials');
  this.route('disorders', function() {
    this.route('show', { path: '/:disorder_id' });
  });
  this.route('disorder-input');
});

export default Router;
