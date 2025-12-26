import { motion } from 'framer-motion';
import { Linkedin, Github, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import profilePic from '@/assets/profile-pic.png';

export default function About() {
  return (
    <>
      <SEOHead
        title="About Vivek Pal"
        description={`Learn about ${photographerInfo.name}, ${photographerInfo.tagline}. ${photographerInfo.biography.split('\n\n')[0]}`}
        image={photographerInfo.portraitImage}
      />
      
      <div className="min-h-screen bg-cyber-gradient bg-grid-pattern">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border/50">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4 text-glow-cyan" style={{ fontFamily: 'var(--font-display)' }}>
                About Me
              </h1>
              <p className="text-lg md:text-xl text-primary font-light tracking-wide">
                AI & Machine Learning Engineer
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portrait and Biography - Split Layout */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Portrait Image */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-card border border-border/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                  <img
                    src={profilePic}
                    alt="Vivek Pal"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute -inset-px rounded-lg border border-primary/20" />
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://linktr.ee/vivekpal00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                    aria-label="Linktree"
                  >
                    <ExternalLink className="size-5 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://linktr.ee/vivekpal00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://linktr.ee/vivekpal00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                    aria-label="GitHub"
                  >
                    <Github className="size-5 group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </motion.div>

              {/* Biography and Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Name and Tagline */}
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                    {photographerInfo.name}
                  </h2>
                  <p className="text-xl text-primary font-light tracking-wide">
                    {photographerInfo.tagline}
                  </p>
                </div>

                <Separator className="bg-border/50" />

                {/* Biography */}
                <div className="space-y-4">
                  {photographerInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="pt-4 space-y-3">
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Email: </span>
                    <a
                      href={`mailto:${photographerInfo.email}`}
                      className="text-primary hover:text-foreground transition-colors"
                    >
                      {photographerInfo.email}
                    </a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Phone: </span>
                    <a
                      href={`tel:${photographerInfo.phone}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {photographerInfo.phone}
                    </a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Location: </span>
                    <span className="text-foreground">{photographerInfo.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education & Approach Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Education */}
              <motion.div
                className="p-6 rounded-lg bg-card/50 border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <GraduationCap className="size-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-display)' }}>Education</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {photographerInfo.education}
                </p>
              </motion.div>

              {/* Experience Summary */}
              <motion.div
                className="p-6 rounded-lg bg-card/50 border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Briefcase className="size-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-display)' }}>Experience</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  1.1 Years ML Development at SDLtek<br />
                  1.2 Years Business Analyst at Shrivas Wealth
                </p>
              </motion.div>

              {/* Interests */}
              <motion.div
                className="p-6 rounded-lg bg-card/50 border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Award className="size-8 text-neon-pink mb-4" />
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-display)' }}>Interests</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Artificial Intelligence, Finance, Data Science, Stock Market, Chess, E-sports
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* My Approach Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border/50 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-8 text-center text-glow-purple" style={{ fontFamily: 'var(--font-display)' }}>
                My Approach
              </h2>
              <div className="space-y-4">
                {photographerInfo.approach.split('\n\n').map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg font-light leading-relaxed text-muted-foreground text-center"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Awards & Certifications */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center" style={{ fontFamily: 'var(--font-display)' }}>
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {photographerInfo.awards.map((award, index) => (
                  <motion.div
                    key={award}
                    className="flex items-start gap-3 p-4 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 transition-all"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="size-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground">{award}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
