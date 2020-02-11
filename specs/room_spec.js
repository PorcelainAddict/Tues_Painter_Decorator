const assert = require('assert');
const Room = require('../room.js');

describe('Room', function() {
  beforeEach(function() {
    //space reserved for room something soemthing
    room = new Room (10);
  });

  it('should have an area in square meters', function() {
   const actual = room.area;
   const expected = 10;
   assert.strictEqual(actual, expected);
 });

 it('should start not painted', function() {
   const actual = room.isItPainted();
   const expected = false;
   assert.strictEqual(actual, expected)
 });

 it('should be painted', function() {
   room.paintASquareMeter(3);
   room.paintASquareMeter(3);
   room.paintASquareMeter(3);
   assert.strictEqual(9, room.paintedArea);

 });





});
