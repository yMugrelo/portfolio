import hero from "../../assets/about-me.svg";
import { useCursorHover } from "../../hooks/useCursorHover";
import { motion } from "motion/react";

export default function AboutMe() {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    <section
      className="bg-primary-black flex flex-col gap-10 px-4 py-5 sm:p-6 md:p-20 lg:flex-row lg:px-28"
      id="about"
    >
      <div className="flex-center lg:w-1/2">
        <img src={hero} alt="girl illustration" />
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-primary-white mb-10 text-[28px]/[114%] tracking-tight lg:text-5xl/[117%]">
          <span className="pr-2 md:pr-4">About</span>{" "}
          <span className="font-extrabold">Me</span>
        </h3>
        <article
          className="flex flex-col gap-4 text-zinc-300"
          onMouseEnter={() => handleMouseEnter(150)}
          onMouseLeave={() => handleMouseLeave(40)}
        >
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            I am a highly motivated and detail-oriented aspiring ML/AI Engineer
             with a strong passion for designing intelligent systems and building scalable,
              real-world machine learning solutions. My foundation is built on Python,
               data structures, machine learning algorithms, and modern AI frameworks.
                Through hands-on projects, I have developed solid expertise in model development,
                 data pipelines, API integration, and deploying reliable AI-driven applications.
                  Driven by curiosity, discipline, and a relentless pursuit of excellence,
                   I aim not only to grow within high-performance engineering teams,
                    but to stand out by delivering impactful,
             production-ready AI systems that solve complex problems.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
            My technical background includes hands-on experience with the main tools used in modern machine learning development. I work with Python and commonly use libraries such as NumPy, Pandas, and Scikit-learn, with growing experience in TensorFlow and PyTorch. I have developed projects involving data preprocessing, model training and evaluation, and basic model integration into applications through APIs.
  

I also have practical knowledge of Git, Docker,
  and fundamental MLOps concepts such as experiment tracking,
   model versioning, and simple deployment workflows. Through focused online courses and consistent project-based learning, I have built a solid understanding of industry best practices and how to develop reliable machine learning solutions.
    I am motivated to continue growing technically while contributing effectively to a professional engineering team.
          </motion.p>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            viewport={{ once: true }}
          >
           Beyond my technical skills, I am a committed problem-solver with a strong analytical mindset developed through my academic background and practical project work. I apply this structured approach to building machine learning solutions, focusing on transforming data and complex requirements into reliable and efficient models.

In projects such as an AI-powered recommendation system and an intelligent content analysis application, I worked with data preprocessing, model training, evaluation,
 and API-based integration into user-facing applications. These experiences reflect my ability to translate complex ideas into functional,
 well-structured, and practical AI-driven solutions that deliver real value.
          </motion.p>
        </article>
      </div>
    </section>
  );
}
