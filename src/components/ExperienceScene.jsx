/**
 * ExperienceScene Component
 * 
 * Renders the 3D Mangrove Greenhouse model with Three.js
 * Includes lighting, controls, and mouse tracking
 */

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, ContactShadows, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import MangroveModel from './MangroveModel'

/**
 * Mouse follower light that tracks cursor position
 */
function MouseFollower() {
    const light = useRef()
    const { viewport } = useThree()

    useFrame(({ mouse }) => {
        const x = (mouse.x * viewport.width) / 2
        const y = (mouse.y * viewport.height) / 2
        if (light.current) {
            light.current.position.set(x, y, 2)
        }
    })

    return <pointLight ref={light} distance={10} intensity={2} color="#ffffff" />
}

/**
 * 3D Model experience with shadows
 */
function Experience() {
    return (
        <group position={[0, -1, 0]}>
            <MangroveModel />
            <ContactShadows
                resolution={1024}
                scale={20}
                blur={2}
                opacity={0.5}
                far={10}
                color="#000000"
            />
        </group>
    )
}

/**
 * Main 3D scene with canvas and controls
 */
export default function ExperienceScene({ is3DMode }) {
    return (
        <div className={`absolute inset-0 ${is3DMode ? 'z-30 pointer-events-auto' : 'z-0 pointer-events-none'}`}>
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[5, 2, 8]} fov={45} />
                <Suspense fallback={null}>
                    <Environment preset="sunset" blur={0.8} />
                    <ambientLight intensity={0.5} />
                    <directionalLight
                        position={[10, 10, 5]}
                        intensity={1.5}
                        castShadow
                        shadow-mapSize={[1024, 1024]}
                    />
                    {!is3DMode && <MouseFollower />}
                    <Experience />
                    <OrbitControls
                        makeDefault
                        enablePan={is3DMode}
                        enableZoom={is3DMode}
                        enableRotate={is3DMode}
                        enableDamping={true}
                        dampingFactor={0.1}
                        rotateSpeed={1.0}
                        zoomSpeed={1.2}
                        panSpeed={0.8}
                        minDistance={2}
                        maxDistance={20}
                        minPolarAngle={0}
                        maxPolarAngle={Math.PI}
                        autoRotate={true}
                        autoRotateSpeed={0.5}
                    />
                </Suspense>
            </Canvas>
        </div>
    )
}
