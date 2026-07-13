import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

import profile from "../../../data/profile";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6">

        <h2 className="text-3xl font-black">
          <span className="text-white">Abhishek</span>
          <span className="text-cyan-400">.</span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Mahli
          </span>
        </h2>

        <p className="mt-4 max-w-xl text-center text-slate-400">
          AI Engineer • Generative AI • Machine Learning • Full Stack Developer
        </p>

        <div className="mt-8 flex gap-6 text-3xl">

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-cyan-400"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="mt-10 text-sm text-slate-500">
          © {new Date().getFullYear()} Abhishek Mahli. All Rights Reserved.
        </p>

        <a
          href="#home"
          className="mt-8 rounded-full border border-cyan-400 p-4 transition hover:bg-cyan-400 hover:text-slate-950"
        >
          <FaArrowUp />
        </a>

      </div>
    </footer>
  );
}

export default Footer;