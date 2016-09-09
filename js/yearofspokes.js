var _angnoise, _radiusnoise;
var _xnoise, _ynoise;
var _angle = -Math.PI/2;
var _radius;
var _strokeCol = 254;
var _strokeChange = -1;

_angnoise = Math.random(10);
_radiusnoise = Math.random(10);
_xnoise = Math.random(10);
_ynoise = Math.random(10);


// void draw() {
//   _radiusnoise += 0.005;
//   _radius = (noise(_radiusnoise) * 250) + 1;

//   _angnoise += 0.005;
//   _angle +=(noise(_angnoise)*6) - 3;
//   if(_angle > 360) { _angle-=360; }
//   if(_angle < 0) { _angle+=360; }

//   _xnoise += 0.01;
//   _ynoise += 0.01;
//   float centerX = width/2 + (noise(_xnoise) * 100) - 50;
//   float centerY = height/2 +  (noise(_ynoise) * 100) - 50;

//   float rad = radians(_angle);

//   float x1 = centerX + (_radius * cos(rad));
//   float y1 = centerY + (_radius * sin(rad));

//   float opprad = rad + PI;
//   float x2 = centerX + (_radius * cos(opprad));
//   float y2 = centerY + (_radius * sin(opprad));

//   _strokeCol += _strokeChange;
//   if(_strokeCol > 254) {_strokeChange = -1; }
//   if( _strokeCol < 0) {_strokeChange = 1; }
//   stroke(_strokeCol,60);
//   strokeWeight(1);

//   line(x1, y1, x2, y2);
// }