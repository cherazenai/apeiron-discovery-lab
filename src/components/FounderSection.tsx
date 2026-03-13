import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founder" className="section-padding relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">The Founder</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8 leading-tight">
              Founder <span className="text-gradient-violet-magenta">Story</span>
            </h2>
            <div className="space-y-4 text-base text-muted-foreground font-sans leading-relaxed">
              <p>Cherazen was founded by <strong className="text-foreground">Manish Talukdar</strong>, an independent builder in his early twenties who started this journey from a modest background.</p>
              <p>After losing his father and facing financial challenges, he had to begin working shortly after completing high school.</p>
              <p>He worked in Amazon e-commerce operations for a year while learning about business, technology, and the rapidly evolving world of artificial intelligence.</p>
              <p>Despite not having a traditional engineering background, he became deeply fascinated with AI and its potential to transform scientific discovery.</p>
              <p>In today's AI era, powerful tools allow even small teams to build systems that once required massive organizations.</p>
              <p>Driven by curiosity and persistence, Manish began building software projects independently.</p>
              <p className="text-foreground/80 italic">Cherazen and ApeironAI are being developed from the ground up with limited resources but with a strong belief that innovative ideas and determination can create meaningful impact.</p>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-square max-w-md mx-auto border border-border">
                <img
                  src={founder2}
                  alt="Manish Talukdar, Founder of Cherazen"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Small overlay image */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={founder1}
                  alt="Manish Talukdar"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
