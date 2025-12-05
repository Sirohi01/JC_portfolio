import React from 'react'
import { motion } from 'framer-motion'
import HeartBeat from '../components/HeartBeat'

const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-rose-50 via-red-50 to-pink-50 overflow-hidden">
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
              className="inline-block mb-6 px-6 py-2 bg-red-100 rounded-full"
            >
              <span className="text-red-600 font-semibold">❤️ About Me</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Jahanvi Chikara
            </h1>
            <p className="text-xl text-black dark:text-black max-w-3xl mx-auto font-medium">
              Passionate about improving lives through evidence-based physiotherapy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-12 text-gray-900"
            >
              Professional Summary
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg"
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dedicated to providing compassionate, evidence-based physiotherapy care that improves patient quality of life through holistic treatment approaches and continuous professional development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg"
              >
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Combining strong academic training with hands-on clinical exposure in orthopedic, neurological, and cardiopulmonary rehabilitation to deliver personalized patient care.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-lg border border-red-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Currently pursuing internship at <strong className="text-red-700">Government Doon Medical Hospital</strong>, gaining extensive experience in patient assessment, evidence-based treatment planning, and therapeutic interventions across diverse conditions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Adept at working within multidisciplinary healthcare teams to deliver holistic patient care. Recognized for empathy, professional excellence, and consistent focus on improving patient outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-900"
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
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-l-4 border-red-500"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{edu.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-red-600 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-gray-600 font-medium">{edu.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8 shadow-lg border border-red-100"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-6">Languages</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    हि
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Hindi</p>
                    <p className="text-sm text-gray-600">Native Speaker</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    EN
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">English</p>
                    <p className="text-sm text-gray-600">Proficient</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 shadow-lg border border-pink-100"
            >
              <h3 className="text-2xl font-bold text-pink-600 mb-6">Core Values</h3>
              <ul className="space-y-3">
                {['Empathy', 'Professional Excellence', 'Patient-Centered Care', 'Continuous Learning'].map((value, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Key Achievements
          </motion.h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { icon: '🏥', text: 'Currently completing clinical internship at Government Doon Medical Hospital', color: 'from-red-50 to-pink-50' },
              { icon: '⏱️', text: 'Accumulated 100+ hours of volunteer service', color: 'from-pink-50 to-rose-50' },
              { icon: '🎓', text: 'Completed specialized workshops in neurological rehabilitation', color: 'from-rose-50 to-red-50' },
              { icon: '⭐', text: 'Consistent positive feedback from supervisors and patients', color: 'from-red-50 to-orange-50' },
              { icon: '📚', text: 'Strong academic performance throughout B.P.T. program', color: 'from-pink-50 to-red-50' },
              { icon: '🔬', text: 'Active contributor to research and academic presentations', color: 'from-rose-50 to-pink-50' }
            ].map((achievement, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`bg-gradient-to-br ${achievement.color} rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-red-100`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{achievement.icon}</span>
                  <p className="text-gray-700 leading-relaxed font-medium">{achievement.text}</p>
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
