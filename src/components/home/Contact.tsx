'use client';

/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageCircle, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mwpbkqrb");

    const contactMethods = [
        {
            icon: <Mail size={24} />,
            label: 'Email',
            value: 'orjidavid0063@gmail.com',
            link: 'mailto:orjidavid0063@gmail.com',
            color: 'from-red-500 to-orange-500'
        },
        {
            icon: <MapPin size={24} />,
            label: 'Location',
            value: 'Lagos, Nigeria',
            link: 'https://en.wikipedia.org/wiki/Lagos',
            color: 'from-blue-500 to-cyan-500'
        }
    ];

    const socialLinks = [
        {
            icon: <Linkedin size={24} />,
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/david-orji-/',
            color: 'hover:text-blue-600',
            bgColor: 'hover:bg-blue-50'
        },
        {
            icon: <Github size={24} />,
            label: 'GitHub',
            url: 'https://github.com/Dayvid0063',
            color: 'hover:text-gray-900',
            bgColor: 'hover:bg-gray-50'
        },
        {
            icon: <Twitter size={24} />,
            label: 'Twitter',
            url: 'https://x.com/sir_dayvido',
            color: 'hover:text-blue-400',
            bgColor: 'hover:bg-blue-50'
        }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header with Animated Icon */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center justify-center gap-4 mb-4"
                        >
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
                                <MessageCircle className="text-white" size={24} />
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Get In Touch
                            </h2>
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <motion.div variants={fadeIn}>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                    <motion.div 
                                        className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                                        whileHover={{ 
                                            scale: 1.1, 
                                            rotate: 180,
                                            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                                        }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <Mail className="text-white" size={16} />
                                    </motion.div>
                                    Let's Connect
                                </h3>
                                <p className="text-gray-700 mb-8 leading-relaxed">
                                    I'm always open to discussing new opportunities, interesting projects, 
                                    or just having a friendly chat about technology and development.
                                </p>
                            </motion.div>

                            {/* Contact Methods */}
                            <div className="space-y-4">
                                {contactMethods.map((method) => (
                                    <motion.a
                                        key={method.label}
                                        href={method.link}
                                        target={method.label === 'Location' ? '_blank' : undefined}
                                        rel={method.label === 'Location' ? 'noopener noreferrer' : undefined}
                                        variants={fadeIn}
                                        className="group flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-lg"
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div 
                                            className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white`}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {method.icon}
                                        </motion.div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                                {method.label}
                                            </h4>
                                            <p className="text-gray-600">{method.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <motion.div variants={fadeIn} className="pt-8">
                                <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group w-12 h-12 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 flex items-center justify-center text-gray-600 ${social.color} ${social.bgColor} transition-all duration-300 hover:border-blue-300/50 hover:shadow-lg`}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.6 + index * 0.1 }}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form with Formspree */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50"
                        >
                            {state.succeeded ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <motion.div
                                        className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                        animate={{ 
                                            scale: [1, 1.1, 1],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{ 
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <CheckCircle className="text-white" size={32} />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h3>
                                    <p className="text-gray-600 mb-6">
                                        Thank you for reaching out! I'll get back to you as soon as possible.
                                    </p>
                                    <motion.button
                                        onClick={() => window.location.reload()}
                                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Send Another Message
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <motion.input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm text-black"
                                            placeholder="Enter your full name"
                                            whileFocus={{ scale: 1.02 }}
                                            required
                                        />
                                        <ValidationError 
                                            prefix="Name" 
                                            field="name"
                                            errors={state.errors}
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <motion.input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm text-black"
                                            placeholder="Enter your email address"
                                            whileFocus={{ scale: 1.02 }}
                                            required
                                        />
                                        <ValidationError 
                                            prefix="Email" 
                                            field="email"
                                            errors={state.errors}
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <motion.textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm resize-none text-black"
                                            placeholder="Tell me about your project or just say hello!"
                                            whileFocus={{ scale: 1.02 }}
                                            required
                                        />
                                        <ValidationError 
                                            prefix="Message" 
                                            field="message"
                                            errors={state.errors}
                                            className="text-red-500 text-sm mt-1"
                                        />
                                    </motion.div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={state.submitting}
                                        className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 ${
                                            state.submitting
                                                ? 'bg-gray-400 text-white cursor-not-allowed opacity-70'
                                                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-blue-500/25'
                                        }`}
                                        whileHover={!state.submitting ? { scale: 1.02, y: -1 } : {}}
                                        whileTap={!state.submitting ? { scale: 0.98 } : {}}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        {state.submitting ? (
                                            <>
                                                <motion.div
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>

                                    {/* Error Message */}
                                    {state.errors && Object.keys(state.errors).length > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-center text-red-600 bg-red-50 p-3 rounded-lg border border-red-200"
                                        >
                                            <AlertCircle size={16} className="inline mr-2" />
                                            Please fix the errors above and try again.
                                        </motion.div>
                                    )}
                                </form>
                            )}
                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white"
                    >
                        <motion.h3
                            className="text-2xl font-bold mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            Ready to Start Your Project?
                        </motion.h3>
                        <motion.p
                            className="text-blue-100 mb-6 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            Whether you need a website, mobile app, or technical consultation, 
                            I'm here to help bring your ideas to life.
                        </motion.p>
                        <motion.a
                            href="mailto:orjidavid0063@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                        >
                            <Mail size={20} />
                            Start a Conversation
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
