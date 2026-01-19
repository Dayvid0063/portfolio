'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Award, Code, Database, Server, Wrench, Monitor, Layout, Figma, Cloud, Box, Github, Send, Layers, ExternalLink, X, User } from 'lucide-react';

const skills = [
    { name: 'Node.js', level: 80, icon: <Server size={18} />, category: 'Backend' },
    { name: 'Express.js', level: 80, icon: <Server size={18} />, category: 'Backend' },
    { name: 'TypeScript', level: 80, icon: <Code size={18} />, category: 'Language' },
    { name: 'Golang', level: 70, icon: <Code size={18} />, category: 'Language' },
    { name: 'ReactNative', level: 80, icon: <Monitor size={18} />, category: 'Mobile' },
    { name: 'React', level: 80, icon: <Layout size={18} />, category: 'Frontend' },
    { name: 'Next.js', level: 80, icon: <Layout size={18} />, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 80, icon: <Layers size={18} />, category: 'Frontend' },
    { name: 'Figma', level: 80, icon: <Figma size={18} />, category: 'Design' },
    { name: 'AWS', level: 70, icon: <Cloud size={18} />, category: 'DevOps' },
    { name: 'Docker', level: 70, icon: <Box size={18} />, category: 'DevOps' },
    { name: 'NGINX', level: 70, icon: <Server size={18} />, category: 'DevOps' },
    { name: 'GIT', level: 80, icon: <Github size={18} />, category: 'Tools' },
    { name: 'Postman', level: 70, icon: <Send size={18} />, category: 'Tools' },
    { name: 'Postgresql', level: 80, icon: <Database size={18} />, category: 'Database' },
    { name: 'MongoDB', level: 80, icon: <Database size={18} />, category: 'Database' },
];

