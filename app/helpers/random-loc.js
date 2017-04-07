import Ember from 'ember';

let randDec = (low, high) => {
  let floatLow = parseFloat(low);
  let floatHigh = parseFloat(high);

  return Math.random() * (floatHigh - floatLow) + floatLow;
};

export function randomLoc([ center, height, width]/*, hash */) {
  let randY = randDec(center[0] - height, center[0] + height);
  let randX = randDec(center[1] - width, center[1] + width);

  return [ randY, randX ];
}

export default Ember.Helper.helper(randomLoc);
