import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../../../data/profile";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <h3 className="text-xl font-bold text-cyan-400">{profile.name}</h3>

          <p className="mt-2 text-slate-400">
            Generative AI Engineer • Machine Learning Engineer
          </p>

          <p className="mt-2 text-sm text-slate-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 text-2xl">
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
      </div>
    </footer>
  );
}

export default Footer;
