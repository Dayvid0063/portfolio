import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
}

const projects: Project[] = [
    {
        title: "QUICK-CART",
        description: "Quick-Cart is a multi-vendor e-commerce platform that allows customers to browse products, manage their cart and make purchases. Venors can manage their products and view orders, while Administrators have access to a dashboard for overall system management.",
        image: "/assets/images/qcImg.png",
        technologies: ["React Native", "React", "Express.js", "Node.js", "Prisma", "MongoDB"],
        liveUrl: "https://youtu.be/o5a2ZY5OSCg?si=UiTzs_EH7zrr3WHU"
    },
    {
        title: "BLESSED BALES AND BUNDLE",
        description: "Blessed Bales and Bundles is a website designed for customers to shop for Fabrics",
        image: "/assets/images/blessedbb.png",
        technologies: ["React", "TypeScript", "strapi", "Tailwind CSS"],
        liveUrl: "/#projects"
    },
    {
        title: "LOCALBIZ CONNECT",
        description: "LocalBiz Connect is your go-to online solution for discovering and supporting local businesses in your neighborhood making it easier for users to find and engage with businesses.",
        image: "/assets/images/localbiz.png",
        technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "Mongoose"],
        liveUrl: "https://youtu.be/ujbGe3AXheg?si=RLacGZJW_m-75uLe"
    },
];

const Projects = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

                    <div
                        ref={scrollRef}
                        className="overflow-y-auto max-h-[800px] pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                    >
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl text-blue-600 font-semibold mb-2">{project.title}</h3>
                                        <p className="text-gray-500 mb-4">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex justify-between">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-500 hover:text-blue-800"
                                            >
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center mt-12"
                    >
                        <a
                            href="https://github.com/Dayvid0063"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            See More Projects
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
