import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Heart() {
  const meshRef = useRef()
  const particlesRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      // Heartbeat effect
      const scale = 1 + Math.sin(time * 2) * 0.1
      meshRef.current.scale.set(scale, scale, scale)
      meshRef.current.rotation.y = time * 0.3
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.2
    }
  })

  // Create heart shape using useMemo
  const heartGeometry = React.useMemo(() => {
    const heartShape = new THREE.Shape()
    heartShape.moveTo(0, 0)
    heartShape.bezierCurveTo(0, -0.3, -0.6, -0.3, -0.6, 0)
    heartShape.bezierCurveTo(-0.6, 0.3, 0, 0.6, 0, 1)
    heartShape.bezierCurveTo(0, 0.6, 0.6, 0.3, 0.6, 0)
    heartShape.bezierCurveTo(0.6, -0.3, 0, -0.3, 0, 0)

    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 5
    }
    
    return new THREE.ExtrudeGeometry(heartShape, extrudeSettings)
  }, [])

  // Floating particles
  const particles = []
  for (let i = 0; i < 50; i++) {
    const angle = (i / 50) * Math.PI * 2
    const radius = 2 + Math.random()
    particles.push({
      position: [
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 4,
        Math.sin(angle) * radius
      ]
    })
  }

  return (
    <>
      <mesh ref={meshRef} position={[0, 0, 0]} geometry={heartGeometry}>
        <meshStandardMaterial 
          color="#ef4444"
          emissive="#ef4444"
          emissiveIntensity={0.3}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      <group ref={particlesRef}>
        {particles.map((particle, i) => (
          <mesh key={i} position={particle.position}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#ef4444" transparent opacity={0.6} />
          </mesh>
        ))}
      </group>
    </>
  )
}

const HeartBeat = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ef4444" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#f87171" />
        <Heart />
      </Canvas>
    </div>
  )
}

export default HeartBeat
