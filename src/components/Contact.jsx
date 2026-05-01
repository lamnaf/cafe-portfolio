import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"

export default function Contact() {
  const form = useRef()

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // validasi sederhana
  const validate = () => {
    if (!formData.name) return "Nama wajib diisi"
    if (!formData.email.includes("@")) return "Email tidak valid"
    if (!formData.message) return "Pesan tidak boleh kosong"
    return ""
  }

  const sendEmail = (e) => {
    e.preventDefault()

    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    setError("")
    setLoading(true)

    emailjs.sendForm(
      "service_lamnaf",
      "template_lamnaf",
      form.current,
      "wBnSlDj-ZoKXIgo3H"
    )
    .then(() => {
      setSuccess(true)
      setLoading(false)
      form.current.reset()
    })
    .catch(() => {
      setError("Gagal mengirim pesan")
      setLoading(false)
    })
  }


  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Hubungi Kami
        </h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* Success Message */}
          {success && (
            <p className="text-green-500 text-sm">
              Pesan berhasil dikirim 🎉
            </p>
          )}

          <input
            type="text"
            name="name"
            placeholder="Nama"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none dark:bg-gray-800 dark:text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none dark:bg-gray-800 dark:text-white"
          />

          <textarea
            name="message"
            placeholder="Pesan"
            rows="4"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition flex justify-center items-center"
          >
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </button>

        </motion.form>
      </div>
    </section>
  )
}