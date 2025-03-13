import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Bootstrap CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "FastApi", level: 70 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Wordpress", level: 90 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-4xl font-bold mb-8 ">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="mt-5">
              <p className="text-lg text-foreground/80 mb-6">
                I specialize in analyzing business challenges, identifying
                financial roadblocks, and creating custom systems and software
                to drive growth. My expertise spans backend engineering,
                business automation, and B2B lead generation, equipping me with
                the tools to help businesses optimize their operations. Through
                my courses and consulting, I empower B2B agencies, freelancers,
                and entrepreneurs to generate consistent leads, automate
                workflows, and make data-driven decisions.
                </p>
                <p className="text-lg text-foreground/80 mb-6"> My passion lies in
                transforming business complexities into scalable, profitable
                solutions. Currently, I’m expanding my technical knowledge in
                backend development, Python, and algorithm optimization to build
                smarter, more efficient solutions. Whether through teaching,
                consulting, or building systems, my goal is to help businesses
                scale sustainably. Let’s connect and create something impactful!
              </p>

              <a
                href="./public/Ivy_Maundu-Cv.pdf"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Download Resume
              </a>
            </div>
            <div className="relative">
              <img
                src="./public/official photo1.jpg"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-6">
                  {skillGroup.category}
                </h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground/80">{skill.name}</span>
                        <span className="text-foreground/60">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
