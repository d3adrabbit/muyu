import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stage } from '@react-three/drei';
import { Model } from './Model';

function App() {
  const ref = useRef<any>();
  return (
    <div className="App" id="canvas">
      {/* <div className="flex justify-center">
        <div className="text-sm">因果循環</div>
      </div> */}
      <Canvas
        camera={{ position: [0, 40, 5] }}
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 20,
          left: 0,
        }}
      >
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        {/* <OrbitControls
          ref={ref}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        /> */}
      </Canvas>
    </div>
  );
}

export default App;
