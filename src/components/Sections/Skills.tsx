import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SKILLS, TOOLS, LEARNING } from '../../constants';
import * as THREE from 'three';

const Word: React.FC<{ text: string; position: THREE.Vector3; color: string }> = ({ text, position, color }) => {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ camera }) => {
    if (ref.current) {
      // Make text face the camera always, cancelling out parent rotation
      ref.current.lookAt(camera.position);
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={0}>
      <group ref={ref} position={position}>
        <Text
          fontSize={0.5}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
};

const Cloud = ({ radius = 4 }: { radius?: number }) => {
  const words = useMemo(() => {
    const temp: any[] = [];
    const allSkills = [...SKILLS.map(s => s.name), ...TOOLS, ...LEARNING];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (allSkills.length + 1);
    const thetaSpan = (Math.PI * 2) / allSkills.length;

    for (let i = 0; i < allSkills.length; i++) {
      // Distribute points on a sphere
      spherical.set(radius, phiSpan * (i + 1), thetaSpan * i);
      const pos = new THREE.Vector3().setFromSpherical(spherical);
      const color = i < SKILLS.length ? '#6366F1' : (i < SKILLS.length + TOOLS.length ? '#06B6D4' : '#8B5CF6');
      temp.push({ word: allSkills[i], pos, color });
    }
    return temp;
  }, [radius]);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {words.map(({ word, pos, color }, i) => (
        <Word key={i} position={pos} color={color} text={word} />
      ))}
    </group>
  );
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Progress Bars */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-accent font-medium mb-2">MY ARSENAL</h3>
          <h2 className="text-4xl font-bold font-heading mb-8">Technical Skills</h2>

          <div className="space-y-6">
            {SKILLS.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-200">{skill.name}</span>
                  <span className="text-primary font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h4 className="text-xl font-bold mb-4 text-white">Currently Learning</h4>
            <div className="flex flex-wrap gap-3">
              {LEARNING.map((item, index) => (
                <span key={index} className="px-3 py-1 text-sm rounded-md bg-secondary/20 text-secondary border border-secondary/30">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: 3D Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className="h-[500px] w-full relative"
        >
          <Canvas
            camera={{ position: [0, 0, 8], fov: 80 }}
            dpr={[1, 2]}
            gl={{ alpha: true }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} />
            <Cloud />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;