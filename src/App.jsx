import { BrowserRouter as Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AppRoutes from './routes'
import PageLoader from './components/PageLoader'
import BackToTop from './components/BackToTop'
import ScrollProgress from './components/ScrollProgress'

import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <PageLoader />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
      <BackToTop />
    </Router>
  )
}

export default App
