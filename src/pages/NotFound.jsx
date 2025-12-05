import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      <div className="text-center max-w-2xl relative z-10">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[200px] font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            404
          </h1>
        </motion.div>

        {/* Animated Icon */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl"
          >
            🤕
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            The page you're looking for seems to have taken a break. Let's get you back on track!
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to={ROUTES.HOME}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all hover:scale-105"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-transparent text-cyan-400 rounded-full font-semibold border-2 border-cyan-500/50 hover:bg-cyan-500/10 transition-all hover:scale-105"
          >
            Go Back
          </button>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            >
              <div className="w-16 h-16 bg-cyan-500 rounded-full blur-[100px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotFound
