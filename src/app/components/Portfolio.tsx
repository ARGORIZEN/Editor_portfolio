import { useState, useRef } from "react";
import { Play, Film } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Commercial Showcase",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1758788505807-fb5433f8f8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmaWxtbWFrZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzY5NjY3NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "High-end commercial video production with stunning visuals",
    tags: ["Color Grading", "Motion Graphics", "Audio Mix"],
  },
  {
    id: 2,
    title: "Cinematic Short Film",
    category: "Film",
    thumbnail: "https://images.unsplash.com/photo-1723396612574-961649793bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBtb3ZpZSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzY5NjA0MzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Narrative storytelling with cinematic color grading",
    tags: ["Narrative", "Sound Design", "VFX"],
  },
  {
    id: 3,
    title: "Creative Content",
    category: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1760723986612-f12e9e9855a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHZpZGVvJTIwcHJvamVjdHxlbnwxfHx8fDE3Njk2Njc0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Engaging social media content with dynamic editing",
    tags: ["Fast Cuts", "Trending", "Vertical Format"],
  },
  {
    id: 4,
    title: "Documentary Edit",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5NjAyNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Thoughtful documentary storytelling with interview sequences",
    tags: ["Documentary", "Interviews", "Archival"],
  },
  {
    id: 5,
    title: "Music Video",
    category: "Music",
    thumbnail: "https://images.unsplash.com/photo-1758788505807-fb5433f8f8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmaWxtbWFrZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzY5NjY3NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Rhythm-driven editing with creative visual effects",
    tags: ["Music Video", "Effects", "Beat Sync"],
  },
  {
    id: 6,
    title: "Brand Story",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1723396612574-961649793bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBtb3ZpZSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzY5NjA0MzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Corporate brand story with emotional narrative",
    tags: ["Corporate", "Branding", "Testimonials"],
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
      <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow">
        <div className="relative aspect-video overflow-hidden">
          <motion.img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover"
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
        </div>
        <CardContent className="p-6" style={{ transform: "translateZ(50px)" }}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl">{project.title}</h3>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
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
                className="cursor-pointer px-4 py-2 text-sm"
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
