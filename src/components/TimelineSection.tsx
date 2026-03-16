import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, Lightbulb, Cpu, Infinity } from "lucide-react";

const milestones = [
  {
    year: "2026",
    title: "ApeironAI Research Lab",
    desc: "Launch of the interactive AI research environment and initial knowledge graph systems.",
    icon: FlaskConical,
    active: true,
  },
  {
    year: "2027",
    title: "AI Hypothesis Engine",
    desc: "Advanced hypothesis generation systems combining reasoning models with scientific knowledge graphs.",
    icon: Lightbulb,
    active: false,
  },
  {
    year: "2028",
    title: "Autonomous Research Systems",
    desc: "Self-directed AI systems capable of designing and evaluating research experiments independently.",
    icon: Cpu,
    active: false,
  },
  {
    year: "2030+",
    title: "Artificial Infinite Intelligence",
    desc: "AI systems that continuously expand their understanding of the natural world, approaching infinite knowledge synthesis.",
    icon: Infinity,
    active: false,
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding-lg relative overflow-hidden">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Roadmap</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
            The AI Research <span className="text-gradient-violet-magenta">Timeline</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-sans leading-relaxed">
            A long-term vision for building increasingly capable AI research systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent md:-translate-x-px" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                    m.active
                      ? "bg-primary border-primary text-primary-foreground shadow-lg glow-violet"
                      : "bg-card border-border text-muted-foreground"
                  }`}>
                    <m.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                  i % 2 === 0 ? "md:text-right md:pr-4" : "md:text-left md:pl-4"
                }`}>
                  <span className={`inline-block text-sm font-mono font-bold mb-2 ${
                    m.active ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {m.year}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-sm font-serif italic text-primary/70 mt-16"
        >
          Toward Artificial Infinite Intelligence.
        </motion.p>
      </div>
    </section>
  );
};

export default TimelineSection;
