import * as THREE from 'three';
import gsap from 'gsap';
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

// Animation
// const clock = new THREE.Clock();

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });

const frameLoop = () => {
  // The rotation speed will be the same on every screen and every computers regardless of the frame rate.
  // const elapsedTime = clock.getElapsedTime();
  // // update the cube
  // camera.position.x = Math.cos(elapsedTime);
  // camera.position.y = Math.sin(elapsedTime);
  // camera.lookAt(mesh.position);

  renderer.render(scene, camera);
  window.requestAnimationFrame(frameLoop);
};
frameLoop();
