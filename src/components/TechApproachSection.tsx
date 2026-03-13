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
    <section className="section-padding-lg relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Technology</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
            From Data to <span className="text-gradient-violet-teal">Discovery</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-sans leading-relaxed">
            This architecture enables researchers to explore ideas faster and gain insights from complex scientific knowledge.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="flex flex-col items-center gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="w-full max-w-lg"
            >
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-sm font-sans text-foreground font-medium">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
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
