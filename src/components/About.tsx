import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Rocket } from 'lucide-react';
import { useTheme } from 'next-themes';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices.',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful interfaces with attention to detail and user experience.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Building fast and optimized applications for the best user experience.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`space-y-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
          >
            <p>
              I'm a motivated IT student with a strong foundation in programming, web development, 
              and database management. Currently pursuing my Diploma in Information Technology at 
              Manmohan Memorial Polytechnic, Biratnagar, I bring ideas to life through code.
            </p>
            <p>
              My journey in web development has been driven by curiosity and a commitment to continuous learning.
              I specialize in building efficient and user-friendly software solutions using modern web technologies
              like React, Node.js, PHP, and working with databases like MySQL and MongoDB.
            </p>
            <p>
              As a freelance web developer and web designer at a creative agency, I've collaborated with 
              clients to understand their needs and deliver solutions that exceed expectations. I'm passionate 
              about creating responsive, accessible applications that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-blue-500/10' : 'bg-blue-100'}`}>
                  <feature.icon className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h3 className={`mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h3>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}