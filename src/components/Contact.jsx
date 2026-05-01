import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import toast from "react-hot-toast"

export default function Contact() {
  const form = useRef()

  const [loading, setLoading] = useState(false)
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
      toast.error(validationError)
      return
    }

    setLoading(true)

    toast.promise(
      emailjs.sendForm(
        "service_lamnaf",
        "template_lamnaf",
        form.current,
        "wBnSlDj-ZoKXIgo3H"
      ),
      {
        loading: "Mengirim pesan...",
        success: "Pesan berhasil dikirim 🎉",
        error: "Gagal mengirim pesan ❌",
      }
    ).finally(() => {
      setLoading(false)
      form.current.reset()
    })
  }


  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        <div className="space-y-4">
          <h2 className="text-3xl font-bold dark:text-white">
            Hubungi Kami
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Silakan hubungi kami untuk reservasi atau pertanyaan.
          </p>

          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>📍 Jl. Kopi Nusantara No. 10</p>
            <p>📞 +62 812-3456-7890</p>
            <p>📧 cafe@email.com</p>
          </div>
        </div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

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