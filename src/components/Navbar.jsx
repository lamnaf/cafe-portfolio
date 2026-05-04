import { useState, useEffect } from 'react'

export default function Navbar() {

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme")
    
    if (saved) {
      return saved === "dark"
    }
  
    return window.matchMedia("(prefers-color-scheme: dark)").matches
})

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  return (
    <header className="bg-white dark:bg-gray-800 shadow z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">

        <h1 className="font-bold text-xl dark:text-white">Cafe Nusantara</h1>

        <div className="flex items-center gap-4">

        <button
          className="md:hidden text-2xl dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

          <nav className="space-x-6 hidden md:block">
            <a href="#" className="text-gray-800 dark:text-white hover:text-amber-500" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="text-gray-800 dark:text-white hover:text-amber-500" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#menu" className="text-gray-800 dark:text-white hover:text-amber-500" onClick={() => setMenuOpen(false)}>Menu</a>
            <a href="#contact" className="text-gray-800 dark:text-white hover:text-amber-500" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          {menuOpen && (
            <div
              className={`absolute z-10 top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-xl backdrop-blur-md p-6 flex flex-col gap-4 md:hidden transition-all duration-300 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
              }`}
            >
              <a href="#" className="text-gray-800 dark:text-white hover:text-amber-500" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#about" className="text-gray-800 dark:text-white hover:text-amber-500" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#menu" className="text-gray-800 dark:text-white hover:text-amber-500" onClick={() => setMenuOpen(false)}>Menu</a>
              <a href="#contact" className="text-gray-800 dark:text-white hover:text-amber-500" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          )}
            <button
              onClick={() => setDark(!dark)}
              className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition transform hover:scale-110"
            >
              {dark ? "☀️" : "🌙"}
            </button>

        </div>
      </div>
    </header>
  )
}