import wixCustomElement from 'wix-custom-element';

class LogoViewer extends HTMLElement {
constructor() {
super();
this.attachShadow({ mode: 'open' });
}

connectedCallback() {
this.render();
}

render() {
this.shadowRoot.innerHTML = `
<style>
    #logo-container {
        width: 100%;
        height: 100%;
    }
</style>
<div id="logo-container"></div>
`;

const container = this.shadowRoot.querySelector('#logo-container');

// Add Three.js code here to create and render your 3D logo
// For example, you can use a WebGLRenderer and create a scene and mesh

// Example code to create a basic Three.js scene
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
75,
container.clientWidth / container.clientHeight,
0.1,
1000
);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
requestAnimationFrame(animate);

// Add any animation or interaction logic here
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;

renderer.render(scene, camera);
}

animate();
}
}

wixCustomElement('logo-viewer', LogoViewer);
