function pythagorean(a, b){
  return(Math.sqrt(a * a + b * b));
};

class Vec2{
  constructor(x, y){
    this.x = x;
    this.y = y;
  };

  mag(){
    return(pythagorean(this.x, this.y));
  };

  normalize(){
    this.x /= this.mag();
    this.y /= this.mag();
  };
};

Vec2.prototype.Add = function(a){
  this.x += a.x;
  this.y += a.y;
  return(new Vec2(this.x, this.y));
};

Vec2.prototype.Sub = function(a){
  this.x -= a.x;
  this.y -= a.y;
  return(new Vec2(this.x, this.y));
};

Vec2.prototype.Mul = function(a){
  this.x *= a;
  this.y *= a;
  return(new Vec2(this.x, this.y));
};

function sum(a, b){
  return(new Vec2(a.x + b.x, a.y + b.y));
};

function dif(a, b){
  return(new Vec2(a.x - b.x, a.y - b.y));
};

function pro(a, b){
  return(new Vec2(a.x * b, a.y * b));
};

function deg2Vec(deg){
  let rad = deg / rad2Deg;
  return(new Vec2(Math.cos(rad), Math.sin(rad)));
};

function vec2Deg(v){
  let a = Math.atan2(v.y, v.x)
  return(a * rad2Deg);
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}