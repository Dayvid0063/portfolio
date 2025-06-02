'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Code, Home, User, FolderOpen, Mail } from 'lucide-react';

interface NavItem {
    name: string;
    href: string;
    icon: React.ReactNode;
    id: string;
}

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('home');
    const [manuallyClicked, setManuallyClicked] = useState<boolean>(false);

    const navItems: NavItem[] = [
        { name: 'Home', href: '/', icon: <Home size={18} />, id: 'home' },
        { name: 'About', href: '#about', icon: <User size={18} />, id: 'about' },
        { name: 'Projects', href: '#projects', icon: <FolderOpen size={18} />, id: 'projects' },
        { name: 'Contact', href: '#contact', icon: <Mail size={18} />, id: 'contact' },
    ];

    // Memoized scroll handler to prevent unnecessary re-renders
    const handleScroll = useCallback(() => {
        // Update scrolled state
        setScrolled(window.scrollY > 50);

        // Only auto-detect active section if user hasn't manually clicked recently
        if (!manuallyClicked) {
            const sections = ['home', 'about', 'projects', 'contact'];
            const currentSection = sections.find(section => {
                const element = section === 'home' 
                    ? document.body 
                    : document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (currentSection) {
                setActiveSection(currentSection);
            }
        }
    }, [manuallyClicked]);

    // Handle scroll effect and active section detection
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // Reset manual click flag after a delay
    useEffect(() => {
        if (manuallyClicked) {
            const timer = setTimeout(() => {
                setManuallyClicked(false);
            }, 1000); // Reset after 1 second

            return () => clearTimeout(timer);
        }
    }, [manuallyClicked]);

    const handleNavClick = useCallback((href: string, id: string): void => {
        setActiveSection(id);
        setManuallyClicked(true);
        setIsMenuOpen(false);
        
        if (href.startsWith('#')) {
            const element = document.getElementById(href.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const toggleMenu = useCallback((): void => {
        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen]);

    const logoVariants = {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        hover: { scale: 1.1, rotate: 5 },
        tap: { scale: 0.95 }
    };

    const navVariants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 }
    };

    const mobileButtonVariants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
    };

    const iconTransition = {
        rotate: { duration: 0.2 },
        opacity: { duration: 0.2 }
    };

    return (
        <motion.header
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
                    : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center"
                        variants={logoVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Link 
                            href="/" 
                            className="flex items-center gap-2 text-xl font-bold group"
                            onClick={() => handleNavClick('/', 'home')}
                        >
                            <motion.div
                                className={`w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                    scrolled ? 'shadow-lg' : ''
                                }`}
                                variants={logoVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Code className="text-white" size={20} />
                            </motion.div>
                            <span className={`transition-colors duration-300 ${
                                scrolled 
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
                                    : 'text-white'
                            }`}>
                                David.dev
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.div
                        className="hidden md:flex items-center"
                        variants={navVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={`flex items-center space-x-1 p-2 rounded-full transition-all duration-300 ${
                            scrolled 
                                ? 'bg-gray-100/80 backdrop-blur-sm border border-gray-200/50' 
                                : 'bg-white/10 backdrop-blur-sm border border-white/20'
                        }`}>
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    className="relative"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => handleNavClick(item.href, item.id)}
                                        className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                                            activeSection === item.id
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                                : scrolled
                                                ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                                : 'text-white/80 hover:text-white hover:bg-white/10'
                                        }`}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {item.icon}
                                        </motion.div>
                                        {item.name}
                                        
                                        {/* Active indicator */}
                                        {activeSection === item.id && (
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -z-10"
                                                layoutId="activeIndicator"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mobile Navigation Button */}
                    <motion.div
                        className="flex items-center md:hidden"
                        variants={mobileButtonVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.button
                            onClick={toggleMenu}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                scrolled
                                    ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                            }`}
                            variants={mobileButtonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            type="button"
                        >
                            <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={iconTransition}
                                    >
                                        <XMarkIcon className="h-6 w-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={iconTransition}
                                    >
                                        <Bars3Icon className="h-6 w-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <motion.div
                                className={`px-2 pt-2 pb-4 space-y-2 ${
                                    scrolled
                                        ? 'bg-white/95 backdrop-blur-sm border-t border-gray-200/50'
                                        : 'bg-gray-900/95 backdrop-blur-sm border-t border-white/10'
                                }`}
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                            >
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => handleNavClick(item.href, item.id)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                                                activeSection === item.id
                                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                                    : scrolled
                                                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                                    : 'text-white/80 hover:text-white hover:bg-white/10'
                                            }`}
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {item.icon}
                                            </motion.div>
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default Header;
