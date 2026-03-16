import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Network, Brain, Lightbulb, Cpu, Beaker } from "lucide-react";

const pipelineSteps = [
  { icon: FileText, label: "Scientific Papers & Research Data", desc: "Ingesting millions of research papers, datasets, and experimental results" },
  { icon: Network, label: "Knowledge Graph Construction", desc: "Building semantic relationships between scientific concepts" },
  { icon: Brain, label: "AI Reasoning Systems", desc: "Applying machine learning and symbolic reasoning models" },
  { icon: Lightbulb, label: "Hypothesis Generation", desc: "Proposing novel research directions grounded in evidence" },
  { icon: Cpu, label: "Simulation & Validation", desc: "Predicting experimental outcomes before physical testing" },
  { icon: Beaker, label: "Scientific Discovery", desc: "Accelerating breakthroughs across disciplines" },
];

const KnowledgeEngineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding-lg relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Architecture</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
            The Infinite <span className="text-gradient-violet-teal">Knowledge Engine</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-sans leading-relaxed">
            ApeironAI connects scientific knowledge across research papers, datasets, and reasoning models to explore hidden relationships in scientific knowledge.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="flex flex-col items-center gap-2">
          {pipelineSteps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="w-full max-w-lg"
            >
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/15 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <step.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <span className="text-sm font-sans text-foreground font-medium block">{step.label}</span>
                  <span className="text-xs text-muted-foreground mt-0.5 block">{step.desc}</span>
                </div>
              </div>
              {i < pipelineSteps.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-px h-6 bg-gradient-to-b from-primary/20 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeEngineSection;
