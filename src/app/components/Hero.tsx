import { Play } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY5NjAyNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
          scale,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ opacity }}
      >
        <motion.h1
          className="text-5xl md:text-7xl mb-6 text-white"
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          Crafting Visual Stories
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Professional video editing that brings your vision to life
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button size="lg" className="gap-2">
              <Play className="size-5" />
              View My Work
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, rotateY: -5 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating 3D elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          rotateZ: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          rotateZ: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformStyle: "preserve-3d" }}
      />
    </section>
  );
}
