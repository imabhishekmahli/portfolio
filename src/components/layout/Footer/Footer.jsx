import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

import profile from "../../../data/profile";

function Footer() {
  const socials = [
    {
      icon: <FaGithub />,
      href: profile.github,
      label: "GitHub profile",
    },
    {
      icon: <FaLinkedin />,
      href: profile.linkedin,
      label: "LinkedIn profile",
    },
    {
      icon: <FaEnvelope />,
      href: `mailto:${profile.email}`,
      label: "Send an email",
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6">
        {/* Logo */}
        <a href="#home" className="transition duration-300 hover:scale-105">
          <h2 className="text-3xl font-black tracking-tight">
            <span className="text-white">Abhishek</span>
            <span className="text-cyan-400">.</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Mahli
            </span>
          </h2>
        </a>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl text-center leading-8 text-slate-400">
          AI Engineer • Generative AI • Machine Learning • Multi-Agent Systems •
          Full-Stack Development
        </p>

        {/* Socials */}
        <div className="mt-10 flex gap-5">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        {/* Copyright */}
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Abhishek Mahli. Built with React, Vite &
          Tailwind CSS.
        </p>

        {/* Back to Top */}
        <a
          href="#home"
          aria-label="Back to top"
          className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400 bg-cyan-400/10 text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950"
        >
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
