const Paint = function(litres){
  this.litres = litres;
};

Paint.prototype.isItEmpty = function () {
  if (this.litres === 0) {
    return true;
  } else {
    return false;
  }

};


Paint.prototype.emptyPaintCan = function () {
  this.litres = 0 
};



module.exports = Paint;
