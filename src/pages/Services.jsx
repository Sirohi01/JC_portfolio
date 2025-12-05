import React from 'react'
import { motion } from 'framer-motion'
import JointRotation from '../components/JointRotation'

const Services = () => {
  const services = [
    {
      title: 'Patient Assessment',
      icon: '🔍',
      skills: ['Range of Motion', 'Gait Analysis', 'Postural Evaluation', 'Neurological Screening'],
      color: 'from-teal-50 to-cyan-50'
    },
    {
      title: 'Therapy Techniques',
      icon: '💪',
      skills: ['Manual Therapy', 'Electrotherapy', 'Therapeutic Exercises', 'Bobath/NDT Principles'],
      color: 'from-blue-50 to-indigo-50'
    },
    {
      title: 'Specialized Practice',
      icon: '⚕️',
      skills: ['Neurological Rehab', 'Orthopedic Care', 'Pediatric Therapy', 'Vestibular Rehabilitation'],
      color: 'from-purple-50 to-pink-50'
    },
    {
      title: 'Patient Care & Education',
      icon: '📋',
      skills: ['Goal-Oriented Planning', 'Progress Monitoring', 'Counseling', 'Preventive Health Guidance'],
      color: 'from-green-50 to-emerald-50'
    }
  ]

  const competencies = [
    {
      category: 'Clinical Skills',
      items: ['Evidence-based practice', 'Clinical decision making', 'Patient safety protocols', 'Documentation & reporting']
    },
    {
      category: 'Soft Skills',
      items: ['Empathetic patient care', 'Team collaboration', 'Clear communication', 'Adaptability & learning']
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        <JointRotation />
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
              className="inline-block mb-6 px-6 py-2 bg-emerald-100 rounded-full"
            >
              <span className="text-emerald-700 font-semibold">⚕️ Services</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Services & Expertise
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Comprehensive physiotherapy services tailored to your recovery needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-emerald-100`}
              >
                <div className="text-5xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4 text-center">{service.title}</h3>
                <ul className="space-y-3">
                  {service.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-emerald-600 mt-1 font-bold">✓</span>
                      <span className="text-sm font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Competencies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Professional Competencies</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {competencies.map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-emerald-200"
              >
                <h3 className="text-2xl font-bold text-emerald-700 mb-6">{comp.category}</h3>
                <ul className="space-y-3">
                  {comp.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
