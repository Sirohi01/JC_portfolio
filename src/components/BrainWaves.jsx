import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Brain() {
  const groupRef = useRef()
  const ringsRef = useRef([])
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.15
    }
    
    // Animate rings
    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.x = time * (0.3 + i * 0.1)
        ring.rotation.z = time * (0.2 + i * 0.05)
      }
    })
  })

  // Create brain structure with rings and particles
  const neurons = useMemo(() => {
    const temp = []
    const count = 60
    
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      
      const radius = 1.8
      const x = radius * Math.cos(theta) * Math.sin(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(phi)
      
      temp.push({
        position: [x, y, z],
        scale: 0.06 + Math.random() * 0.04
      })
    }
    return temp
  }, [])

  return (
    <group ref={groupRef}>
      {/* Brain neurons */}
      {neurons.map((neuron, i) => (
        <mesh key={i} position={neuron.position}>
          <sphereGeometry args={[neuron.scale, 8, 8]} />
          <meshStandardMaterial 
            color="#a78bfa"
            emissive="#8b5cf6"
            emissiveIntensity={0.5}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      ))}
      
      {/* Rotating rings */}
      {[0, 1, 2].map((idx) => (
        <mesh 
          key={`ring-${idx}`}
          ref={(el) => (ringsRef.current[idx] = el)}
          rotation={[Math.PI / 4 * idx, 0, 0]}
        >
          <torusGeometry args={[1.5 + idx * 0.3, 0.05, 16, 32]} />
          <meshStandardMaterial 
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
      
      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => {
        const angle = (i / 30) * Math.PI * 2
        const radius = 2.5 + Math.sin(i * 0.5) * 0.5
        return (
          <mesh 
            key={`particle-${i}`}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 2) * 1.5,
              Math.sin(angle) * radius
            ]}
          >
            <sphereGeometry args={[0.04, 6, 6]} />
            <meshBasicMaterial color="#c4b5fd" transparent opacity={0.7} />
          </mesh>
        )
      })}
    </group>
  )
}

const BrainWaves = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#a78bfa" />
        <Brain />
      </Canvas>
    </div>
  )
}

export default BrainWaves
