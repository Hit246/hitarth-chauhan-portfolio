import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Particles = (props: any) => {
  const ref = useRef<any>();
  // Generate points in a sphere. 
  // Float32Array length must be divisible by 3 (x, y, z per point).
  // 6000 / 3 = 2000 points.
  const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 1.5 }) as Float32Array);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#6366F1"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Scene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-dark">
      <Canvas camera={{ position: [0, 0, 1] }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
           <Particles />
        </Float>
        
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene;