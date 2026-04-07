const skillCategories = [
  {
    title: "Data Science & ML",
    list: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-Learn"]
  },
  {
    title: "Data Visualization",
    list: ["PowerBI", "Matplotlib", "Seaborn", "Data Storytelling"]
  },
  {
    title: "Database & Tools",
    list: ["SQL", "MySQL", "GitHub", "Vercel"]
  },
  {
    title: "Interests & Specialized",
    list: ["Bug Bounty", "Cybersecurity", "Financial Markets"]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 border-b border-gray-700 pb-2">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-blue-500 font-bold uppercase tracking-wider text-sm">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.list.map((skill, i) => (
                <div
                  key={i}
                  className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills