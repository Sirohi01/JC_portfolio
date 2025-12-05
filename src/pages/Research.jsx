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
      <section className="py-32 relative overflow-hidden">
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
              className="inline-block mb-6 px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm"
            >
              <span className="text-purple-400 font-semibold">🔬 Research</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent tracking-tight">
              Research & Academic Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Contributing to evidence-based physiotherapy through research and academic excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-20 bg-transparent">
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
                className="glass-panel rounded-2xl p-8 md:p-10 border border-purple-500/20"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-lg px-4 py-2 text-sm font-semibold flex-shrink-0 self-start shadow-sm backdrop-blur-sm">
                    {project.type}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                    {project.year && (
                      <p className="text-lg text-purple-400 font-semibold mb-3">{project.year}</p>
                    )}
                    <p className="text-xl text-gray-300 mb-4 font-semibold">{project.topic}</p>
                    <p className="text-gray-400 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Research Interests</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { icon: '🧠', title: 'Neurological Rehabilitation', description: 'Evidence-based approaches for neurological conditions' },
              { icon: '🦴', title: 'Musculoskeletal Disorders', description: 'Innovative treatment protocols for orthopedic conditions' },
              { icon: '👶', title: 'Pediatric Physiotherapy', description: 'Developmental interventions for children' },
              { icon: '⚖️', title: 'Vestibular Rehabilitation', description: 'Balance and vestibular disorder management' }
            ].map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -10 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="text-5xl mb-4 text-center">{interest.icon}</div>
                <h3 className="text-xl font-bold text-purple-400 mb-3 text-center">{interest.title}</h3>
                <p className="text-gray-400 text-center font-medium">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Research
