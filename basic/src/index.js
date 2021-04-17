import * as THREE from 'three';
import './style.css';

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 1;
scene.add(mesh);

mesh.scale.x = 2;
mesh.scale.y = 0.5;
mesh.scale.z = 0.5;

mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
camera.lookAt(new THREE.Vector3(0.7, -1, 0));

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas.webgl'),
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
