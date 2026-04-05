const Contact = () => {
  return (
    <section id="contact" className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">
        Contact
      </h2>

      <p className="text-gray-400 mb-4">
        Open to internships and collaborations
      </p>

      <div className="flex justify-center gap-6">
        <a href="mailto:your@email.com" className="text-blue-500">Email</a>
        <a href="https://github.com/unreasonablecoder" className="text-blue-500">GitHub</a>
      </div>
    </section>
  )
}

export default Contact