'use client';

/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import FloatingParticles from '../ui/FloatingParticles';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const fullText = "Software Engineer";

    // Typing animation effect
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(timer);
            }
        }, 150);
        return () => clearInterval(timer);
    }, []);

    const interests = [
        "Backend | Frontend | DevOps",
        "🔭 I'm currently working on Deploying full-stack applications and contributing to open-source projects.",
        "🌱 I'm currently learning DevOps (Docker, Ansible, AWS) and New Technologies to improve my skills.",
        "👯 I'm looking to collaborate on Open-source projects focused on developing my skills and productivity.",
        "🤝 I'm looking for help with Innovative projects combining AI and Web/Mobile technologies."
    ];

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <FloatingParticles />
                
                {/* Gradient background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-teal-900/20 pointer-events-none" />
                
                <div className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1 
                            className="text-4xl md:text-6xl font-bold mb-4"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            Hi, I'm{' '}
                            <motion.span 
                                className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"
                                animate={{ 
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                }}
                                transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{ backgroundSize: '200% 200%' }}
                            >
                                David Chukwudi Orji
                            </motion.span>
                        </motion.h1>
                        
                        <motion.h2 
                            className="text-xl md:text-2xl text-gray-300 mb-8 font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                {displayText}
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="text-blue-400"
                                >
                                    |
                                </motion.span>
                            </span>
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="space-x-4 mb-8"
                    >
                        <motion.a
                            href="https://drive.google.com/drive/folders/128GMZY7feBsZsB4WEIt2SeW-qIb4m50k?usp=sharing"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Get My Resume
                        </motion.a>
                        
                        <motion.button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-500/50 text-blue-400 rounded-xl font-semibold backdrop-blur-sm bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            My Interests
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="mt-12"
                    >
                        <div className="flex justify-center space-x-8">
                            <motion.a 
                                href="https://github.com/Dayvid0063" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                whileHover={{ scale: 1.1, y: -2 }}
                            >
                                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                <span className="font-medium">GitHub</span>
                            </motion.a>
                            
                            <motion.a 
                                href="https://www.linkedin.com/in/david-orji-/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                whileHover={{ scale: 1.1, y: -2 }}
                            >
                                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                <span className="font-medium">LinkedIn</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Enhanced Interests Modal */}
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl max-w-2xl w-full mx-4 shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <motion.h3 
                            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            My Interests & Goals
                        </motion.h3>
                        
                        <div className="space-y-6 max-h-96 overflow-y-auto custom-scrollbar">
                            {interests.map((interest, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-colors"
                                >
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-3 flex-shrink-0" />
                                    <p className="text-gray-300 leading-relaxed">{interest}</p>
                                </motion.div>
                            ))}
                        </div>
                        
                        <motion.button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-8 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            Close
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default Hero;
