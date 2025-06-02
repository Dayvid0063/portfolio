'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
    color: string;
}

interface BlogLink {
    name: string;
    url: string;
    icon: React.ReactNode;
    color: string;
}

interface QuickLink {
    name: string;
    href: string;
}

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks: SocialLink[] = [
        {
            name: 'GitHub',
            url: 'https://github.com/Dayvid0063',
            icon: <Github size={20} />,
            color: 'hover:text-gray-300'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/david-orji-/',
            icon: <Linkedin size={20} />,
            color: 'hover:text-blue-400'
        },
        {
            name: 'Twitter',
            url: 'https://x.com/sir_dayvido',
            icon: <Twitter size={20} />,
            color: 'hover:text-blue-400'
        }
    ];

    const blogLinks: BlogLink[] = [
        {
            name: 'Medium',
            url: 'https://medium.com/@orjidavid0063',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-label="Medium">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
            ),
            color: 'hover:text-green-400'
        },
        {
            name: 'Hashnode',
            url: 'https://hashnode.com/@orjidavid',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-label="Hashnode">
                    <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
                </svg>
            ),
            color: 'hover:text-blue-500'
        }
    ];

    const quickLinks: QuickLink[] = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    const floatingAnimation = {
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3]
    };

    const floatingTransition = {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut' as const
    };

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div 
                    className="absolute inset-0" 
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} 
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
                >
                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <motion.div 
                                className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                                whileHover={{ 
                                    scale: 1.1,
                                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <motion.li 
                                    key={link.name}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <motion.div 
                                            className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300" 
                                        />
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <motion.div 
                                className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
                                whileHover={{ 
                                    scale: 1.1,
                                    boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            Connect
                        </h4>
                        
                        {/* Social Links */}
                        <div className="space-y-3 mb-4">
                            <h5 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                                Social
                            </h5>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700`}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                        aria-label={`Visit ${social.name} profile`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Blog Links */}
                        <div className="space-y-3">
                            <h5 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                                Blog
                            </h5>
                            <div className="flex gap-3">
                                {blogLinks.map((blog, index) => (
                                    <motion.a
                                        key={blog.name}
                                        href={blog.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${blog.color} transition-all duration-300 hover:bg-gray-700`}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                                        aria-label={`Visit ${blog.name} blog`}
                                    >
                                        {blog.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="border-t border-gray-700 pt-6"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.div 
                            className="flex items-center gap-2 text-gray-400 text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span>© {currentYear} David Chukwudi Orji.</span>
                        </motion.div>

                        <div className="flex items-center gap-4">
                            {/* Scroll to Top Button */}
                            <motion.button
                                onClick={scrollToTop}
                                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                                whileHover={{ 
                                    scale: 1.1, 
                                    y: -2,
                                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)'
                                }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                aria-label="Scroll to top"
                                type="button"
                            >
                                <ArrowUp size={16} />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements - Fixed conflicts */}
            <motion.div
                className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl pointer-events-none"
                animate={floatingAnimation}
                transition={floatingTransition}
            />
            <motion.div
                className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl pointer-events-none"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.6, 0.3, 0.6]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
        </footer>
    );
};

export default Footer;
