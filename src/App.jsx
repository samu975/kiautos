// Libreries imports
import { BrowserRouter, Route, Routes } from 'react-router-dom' 

//Elements and components
import './App.css'
import { NavBar } from './components/NavBar/NavBar'

// Pages-routing
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Header } from './components/Header'
import WppButton from './components/WppButton'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header initTime='8:00 AM' finishTime='5:00 PM' />
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
        <WppButton />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
