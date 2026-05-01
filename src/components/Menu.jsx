import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Menu() {
  const items = [
    { name: "Latte", price: "25.000", category: "coffee", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
    { name: "Espresso", price: "18.000", category: "coffee", img: "https://images.unsplash.com/photo-1498804103079-a6351b050096" },
    { name: "Croissant", price: "20.000", category: "food", img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0" },
    { name: "Sandwich", price: "28.000", category: "food", img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
  ]

  const [filter, setFilter] = useState("all")
  const filteredItems = filter === "all" ? items : items.filter((item) => item.category === filter)

  return (
    <section id="menu" className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
          Menu Kami
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Nikmati berbagai pilihan kopi dan makanan lezat kami yang dibuat dengan bahan berkualitas.
        </p>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
      <div className="flex justify-center gap-4 mb-10">
        <button onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded ${
          filter === "all"
            ? "bg-amber-600 text-white"
            : "bg-gray-200 dark:bg-gray-700"
        }`}
            >
          All
        </button>

        <button
          onClick={() => setFilter("coffee")}
          className={`px-4 py-2 rounded ${
            filter === "coffee"
              ? "bg-amber-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          Coffee
        </button>

        <button
          onClick={() => setFilter("food")}
          className={`px-4 py-2 rounded ${
            filter === "food"
              ? "bg-amber-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          Food
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <AnimatePresence>
        {filteredItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="relative bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
              {item.best && (
                <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs px-2 py-1 rounded">
                  Best Seller
                </span>
              )}

              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={item.img}
                  className="w-full h-40 object-cover transition duration-300 hover:scale-110"
                />
              </div>

              <h4 className="text-lg font-semibold dark:text-white">
                {item.name}
              </h4>

              <div className="flex text-amber-400 text-sm">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>

              <p className="text-amber-600 font-bold mt-1">
                Rp {item.price}
              </p>

          </motion.div>))}
        </AnimatePresence>
      </div>

      </motion.div>
      </div>

    </section>
  )
}