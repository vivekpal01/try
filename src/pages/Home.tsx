import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Brain, Database, Code2, TrendingUp, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import profilePic from '@/assets/profile-pic.png';

const skills = [
  { icon: Brain, label: 'Machine Learning', description: 'Regression, Classification, Model Evaluation' },
  { icon: Database, label: 'Data Science', description: 'NumPy, Pandas, Matplotlib, Scikit-learn' },
  { icon: Code2, label: 'Programming', description: 'Python, SQL, HTML, CSS, JavaScript' },
  { icon: TrendingUp, label: 'Deep Learning', description: 'Neural Networks, NLP, GANs, TensorFlow' },
];

const certifications = [
  'IBM - Data Science',
  'Google - Machine Learning',
  'LinkedIn Learning - Generative AI',
  'LinkedIn Learning - Project Management',
];

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead 
        title="Vivek Pal - AI & Machine Learning Engineer"
        description="B.Tech graduate specializing in AI, Machine Learning, and Data Science. Building intelligent solutions with Python, TensorFlow, and cutting-edge ML algorithms."
      />
      
      <div className="min-h-screen bg-cyber-gradient">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full overflow-hidden bg-grid-pattern">
          {/* Animated scan line effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-scan-line" />
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

          {/* Hero Content */}
          <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
            <motion.div
              className="text-center space-y-8 max-w-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Profile Image */}
              <motion.div
                className="relative mx-auto w-40 h-40 md:w-56 md:h-56"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow opacity-60 blur-xl" style={{ animationDuration: '8s' }} />
                <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden shadow-glow-cyan">
                  <img
                    src={profilePic}
                    alt="Vivek Pal"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Neon ring */}
                <div className="absolute -inset-2 rounded-full border border-primary/30 animate-pulse" />
              </motion.div>

              {/* Name with glow effect */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-foreground text-glow-cyan"
                style={{ fontFamily: 'var(--font-display)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {photographerInfo.name.toUpperCase()}
              </motion.h1>
              
              {/* Tagline */}
              <motion.div
                className="flex items-center justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
                <p className="text-xl md:text-2xl font-light tracking-widest text-primary uppercase">
                  {photographerInfo.tagline}
                </p>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
              </motion.div>

              {/* Introduction */}
              <motion.p
                className="text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                {photographerInfo.heroIntroduction}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wide rounded border border-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-glow-cyan"
                >
                  <span>View Projects</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent text-foreground font-medium tracking-wide rounded border border-border hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <span>Get In Touch</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border/50">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-glow-cyan" style={{ fontFamily: 'var(--font-display)' }}>
                  Technical Skills
                </h2>
                <p className="text-muted-foreground font-light">
                  Building intelligent solutions with cutting-edge technologies
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <ScrollReveal key={skill.label} delay={index * 0.1}>
                  <motion.div
                    className="group p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-cyan"
                    whileHover={{ y: -5 }}
                  >
                    <skill.icon className="size-10 text-primary mb-4 group-hover:text-glow-cyan transition-all" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{skill.label}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-card/30 border-t border-border/50">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-glow-purple" style={{ fontFamily: 'var(--font-display)' }}>
                  Experience
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="p-6 rounded-lg bg-card/50 border border-border/50 hover:border-accent/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">Machine Learning Intern</h3>
                    <span className="text-sm text-primary">Nov 2022 – Dec 2023</span>
                  </div>
                  <p className="text-accent mb-2">SDLtek</p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Developed ML model for insurance fraud detection in USA medical sector</li>
                    <li>• Adapted model using Indian medical insurance data for cross-regional application</li>
                    <li>• Improved fraud detection accuracy, contributing to risk mitigation strategies</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-6 rounded-lg bg-card/50 border border-border/50 hover:border-accent/50 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">Business Analyst</h3>
                    <span className="text-sm text-primary">May 2024 – July 2025</span>
                  </div>
                  <p className="text-accent mb-2">Shrivas Wealth</p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>• Led sales and operations strategies for client acquisition in financial advisory</li>
                    <li>• Utilized data-driven methods to enhance client targeting and revenue growth</li>
                    <li>• Performed investment-focused data analysis for portfolio management</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border/50">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                  Certifications
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <ScrollReveal key={cert} delay={index * 0.1}>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 transition-all">
                    <div className="size-2 rounded-full bg-primary" />
                    <span className="text-foreground">{cert}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 border-t border-border/50">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-glow-cyan" style={{ fontFamily: 'var(--font-display)' }}>
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                AI & Machine Learning applications
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-medium tracking-wide text-primary hover:text-foreground transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* Contact CTA Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-card/30 border-t border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Let's Connect
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm currently looking for AI/ML opportunities where I can apply my skills, keep learning, and grow into a versatile tech professional.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <a href={`mailto:${photographerInfo.email}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  <Mail className="size-5" />
                  <span>{photographerInfo.email}</span>
                </a>
                <a href={`tel:${photographerInfo.phone}`} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  <Phone className="size-5" />
                  <span>{photographerInfo.phone}</span>
                </a>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="size-5" />
                  <span>{photographerInfo.location}</span>
                </span>
              </div>

              <a
                href="https://linktr.ee/vivekpal00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wide rounded border border-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-glow-cyan"
              >
                <span>Connect With Me</span>
                <ExternalLink className="size-4" />
              </a>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
