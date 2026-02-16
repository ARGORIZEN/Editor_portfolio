import { useState, useRef } from "react";
import { Play, Film } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Creative Content",
    category: "Social Media",
    thumbnail: "/image/portfloio/Flux2-Klein_00012_.png",
    description: "Engaging social media content with dynamic editing",
    tags: ["Fast Cuts", "Trending", "Vertical Format"],
    youtubeUrl: "https://youtube.com/shorts/TflCUB4eECM?si=GY2qFg2uHvWKlcMf",
  },
  {
    id: 2,
    title: "Cinematic Short Film",
    category: "Film",
    thumbnail: "/image/portfloio/Flux2-Klein_00018_.png",
    description: "Narrative storytelling with cinematic color grading",
    tags: ["Narrative", "Sound Design", "VFX"],
    youtubeUrl: "https://youtube.com/shorts/ZwtqdhTpoLQ?si=K52hWqe_KorSVGDM",
  },
  {
    id: 3,
    title: "Creative Content",
    category: "Social Media",
    thumbnail: "/image/portfloio/Flux2-Klein_00015_.png",
    description: "Engaging social media content with dynamic editing",
    tags: ["Fast Cuts", "Trending", "Vertical Format"],
    youtubeUrl: "https://youtube.com/shorts/ZhxHA_jRkPM?si=hOSOUPJnmbAinWP6",
  },
  {
    id: 4,
    title: "Explanatory Edit",
    category: "Social Media",
    thumbnail: "/image/portfloio/Flux2-Klein_00020_.png",
    description: "Thoughtful documentary storytelling with interview sequences",
    tags: ["Vertical Format", "Trending", "Fast Cuts"],
    youtubeUrl: "https://youtube.com/shorts/haP8gWDGMWc?si=LzLiUCY-4Htkm1kU",
  },
  {
    id: 5,
    title: "Explanatory Edit",
    category: "Social Media",
    thumbnail: "/image/portfloio/Flux2-Klein_00021_.png",
    description: "Rhythm-driven editing with creative visual effects",
    tags: ["Vertical Format", "Trending", "Fast Cuts"],
    youtubeUrl: "https://youtube.com/shorts/DhhDE7metg4?si=Rk_xqcIsdqn4qeco",
  },
  {
    id: 6,
    title: "Brand Story",
    category: "Commercial",
    thumbnail: " /image/portfloio/Flux2-Klein_00016_.png",
    description: "Corporate brand story with emotional narrative",
    tags: ["Corporate", "Branding", "Testimonials"],
    youtubeUrl: "https://youtube.com/shorts/GnDTb_TvGto?si=wjkgSdzpzFC7zFL7",
  },
];

const categories = ["All", "Commercial", "Film", "Social Media", "Documentary", "Music"];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / (rect.width / 2));
    mouseY.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      whileHover={{ z: 50 }}
    >
      <a href={project.youtubeUrl}
        target="_blank" rel="noopener noreferrer">
        <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow h-full relative aspect-[9/16]">
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            style={{ transformStyle: "preserve-3d" }}
          />
          <motion.div
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-full p-4"
              whileHover={{ scale: 1.2, rotateZ: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Play className="size-8 text-gray-900" />
            </motion.div>
          </motion.div>
          <CardContent className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
            <div className="flex items-center justify-between mb-0">
              <h3 className="text-lg leading-tight">{project.title}</h3>
              <Badge variant="secondary">{project.category}</Badge>
            </div>
            <p className="text-gray-300 text-sm mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs text-white border-white/50">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 px-4 bg-gray-50" id="portfolio" style={{ transformStyle: "preserve-3d" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Film className="size-8 text-gray-900" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of projects showcasing diverse editing styles and techniques
          </p>
        </motion.div>

        <motion.div
          className="flex gap-2 flex-wrap justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm text-gray-800"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
