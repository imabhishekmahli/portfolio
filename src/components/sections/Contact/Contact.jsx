import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import profile from "../../../data/profile";

import Container from "../../UI/Container";
import Button from "../../UI/Button";
import FadeInSection from "../../UI/FadeInSection";

function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Connect with me",
      href: profile.linkedin,
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "View my repositories",
      href: profile.github,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: profile.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="bg-slate-900 py-28">
      <Container>
        <FadeInSection>
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Contact
            </p>

            <h2 className="mt-4 text-5xl font-black text-white">
              Let's Build Something Amazing 🚀
            </h2>

            <p className="mx-auto mt-6 text-lg leading-8 text-slate-400">
              I'm actively looking for opportunities in Generative AI, Machine
              Learning, AI Research and Full-Stack Development. If you have an
              exciting project, internship or full-time role, I'd love to hear
              from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            {contacts.map((item) => (
              <div
                key={item.label}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-2xl text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>

                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("mailto:") ? undefined : "_blank"
                        }
                        rel="noreferrer"
                        className="font-medium text-white transition hover:text-cyan-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <Button href={`mailto:${profile.email}`}>Let's Connect</Button>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}

export default Contact;
