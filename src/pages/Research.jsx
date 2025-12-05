import React from 'react'
import { motion } from 'framer-motion'
import BrainWaves from '../components/BrainWaves'

const Research = () => {
  const projects = [
    {
      title: 'Undergraduate Thesis',
      year: '2024–2025',
      topic: 'Evidence-Based Rehabilitation Protocols for Shoulder Impingement Syndrome',
      type: 'Thesis',
      description: 'Comprehensive research on effective rehabilitation strategies for shoulder impingement, analyzing various treatment protocols and their outcomes.'
    },
    {
      title: 'Research Studies',
      topic: 'Peripheral Vestibular Disorders and Management Approaches in Cerebral Palsy',
      type: 'Research',
      description: 'In-depth study of vestibular disorders and their management in pediatric patients with cerebral palsy.'
    },
    {
      title: 'Academic Presentations',
      topic: 'Case Reports on Clinical Reasoning and Treatment Outcomes',
      type: 'Presentation',
      description: 'Presented multiple case reports during academic seminars, showcasing clinical reasoning skills and evidence-based treatment approaches.'
    }
  ]

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 relative overflow-hidden">
        <BrainWaves />
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
              className="inline-block mb-6 px-6 py-2 bg-purple-100 rounded-full"
            >
              <span className="text-purple-700 font-semibold">🔬 Research</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Research & Academic Projects
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Contributing to evidence-based physiotherapy through research and academic excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-8 md:p-10 shadow-md hover:shadow-2xl transition-all duration-300 border border-purple-200"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-lg px-4 py-2 text-sm font-semibold flex-shrink-0 self-start shadow-md">
                    {project.type}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-2">{project.title}</h3>
                    {project.year && (
                      <p className="text-lg text-purple-600 font-semibold mb-3">{project.year}</p>
                    )}
                    <p className="text-xl text-gray-800 mb-4 font-semibold">{project.topic}</p>
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Research Interests</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { icon: '🧠', title: 'Neurological Rehabilitation', description: 'Evidence-based approaches for neurological conditions', color: 'from-purple-50 to-violet-50' },
              { icon: '🦴', title: 'Musculoskeletal Disorders', description: 'Innovative treatment protocols for orthopedic conditions', color: 'from-violet-50 to-purple-50' },
              { icon: '👶', title: 'Pediatric Physiotherapy', description: 'Developmental interventions for children', color: 'from-fuchsia-50 to-purple-50' },
              { icon: '⚖️', title: 'Vestibular Rehabilitation', description: 'Balance and vestibular disorder management', color: 'from-purple-50 to-pink-50' }
            ].map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -10 }}
                className={`bg-gradient-to-br ${interest.color} rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-purple-200`}
              >
                <div className="text-5xl mb-4 text-center">{interest.icon}</div>
                <h3 className="text-xl font-bold text-purple-800 mb-3 text-center">{interest.title}</h3>
                <p className="text-gray-700 text-center font-medium">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Research
