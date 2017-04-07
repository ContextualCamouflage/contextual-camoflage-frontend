import Ember from 'ember';

let randDec = (low, high) => {
  let floatLow = parseFloat(low);
  let floatHigh = parseFloat(high);

  return Math.random() * (floatHigh - floatLow) + floatLow;
};

export function randomLoc([ lat, lng, height, width]/*, hash */) {
  let floatLat = parseFloat(lat);
  let floatLng = parseFloat(lng);
  let floatHeight = parseFloat(height);
  let floatWidth = parseFloat(width);

  let randY = randDec(floatLat - floatHeight, floatLat + floatHeight);
  let randX = randDec(floatLng - floatWidth, floatLng + floatWidth);

  return [ randY, randX ];
}

export default Ember.Helper.helper(randomLoc);
