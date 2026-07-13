import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

import profile from "../../../data/profile";
import Container from "../../ui/Container";
import Button from "../../ui/Button";
import FadeInSection from "../../ui/FadeInSection";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-28"
    >
      <Container>
        <FadeInSection>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-bold text-white">
            Let's Build Something Amazing 🚀
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I'm actively looking for opportunities in Generative AI,
            Machine Learning, AI Research and Full-Stack Development.
            If you have an exciting project or role, let's connect.
          </p>

          <div className="mt-14 space-y-6 text-lg">
            <div className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-cyan-400"
              >
                {profile.email}
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaLinkedin className="text-cyan-400" />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaGithub className="text-cyan-400" />
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="mt-12">
            <Button href={`mailto:${profile.email}`}>
              Email Me
            </Button>
          </div>
        </div>
        </FadeInSection>
      </Container>
    </section>
  );
}

export default Contact;