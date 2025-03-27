import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Award, Code, Database, Server, Wrench, Monitor, Layout, Figma, Cloud, Box, Github, Send, Layers } from 'lucide-react';

const skills = [
    { name: 'Node.js', level: 80, icon: <Server size={18} /> },
    { name: 'Express.js', level: 80, icon: <Server size={18} /> },
    { name: 'TypeScript', level: 80, icon: <Code size={18} /> },
    { name: 'Golang', level: 70, icon: <Code size={18} /> },
    { name: 'ReactNative', level: 80, icon: <Monitor size={18} /> },
    { name: 'React', level: 80, icon: <Layout size={18} /> },
    { name: 'Next.js', level: 80, icon: <Layout size={18} /> },
    { name: 'Tailwind CSS', level: 80, icon: <Layers size={18} /> },
    { name: 'Figma', level: 80, icon: <Figma size={18} /> },
    { name: 'AWS', level: 70, icon: <Cloud size={18} /> },
    { name: 'Docker', level: 70, icon: <Box size={18} /> },
    { name: 'NGINX', level: 70, icon: <Server size={18} /> },
    { name: 'GIT', level: 80, icon: <Github size={18} /> },
    { name: 'Postman', level: 70, icon: <Send size={18} /> },
    { name: 'Postgresql', level: 80, icon: <Database size={18} /> },
    { name: 'MongoDB', level: 80, icon: <Database size={18} /> },
];

const certifications = [
    {
        name: "Software Engineering - Backend Specialist",
        issuer: "ALX Africa",
        date: "September 2024",
        link: "https://intranet.alxswe.com/certificates/2L8mznRG7s",
        id: "2L8mznRG7s"
    },
    {
        name: "Professional Developers(ProDev) - Frontend Program",
        issuer: "ALX Africa",
        date: "March 2025",
        link: "https://intranet.alxswe.com/certificates/23MxeNhFEX",
        id: "23MxeNhFEX"
    },
    {
        name: "Artificial Intelligence Career Essentials",
        issuer: "ALX Africa",
        date: "November 2024",
        link: "https://intranet.alxswe.com/certificates/zhs7rEcpTZ",
        id: "zhs7rEcpTZ"
    },
    {
        name: "Backend Development Proficiency",
        issuer: "HNG Tech",
        date: "August 2024",
        link: "https://certgo.app/c-483e6427",
        id: "c-483e6427"
    },
    {
        name: "DevOps Engineering Proficiency",
        issuer: "HNG Tech",
        date: "August 2024",
        link: "https://certgo.app/c-56928c41",
        id: "c-56928c41"
    },
    {
        name: "Mobile Development Proficiency",
        issuer: "HNG Tech",
        date: "August 2024",
        link: "https://certgo.app/c-d34b3ece",
        id: "c-d34b3ece"
    }
];

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="py-20 bg-gray-50 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl text-gray-500 font-bold text-center mb-12">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            About Me
                        </motion.span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                        <motion.div
                            className="relative w-80 h-96 mx-auto md:mx-0"
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src="/assets/images/dayv.PNG"
                                alt="Profile Picture"
                                fill
                                className="rounded-full object-cover shadow-lg"
                                priority
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-lg text-gray-600">
                                As a goal focused and technically skilled Software Engineer,
                                I am passionate about contributing to the development of innovative software solutions.
                                With a background in Web and Mobile applications development,
                                I bring a blend of creativity and technical expertise to every project I undertake.
                                I believe in writing clean, maintainable code that not only works but is also a joy for other developers
                                to work with. My goal is to create software that not only meets but exceeds expectations,
                                delivering value to users and stakeholders.
                            </p>
                            <motion.button
                                onClick={() => setIsModalOpen(true)}
                                className="mt-6 flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Award size={20} />
                                View Certifications
                            </motion.button>
                        </motion.div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-xl text-gray-500 font-semibold mb-6 flex items-center">
                            <Wrench className="mr-2" />
                            Skills
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    variants={fadeIn}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                >
                                    <div className="flex justify-between mb-1 items-center">
                                        <span className="text-gray-700 flex items-center">
                                            <span className="mr-2">{skill.icon}</span>
                                            {skill.name}
                                        </span>
                                        <span className="text-gray-500">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <motion.div
                                            className="bg-blue-600 h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Certifications Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <motion.div
                        className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                                    <Award className="mr-2 text-blue-600" />
                                    My Certifications
                                </h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={cert.name}
                                        className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <h4 className="text-lg font-semibold text-gray-800">{cert.name}</h4>
                                        <p className="text-gray-600">Issuer: {cert.issuer}</p>
                                        <p className="text-gray-600">Date: {cert.date}</p>
                                        <p className="text-gray-600">ID: {cert.id}</p>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center mt-2 text-blue-600 hover:text-blue-800 transition-colors"
                                        >
                                            Verify Certificate
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default About;
