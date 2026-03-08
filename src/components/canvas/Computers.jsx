import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./setup/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={1.5} />
      <hemisphereLight intensity={0.6} groundColor='black' />
      
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Primary Front Light */}
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      
      {/* Backlight for the rear of the object */}
      <pointLight position={[0, 5, -10]} intensity={5} color="#ffffff" />

      {/* Dedicated Front Fill Light specifically for the chair */}
      {/* Positioned low and in front [x, y, z] */}
      <pointLight position={[0, -2, 5]} intensity={3} color="#ffffff" />
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.2 : 0.25}
        position={isMobile ? [0, -6, -2.2] : [0, -7.5, -1.5]}
        rotation={[0, 0, 0]} 
      />
    </mesh>
  );
};

const isMobileDevice = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    // Also check user agent so "Request Desktop Site" on mobile is still detected
    setIsMobile(mediaQuery.matches || isMobileDevice());

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches || isMobileDevice());
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 15], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

useGLTF.preload("./setup/scene.gltf");

export default ComputersCanvas;