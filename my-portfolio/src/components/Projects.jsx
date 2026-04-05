import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Projects = () => {
  const [projectsData, setProjectsData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.github.com/users/unreasonablecoder/repos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProjectsData(data)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
        Projects
      </h2>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((repo) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gray-900/70 backdrop-blur-lg p-5 rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 transition"
            >
              <h3 className="text-xl font-semibold">{repo.name}</h3>

              <p className="text-gray-400 mt-2">
                {repo.description || "No description available"}
              </p>

              <div className="mt-3 flex gap-3 text-sm text-gray-400">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
                <span>💻 {repo.language || "N/A"}</span>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                {new Date(repo.updated_at).toLocaleDateString()}
              </p>

              <a
                href={repo.html_url}
                target="_blank"
                className="text-blue-500 mt-4 block"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects