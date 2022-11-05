import { useBox } from '@react-three/cannon';

const Cube = (props: any) => {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    rotation: [0.2, 0.4, 0.6],
    ...props,
  }));
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshLambertMaterial color='hotpink' />
    </mesh>
  );
};

export default Cube;
