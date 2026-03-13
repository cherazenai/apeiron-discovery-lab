import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import scientistImg from "@/assets/scientist-lab.jpg";

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="section-padding-lg relative bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
          >
            <img
              src={scientistImg}
              alt="AI-powered scientific research lab"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Our Vision</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8 leading-tight text-foreground">
              The Vision Behind <span className="text-gradient-violet-teal">Cherazen</span>
            </h2>
            <div className="space-y-5 text-base text-muted-foreground font-sans leading-relaxed">
              <p>Cherazen is an early-stage AI research initiative focused on building intelligent systems that accelerate scientific discovery.</p>
              <p>The pace of human innovation depends heavily on how quickly scientists can explore ideas, test hypotheses, and synthesize knowledge from vast amounts of information.</p>
              <p>Cherazen is building AI-powered systems designed to assist researchers across disciplines by combining machine learning, knowledge graphs, and reasoning models.</p>
              <p>Our long-term vision is to develop AI systems capable of acting as collaborative scientific partners — tools that augment human intelligence and help uncover discoveries that may otherwise take decades to find.</p>
              <p className="text-foreground/70 italic">Although Cherazen is currently in its early stage, the mission is ambitious: to build foundational AI infrastructure for the future of science.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
