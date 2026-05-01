import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {

  const { scrollY } = useScroll()

  // gerakan background
  const yBg = useTransform(scrollY, [0, 500], [0, 150])

  // gerakan text (lebih cepat)
  const yText = useTransform(scrollY, [0, 500], [0, 250])

  const blur = useTransform(scrollY, [0, 300], [0, 6])

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          className="w-full h-full object-cover"
          style={{ y: yBg, filter: `blur(${blur}px)` }}
        />

        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-12 h-12 bg-amber-400/30 rounded-full blur-xl"
          animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-20 right-16 w-16 h-16 bg-white/20 rounded-full blur-xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="absolute top-1/2 left-1/3 w-10 h-10 bg-amber-300/30 rounded-full blur-lg"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <motion.div
          className="absolute top-32 right-1/4 text-3xl"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          ☕
        </motion.div>
        
      </div>
      
      <motion.div
        style={{ y: yText }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Nikmati Kopi Terbaik <br /> di Kota Anda ☕
        </h1>

        <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-xl mx-auto">
          Suasana nyaman, rasa premium, dan pengalaman ngopi yang tak terlupakan.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#menu"
            className="bg-amber-600 px-6 py-3 rounded-lg hover:bg-amber-700 transition shadow-lg"
          >
            Lihat Menu
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Reservasi
          </a>
        </div>
      </motion.div>

    </section>
  )
}