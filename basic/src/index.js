import * as THREE from 'three';
import './style.css';

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas.webgl'),
});
renderer.setSize(sizes.width, sizes.height);

let time = Date.now();

// Animation
const frameLoop = () => {
  // The rotation speed will be the same on every screen and every computers regardless of the frame rate.
  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;
  // update the cube
  mesh.rotation.y += -0.001 * deltaTime;

  renderer.render(scene, camera);
  window.requestAnimationFrame(frameLoop);
};
frameLoop();
