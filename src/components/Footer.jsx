import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ROUTES } from '../routes/paths'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black/40 backdrop-blur-lg text-white overflow-hidden border-t border-white/5">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-3 text-gradient">
                  Jahanvi Chikara
                </h3>
                <p className="text-cyan-400 font-semibold mb-4 text-lg">Physiotherapist</p>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Dedicated to improving lives through evidence-based physiotherapy and compassionate care. Specializing in neurological, orthopedic, and pediatric rehabilitation.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { to: ROUTES.HOME, label: 'Home', icon: '🏠' },
                  { to: ROUTES.ABOUT, label: 'About', icon: '👤' },
                  { to: ROUTES.SERVICES, label: 'Services', icon: '⚕️' },
                  { to: ROUTES.EXPERIENCE, label: 'Experience', icon: '💼' },
                  { to: ROUTES.RESEARCH, label: 'Research', icon: '🔬' }
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all hover:translate-x-1 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-4 text-white">Get in Touch</h4>
              <div className="space-y-4">
                <a
                  href="tel:+919368071787"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="bg-cyan-500/10 p-2 rounded-lg group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                    <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-sm">+91-9368071787</span>
                </a>

                <a
                  href="mailto:chikarajahanvi@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="bg-purple-500/10 p-2 rounded-lg group-hover:bg-purple-500/20 transition-colors border border-purple-500/20">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-sm">chikarajahanvi@gmail.com</span>
                </a>

                <div className="flex items-center gap-3 text-gray-400">
                  <div className="bg-pink-500/10 p-2 rounded-lg border border-pink-500/20">
                    <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Dehradun, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
