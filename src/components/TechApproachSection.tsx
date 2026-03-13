import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Network, Brain, Lightbulb, Cpu, Beaker } from "lucide-react";

const steps = [
  { icon: FileText, label: "Scientific Papers & Research Data" },
  { icon: Network, label: "Knowledge Graph" },
  { icon: Brain, label: "AI Reasoning Models" },
  { icon: Lightbulb, label: "Hypothesis Generation" },
  { icon: Cpu, label: "Simulation Systems" },
  { icon: Beaker, label: "Experimental Design" },
];

const TechApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Technology</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            From Data to <span className="text-gradient-violet-teal">Discovery</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-sans leading-relaxed">
            This architecture enables researchers to explore ideas faster and gain insights from complex scientific knowledge.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="flex flex-col items-center gap-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="w-full max-w-md"
            >
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-sans text-foreground">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-px h-6 bg-gradient-to-b from-primary/40 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechApproachSection;
