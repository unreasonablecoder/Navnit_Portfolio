import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// 1. Manually highlight your BEST work here
const FEATURED_PROJECTS = [
  {
    id: "fraud-detection",
    name: "Credit Card Fraud Detection",
    description: "A multi-phase ML system detecting fraudulent transactions. Handled imbalanced data using SMOTE and visualized insights with a PowerBI dashboard.",
    tech: ["Python", "Scikit-Learn", "PowerBI", "Pandas"],
    link: "https://github.com/unreasonablecoder/Financial_Fraud_Detection",
  },
  {
    id: "market-sentiment",
    name: "Stock/Crypto Sentiment Tracker",
    description: "Analyzing market trends and social media sentiment to predict price movements using Natural Language Processing (NLP).",
    tech: ["NLP", "Python", "Sentiment Analysis"],
    link: "#", 
  }
];

const Projects = () => {
  const [projectsData, setProjectsData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.github.com/users/unreasonablecoder/repos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Filter out the portfolio itself so it doesn't show up in the list
          const filtered = data.filter(repo => repo.name !== "Navnit_Portfolio");
          setProjectsData(filtered)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="projects" className="p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 border-b border-gray-700 pb-2">
        Featured Projects
      </h2>

      {/* --- FEATURED SECTION --- */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {FEATURED_PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-gray-900 to-blue-900/20 border border-blue-500/30 p-6 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-blue-400">{project.name}</h3>
            <p className="text-gray-300 mt-3">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                  {t}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" className="text-white font-bold mt-6 inline-block hover:underline">
              View Case Study →
            </a>
          </motion.div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-gray-500">Other Repositories</h2>
      
      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {projectsData.slice(0, 6).map((repo) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-gray-900/40 border border-gray-800 p-4 rounded-xl hover:border-gray-600 transition"
            >
              <h3 className="font-semibold text-gray-200">{repo.name}</h3>
              <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                <span>💻 {repo.language || "Plain Text"}</span>
                <span>⭐ {repo.stargazers_count}</span>
              </div>
              <a href={repo.html_url} target="_blank" className="text-blue-400 text-sm mt-3 block">
                Code →
              </a>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects