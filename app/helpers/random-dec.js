import Ember from 'ember';

export function randomDec([low, high]/*, hash*/) {
  let floatLow = parseFloat(low);
  let floatHigh = parseFloat(high);

  return Math.random() * (floatHigh - floatLow) + floatLow;
}

export default Ember.Helper.helper(randomDec);
