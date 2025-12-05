import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Muscles() {
  const groupRef = useRef()
  const wavesRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.15
    }
    
    // Animate waves
    wavesRef.current.forEach((wave, i) => {
      if (wave) {
        wave.position.y = Math.sin(time * 2 + i * 0.5) * 0.3
      }
    })
  })

  // Create muscle fiber bundles
  const fibers = useMemo(() => {
    const temp = []
    const bundleCount = 8
    
    for (let i = 0; i < bundleCount; i++) {
      const angle = (i / bundleCount) * Math.PI * 2
      const radius = 1.2
      const segments = []
      
      for (let j = 0; j < 15; j++) {
        const y = (j - 7) * 0.35
        const wave = Math.sin(j * 0.4 + i) * 0.15
        const x = Math.cos(angle) * (radius + wave)
        const z = Math.sin(angle) * (radius + wave)
        segments.push({ position: [x, y, z], scale: 0.12 - Math.abs(j - 7) * 0.005 })
      }
      temp.push(segments)
    }
    return temp
  }, [])

  return (
    <group ref={groupRef}>
      {/* Muscle fibers */}
      {fibers.map((fiber, fiberIdx) => (
        <group key={fiberIdx}>
          {fiber.map((segment, segIdx) => (
            <mesh 
              key={segIdx} 
              position={segment.position}
              ref={(el) => {
                if (segIdx % 3 === 0) wavesRef.current[fiberIdx * 5 + segIdx] = el
              }}
            >
              <cylinderGeometry args={[segment.scale, segment.scale, 0.3, 8]} />
              <meshStandardMaterial 
                color={fiberIdx % 2 === 0 ? "#fb923c" : "#fdba74"}
                emissive="#f97316"
                emissiveIntensity={0.2}
                metalness={0.5}
                roughness={0.3}
              />
            </mesh>
          ))}
        </group>
      ))}
      
      {/* Connecting rings */}
      {[0, 1, 2].map((idx) => (
        <mesh key={`ring-${idx}`} position={[0, idx * 2 - 2, 0]}>
          <torusGeometry args={[1.5, 0.06, 12, 24]} />
          <meshStandardMaterial 
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.3}
            transparent
            opacity={0.5}
          />
        </mesh>
      ))}
      
      {/* Floating energy particles */}
      {Array.from({ length: 40 }).map((_, i) => {
        const angle = (i / 40) * Math.PI * 2
        const radius = 2 + Math.sin(i * 0.3) * 0.5
        return (
          <mesh 
            key={i} 
            position={[
              Math.cos(angle) * radius,
              Math.sin(i * 0.5) * 3,
              Math.sin(angle) * radius
            ]}
          >
            <sphereGeometry args={[0.05, 6, 6]} />
            <meshBasicMaterial color="#fed7aa" transparent opacity={0.7} />
          </mesh>
        )
      })}
    </group>
  )
}

const MuscleWaves = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#f97316" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#fb923c" />
        <Muscles />
      </Canvas>
    </div>
  )
}

export default MuscleWaves
