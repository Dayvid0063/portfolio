'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { ExternalLink, Github, Sparkles, FolderOpen } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl?: string;
    category: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "QUICK-CART",
        description: "Quick-Cart is a multi-vendor e-commerce mobile application that allows customers to browse products, manage their cart and make purchases. Vendors can manage their products and view orders, while Administrators have access to a dashboard for overall system management.",
        image: "/assets/images/qcImg.png",
        technologies: ["React Native", "React", "Express.js", "Node.js", "Prisma", "MongoDB"],
        liveUrl: "https://youtu.be/o5a2ZY5OSCg?si=UiTzs_EH7zrr3WHU",
        githubUrl: "https://github.com/Dayvid0063",
        category: "Mobile"
    },
    {
        title: "Largo Integrated",
        description: "Largo Integrated Value Ltd is a dynamic Nigerian enterprise offering integrated business solutions across multiple sectors. They deliver excellence in general trading, food & beverage production, agricultural services, renewable energy solutions, and business support.",
        image: "/assets/images/largo.png",
        technologies: ["TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
        liveUrl: "https://www.largointegrated.com",
        githubUrl: "https://github.com/Dayvid0063",
        category: "Web App"
    },
    {
        title: "BLESSED BALES AND BUNDLE",
        description: "Blessed Bales and Bundles is a website designed for customers to shop for Fabrics with an intuitive interface and seamless shopping experience.",
        image: "/assets/images/blessedbb.png",
        technologies: ["Next.js", "TypeScript", "Node.js(Express)",  "Shadcn", "Tailwind CSS"],
        liveUrl: "https://blessed-bales-and-bundles.vercel.app",
        githubUrl: "https://github.com/Dayvid0063",
        category: "E-commerce"
    },
    {
        title: "MoveIt",
        description: "MoveIt, an e-commerce mobile application that allows customers to browse products (cars) then proceed to book and make payments for car rentals. With a website for administrators to have access to a dashboard for overall product management.",
        image: "/assets/images/moveit.png",
        technologies: ["React Native", "TypeScript", "Next.js", "Node.js", "Prisma", "PostgreSQL"],
        liveUrl: "https://youtu.be/u_2vPF3azbU",
        githubUrl: "https://github.com/Dayvid0063",
        category: "E-commerce"
    },
    {
        title: "Med-Equip Solutions",
        description: "Your trusted partner in medical equipment solutions, dedicated to improving healthcare delivery worldwide through innovative technology and exceptional service",
        image: "/assets/images/med-equip.png",
        technologies: ["Next.js", "TypeScript", "Node.js(Express)",  "Shadcn", "Tailwind CSS"],
        liveUrl: "https://medical-equip.vercel.app",
        githubUrl: "https://github.com/Dayvid0063",
        category: "E-commerce"
    },
    {
        title: "Rivers Youth Hub",
        description: "Rivers Youth Hub is a comprehensive digital platform that provides skill development programs, job placement assistance, entrepreneurship support, and leadership training to empower Rivers State youth.",
        image: "/assets/images/riversyouth-hub.png",
        technologies: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS"],
        liveUrl: "https://www.nycnriversstate.com",
        githubUrl: "https://github.com/Dayvid0063",
        category: "Web App"
    },
    {
        title: "LOCALBIZ CONNECT",
        description: "LocalBiz Connect is your go-to online solution for discovering and supporting local businesses in your neighborhood making it easier for users to find and engage with businesses.",
        image: "/assets/images/localbiz.png",
        technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "Mongoose"],
        liveUrl: "https://youtu.be/ujbGe3AXheg?si=RLacGZJW_m-75uLe",
        githubUrl: "https://github.com/Dayvid0063",
        category: "Web App"
    },
];

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        show: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%234F46E5' stroke-width='2'%3E%3Cpath d='m20 20 60 60M20 80 80 20'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center justify-center gap-3 mb-4"
                        >
                            <motion.div 
                                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
                                whileHover={{ 
                                    scale: 1.1, 
                                    rotate: 180,
                                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                                }}
                                transition={{ duration: 0.6 }}
                            >
                                <FolderOpen className="text-white" size={24} />
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Projects
                            </h2>
                        </motion.div>
                    </div>

                    {/* Projects Container */}
                    <div
                        ref={scrollRef}
                        className="overflow-y-auto max-h-[1000px] pr-2"
                        style={{
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#6366f1 #f1f5f9'
                        }}
                    >
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                        >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    variants={item}
                                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-200/50 hover:shadow-2xl transition-all duration-500"
                                    whileHover={{ y: -8 }}
                                    onHoverStart={() => setHoveredProject(index)}
                                    onHoverEnd={() => setHoveredProject(null)}
                                    style={{ minHeight: '520px' }}
                                >
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <motion.div
                                            className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                                            initial={{ scale: 0, rotate: -180 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                                        >
                                            <Sparkles size={12} />
                                            Featured
                                        </motion.div>
                                    )}

                                    {/* Project Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <motion.div
                                            className="w-full h-full"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                                            {project.category}
                                        </div>

                                        {/* Hover Overlay */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        />
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6 flex flex-col flex-1 relative z-10">
                                        <motion.h3 
                                            className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.2 + index * 0.05 }}
                                        >
                                            {project.title}
                                        </motion.h3>
                                        
                                        <motion.p 
                                            className="text-gray-600 text-sm mb-4 line-clamp-4 flex-1"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.3 + index * 0.05 }}
                                        >
                                            {project.description}
                                        </motion.p>

                                        {/* Tech Stack */}
                                        <motion.div 
                                            className="flex flex-wrap gap-2 mb-4"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + index * 0.05 }}
                                        >
                                            {project.technologies.slice(0, 4).map((tech, i) => (
                                                <motion.span
                                                    key={tech}
                                                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200/50"
                                                    whileHover={{ scale: 1.05 }}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.5 + i * 0.05 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                                    +{project.technologies.length - 4} more
                                                </span>
                                            )}
                                        </motion.div>

                                        {/* Action Buttons */}
                                        <motion.div 
                                            className="mt-auto flex gap-3"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + index * 0.05 }}
                                        >
                                            <motion.a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <ExternalLink size={16} />
                                                Live Demo
                                            </motion.a>
                                            
                                            {project.githubUrl && (
                                                <motion.a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors duration-300"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Github size={16} />
                                                </motion.a>
                                            )}
                                        </motion.div>
                                    </div>

                                    {/* Animated Border Effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                                            zIndex: 1
                                        }}
                                        animate={hoveredProject === index ? {
                                            background: [
                                                'linear-gradient(0deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                                                'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                                                'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                                                'linear-gradient(270deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                                                'linear-gradient(360deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                                            ]
                                        } : {}}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col items-center mt-16 text-center"
                    >
                        <motion.a
                            href="https://github.com/Dayvid0063"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github className="group-hover:rotate-12 transition-transform duration-300" size={20} />
                            Explore More Projects
                            <ExternalLink className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
