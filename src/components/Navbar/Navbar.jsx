import Container from "../UI/Container";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
          <h1 className="text-xl font-bold text-cyan-400">Abhishek.dev</h1>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
