var coordinates = AFRAME.utils.coordinates;

AFRAME.registerComponent('meshline', {
  // Allow line component to accept vertices and color.
  schema: {
    color: { default: '#333' },

    path: {
      default: [
        { x: -0.5, y: 0, z: 0 },
        { x: 0.5, y: 0, z: 0 }
      ],

      // Deserialize path in the form of comma-separated vec3s: `0 0 0, 1 1 1, 2 0 3`.
      parse: function (value) {
        return value.split(',').map(coordinates.parse);
      },

      // Serialize array of vec3s in case someone does
      // setAttribute('line', 'path', [...]).
      stringify: function (data) {
        return data.map(coordinates.stringify).join(',');
      }
    },

    draw: { type: 'boolean' },
    resolution: {
      default: new THREE.Vector2(window.innerWidth, window.innerHeight),

      parse: function (value) {
        return new THREE.Vector2.apply(THREE, value.split(','));
      },

      stringify: function(data) {
        return data.x + ',' + data.y;
      }
    },
    lineWidth: { default: 1 },
    sizeAttenuation: { default: true },
    near: { default: 0.1 },
    far: { default: 100 },
    transparent: { default: false },
    depthTest: { default: false },
    opacity: { default: 1 }
  },

  // Create or update the line geometry.
  update: function (oldData) {
    // Add vertices to geometry.
    var geometry = new THREE.Geometry();
    this.data.path.forEach(function (vec3) {
      geometry.vertices.push(
        new THREE.Vector3(vec3.x, vec3.y, vec3.z)
      );
    });

    var line = new THREE.MeshLine();
    line.setGeometry(geometry);
    var color = new THREE.Color(this.data.color);

    var material = new THREE.MeshLineMaterial({
      color: color,
      resolution: this.data.resolution,
      lineWidth: this.data.lineWidth,
      sizeAttenuation: this.data.sizeAttenuation,
      near: this.data.near,
      far: this.data.far,
      transparent: this.data.transparent,
      depthTest: this.data.depthTest,
      opacity: this.data.opacity
      // metalness: 1
    });

    var mesh = new THREE.Mesh( line.geometry, material );

    // Apply mesh.
    this.el.setObject3D('mesh', mesh);
    this.el.object3D.material = material;
  },

  tick: function(t) {
    this.data.startTime = t > 3000 ? this.data.startTime || t : undefined;
    if(this.data.draw) {
      var time = Math.min((t - this.data.startTime)/60000, 1)
      this.el.object3D.material.uniforms.visibility.value = time;
    }
  },

  // Remove the line geometry.
  remove: function () {
    this.el.removeObject3D('mesh');
  }
});