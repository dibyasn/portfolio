/**
 * Interface Component
 * 
 * Main UI overlay with responsive navigation and content sections
 */

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaUser,
    FaBriefcase,
    FaCode,
    FaTools,
    FaGraduationCap,
    FaRocket,
    FaBars,
    FaTimes
} from 'react-icons/fa'
import cvData from '../data/cv.json'
import TypingAnimation from './TypingAnimation'

/** Section with icon and animations */
const Section = ({ id, title, icon: Icon, children }) => (
    <motion.div
        id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="min-h-[50vh] mb-20 p-6 md:p-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl max-w-4xl mx-auto pointer-events-auto scroll-mt-24"
    >
        <div className="flex items-center gap-4 mb-8">
            {Icon && (
                <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Icon className="text-3xl md:text-5xl text-blue-400" />
                </motion.div>
            )}
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                {title}
            </h2>
        </div>
        {children}
    </motion.div>
)

/** Smooth scroll navigation link */
const NavLink = ({ href, children, onClick }) => (
    <a
        href={href}
        className="group relative text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-wider py-1"
        onClick={(e) => {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            onClick?.();
        }}
    >
        {children}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full" />
    </a>
)

export default function Interface({ is3DMode, setIs3DMode }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="absolute inset-0 flex flex-col pointer-events-none">
            {/* Fixed Top Navbar */}
            {/* Fixed Top Navbar */}
            <nav className={`fixed top-0 left-0 w-full p-4 md:p-6 flex justify-center items-center z-50 pointer-events-auto transition-opacity duration-500 ${is3DMode ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

                {/* Unified Glass Container */}
                <div className="hidden md:flex items-center gap-8 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md shadow-lg">

                    {/* Name */}
                    <div className="text-lg md:text-xl font-serif font-bold tracking-wider text-white border-r border-white/20 pr-8">
                        <TypingAnimation text={cvData.personal.name.toUpperCase()} speed={0.08} />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex gap-8 items-center">
                        <NavLink href="#about">About</NavLink>
                        {cvData.experience.length > 0 && <NavLink href="#experience">Experience</NavLink>}
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#skills">Skills</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </div>

                    {/* CV Button */}
                    <div className="border-l border-white/20 pl-8">
                        <a
                            href="/Dibyaranjan_Swain_New.pdf"
                            download
                            className="px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-opacity-90 transition-all hover:scale-105 whitespace-nowrap"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Mobile Header (kept separate for mobile layout) */}
                <div className="md:hidden w-full flex justify-between items-center bg-white/5 p-4 rounded-xl backdrop-blur-md border border-white/10">
                    <div className="text-lg font-bold tracking-tighter">
                        <TypingAnimation text={cvData.personal.name.toUpperCase()} speed={0.08} />
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-white hover:text-blue-400 transition-colors"
                    >
                        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed top-0 right-0 w-64 h-full bg-black/95 backdrop-blur-xl z-40 pointer-events-auto md:hidden"
                    >
                        <div className="flex flex-col gap-6 p-8 mt-20">
                            <NavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
                            {cvData.experience.length > 0 && <NavLink href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</NavLink>}
                            <NavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</NavLink>
                            <NavLink href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</NavLink>
                            <NavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
                            <a
                                href="/Dibyaranjan_Swain_New.pdf"
                                download
                                className="px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-opacity-90 transition-all text-center"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 3D Mode Exit Button */}
            {is3DMode && (
                <div className="fixed top-6 right-6 z-50 pointer-events-auto">
                    <button
                        onClick={() => setIs3DMode(false)}
                        className="px-6 py-2 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
                    >
                        Exit Interaction
                    </button>
                </div>
            )}

            {/* Scrollable Content */}
            <div className={`flex-1 overflow-y-auto overflow-x-hidden scroll-smooth transition-opacity duration-500 ${is3DMode ? 'opacity-0 pointer-events-none invisible' : 'opacity-100 pointer-events-auto'}`}>
                {/* Hero Section with 3D interaction */}
                <div className="h-screen w-full flex flex-col items-center justify-center pointer-events-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-center"
                    >
                        <div className="mt-8 flex flex-col items-center gap-4 pointer-events-auto">
                            <motion.button
                                onClick={() => setIs3DMode(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all backdrop-blur-md"
                            >
                                🌿 Explore
                            </motion.button>
                            <p className="text-white/50 text-sm animate-bounce">CLICK TO EXPLORE</p>
                        </div>
                    </motion.div>
                </div>

                {/* Content Sections */}
                <div className="pb-20 px-4">
                    <Section id="about" title="ABOUT" icon={FaUser}>
                        <p className="text-lg md:text-2xl leading-relaxed text-white/90 font-light">
                            {cvData.personal.summary}
                        </p>
                    </Section>

                    {cvData.experience.length > 0 && (
                        <Section id="experience" title="EXPERIENCE" icon={FaBriefcase}>
                            <div className="space-y-12">
                                {cvData.experience.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.15 }}
                                        viewport={{ once: true }}
                                        className="border-l-2 border-green-500 pl-6"
                                    >
                                        <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                                        <p className="text-green-400 font-mono mb-2 text-sm md:text-base">{exp.company} | {exp.period}</p>
                                        <p className="text-white/80 leading-relaxed text-sm md:text-base">{exp.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </Section>
                    )}

                    <Section id="projects" title="PROJECTS" icon={FaCode}>
                        <div className="grid gap-6">
                            {cvData.projects?.map((project, index) => (
                                <motion.a
                                    key={index}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.02, borderColor: 'rgba(34, 197, 94, 0.5)' }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="block bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all border border-white/5"
                                >
                                    <h3 className="text-lg md:text-xl font-bold flex justify-between items-center">
                                        {project.title}
                                        <span className="text-sm text-green-400">↗</span>
                                    </h3>
                                    <p className="text-white/60 mt-2 text-sm md:text-base">{project.description}</p>
                                </motion.a>
                            ))}
                        </div>
                    </Section>

                    <Section id="skills" title="SKILLS" icon={FaTools}>
                        <div className="flex flex-wrap gap-3">
                            {cvData.skills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    transition={{ delay: index * 0.03, type: "spring" }}
                                    viewport={{ once: true }}
                                    className="px-3 md:px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/20 transition-colors cursor-default text-sm md:text-base"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </Section>

                    <Section title="EDUCATION" icon={FaGraduationCap}>
                        <div className="grid gap-6">
                            {cvData.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, rotateY: -20 }}
                                    whileInView={{ opacity: 1, rotateY: 0 }}
                                    transition={{ delay: index * 0.15 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors"
                                >
                                    <h3 className="text-lg md:text-xl font-bold">{edu.degree}</h3>
                                    <p className="text-white/60 text-sm md:text-base">{edu.school}</p>
                                    <p className="text-sm text-white/40 mt-1">{edu.year}</p>
                                </motion.div>
                            ))}
                        </div>
                    </Section>

                    <Section id="contact" title="CONTACT" icon={FaRocket}>
                        <div className="flex flex-col items-center gap-8">
                            <p className="text-xl md:text-2xl text-center">Ready to create something amazing?</p>
                            <div className="flex gap-6 md:gap-8">
                                <motion.a
                                    href={`mailto:${cvData.contact.email}`}
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 md:p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                                    title="Email Me"
                                >
                                    <FaEnvelope size={28} className="md:w-8 md:h-8" />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/dibyasn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: -10 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 md:p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                                    title="LinkedIn"
                                >
                                    <FaLinkedin size={28} className="md:w-8 md:h-8" />
                                </motion.a>
                                <motion.a
                                    href="https://github.com/dibyasn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 md:p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                                    title="GitHub"
                                >
                                    <FaGithub size={28} className="md:w-8 md:h-8" />
                                </motion.a>
                            </div>
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    )
}
