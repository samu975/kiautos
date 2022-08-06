// Libreries imports
import {  HashRouter } from 'react-router-dom' 

//Elements and components
import './App.css'
import { NavBar } from './components/NavBar/NavBar'

// Pages-routing
import { HomePage } from './pages/HomePage'
import { Header } from './components/Header'
import WppButton from './components/WppButton'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <HashRouter>
        <Header initTime='8:00 AM' finishTime='5:00 PM' />
        <NavBar />
        <HomePage />
        <Footer />
        <WppButton />
      </HashRouter>
    </>
  )
}

export default App
