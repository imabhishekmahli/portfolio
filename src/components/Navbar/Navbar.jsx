import Container from "../UI/Container";

function Navbar() {
  const navItems = ["About", "Skills", "Projects", "Thesis", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
        <nav className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl shadow-lg">
          <a
            href="#home"
            className="text-2xl font-black text-cyan-400 tracking-wide"
          >
            Abhishek.dev
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 transition hover:text-cyan-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
