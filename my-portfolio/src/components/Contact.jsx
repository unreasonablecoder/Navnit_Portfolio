import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-10 text-center max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-10 rounded-3xl shadow-2xl"
      >
        <h2 className="text-4xl font-bold mb-4">Let's <span className="text-blue-500">Connect</span></h2>
        
        <p className="text-gray-400 mb-8 text-lg">
          Currently in my 6th semester and open to **Data Science internships**, 
          Bug Bounty collaborations, or discussing the Stock Market.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Primary Contact: Email */}
          <a 
            href="mailto:bommana.navnit.kumar@gmail.com" 
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all hover:scale-105"
          >
            <span>📧</span> Email Me
          </a>

          <a 
            href="https://github.com/unreasonablecoder" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-bold border border-gray-700 transition-all hover:scale-105"
          >
            <span>💻</span> GitHub
          </a>

          {/* Secondary Contact: LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/navnit-kumar-bommana-52842028b" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#005582] text-white rounded-full font-bold transition-all hover:scale-105"
          >
            <span>🔗</span> LinkedIn
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm">
          Located in Raipur, Chhattisgarh | Rungta College of Engineering & Technology
        </div>
      </motion.div>
    </section>
  )
}

export default Contact