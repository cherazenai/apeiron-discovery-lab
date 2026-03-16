import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founder2 from "@/assets/founder-2.jpg";

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founder" className="section-padding-lg relative bg-muted/40">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">The Founder</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8 leading-tight text-foreground">
              The Vision Behind <span className="text-gradient-violet-magenta">Cherazen</span>
            </h2>
            <div className="space-y-4 text-base text-muted-foreground font-sans leading-relaxed">
              <p><strong className="text-foreground">Manish Talukdar</strong> is the founder of Cherazen, an independent builder in his early twenties driven by a deep fascination with artificial intelligence and its potential to transform scientific discovery.</p>
              <p>From an early age, Manish developed a strong curiosity about how technology could solve complex problems. His interest in AI grew as he explored how machine learning systems could analyze vast amounts of scientific data and uncover patterns invisible to human researchers.</p>
              <p>The motivation behind Cherazen stems from a clear observation: the world produces more scientific knowledge every year than any individual can process, yet many of the most important discoveries may lie at the intersection of disciplines. AI has the potential to bridge these gaps.</p>
              <p>In today's AI era, powerful open-source tools and accessible infrastructure allow small, focused teams to build systems that once required massive organizations. Manish recognized this opportunity and began building Cherazen and ApeironAI independently.</p>
              <p className="text-foreground/70 italic">The vision is ambitious: to build foundational AI infrastructure that helps researchers explore ideas faster, generate hypotheses, and accelerate scientific breakthroughs across disciplines.</p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-square max-w-md mx-auto shadow-2xl">
              <img
                src={founder2}
                alt="Manish Talukdar, Founder of Cherazen"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
