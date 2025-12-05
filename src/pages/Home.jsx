import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ThreeBackground from '../components/ThreeBackground'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ThreeBackground />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gradient">Jahanvi Chikara</span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-4xl text-cyan-400 font-light mb-8 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Physiotherapist
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Dedicated and compassionate Physiotherapy Professional with strong academic training and hands-on clinical exposure
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="tel:+919368071787"
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors px-4 py-2 rounded-full hover:bg-white/5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91-9368071787
              </a>
              <span className="hidden sm:block text-gray-600">|</span>
              <a
                href="mailto:chikarajahanvi@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors px-4 py-2 rounded-full hover:bg-white/5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                chikarajahanvi@gmail.com
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >

              <Link
                to="/services"
                className="px-8 md:px-10 py-4 bg-transparent text-white rounded-full font-bold hover:bg-cyan-500/10 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] border border-cyan-400/50 hover:scale-105 backdrop-blur-sm"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 md:py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              { number: '100+', label: 'Volunteer Hours' },
              { number: '4+', label: 'Years Training' },
              { number: '3+', label: 'Specializations' },
              { number: '5+', label: 'Research Projects' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card text-center p-6 md:p-8 rounded-2xl"
              >
                <div className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Preview */}
      <section className="py-12 md:py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Areas of Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🧠',
                title: 'Neurological Rehabilitation',
                description: 'Specialized care for stroke, cerebral palsy, and spinal cord injuries',
              },
              {
                icon: '🦴',
                title: 'Orthopedic Care',
                description: 'Treatment for musculoskeletal disorders and post-surgical rehabilitation',
              },
              {
                icon: '👶',
                title: 'Pediatric Therapy',
                description: 'Compassionate care for children with developmental challenges',
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card p-8 rounded-2xl md:p-10"
              >
                <div className="text-5xl md:text-6xl mb-6 text-center">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-400 text-center leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-8 md:p-12"
            >
              <p className="text-center text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or answering any questions about physiotherapy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.a
                  href="tel:+919368071787"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-6 glass-card rounded-xl hover:bg-white/5 group"
                >
                  <div className="bg-cyan-500/20 text-cyan-400 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-400 font-medium">Phone</p>
                    <p className="text-lg font-semibold text-white truncate">+91-9368071787</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:chikarajahanvi@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-6 glass-card rounded-xl hover:bg-white/5 group"
                >
                  <div className="bg-purple-500/20 text-purple-400 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-400 font-medium">Email</p>
                    <p className="text-lg font-semibold text-white truncate">chikarajahanvi@gmail.com</p>
                  </div>
                </motion.a>
              </div>

              <div className="mt-8 p-6 glass-card rounded-xl text-center">
                <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-300 font-medium">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-red-400">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
