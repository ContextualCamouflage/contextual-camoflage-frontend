import Ember from 'ember';

export function range([countTo]/*, hash*/) {
  let range = [];

  for (let i = 1; i <= countTo; i++) {
    range.push(i);
  }

  return range;
}

export default Ember.Helper.helper(range);
