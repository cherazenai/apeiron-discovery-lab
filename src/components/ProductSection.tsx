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
    <section id="products" className="section-padding-lg relative">
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={apeironLogo} alt="ApeironAI Logo" className="h-14 w-14 animate-float" />
          </div>
          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Our Platform</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
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
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="p-8 md:p-10 rounded-3xl bg-card border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <cap.icon className="w-7 h-7 text-accent-foreground" />
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
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-opacity shadow-lg glow-violet"
          >
            Launch ApeironAI
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