const certifications = [
    {
        name: "Software Engineering - Backend Specialist",
        issuer: "ALX Africa",
        date: "September 2024",
        link: "https://intranet.alxswe.com/certificates/2L8mznRG7s",
        id: "2L8mznRG7s",
        badge: "🎓"
    },
    {
        name: "Professional Developers(ProDev) - Frontend Program",
        issuer: "ALX Africa",
        date: "March 2025",
        link: "https://intranet.alxswe.com/certificates/23MxeNhFEX",
        id: "23MxeNhFEX",
        badge: "⚛️"
    },
    {
        name: "Artificial Intelligence Career Essentials",
        issuer: "ALX Africa",
        date: "November 2024",
        link: "https://intranet.alxswe.com/certificates/zhs7rEcpTZ",
        id: "zhs7rEcpTZ",
        badge: "🤖"
    },
    {
        name: "Backend Development Proficiency",
        issuer: "HNG Tech",
        date: "August 2024",
        link: "https://certgo.app/c-483e6427",
        id: "c-483e6427",
        badge: "⚙️"
    },
    {
        name: "DevOps Engineering Proficiency",
        issuer: "HNG Tech",
        date: "August 2024",
        link: "https://certgo.app/c-56928c41",
        id: "c-56928c41",
        badge: "☁️"
    },
    {
        name: "Mobile Development Proficiency",
        issuer: "HNG Tech",
        date: "August 2024",
        link: "https://certgo.app/c-d34b3ece",
        id: "c-d34b3ece",
        badge: "📱"
    }
];

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const skillCard = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title with Icon */}
                    <motion.div
                        className="flex items-center justify-center mb-16"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4">
                            <motion.div
                                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 360,
                                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.6 }}
                            >
                                <User className="text-white" size={24} />
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-bold">
                                <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    About Me
                                </span>
                            </h2>
                        </div>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
                        {/* Profile Image */}
                        <motion.div
                            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-20" />
                            <Image
                                src="/assets/images/dayv.PNG"
                                alt="Profile Picture"
                                fill
                                className="rounded-full object-cover shadow-2xl relative z-10 border-4 border-white"
                                priority
                            />
                        </motion.div>

                        {/* About Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="prose prose-lg">
                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    <span className="font-semibold text-gray-700">As a goal-focused and
                                        technically skilled Software Engineer,
                                        I am passionate about contributing to the development of innovative software solutions.</span>
                                </p>
                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    <span className="font-semibold">With a background in Web and Mobile applications development,
                                        I bring a blend of creativity and technical expertise to every project I undertake.
                                        I believe in writing clean, maintainable code that not only works but is also a joy for other developers
                                        to work with.</span>
                                </p>
                                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    <span className="font-semibold">My goal is to create software that not only meets but exceeds expectations,
                                        delivering value to users and stakeholders.</span>
                                </p>
                            </div>

                            {/* Stats Cards */}
                            <motion.div
                                className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {[
                                    { number: "3+", label: "Years Experience" },
                                    { number: "15+", label: "Projects Completed" },
                                    { number: "6", label: "Certifications" }
                                ].map((stat) => (
                                    <motion.div
                                        key={stat.label}
                                        variants={skillCard}
                                        className="text-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100"
                                        whileHover={{ scale: 1.05, y: -5 }}
                                    >
                                        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {stat.number}
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Certifications Button */}
                            <motion.button
                                onClick={() => setIsModalOpen(true)}
                                className="group flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm sm:text-base"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <Award size={18} className="group-hover:rotate-12 transition-transform sm:w-5 sm:h-5" />
                                <span>View Certifications</span>
                                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4" />
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Skills Section */}
                    <motion.div
                        className="mt-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center mb-8">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 180,
                                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Wrench className="text-white" size={20} />
                                </motion.div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
                                    Technical Skills
                                </h3>
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8, y: 20 },
                                        visible: {
                                            opacity: 1,
                                            scale: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.6,
                                                delay: index * 0.1,
                                                ease: "easeOut"
                                            }
                                        }
                                    }}
                                    className="group p-6 rounded-xl border border-gray-100/50 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            <motion.div
                                                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white"
                                                whileHover={{
                                                    scale: 1.2,
                                                    rotate: 10,
                                                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)"
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {skill.icon}
                                            </motion.div>
                                            <span className="font-semibold text-gray-800">{skill.name}</span>
                                        </div>
                                        <motion.span
                                            className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 0.8 + index * 0.1,
                                                duration: 0.5,
                                                type: "spring",
                                                bounce: 0.4
                                            }}
                                        >
                                            {skill.level}%
                                        </motion.span>
                                    </div>

                                    <div className="relative">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <motion.div
                                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                            />
                                        </div>
                                        <motion.div
                                            className="mt-2 text-xs text-gray-500 text-center font-medium"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 1.2 + index * 0.1 }}
                                        >
                                            {skill.category}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Enhanced Certifications Modal */}
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <motion.div
                        className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                            <div className="flex justify-between items-center">
                                <motion.h3
                                    className="text-3xl font-bold flex items-center gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Award className="text-yellow-300" size={32} />
                                    My Certifications
                                </motion.h3>
                                <motion.button
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X size={20} />
                                </motion.button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)] custom-scrollbar">
                            <div className="grid gap-6">
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={cert.name}
                                        className="group p-6 border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition-all duration-300 bg-gradient-to-r from-gray-50 to-blue-50/30"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="text-4xl">{cert.badge}</div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                                    {cert.name}
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                                    <div>
                                                        <span className="text-sm font-medium text-gray-500">Issuer:</span>
                                                        <p className="text-gray-700 font-semibold">{cert.issuer}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-sm font-medium text-gray-500">Date:</span>
                                                        <p className="text-gray-700 font-semibold">{cert.date}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-sm font-medium text-gray-500">ID:</span>
                                                        <p className="text-gray-700 font-mono text-sm">{cert.id}</p>
                                                    </div>
                                                </div>
                                                <motion.a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Verify Certificate
                                                    <ExternalLink size={16} />
                                                </motion.a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default About;
