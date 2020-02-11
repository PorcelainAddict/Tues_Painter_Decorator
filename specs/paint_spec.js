const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function() {
  beforeEach(function() {
    paint = new Paint (1);
    emptyCan = new Paint (0);
  });


  it('should have a number of litres of paint', function () {
    const actual = paint.litres;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to check if it is empty', function () {
    const actual = paint.isItEmpty();
    const expected = false;
    assert.strictEqual(actual, expected);
    const actual2 = emptyCan.isItEmpty();
    const expected2 = true;
    assert.strictEqual(actual2, expected2);
  });

  it('should be to empty itself', function() {
     paint.emptyPaintCan();
     const actual = paint.isItEmpty();
     const expected = true;
     assert.strictEqual(actual, expected);
  });

});
