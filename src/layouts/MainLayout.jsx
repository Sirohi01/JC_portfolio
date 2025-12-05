import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      {/* Skip to main content for screen readers */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" role="main" tabIndex="-1">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default MainLayout
