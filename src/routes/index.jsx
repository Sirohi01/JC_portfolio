import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { ROUTES } from './paths'
import PageTransition from '../components/PageTransition'
const Home = lazy(() => import('../pages/Home'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const Services = lazy(() => import('../pages/Services'))
const Experience = lazy(() => import('../pages/Experience'))
const Research = lazy(() => import('../pages/Research'))
const NotFound = lazy(() => import('../pages/NotFound'))
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50">
    <div className="text-center">
      <div className="relative mb-8">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-600 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl animate-pulse">
          JC
        </div>
        <div className="absolute inset-0 w-20 h-20 mx-auto border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Loading</h3>
      <div className="flex gap-2 justify-center">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  </div>
)

const AppRoutes = () => {
  const location = useLocation()

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={ROUTES.HOME} element={<PageTransition><Home /></PageTransition>} />
          <Route path={ROUTES.ABOUT} element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path={ROUTES.SERVICES} element={<PageTransition><Services /></PageTransition>} />
          <Route path={ROUTES.EXPERIENCE} element={<PageTransition><Experience /></PageTransition>} />
          <Route path={ROUTES.RESEARCH} element={<PageTransition><Research /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

export default AppRoutes
