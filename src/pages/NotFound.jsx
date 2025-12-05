import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/paths'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-2xl">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[200px] font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
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
            className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white text-teal-600 rounded-full font-semibold border-2 border-teal-600 hover:bg-teal-50 transition-all hover:scale-105"
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
                opacity: [0.3, 0.6, 0.3],
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
              <div className="w-16 h-16 bg-teal-200 rounded-full blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotFound
