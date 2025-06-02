'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

const FloatingParticles = () => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        
        // Generate particles with fixed positions for consistency
        const generateParticles = () => {
            const particleCount = 50;
            const newParticles: Particle[] = [];
            
            // Predefined positions for consistency
            const positions = [
                { x: 10, y: 20 }, { x: 80, y: 15 }, { x: 30, y: 70 }, { x: 70, y: 80 },
                { x: 50, y: 30 }, { x: 20, y: 60 }, { x: 90, y: 40 }, { x: 15, y: 85 },
                { x: 60, y: 10 }, { x: 40, y: 90 }, { x: 85, y: 65 }, { x: 25, y: 35 },
                { x: 75, y: 25 }, { x: 45, y: 55 }, { x: 95, y: 75 }, { x: 5, y: 45 },
                { x: 65, y: 5 }, { x: 35, y: 95 }, { x: 55, y: 40 }, { x: 15, y: 50 },
                { x: 85, y: 20 }, { x: 25, y: 80 }, { x: 75, y: 60 }, { x: 45, y: 15 },
                { x: 65, y: 85 }, { x: 35, y: 25 }, { x: 55, y: 75 }, { x: 85, y: 35 },
                { x: 15, y: 65 }, { x: 95, y: 55 }, { x: 5, y: 25 }, { x: 75, y: 45 },
                { x: 25, y: 5 }, { x: 65, y: 95 }, { x: 45, y: 35 }, { x: 85, y: 75 },
                { x: 15, y: 15 }, { x: 95, y: 85 }, { x: 5, y: 55 }, { x: 75, y: 25 },
                { x: 35, y: 65 }, { x: 65, y: 15 }, { x: 25, y: 95 }, { x: 85, y: 45 },
                { x: 45, y: 75 }, { x: 15, y: 35 }, { x: 95, y: 25 }, { x: 5, y: 85 },
                { x: 75, y: 55 }, { x: 55, y: 5 }
            ];
            
            for (let i = 0; i < particleCount; i++) {
                const pos = positions[i % positions.length];
                newParticles.push({
                    id: i,
                    x: pos.x + (i * 0.1) % 5, // Add slight variation
                    y: pos.y + (i * 0.2) % 5,
                    size: 3 + (i % 4), // Size between 3-6px (larger)
                    duration: 15 + (i % 10), // Duration between 15-25s
                    delay: (i % 20) * 0.5, // Staggered delays
                });
            }
            return newParticles;
        };

        setParticles(generateParticles());
    }, []);

    // Don't render particles on server side
    if (!isClient) {
        return <div className="absolute inset-0 pointer-events-none" />;
    }

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-blue-400/60 rounded-full shadow-lg"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        boxShadow: `0 0 ${particle.size * 2}px rgba(59, 130, 246, 0.3)`,
                    }}
                    animate={{
                        x: [0, 30, -20, 10, 0],
                        y: [0, -40, 20, -30, 0],
                        opacity: [0.4, 1, 0.5, 0.9, 0.4],
                        scale: [1, 1.5, 0.8, 1.2, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse",
                    }}
                />
            ))}

            {/* Add some larger accent particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`accent-${i}`}
                    className="absolute bg-purple-400/50 rounded-full shadow-lg"
                    style={{
                        left: `${20 + i * 10}%`,
                        top: `${15 + i * 8}%`,
                        width: '8px',
                        height: '8px',
                        boxShadow: '0 0 16px rgba(147, 51, 234, 0.4)',
                    }}
                    animate={{
                        x: [0, 50, -30, 0],
                        y: [0, -30, 40, 0],
                        opacity: [0.3, 0.8, 0.3],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20 + i * 2,
                        delay: i * 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* More visible gradient orbs */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={`orb-${i}`}
                    className="absolute rounded-full"
                    style={{
                        left: `${30 + i * 15}%`,
                        top: `${25 + i * 12}%`,
                        width: '16px',
                        height: '16px',
                        background: i % 2 === 0 
                            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.6), rgba(59, 130, 246, 0.2), transparent)'
                            : 'radial-gradient(circle, rgba(147, 51, 234, 0.6), rgba(147, 51, 234, 0.2), transparent)',
                        filter: 'blur(1px)',
                    }}
                    animate={{
                        x: [0, 40, -25, 0],
                        y: [0, -35, 25, 0],
                        scale: [1, 1.8, 0.6, 1],
                        opacity: [0.5, 1, 0.4, 0.5],
                    }}
                    transition={{
                        duration: 25 + i * 3,
                        delay: i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse",
                    }}
                />
            ))}

            {/* Add some bright sparkle particles */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={`sparkle-${i}`}
                    className="absolute bg-white/80 rounded-full"
                    style={{
                        left: `${Math.floor(i / 4) * 25 + 10}%`,
                        top: `${(i % 4) * 25 + 10}%`,
                        width: '2px',
                        height: '2px',
                        boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                        duration: 2 + (i % 3),
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
