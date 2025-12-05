import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ThreeBackground from '../components/ThreeBackground'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        <ThreeBackground />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Jahanvi Chikara
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-teal-600 font-semibold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Physiotherapist
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
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
                className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91-9368071787
              </a>
              <span className="hidden sm:block text-gray-400">|</span>
              <a 
                href="mailto:chikarajahanvi@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition-colors"
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
                className="px-6 md:px-8 py-3 bg-white text-teal-600 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl border-2 border-teal-600 hover:scale-105"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {[
              { number: '100+', label: 'Volunteer Hours', color: 'from-teal-50 to-cyan-50' },
              { number: '4+', label: 'Years Training', color: 'from-blue-50 to-indigo-50' },
              { number: '3+', label: 'Specializations', color: 'from-purple-50 to-pink-50' },
              { number: '5+', label: 'Research Projects', color: 'from-pink-50 to-rose-50' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`text-center p-4 md:p-6 bg-gradient-to-br ${stat.color} rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-teal-100`}
              >
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Preview */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-900"
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
                color: 'from-purple-50 to-violet-50'
              },
              {
                icon: '🦴',
                title: 'Orthopedic Care',
                description: 'Treatment for musculoskeletal disorders and post-surgical rehabilitation',
                color: 'from-teal-50 to-cyan-50'
              },
              {
                icon: '👶',
                title: 'Pediatric Therapy',
                description: 'Compassionate care for children with developmental challenges',
                color: 'from-pink-50 to-rose-50'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200`}
              >
                <div className="text-5xl md:text-6xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-700 text-center font-medium leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-900"
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
              className="bg-white rounded-2xl p-6 md:p-12 shadow-xl"
            >
              <p className="text-center text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or answering any questions about physiotherapy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <motion.a 
                  href="tel:+919368071787"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all group border border-teal-100"
                >
                  <div className="bg-teal-600 text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-gray-600 font-medium">Phone</p>
                    <p className="text-sm md:text-lg font-semibold text-gray-900 truncate">+91-9368071787</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="mailto:chikarajahanvi@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all group border border-blue-100"
                >
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-gray-600 font-medium">Email</p>
                    <p className="text-sm md:text-lg font-semibold text-gray-900 truncate">chikarajahanvi@gmail.com</p>
                  </div>
                </motion.a>
              </div>

              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl text-center border border-purple-100">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Office Hours</h3>
                <div className="space-y-1 text-sm md:text-base text-gray-700 font-medium">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
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
