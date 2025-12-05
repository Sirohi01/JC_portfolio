import React from 'react'
import { motion } from 'framer-motion'
import MuscleWaves from '../components/MuscleWaves'

const Experience = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <MuscleWaves />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full backdrop-blur-sm"
            >
              <span className="text-orange-400 font-semibold">💪 Experience</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent tracking-tight">
              Clinical Experience
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Hands-on training and practical experience in diverse healthcare settings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Internship */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel rounded-2xl p-8 md:p-12 border-2 border-orange-500/20"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-orange-400 mb-2">Physiotherapy Intern</h2>
                  <p className="text-xl text-gray-200 font-bold mb-1">Government Doon Medical Hospital, Dehradun</p>
                  <p className="text-orange-300 font-semibold mb-4 inline-block bg-orange-500/10 px-3 py-1 rounded-full text-sm border border-orange-500/20">Current Position</p>
                </div>
              </div>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                  <span className="text-orange-400 mt-1 text-xl font-bold">✓</span>
                  <span className="font-medium">Completing comprehensive clinical internship in multi-specialty hospital environment</span>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                  <span className="text-orange-400 mt-1 text-xl font-bold">✓</span>
                  <span className="font-medium">Gaining hands-on experience in orthopedics, neurology, and general medicine departments</span>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                  <span className="text-orange-400 mt-1 text-xl font-bold">✓</span>
                  <span className="font-medium">Working directly with senior physiotherapists and medical teams</span>
                </li>
                <li className="flex items-start gap-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                  <span className="text-orange-400 mt-1 text-xl font-bold">✓</span>
                  <span className="font-medium">Developing practical skills in advanced therapeutic techniques</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Training */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Clinical Training Experience</h2>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-12"
            >
              <div className="mb-8 text-center">
                <span className="text-xl text-orange-400 font-bold bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">Various Healthcare Settings</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Comprehensive patient evaluations using manual muscle testing and gait assessment',
                  'Designed individualized treatment plans including therapeutic exercise and electrotherapy',
                  'Assisted in neurological and orthopedic rehabilitation for diverse conditions',
                  'Maintained accurate electronic health records and progress notes',
                  'Collaborated with multidisciplinary medical teams for holistic care',
                  'Delivered patient education on injury prevention and home exercise programs'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start gap-3 p-4 glass-card rounded-xl hover:bg-white/5"
                  >
                    <span className="text-orange-400 mt-1 text-xl font-bold">✓</span>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volunteer Work */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Community Service & Volunteer Work</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                role: 'Volunteer Physiotherapist',
                organization: 'NIEPVD, Dehradun',
                description: 'Provided specialized mobility and orientation training for visually impaired individuals',
                icon: '👁️',
              },
              {
                role: 'Healthcare Volunteer',
                organization: 'Max Hospital, Dehradun',
                description: 'Assisted clinical staff in patient care units and supported families in rehabilitation',
                icon: '🏥',
              },
              {
                role: 'Community Care Volunteer',
                organization: 'Cheshire Home & Latika Roy Foundation',
                description: 'Engaged with individuals with disabilities through therapeutic activities and mobility support',
                icon: '🤝',
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.08, y: -10 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="text-5xl mb-4 text-center">{exp.icon}</div>
                <h3 className="text-xl font-bold text-orange-400 mb-2 text-center">{exp.role}</h3>
                <p className="text-orange-300 font-bold mb-3 text-center">{exp.organization}</p>
                <p className="text-gray-400 text-center font-medium">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
