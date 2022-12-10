import { Suspense, useLayoutEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { OrbitControls, Stage } from '@react-three/drei';
import { Model } from './Model';

function App() {
  const controlRef = useRef<any>(null);
  const plusRef = useRef<HTMLDivElement>(null);

  const [num, setNum] = useState(0);

  const handleClick = () => {
    gsap
      .timeline({})
      .to(plusRef.current, {
        y: -20,
        opacity: 1,
      })
      .to(
        plusRef.current,
        {
          opacity: 0,
        },
        0.3
      );

    gsap.set(plusRef.current, {
      y: 0,
    });

    setNum(num + 1);
  };

  useLayoutEffect(() => {
    gsap.set(plusRef.current, {
      y: 0,
      opacity: 0,
    });
  }, []);

  return (
    <div>
      <div className="p-5 text-2xl text-white font-bold flex">
        <div>功德 {num}</div>
        <div ref={plusRef} className="font-normal ml-5 ml-auto">
          + 1
        </div>
      </div>
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        <Suspense fallback={null}>
          <Stage controls={controlRef} intensity={0.2}>
            <Model onClick={handleClick} />
          </Stage>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          ref={controlRef}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export default App;
