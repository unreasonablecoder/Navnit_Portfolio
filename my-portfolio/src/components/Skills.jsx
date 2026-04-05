const skills = [
  "Python", "Pandas", "NumPy", "Machine Learning",
  "Data Visualization", "SQL", "Matplotlib"
]

const Skills = () => {
  return (
    <section id="skills" className="p-10">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills