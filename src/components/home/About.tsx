import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 80 },
    { name: 'TypeScript', level: 80 },
    { name: 'Golang', level: 70 },
    { name: 'ReactNative', level: 80 },
    { name: 'React', level: 80 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Figma', level: 80 },
    { name: 'AWS', level: 70 },
    { name: 'Docker', level: 70 },
    { name: 'NGINX', level: 70 },
    { name: 'GIT', level: 80 },
    { name: 'Postman', level: 70 },
    { name: 'Postgresql', level: 80 },
    { name: 'MongoDB', level: 80 },

];

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl text-gray-500 font-bold text-center mb-12">About Me</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                        <div className="relative w-80 h-96 mx-auto md:mx-0">
                            <Image
                                src="/assets/images/dayv.PNG"
                                alt="Profile Picture"
                                fill
                                className="rounded-full object-cover"
                                priority
                            />
                        </div>
                        <p className="text-lg text-gray-600">
                            As a goal focused and technically skilled Software Engineer,
                            I am passionate about contributing to the development of innovative software solutions.
                            With a background in Web and Mobile applications development,
                            I bring a blend of creativity and technical expertise to every project I undertake.
                            I believe in writing clean, maintainable code that not only works but is also a joy for other developers
                            to work with. My goal is to create software that not only meets but exceeds expectations,
                            delivering value to users and stakeholders.
                        </p>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-xl text-gray-500 font-semibold mb-6">Skills</h3>
                        <div className="space-y-4">
                            {skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-700">{skill.name}</span>
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
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
