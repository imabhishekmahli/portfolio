import profileImage from "../../../assets/images/profile.png";
import { motion } from "framer-motion";

import Aurora from "./Aurora";

import Button from "../../ui/Button";
import Container from "../../ui/Container";

import profile from "../../../data/profile";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      <Aurora />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 font-semibold text-lg">
              {profile.greeting}
            </p>

            <h1 className="text-6xl lg:text-8xl font-black mt-4 leading-none">
              {profile.name}
            </h1>

            <h2 className="mt-6 text-2xl text-slate-300">
              {profile.roles.join(" • ")}
            </h2>

            <p className="mt-8 text-slate-400 leading-8 max-w-xl">
              {profile.description}
            </p>

            <div className="mt-10 flex gap-5">
              <Button>View Projects</Button>

              <Button variant="secondary" href={profile.resume}>
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <img
                  src={profileImage}
                  alt="Abhishek Mahli"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
