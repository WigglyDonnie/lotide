const middle = require('../middle');
const assertArraysEqual = require("../assertArraysEqual");



assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);

