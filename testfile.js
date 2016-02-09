var controls = new function() {
            this.rotationSpeed = 0.02;
            this.bouncingSpeed = 0.03;
        }
var gui = new dat.GUI();
        gui.add(controls, 'rotationSpeed',0,0.5);
        gui.add(controls, 'bouncingSpeed',0,0.5);
function render() {
            ...
         cube.rotation.x += controls.rotationSpeed;
            cube.rotation.y += controls.rotationSpeed;
            cube.rotation.z += controls.rotationSpeed;
            step+=controls.bouncingSpeed;
            sphere.position.x = 20+( 10*(Math.cos(step)));
            sphere.position.y = 2 +( 10*Math.abs(Math.sin(step)));
            ...
        }
