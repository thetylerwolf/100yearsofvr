window.onload = initScene;

document.addEventListener('click', function() {
    if((AFRAME.utils.isMobile || AFRAME.utils.device.isMobile)()) initScene();
});

function initScene() {
    var perlin = new SimplexNoise();

    var centX = 0;
    var centY = 1.5;
    var centZ = 2;

    var x,y,z;
    var path = [];

    var noiseLines = document.getElementsByClassName('noise-line');
    var noiseLine;

    var colors = TW.pick([TW.randomColorArray(noiseLines.length), TW.randomColorGroup(), TW.randomColorGroup(), TW.randomColorGroup()]);

    for(var i=0; i<noiseLines.length; i++) {
        path = [];

        var lastx = -999;
        var lasty = -999;
        var znoise = Math.random();
        var radiusNoise = Math.random();
        var radius = 3;
        var r = Math.ceil(Math.random()*256).toString(16);
        var g = Math.ceil(Math.random()*256).toString(16);
        var b = Math.ceil(Math.random()*256).toString(16);
        if(r.length < 2) r = 0 + r;
        if(g.length < 2) g = 0 + g;
        if(b.length < 2) b = 0 + b;
        strokeColor = TW.pick(colors);

        var startAngle = Math.floor(Math.random() * 360);
        var endAngle = 1440 + Math.floor(Math.random() * 1440);
        var angleStep = 1 + (Math.random() * 3);

        for(var ang=startAngle; ang<=endAngle; ang+=angleStep) {
            znoise += 0.01;
            radiusNoise += 0.05;
            radius += 0.001;
            var thisRadius = radius + perlin.noise(radiusNoise,0);
            var rad = ang * (Math.PI/180);
            x = centX + (thisRadius * Math.cos(rad));
            y = centY + (thisRadius * Math.sin(rad));
            z = centZ + perlin.noise(znoise,0) * 5;

            var pt = [x,y,z].join(' ');
            path.push(pt);

            lastx = x;
            lasty = y;
        }

        path = path.join(', ');

        noiseLine = noiseLines[i];
        noiseLine.setAttribute('meshline', {
            color: strokeColor,
            path: path,
            draw: true,
            lineWidth: 3,
            sizeAttenuation: false,
            near: 0.1,
            far: 100,
            transparent: true,
            // blending: THREE.AdditiveAlphaBlending,
            depthTest: false
        });

    }
}
