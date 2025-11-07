import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Center, Environment, Bounds } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene } = useGLTF("./iphone/scene.gltf");

  useEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <Center>
      <primitive
        object={scene}
        scale={0.9}                 // ↓ smaller so it fits comfortably
        rotation={[0, Math.PI / 12, 0]}
        position={[0, -0.2, 0]}     // small tweak only (up = +, down = -)
      />
    </Center>
  );
};

useGLTF.preload("./iphone/scene.gltf");

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 40, near: 0.1, far: 200, position: [-4, 3, 7] }} // a bit farther back
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
        />

        {/* Lights */}
        <hemisphereLight intensity={0.3} groundColor="#050505" />
        <directionalLight position={[3, 5, 2]} intensity={0.4} castShadow />
        <pointLight position={[-6, 7, 2]} intensity={0.2} />
        <Environment
         preset="studio"
         intensity={0.25}
         rotation={[0, Math.PI, 0]}
        />

        {/* Auto-frame so it won't be cropped */}
        <Bounds fit clip margin={1.1}>
          <Earth />
        </Bounds>

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
