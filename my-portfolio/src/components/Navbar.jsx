const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur-md z-50 p-4 flex justify-center gap-8">
      <a href="#hero" className="hover:text-blue-400">Home</a>
      <a href="#projects" className="hover:text-blue-400">Projects</a>
      <a href="#skills" className="hover:text-blue-400">Skills</a>
      <a href="#contact" className="hover:text-blue-400">Contact</a>
    </nav>
  )
}

export default Navbar