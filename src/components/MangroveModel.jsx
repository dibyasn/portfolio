/**
 * MangroveModel Component
 * 
 * Loads and renders the stylized mangrove greenhouse 3D model
 */

import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export default function MangroveModel() {
    const { scene } = useGLTF('./model/stylized_mangrove_greenhouse/scene.gltf')

    useEffect(() => {
        if (scene) {
            scene.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true
                    child.receiveShadow = true
                }
            })
        }
    }, [scene])

    return <primitive object={scene} scale={1} />
}

useGLTF.preload('./model/stylized_mangrove_greenhouse/scene.gltf')
