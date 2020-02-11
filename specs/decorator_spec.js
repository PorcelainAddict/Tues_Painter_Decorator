const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function() {
  beforeEach(function(){
    decorator = new Decorator ();
    paintCan = new Paint(1);
    paintCan2 = new Paint(5);
    paintCan3 = new Paint(5);
    room = new Room(10);
  });

  it('should start with an empty paint stock', function(){
    const actual = decorator.paintStock.length;
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should be able to add a can of paint to paint stock', function() {
    decorator.addACan(paintCan);
    const actual = decorator.paintStock.length;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate total litres of paint in stock', function() {
    decorator.addACan(paintCan);
    decorator.addACan(paintCan2);
    const actual = decorator.totalLitres();
    const expected = 6;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate if it has enough paint to paint a room', function() {
    decorator.addACan(paintCan);
    decorator.addACan(paintCan2);
    decorator.addACan(paintCan3);
    const actual = decorator.hasEnoughPaint(room);
    const expected = true;
    assert.strictEqual(actual, expected);
  })

  it('should be able to paint room if has enough paint in stock', function() {
    decorator.addACan(paintCan);
    decorator.addACan(paintCan2);
    decorator.addACan(paintCan3);
    decorator.paintRoom(room);
    const actual = room.paintedArea;
    const expected = room.area;
    assert.strictEqual(actual, expected);


  })
});
