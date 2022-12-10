import { Suspense, useLayoutEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { OrbitControls, Stage } from '@react-three/drei';
import { Model } from './Model';

function App() {
  const controlRef = useRef<any>(null);
  const plusRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    gsap.from(plusRef.current, {
      y: 20,
    });

    console.log(12);
  };

  // useLayoutEffect(() => {

  //   gsap

  // }, []);

  return (
    <div className="App" id="canvas">
      <div
        ref={plusRef}
        className="absolute left-1/2 top-1/4 text-2xl font-bold"
      >
        + 1
      </div>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 20,
          left: 0,
        }}
      >
        <Suspense fallback={null}>
          <Stage controls={controlRef} intensity={0.8}>
            <Model onClick={handleClick} />
          </Stage>
        </Suspense>

        <OrbitControls
          ref={controlRef}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export default App;
