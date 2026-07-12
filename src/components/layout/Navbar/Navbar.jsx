import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import Container from "../../ui/Container";
import Button from "../../ui/Button";

import profile from "../../../data/profile";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const navLinkClass =
    "relative text-slate-300 transition duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <Container>
        <nav className="fixed top-5 left-1/2 z-50 flex h-20 w-[95%] max-w-7xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-8 backdrop-blur-xl shadow-2xl">
          {/* Logo */}
          <a href="#home">
            <h1 className="text-3xl font-black tracking-tight">
              <span className="text-white">Abhishek</span>
              <span className="text-cyan-400">.</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Mahli
              </span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
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
            <Button href={profile.resume}>Resume</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute left-0 top-24 w-full rounded-2xl border border-white/10 bg-slate-900/95 p-6 backdrop-blur-xl lg:hidden">
              <ul className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-slate-300 hover:text-cyan-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button href={profile.resume}>Resume</Button>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
