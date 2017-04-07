import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('testimonials');

  // forms
  this.route('tell-your-story');
  this.route('personal-anecdote');
  this.route('research-info');
  this.route('illnesses', function() {
    this.route('show', {path: '/:illness_id'});
  });
});

export default Router;
