import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { useTheme } from 'next-themes';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const isDark = theme === 'dark';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sitalmahato077@gmail.com',
      href: 'mailto:sitalmahato077@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+977 9704191610',
      href: 'tel:+9779704191610',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Golbazar-10, Siraha',
      href: '#',
    },
  ];

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-900/50' : 'bg-slate-100'}`} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className={`hover:border-blue-500/50 transition-all duration-300 ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700'
                  : 'bg-white border-slate-300'
              }`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isDark ? 'bg-blue-500/10' : 'bg-blue-100'
                  }`}>
                    <info.icon className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{info.title}</h3>
                  <a
                    href={info.href}
                    className={`transition-colors ${
                      isDark
                        ? 'text-slate-400 hover:text-blue-400'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <Card className={isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-300'}>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={isDark ? 'bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={isDark ? 'bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className={`resize-none ${isDark ? 'bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500' : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400'}`}
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-center mt-12 pt-8 border-t ${
            isDark ? 'border-slate-800 text-slate-400' : 'border-slate-300 text-slate-600'
          }`}
        >
          <p>
            © 2025 Sital. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}