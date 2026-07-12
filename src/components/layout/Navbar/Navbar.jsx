import { Link } from "react-scroll";

import Container from "../../ui/Container";
import Button from "../../ui/Button";

import profile from "../../../data/profile";

import { useState } from "react";
const [isOpen, setIsOpen] = useState(false);

import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

<div className="hidden lg:flex">
  <button className="lg:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
  </button>
  {isOpen && (
    <div className="absolute left-0 top-full mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/95 p-6 backdrop-blur-xl lg:hidden">
      ...
    </div>
  )}
</div>;

function Navbar() {
  const navItems = [
    { label: "Research", to: "research" },
    { label: "Projects", to: "projects" },
    { label: "Skills", to: "skills" },
    { label: "Education", to: "education" },
    { label: "Experience", to: "experience" },
    { label: "Contact", to: "contact" },
  ];

  const navLinkClass =
    "relative cursor-pointer text-slate-300 transition duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <Container>
        <nav className="fixed top-5 left-1/2 z-50 flex h-20 w-[95%] max-w-7xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-8 backdrop-blur-xl shadow-2xl">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="cursor-pointer"
          >
            <h1 className="text-3xl font-black tracking-tight">
              <span className="text-white">Abhishek</span>
              <span className="text-cyan-400">.</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Mahli
              </span>
            </h1>
          </Link>

          {/* Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  activeClass="text-cyan-400"
                  className={navLinkClass}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <Button variant="primary" href={profile.resume}>
            Resume
          </Button>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
