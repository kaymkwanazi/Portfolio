import Home from './pages/Home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logo from './assets/logo.png'
import Footer from './components/footer.jsx'

function App() {
  return (
    <>
      
      <Navbar />
      
      <Router>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
