import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Helix() {
  const groupRef = useRef()
  
  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
  })

  const spheres = []
  const count = 30
  const radius = 1.5
  const height = 8

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 4
    const y = (i / count) * height - height / 2
    
    // First strand
    const x1 = Math.cos(angle) * radius
    const z1 = Math.sin(angle) * radius
    spheres.push({ position: [x1, y, z1], color: '#14b8a6' })
    
    // Second strand (opposite)
    const x2 = Math.cos(angle + Math.PI) * radius
    const z2 = Math.sin(angle + Math.PI) * radius
    spheres.push({ position: [x2, y, z2], color: '#3b82f6' })
  }

  return (
    <group ref={groupRef}>
      {spheres.map((sphere, i) => (
        <mesh key={i} position={sphere.position}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color={sphere.color} emissive={sphere.color} emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

const DNAHelix = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Helix />
      </Canvas>
    </div>
  )
}

export default DNAHelix
