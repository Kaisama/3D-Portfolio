import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf');

  return (
    <>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <spotLight
        position={[-10, 20, 10]}
       angle={0.3}
       penumbra={1}
       intensity={2}
        castShadow
       shadowMapSize={{ width: 2048, height: 2048 }}
/>

      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <primitive
        object={scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow
        receiveShadow
      />
    </>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
