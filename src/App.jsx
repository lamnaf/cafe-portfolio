import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import { Toaster } from "react-hot-toast"

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition duration-300 font-sans">
      <Toaster position="top-right" reserveOrder={false} />
      
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}