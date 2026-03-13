import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenTool, BookOpen } from "lucide-react";

const projects = [
  {
    icon: PenTool,
    title: "StoryForge",
    desc: "An early-stage platform designed to help novel authors generate ideas, plot structures, and world-building concepts.",
  },
  {
    icon: BookOpen,
    title: "Androzen",
    desc: "A small experimental platform for webnovel publishing and storytelling.",
  },
];

const novels = [
  "Ashes of Realms: Soulbrand Destiny",
  "Crownless Monarch Ascension",
  "Awakened Void Genesis",
  "Villain Who Devours Fate: Rise of the Carlos Heir",
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding-lg relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Ecosystem</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Other Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition-all duration-300"
            >
              <p.icon className="w-6 h-6 text-accent-foreground mb-5" />
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="p-8 rounded-3xl bg-card border border-border"
        >
          <p className="text-sm text-muted-foreground font-sans mb-5">Manish has also written several webnovel stories including:</p>
          <div className="flex flex-wrap gap-3">
            {novels.map((n) => (
              <span key={n} className="px-4 py-2 rounded-full bg-muted text-xs text-muted-foreground font-sans border border-border">
                {n}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
