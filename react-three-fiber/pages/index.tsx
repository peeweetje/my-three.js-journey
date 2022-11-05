import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Cube from './components/cube';
import Plane from './components/plane';

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-pink-700 position absolute top-10 left-0 right-0 z-10 isolate text-center '>
        Hello world!
      </h1>
      <Canvas
        style={{ width: '100%', height: '100vh' }}
        shadows
        gl={{ alpha: false }}
        camera={{ position: [-1, 5, 5], fov: 50 }}
      >
        <color attach='background' args={['lightblue']} />
        <ambientLight />
        <directionalLight
          position={[5, 5, 5]}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <Physics>
          <Plane position={[1, -2.5, 1]} />
          <Cube position={[0.1, 5, 0]} />
          <Cube position={[0, 10, -1]} />
          <Cube position={[0, 20, -2]} />
        </Physics>
      </Canvas>
    </div>
  );
};

export default Home;
