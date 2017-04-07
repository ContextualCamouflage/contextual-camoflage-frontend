import Ember from 'ember';

export function randomInt([low, high]/*, hash*/) {
  let intLow = parseInt(low);
  let intHigh = parseInt(high);

  return Math.floor(Math.random() * (intHigh - intLow + 1)) + intLow;
}

export default Ember.Helper.helper(randomInt);
