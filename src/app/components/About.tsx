import { Award, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion } from "motion/react";

const skills = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Efficient workflow delivering high-quality edits on time",
  },
  {
    icon: Award,
    title: "Professional Quality",
    description: "Years of experience with industry-standard software",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Working closely with clients to achieve their vision",
  },
];

const expertise = [
  "Adobe Premiere Pro",
  "DaVinci Resolve",
  "After Effects",
  "Color Grading",
  "Sound Design",
  "Motion Graphics",
  "VFX Compositing",
  "Multi-cam Editing",
];

export function About() {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden" id="about">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl mb-6"
              initial={{ opacity: 0, rotateX: -20 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a passionate video editor with over 5 years of experience transforming
              raw footage into compelling visual narratives. My expertise spans across
              commercials, documentaries, music videos, and social media content.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I specialize in creating dynamic edits that capture attention and tell
              stories that resonate. Whether it's a fast-paced commercial or an
              emotional documentary, I bring technical precision and creative vision
              to every project.
            </motion.p>

            <div className="mb-8">
              <motion.h3
                className="text-2xl mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Technical Expertise
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.05) }}
                    whileHover={{
                      scale: 1.1,
                      rotateZ: 5,
                      backgroundColor: "#e5e7eb",
                      transition: { duration: 0.2 }
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 50, rotateY: -30 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="border-2">
                  <CardContent className="p-6 flex gap-4">
                    <motion.div
                      className="bg-gray-900 text-white rounded-lg p-3 h-fit"
                      whileHover={{ rotateZ: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <skill.icon className="size-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl mb-2">{skill.title}</h3>
                      <p className="text-gray-600">{skill.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
