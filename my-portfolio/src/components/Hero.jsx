import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center">
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold"
      >
        Hi, I'm <span className="text-blue-500">Navnit</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 mt-4"
      >
        Data Science Student | Turning Data into Insights
      </motion.p>

      <a
        href="https://github.com/unreasonablecoder"
        target="_blank"
        className="mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        View GitHub
      </a>

    </section>
  )
}

export default Hero