import { useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

export default function Spotlight() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    const background = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.25), rgba(29, 78, 216, 0.1) 40%, transparent 70%)`
    const highlight = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(96, 165, 250, 0.15), transparent 60%)`

    return (
        <>
            {/* Primary spotlight */}
            <motion.div
                className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
                style={{ background }}
            />

            {/* Secondary inner glow */}
            <motion.div
                className="fixed top-0 left-0 w-full h-full pointer-events-none z-11"
                style={{ background: highlight }}
            />
        </>
    )
}
