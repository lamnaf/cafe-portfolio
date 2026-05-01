import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-cover bg-center bg-white dark:bg-gray-900 text-black dark:text-white"
      style={{backgroundImage: "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')"}}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/60 p-10 rounded-xl text-white text-center">
        <h2 className="text-4xl font-bold">Ngopi Santai</h2>
        <p className="mt-4">Nikmati kopi terbaik Indonesia</p>
      </motion.div>
    </section>
  )
}