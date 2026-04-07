import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4">
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold"
      >
        Hi, I'm <span className="text-blue-500">B. Navnit Kumar</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 mt-6 max-w-2xl text-lg md:text-xl leading-relaxed"
      >
        6th Semester CSE Student at <span className="text-white font-medium">Rungta College</span>. 
        Specializing in <span className="text-blue-400">Data Science</span> & ML. 
        Exploring the intersection of <span className="text-white">Finance</span> and <span className="text-white">Cybersecurity</span>.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-wrap gap-4 justify-center"
      >
        {/* Primary Action: Resume */}
        <a
          href="/resume_1.pdf" 
          target="_blank"
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-900/20"
        >
          Download Resume
        </a>

        {/* Secondary Action: GitHub */}
        <a
          href="https://github.com/unreasonablecoder"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gray-800 text-white font-bold rounded-lg border border-gray-700 hover:bg-gray-700 hover:scale-105 transition-all"
        >
          View GitHub
        </a>
      </motion.div>

    </section>
  )
}

export default Hero