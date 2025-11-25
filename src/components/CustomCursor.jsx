import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function CustomCursor() {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const [isHovering, setIsHovering] = useState(false)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    // Calculate offsets to center elements on the cursor
    const dotX = useTransform(cursorXSpring, x => x - 8)
    const dotY = useTransform(cursorYSpring, y => y - 8)

    const ringX = useTransform(cursorXSpring, x => x - 16)
    const ringY = useTransform(cursorYSpring, y => y - 16)

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleMouseOver = (e) => {
            const isInteractive = e.target.closest('a, button, input, [role="button"]')
            setIsHovering(!!isInteractive)
        }

        window.addEventListener('mousemove', moveCursor)
        document.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: dotX,
                    translateY: dotY,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                }}
            />

            {/* Outer glow ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    translateX: ringX,
                    translateY: ringY,
                }}
                animate={{
                    scale: isHovering ? 1.8 : 1,
                }}
                transition={{ duration: 0.15 }}
            />
        </>
    )
}
