import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import Container from "../../UI/Container";
import Button from "../../UI/Button";
import profile from "../../../data/profile";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const navLinkClass =
    "relative text-slate-300 font-medium transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <Container>
        <nav
          className={`fixed left-1/2 z-50 flex w-[95%] max-w-7xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-8 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
            scrolled ? "top-3 h-16" : "top-5 h-20"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="transition duration-300 hover:scale-105">
            <p className="text-3xl font-black tracking-tight">
              <span className="text-white">Abhishek</span>
              <span className="text-cyan-400">.</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Mahli
              </span>
            </p>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={navLinkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Resume */}
          <div className="hidden lg:block">
            <Button href={profile.resume} download>Resume</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-3xl text-white transition hover:text-cyan-400 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>

          {/* Mobile Menu */}
          <div
            id="mobile-navigation"
            className={`absolute left-0 top-[110%] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
              isOpen
                ? "max-h-96 p-6 opacity-100"
                : "max-h-0 p-0 opacity-0 border-0"
            }`}
          >
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-300 transition hover:text-cyan-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Button href={profile.resume} download>Resume</Button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
