import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Lightbulb, Atom, FlaskConical } from "lucide-react";
import apeironLogo from "@/assets/apeiron-logo.png";

const capabilities = [
  {
    icon: Brain,
    title: "AI Knowledge Engine",
    desc: "A system that connects and synthesizes knowledge across research papers, datasets, and experimental results.",
  },
  {
    icon: Lightbulb,
    title: "Hypothesis Generator",
    desc: "AI-generated research hypotheses supported by reasoning and scientific context.",
  },
  {
    icon: Atom,
    title: "Reality Simulation Engine",
    desc: "Simulations designed to estimate experimental outcomes before conducting physical tests.",
  },
  {
    icon: FlaskConical,
    title: "Experiment Planner",
    desc: "AI-assisted planning tools for designing research experiments and testing hypotheses.",
  },
];

const ProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={apeironLogo} alt="ApeironAI Logo" className="h-12 w-12 animate-float" />
          </div>
          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Our Platform</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Introducing <span className="text-gradient-violet-magenta">ApeironAI</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-sans leading-relaxed">
            ApeironAI is the first platform being developed by Cherazen. It is designed as an AI-powered research copilot capable of assisting scientists in generating hypotheses, exploring research directions, and simulating potential experimental outcomes.
          </p>
          <p className="max-w-2xl mx-auto text-muted-foreground/80 font-sans leading-relaxed mt-4">
            The system aims to connect knowledge from thousands of scientific papers and datasets, identify hidden relationships, and propose new ideas for exploration.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <cap.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">{cap.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://ai.cherazen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-opacity glow-violet"
          >
            Launch ApeironAI
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
