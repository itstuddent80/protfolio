import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { useTheme } from 'next-themes';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const projects = [
    {
      title: 'IT Department Management System',
      description: 'A full-stack web application for managing IT department operations with CRUD operations and advanced search filters.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, product management, and user authentication.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Node.js', 'MySQL', 'CSS'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with detailed forecasts, location search, and interactive maps.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for developers to showcase their work with a beautiful, customizable interface.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Blog Platform',
      description: 'Full-featured blogging platform with user authentication, post management, and commenting system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className={`overflow-hidden group hover:border-blue-500/50 transition-all duration-300 ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700'
                  : 'bg-white border-slate-300'
              }`}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t to-transparent opacity-60 ${
                    isDark ? 'from-slate-900' : 'from-slate-200'
                  }`}></div>
                </div>
                <CardContent className="p-6">
                  <h3 className={`text-xl mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                  <p className={`mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className={isDark ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}>
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className={isDark ? 'border-slate-600 bg-blue-600 text-white hover:bg-slate-700' : 'border-slate-300 bg-slate-100 text-slate-900 hover:bg-slate-200'} asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className={isDark ? 'bg-blue-600 text-white hover:bg-slate-700' : 'bg-blue-600 text-white hover:bg-blue-700'} asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
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