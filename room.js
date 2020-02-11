const Room = function(area){
  this.area =  area;
  this.paintedArea = 0;
};

Room.prototype.isItPainted = function () {
  if (this.paintedArea == 0){
    return false;
  } else {
    return true;
  }
};

Room.prototype.paintASquareMeter= function (litres) {
  this.paintedArea += litres;
};

module.exports = Room;
