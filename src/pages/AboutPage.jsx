import React from 'react'
import { motion } from 'framer-motion'
import HeartBeat from '../components/HeartBeat'

const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <HeartBeat />
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
              className="inline-block mb-6 px-6 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full backdrop-blur-sm"
            >
              <span className="text-pink-400 font-semibold">❤️ About Me</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent tracking-tight">
              Jahanvi Chikara
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Passionate about improving lives through evidence-based physiotherapy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12 text-white"
            >
              Professional Summary
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="text-4xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  Dedicated to providing compassionate, evidence-based physiotherapy care that improves patient quality of life through holistic treatment approaches and continuous professional development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="text-4xl mb-6">💡</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Approach</h3>
                <p className="text-gray-400 leading-relaxed">
                  Combining strong academic training with hands-on clinical exposure in orthopedic, neurological, and cardiopulmonary rehabilitation to deliver personalized patient care.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 md:p-12 rounded-2xl"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Currently pursuing internship at <strong className="text-pink-400">Government Doon Medical Hospital</strong>, gaining extensive experience in patient assessment, evidence-based treatment planning, and therapeutic interventions across diverse conditions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Adept at working within multidisciplinary healthcare teams to deliver holistic patient care. Recognized for empathy, professional excellence, and consistent focus on improving patient outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Education & Qualifications
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                degree: 'Bachelor of Physiotherapy (B.P.T.)',
                institution: 'Sardar Bhagwaan Singh University, Dehradun',
                year: '2021–2025',
                icon: '🎓'
              },
              {
                degree: 'Intermediate (12th Grade)',
                institution: 'SM Academy, Kiratpur',
                year: '2018–2019',
                icon: '📚'
              },
              {
                degree: 'High School (10th Grade)',
                institution: 'SM Academy, Kiratpur',
                year: '2016–2017',
                icon: '🏫'
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-card rounded-xl p-6 md:p-8 border-l-4 border-pink-500"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{edu.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-lg text-pink-400 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-gray-400 font-medium">{edu.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Values */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-pink-400 mb-6">Languages</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-500/20 text-pink-400 rounded-full flex items-center justify-center font-bold">
                    हि
                  </div>
                  <div>
                    <p className="font-semibold text-white">Hindi</p>
                    <p className="text-sm text-gray-400">Native Speaker</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center font-bold">
                    EN
                  </div>
                  <div>
                    <p className="font-semibold text-white">English</p>
                    <p className="text-sm text-gray-400">Proficient</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Core Values</h3>
              <ul className="space-y-3">
                {['Empathy', 'Professional Excellence', 'Patient-Centered Care', 'Continuous Learning'].map((value, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-gray-300 font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Key Achievements
          </motion.h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { icon: '🏥', text: 'Currently completing clinical internship at Government Doon Medical Hospital' },
              { icon: '⏱️', text: 'Accumulated 100+ hours of volunteer service' },
              { icon: '🎓', text: 'Completed specialized workshops in neurological rehabilitation' },
              { icon: '⭐', text: 'Consistent positive feedback from supervisors and patients' },
              { icon: '📚', text: 'Strong academic performance throughout B.P.T. program' },
              { icon: '🔬', text: 'Active contributor to research and academic presentations' }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{achievement.icon}</span>
                  <p className="text-gray-300 leading-relaxed font-medium">{achievement.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
