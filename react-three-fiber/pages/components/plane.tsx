import { usePlane } from '@react-three/cannon';

const Plane = (props: any) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial color='#f6f2f2' transparent opacity={0.2} />
    </mesh>
  );
};

export default Plane;
