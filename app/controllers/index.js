import Ember from 'ember';

const { computed } = Ember;
const { alias } = computed;

export default Ember.Controller.extend({
  queryParams: [
    'city',
    'lat',
    'lng',
    'zoom',
    'spread'
  ],

  mapHeight: alias('spread'),
  mapWidth: alias('spread'),

  center: computed('lat', 'lng', {
    get() {
      let { lat, lng } = this.getProperties('lat', 'lng');
      return [ parseFloat(lat), parseFloat(lng) ];
    }
  }),

  renderPoints: false,

  showDepression: true,
  showAnxiety: true,
  showBipolar: true,
  showDementia: true,
  showAdhd: true,
  showOcd: true,
  showPtsd: true,
  showSchizophrenia: true,
  showAutism: true,

  depressionCount: alias('model.Depression'),
  bipolarCount: alias('model.Bipolar'),
  adhdCount: alias('model.ADHD'),
  ocdCount: alias('model.OCD'),
  ptsdCount: alias('model.PTSD'),
  anxietyCount: alias('model.Anxiety'),
  dementiaCount: alias('model.Dementia'),
  schizophreniaCount: alias('model.Schizophrenia'),
  autismCount: alias('model.Autism'),

  actions: {
    setBounds(e) {
      let map = e.target;
      let mapBounds = map.getBounds();
      let southwest = mapBounds._southWest;
      let northeast = mapBounds._northEast;
      this.set('mapHeight', northeast.lat - southwest.lat);
      this.set('mapWidth', northeast.lng - southwest.lng);
    }
  }
});
