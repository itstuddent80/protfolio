import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useTheme } from 'next-themes';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: 'June 2023 - Present',
      description: 'Collaborated directly with clients to assess design needs, goals, and target audiences.',
      current: true,
    },
    {
      title: 'Web Designer',
      company: 'Creative Agency',
      period: 'May 2023 - Present',
      description: 'Collaborated with clients to understand their design needs.',
      current: true,
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Work Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className={`hover:border-blue-500/50 transition-all duration-300 ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700'
                  : 'bg-white border-slate-300'
              }`}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg mt-1 ${isDark ? 'bg-blue-500/10' : 'bg-blue-100'}`}>
                          <Briefcase className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                        </div>
                        <div>
                          <h3 className={`text-xl mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.title}</h3>
                          <p className="text-blue-400 mb-2">{exp.company}</p>
                          <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>{exp.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 md:text-right ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                      {exp.current && (
                        <span className="ml-2 px-2 py-1 bg-green-500/10 text-green-400 rounded text-sm">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
