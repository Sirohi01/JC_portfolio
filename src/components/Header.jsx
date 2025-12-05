import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ROUTES } from '../routes/paths'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: ROUTES.HOME, label: 'Home' },
    { to: ROUTES.ABOUT, label: 'About' },
    { to: ROUTES.SERVICES, label: 'Services' },
    { to: ROUTES.EXPERIENCE, label: 'Experience' },
    { to: ROUTES.RESEARCH, label: 'Research' }
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'top-4 w-[95%] max-w-7xl bg-white/90 dark:bg-black backdrop-blur-xl shadow-2xl rounded-full py-3 px-6' 
          : 'top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md py-5 px-4'
      }`}
    >
      <nav className="flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2"
          aria-label="Go to homepage"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`font-bold transition-all ${isScrolled ? 'text-xl' : 'text-2xl'}`}
          >
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Jahanvi Chikara
            </span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link 
                to={link.to}
                className={`relative text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium ${
                  location.pathname === link.to ? 'text-teal-600 dark:text-teal-400' : ''
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none z-50"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <motion.svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md overflow-hidden ${
              isScrolled ? 'rounded-b-3xl mt-2' : 'border-t'
            }`}
          >
            <ul className="px-6 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium py-2 px-4 rounded-lg ${
                      location.pathname === link.to ? 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
