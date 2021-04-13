const scene = new THREE.Scene();

// Create a red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Provide a camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// move the camera backwards before the rendering => done with the z-position => forward or backwards
camera.position.z = 3;
// move the camera to the right
camera.position.x = 1;
scene.add(camera);

// Render the scene
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
