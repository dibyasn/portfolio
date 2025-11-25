/**
 * TypingAnimation Component
 * 
 * Displays text with a typing animation effect
 * Uses Framer Motion for smooth character-by-character reveal
 */

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function TypingAnimation({ text, delay = 0, speed = 0.1 }) {
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, speed * 1000)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, text, speed])

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
        >
            {displayedText}
            {currentIndex < text.length && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    className="inline-block"
                >
                    |
                </motion.span>
            )}
        </motion.span>
    )
}
