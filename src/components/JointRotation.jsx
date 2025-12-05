import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Joint() {
  const joint1Ref = useRef()
  const joint2Ref = useRef()
  const connectorsRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    if (joint1Ref.current) {
      joint1Ref.current.rotation.x = time * 0.5
      joint1Ref.current.rotation.y = time * 0.3
    }
    
    if (joint2Ref.current) {
      joint2Ref.current.rotation.x = -time * 0.4
      joint2Ref.current.rotation.z = time * 0.3
    }
    
    if (connectorsRef.current) {
      connectorsRef.current.rotation.y = time * 0.2
    }
  })

  // Create joint structure
  const createJointRing = (radius, segments = 32) => {
    const points = []
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      points.push([
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        0
      ])
    }
    return points
  }

  return (
    <>
      {/* Joint 1 */}
      <group ref={joint1Ref} position={[-1.5, 0, 0]}>
        <mesh>
          <torusGeometry args={[0.8, 0.15, 16, 32]} />
          <meshStandardMaterial 
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.3}
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial 
            color="#34d399"
            emissive="#34d399"
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>

      {/* Joint 2 */}
      <group ref={joint2Ref} position={[1.5, 0, 0]}>
        <mesh>
          <torusGeometry args={[0.8, 0.15, 16, 32]} />
          <meshStandardMaterial 
            color="#14b8a6"
            emissive="#14b8a6"
            emissiveIntensity={0.3}
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial 
            color="#5eead4"
            emissive="#5eead4"
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>

      {/* Connectors */}
      <group ref={connectorsRef}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 3, 16]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#10b981" />
        </mesh>
        
        {/* Floating particles */}
        {Array.from({ length: 40 }).map((_, i) => {
          const angle = (i / 40) * Math.PI * 2
          const radius = 2 + Math.sin(i * 0.5) * 0.5
          return (
            <mesh 
              key={i}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle * 2) * 1.5,
                Math.sin(angle) * radius
              ]}
            >
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshBasicMaterial 
                color={i % 2 === 0 ? "#10b981" : "#14b8a6"}
                transparent 
                opacity={0.7} 
              />
            </mesh>
          )
        })}
      </group>
    </>
  )
}

const JointRotation = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#14b8a6" />
        <Joint />
      </Canvas>
    </div>
  )
}

export default JointRotation
