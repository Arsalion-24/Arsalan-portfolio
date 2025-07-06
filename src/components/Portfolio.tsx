import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Brain, Database, Globe } from 'lucide-react'

const Portfolio = () => {
  const skills = [
    { name: 'Python', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'React', level: 90, icon: <Globe className="w-5 h-5" /> },
    { name: 'AI/ML', level: 88, icon: <Brain className="w-5 h-5" /> },
    { name: 'Node.js', level: 85, icon: <Database className="w-5 h-5" /> },
    { name: 'TypeScript', level: 82, icon: <Code className="w-5 h-5" /> },
    { name: 'MongoDB', level: 80, icon: <Database className="w-5 h-5" /> }
  ]

  const projects = [
    {
      title: 'AI Agent Development Platform',
      description: 'Built an advanced AI agent development platform using Python, FastAPI, and machine learning models for automated task execution.',
      tech: ['Python', 'FastAPI', 'AI/ML', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'E-commerce Web Application',
      description: 'Full-stack e-commerce solution with React frontend, Node.js backend, and integrated payment processing.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Machine Learning Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and machine learning model performance tracking.',
      tech: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn'],
      github: '#',
      demo: '#'
    }
  ]

  const experiences = [
    {
      title: 'Senior AI Engineer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading AI/ML projects, developing intelligent automation systems, and mentoring junior developers.'
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2021 - 2022',
      description: 'Developed web applications using React, Node.js, and cloud technologies. Improved system performance by 40%.'
    },
    {
      title: 'Software Developer',
      company: 'StartupTech',
      period: '2020 - 2021',
      description: 'Built scalable web applications and APIs. Collaborated with cross-functional teams to deliver high-quality software.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Muhammad Arsalan
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-white/80 hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Engineer &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {' '}Full-Stack Developer
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Expert in AI/ML, Python, React, and modern web technologies. 
              Building intelligent solutions that transform businesses and enhance user experiences.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              I'm a passionate AI Engineer and Full-Stack Developer with 3+ years of experience 
              in building intelligent systems and scalable web applications. I specialize in 
              machine learning, automation, and creating seamless user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-white font-semibold ml-3">{skill.name}</h3>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-purple-400 to-pink-600 h-2 rounded-full"
                  />
                </div>
                <p className="text-white/60 text-sm mt-2">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-purple-400/50 transition-all"
              >
                <h3 className="text-white font-bold text-xl mb-3">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-white/80 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-white/80 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 mb-6"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-white font-bold text-xl">{exp.title}</h3>
                    <p className="text-purple-300 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-white/60 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-white/80">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-white/80">arsalaan.mughal24@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-white/80">+92-370-9065887</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-white/80">Lahore, Pakistan</p>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://linkedin.com/in/arsalan-mughal-dev"
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://github.com/Arsalion-DEV"
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
            >
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-purple-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-white/60">
            © 2024 Muhammad Arsalan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio

