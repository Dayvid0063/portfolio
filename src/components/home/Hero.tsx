/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { useState } from 'react';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const interests = [
        "Backend | Frontend | DevOps",
        "🔭 I'm currently working on Deploying full-stack applications and contributing to open-source projects.",
        "🌱 I'm currently learning DevOps (Docker, Ansible, AWS) and New Technologies to improve my skills.",
        "👯 I'm looking to collaborate on Open-source projects focused on developing my skills and productivity.",
        "🤝 I'm looking for help with Innovative projects combining AI and Web/Mobile technologies."
    ];

    return (
        <>
            <section className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Hi, I'm <span className="text-blue-600">David Chukwudi Orji</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
                            Software Engineer
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="space-x-4"
                    >
                        <a
                            href="https://drive.google.com/drive/folders/128GMZY7feBsZsB4WEIt2SeW-qIb4m50k?usp=sharing"
                            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Get My Resume
                        </a>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            Interests
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-12"
                    >
                        <div className="flex justify-center space-x-6">
                            <a href="https://github.com/Dayvid0063" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/david-orji-/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white">
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Interests Modal */}
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white p-8 rounded-lg max-w-2xl mx-4 transform"
                        onClick={e => e.stopPropagation()}
                    >
                        <h3 className="text-2xl font-bold text-gray-500 mb-6">My Interests</h3>
                        <ul className="space-y-4">
                            {interests.map((interest, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-gray-700"
                                >
                                    {interest}
                                </motion.li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default Hero;
