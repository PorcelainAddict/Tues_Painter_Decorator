const Decorator = function() {
  this.paintStock = [];
};

Decorator.prototype.addACan = function (can) {
  this.paintStock.push(can);
};

Decorator.prototype.totalLitres = function () {
total = 0
 for (can of this.paintStock){
  total += can.litres
}
return total;
};

Decorator.prototype.hasEnoughPaint = function (room) {
  const roomSquareMeter = room.area;
  const totalPaint = this.totalLitres();
  if (totalPaint >= roomSquareMeter) {
    return true;
  } else {
    return false;
  }
};

Decorator.prototype.paintRoom = function (room) {
  const areaToPaint = room.area;
  const totalLitres = this.totalLitres();
  if(this.hasEnoughPaint()) {
    room.paintedArea = room.area;
    
  }

};

module.exports = Decorator;
