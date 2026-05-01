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