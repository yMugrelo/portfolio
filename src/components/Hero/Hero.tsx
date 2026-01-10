import SocialMedia from "./SocialMedia";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import hero from "../../assets/hero-vector.svg";


export default function Hero() {
  return (
    <div className="flex-center bg-primary-white flex-col-reverse justify-evenly px-4 sm:px-6 md:flex-row md:px-20 md:pt-10 lg:px-28">
      <motion.section
        className="flex flex-col gap-8 md:w-1/2"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-3 text-[28px]/[114%] tracking-tight lg:gap-5 lg:text-5xl/[117%]">
          <h1>
            <span>Hello, I`am</span>{" "}
            <TypeAnimation
              sequence={["Junior", 3000, "", 1000, "Murilo", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontWeight: 800, display: "inline-block" }}
              repeat={0}
              preRenderFirstString={true}
            />
          </h1>
          <p>
            <span className="font-extrabold">ML/AI </span>
            <span className="text-primary-white text-stroke-1 text-stroke-primary-black font-extrabold">
              Engineer
            </span>
          </p>
          <p>
            <span>Based In </span>
            <span className="font-extrabold">Brazil.</span>
          </p>
        </div>
        <p className="text-base/6 font-normal text-zinc-500">
          I am a highly motivated and disciplined Machine Learning and AI enthusiast,
           focused on building intelligent, scalable, and real-world solutions.
            My goal is to grow into a high-level ML/AI Engineer,
             continuously deepening my expertise in data, systems,
              and cloud technologies, while contributing to impactful projects that solve complex problems and create measurable value.
        </p>
        <div className="lg:mt-10">
          <SocialMedia />
        </div>
      </motion.section>

      <motion.div
        className="flex-center md:w-1/2"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, type: "spring" }}
        viewport={{ once: true }}
      >
        <img
          src={hero}
          alt="hero vector"
          fetchPriority="high"
          className="max-h-[750px] pb-8 sm:w-[539px] xl:w-630"
        />
      </motion.div>
    </div>
  );
}
