import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8}}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10"
      >
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h3 className="text-3xl font-bold mb-4 dark:text-white">
            Tentang Kami
          </h3>
          <p className="dark:text-gray-300">
            Cafe Nusantara menghadirkan kopi terbaik Indonesia.
          </p>
        </div>
      </motion.div>
    </section>
  )
}