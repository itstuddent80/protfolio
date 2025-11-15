import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useTheme } from 'next-themes';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const skillCategories = [
    {
      category: 'Programming',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C/C++', level: 70 },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
      ],
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Git', level: 80 },
        { name: 'Figma', level: 85 },
        { name: 'VS Code', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-900/50' : 'bg-slate-100'}`} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className={`p-6 rounded-lg border ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700'
                  : 'bg-white border-slate-300'
              }`}
            >
              <h3 className={`text-xl mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + 0.5 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}