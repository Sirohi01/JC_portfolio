import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Spine() {
  const groupRef = useRef()
  const particlesRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  // Create spine vertebrae
  const vertebrae = []
  const count = 24
  const spacing = 0.4

  for (let i = 0; i < count; i++) {
    const y = (i - count / 2) * spacing
    const scale = 0.8 + Math.sin(i * 0.5) * 0.2
    const rotation = Math.sin(i * 0.3) * 0.15
    vertebrae.push({ y, scale, rotation })
  }

  // Floating particles
  const particleCount = 100
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const radius = 3 + Math.random() * 2
      
      temp.push({
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          (Math.random() - 0.5) * 10,
          radius * Math.sin(phi) * Math.sin(theta)
        ],
        scale: Math.random() * 0.1 + 0.05
      })
    }
    return temp
  }, [])

  return (
    <>
      {/* Spine structure */}
      <group ref={groupRef}>
        {vertebrae.map((vert, i) => (
          <group key={i} position={[0, vert.y, 0]} rotation={[0, vert.rotation, 0]}>
            {/* Main vertebra body */}
            <mesh>
              <cylinderGeometry args={[0.3 * vert.scale, 0.3 * vert.scale, 0.15, 16]} />
              <meshStandardMaterial 
                color="#14b8a6" 
                emissive="#14b8a6"
                emissiveIntensity={0.5}
                metalness={0.4}
                roughness={0.3}
              />
            </mesh>
            
            {/* Vertebra processes */}
            {[0, 120, 240].map((angle, idx) => (
              <mesh 
                key={idx}
                position={[
                  Math.cos((angle * Math.PI) / 180) * 0.25,
                  0,
                  Math.sin((angle * Math.PI) / 180) * 0.25
                ]}
              >
                <boxGeometry args={[0.08, 0.1, 0.15]} />
                <meshStandardMaterial 
                  color="#3b82f6"
                  emissive="#3b82f6"
                  emissiveIntensity={0.4}
                  metalness={0.3}
                />
              </mesh>
            ))}
          </group>
        ))}
      </group>

      {/* Floating particles */}
      <group ref={particlesRef}>
        {particles.map((particle, i) => (
          <mesh key={i} position={particle.position}>
            <sphereGeometry args={[particle.scale, 8, 8]} />
            <meshBasicMaterial 
              color={i % 2 === 0 ? "#14b8a6" : "#3b82f6"}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>
    </>
  )
}

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 dark:opacity-70">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#14b8a6" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#3b82f6" />
        <pointLight position={[0, 10, 0]} intensity={1.5} color="#06b6d4" />
        <directionalLight position={[0, 5, 5]} intensity={1.2} />
        <Spine />
      </Canvas>
    </div>
  )
}

export default ThreeBackground
