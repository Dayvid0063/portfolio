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
        title: "TravelTube",
        description: "TravelTube connects travellers with stories, tools, and experiences from across the world.",
        image: "/assets/images/traveltube.png",
        technologies: ["Nuxt.js, TypeScript", "Pinia", "MongoDB"],
        liveUrl: "https://traveltube.io",
        githubUrl: "#",
        category: "Web App",
    },
    {
        title: "TravelTube Services",
        description: "Register Your Business on TravelTube Services Platform to Showcase your services to millions of travelers worldwide.",
        image: "/assets/images/services.png",
        technologies: ["Nuxt.js, TypeScript", "Pinia", "MongoDB"],
        liveUrl: "https://services.traveltube.io",
        githubUrl: "#",
        category: "Web App",
    },
    {
        title: "TravelTube Restaurants",
        description: "TravelTube Restaurants is an all-in-one hospitality platform combining QR ordering, POS, and in-restaurant entertainment.",
        image: "/assets/images/restaurant.png",
        technologies: ["Nuxt.js, TypeScript", "Pinia", "MongoDB"],
        liveUrl: "https://restaurants.traveltube.io",
        githubUrl: "#",
        category: "Web App",
    },
    {
        title: "TravelTube Creators",
        description: "A platform to upload, manage, and showcase your travel content. Connect with audiences worldwide and grow your creator journey with powerful tools designed for content creators.",
        image: "/assets/images/creators.png",
        technologies: ["Nuxt.js, TypeScript", "Pinia", "MongoDB"],
        liveUrl: "https://creators.traveltube.io",
        githubUrl: "#",
        category: "Web App",
    },
    {
        title: "MySchool Research",
        description: "Publish, discover, and collaborate on academic work with MySchool Research.",
        image: "/assets/images/schoolresearch.png",
        technologies: ["Nuxt.js, TypeScript", "Pinia", "MongoDB"],
        liveUrl: "https://myschoolresearch.org",
        githubUrl: "#",
        category: "Web App",
    },
    {
        title: "DCI WIKI",
        description: "Open system for registering and protecting research, creative content, and cultural heritage.",
        image: "/assets/images/dciwiki.png",
        technologies: ["Nuxt.js, TypeScript", "Pinia", "MongoDB"],
        liveUrl: "https://dci.wiki",
        githubUrl: "#",
        category: "Web App",
    },
    {
        title: "MySchool Academy",
        description: "MySchool Academy is dedicated to making STEM education practical and accessible for African students, transforming them from technology consumers to creators.",
        image: "/assets/images/schoolacademy.png",
        technologies: ["Nuxt.js, TypeScript", "Pinia", "MongoDB"],
        liveUrl: "https://myschoolacademy.org",
        githubUrl: "#",
        category: "Web App",
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
        title: "QUICK-CART",
        description: "Quick-Cart is a multi-vendor e-commerce mobile application that allows customers to browse products, manage their cart and make purchases. Vendors can manage their products and view orders, while Administrators have access to a dashboard for overall system management.",
        image: "/assets/images/qcImg.png",
        technologies: ["React Native", "React", "Express.js", "Node.js", "Prisma", "MongoDB"],
        liveUrl: "https://youtu.be/o5a2ZY5OSCg?si=UiTzs_EH7zrr3WHU",
        githubUrl: "https://github.com/Dayvid0063",
        category: "Mobile"
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
    const [, setHoveredProject] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.15
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    return (
        <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/20 relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center justify-center gap-3 mb-6"
                        >
                            <motion.div 
                                className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20"
                                whileHover={{ 
                                    scale: 1.05,
                                    rotate: [0, -10, 10, -10, 0],
                                    transition: { duration: 0.5 }
                                }}
                            >
                                <FolderOpen className="text-white" size={26} strokeWidth={2} />
                            </motion.div>
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                        >
                            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent">
                                Featured Projects
                            </span>
                        </motion.h2>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                        >
                            Explore a selection of my work spanning web applications, mobile solutions, and e-commerce platforms
                        </motion.p>
                    </div>

                    {/* Projects Grid */}
                    <div
                        ref={scrollRef}
                        className="overflow-y-auto max-h-[1100px] pr-2 scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent hover:scrollbar-thumb-blue-500/40"
                    >
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    variants={item}
                                    className="group relative bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                                    whileHover={{ y: -6 }}
                                    onHoverStart={() => setHoveredProject(index)}
                                    onHoverEnd={() => setHoveredProject(null)}
                                >
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-5 left-5 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                                            <Sparkles size={14} />
                                            Featured
                                        </div>
                                    )}

                                    {/* Project Image Container */}
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                                        <motion.div
                                            className="w-full h-full"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>

                                        {/* Category Badge */}
                                        <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md text-blue-600 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg border border-blue-100">
                                            {project.category}
                                        </div>

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-1">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 min-h-[40px]">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-1.5 mb-5 min-h-[56px]">
                                            {project.technologies.slice(0, 2).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 bg-gradient-to-br from-blue-50 to-purple-50 text-blue-700 rounded-lg text-xs font-medium border border-blue-100/50 hover:border-blue-200 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 2 && (
                                                <span className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium border border-gray-200">
                                                    +{project.technologies.length - 2}
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2">
                                            <motion.a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 text-sm"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <ExternalLink size={14} strokeWidth={2.5} />
                                                <span>View</span>
                                            </motion.a>
                                            
                                            {project.githubUrl && (
                                                <motion.a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2.5 bg-gray-100 hover:bg-gray-900 text-gray-700 hover:text-white rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    aria-label="View on GitHub"
                                                >
                                                    <Github size={16} strokeWidth={2} />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Subtle Border Glow on Hover */}
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col items-center mt-20"
                    >
                        <motion.a
                            href="https://github.com/Dayvid0063"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-semibold shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:shadow-gray-900/30 transition-all duration-300"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Github className="group-hover:rotate-12 transition-transform duration-300" size={22} strokeWidth={2} />
                            <span>More on GitHub</span>
                            <ExternalLink className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" size={18} strokeWidth={2.5} />
                        </motion.a>
                        
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="text-gray-500 text-sm mt-6"
                        >
                            View {projects.length}+ projects and counting
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
