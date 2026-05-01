import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Andi",
      text: "Kopinya enak banget, tempatnya nyaman!",
    },
    {
      name: "Sari",
      text: "Pelayanan cepat dan ramah, recommended!",
    },
    {
      name: "Budi",
      text: "Tempat nongkrong terbaik di kota ini 🔥",
    },
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [testimonials.length])

    const next = () => {
      setIndex((index + 1) % testimonials.length)
    }

    const prev = () => {
      setIndex((index - 1 + testimonials.length) % testimonials.length)
    }

    return (
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center px-6">

          <h2 className="text-3xl font-bold mb-10 dark:text-white">
            Apa Kata Mereka
          </h2>

          <div className="relative">

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
              >
                <p className="text-lg italic dark:text-gray-300">
                  "{testimonials[index].text}"
                </p>

                <h4 className="mt-4 font-semibold text-amber-600">
                  - {testimonials[index].name}
                </h4>
              </motion.div>
            </AnimatePresence>

            {/* tombol */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded"
              >
                ←
              </button>

              <button
                onClick={next}
                className="px-4 py-2 bg-amber-600 text-white rounded"
              >
                →
              </button>

              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i === index ? "bg-amber-600" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>
    )
}