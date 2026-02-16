import { useState } from "react";
import { Mail, MessageSquare, Phone, Send, Loader2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion } from "framer-motion";

// ⬇️ PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE ⬇️
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbz23d0WTzoL4_bP9grki8Bf_z8ZsfLfBSMrbt_QQdKV7UXpRyKXESseWBe34OlwJL5HNg/exec";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus("success");
      setFormData({ name: "", email: "", project: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden" id="contact">
      {/* Animated 3D background orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
          rotateZ: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1.3, 1, 1.3],
          rotateZ: [360, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ scale: 0, rotateZ: -180 }}
            whileInView={{ scale: 1, rotateZ: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{ rotateZ: 360 }}
          >
            <MessageSquare className="size-8 text-gray-900" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl mb-4"
            initial={{ opacity: 0, rotateX: -20 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind? Get in touch and let's create something amazing.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{
            rotateY: 2,
            rotateX: 2,
            transition: { duration: 0.3 }
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label htmlFor="name" className="text-sm">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor="email" className="text-sm">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label htmlFor="project" className="text-sm">
                    Project Type
                  </label>
                  <Input
                    id="project"
                    placeholder="e.g., Commercial, Music Video, Documentary"
                    value={formData.project}
                    onChange={handleChange}
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label htmlFor="message" className="text-sm">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" size="lg" className="w-full gap-2" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <><Loader2 className="size-5 animate-spin" /> Sending...</>
                    ) : status === "success" ? (
                      <>✅ Message Sent!</>
                    ) : status === "error" ? (
                      <>❌ Failed — Try Again</>
                    ) : (
                      <><Send className="size-5" /> Send Message</>
                    )}
                  </Button>
                </motion.div>
              </form>

              <motion.div
                className="mt-8 pt-8 border-t text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <p className="text-gray-600 mb-2">Or reach me directly at:</p>
                <motion.a
                  href="mailto:armangurung449@gmail.com"
                  className="inline-flex items-center gap-2 text-lg text-gray-900 hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="size-5" />
                  armangurung449@gmail.com
                </motion.a>
                <motion.a
                  href="tel:-918768682905"
                  className="inline-flex items-center gap-2 text-lg text-gray-900 hover:underline mt-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="size-5" />
                  +91 8768682905
                </motion.a>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
