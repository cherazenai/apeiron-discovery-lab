import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import waveImg from "@/assets/wave-bg.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={waveImg} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
            Explore the Future of{" "}
            <span className="text-gradient-violet-teal">Scientific Discovery</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
              href="https://ai.cherazen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-opacity shadow-lg glow-violet"
            >
              Explore ApeironAI
            </a>
            <a
              href="https://ai.cherazen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border text-foreground font-medium text-base hover:bg-muted transition-colors shadow-sm"
            >
              Join Early Access
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
