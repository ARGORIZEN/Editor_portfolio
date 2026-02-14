import { Film, Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const socialLinks = [
    { icon: Youtube, href: "https://youtube.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Mail, href: "mailto:hello@videoeditor.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Film className="size-6" />
              </motion.div>
              <span className="text-xl">Video Editor</span>
            </motion.div>
            <p className="text-gray-400">
              Transforming raw footage into compelling visual stories.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {["Portfolio", "About", "Contact"].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors"
                  initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + (index * 0.1),
                    type: "spring"
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotateZ: 360,
                    transition: { duration: 0.4 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <social.icon className="size-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="pt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>&copy; 2026 Video Editor Portfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
