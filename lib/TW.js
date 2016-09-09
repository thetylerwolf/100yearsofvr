window.TW = window.TW || {};

var TW = window.TW

TW.pick = function(arr) {
    var i = Math.floor(Math.random() * arr.length);
    return arr[i];
};

TW.randomColorArray = function(numColors) {
    var arr = [];
    var r, g, b;
    for(var i=0; i<numColors; i++) {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        arr.push('rgb(' + r + ',' + g + ',' + b + ')');
    }
    return arr;
};

TW.colors = {
    submarine: ['#dc3522', '#d9cb9e', '#374140', '#2a2c2b', '#1e1e20'],
    designed: ['#43b6b2','#f9951e','#f2f1f2','#334c70','#f12e26'],
    getSprung: ['#a991e8','#ffb4bb','#acf7ff','#a2e891','#ffedae'],
    maki: ['#261f27','#fee169','#cdd452','#f9722e','#c9313d'],
    pooh: ["rgb(16, 91, 99)", "rgb(255, 250, 213)", "rgb(255, 211, 78)", "rgb(219, 158, 54)", "rgb(189, 73, 50)"],
    doge: ["rgb(70, 137, 102)", "rgb(255, 240, 165)", "rgb(255, 176, 59)", "rgb(182, 73, 38)", "rgb(142, 40, 0)"],
    overSaturated: ["rgb(46, 9, 39)", "rgb(217, 0, 0)", "rgb(255, 45, 0)", "rgb(255, 140, 0)", "rgb(4, 117, 111)"],
    darkRainbow: ["rgb(14, 61, 89)", "rgb(136, 166, 27)", "rgb(242, 159, 5)", "rgb(242, 92, 5)", "rgb(217, 37, 37)"],
    firefly: ["rgb(13, 28, 51)", "rgb(23, 55, 60)", "rgb(43, 104, 50)", "rgb(79, 147, 0)", "rgb(161, 215, 0)"],
    laboratory: ["rgb(255, 254, 252)", "rgb(226, 227, 223)", "rgb(81, 91, 94)", "rgb(46, 50, 51)", "rgb(202, 242, 0)"],
    random: TW.randomColorArray(5)
}

TW.randomColorGroup = function() {
    var themes = Object.keys(TW.colors);
    var group = TW.pick(themes);

    return TW.colors[group];
};
