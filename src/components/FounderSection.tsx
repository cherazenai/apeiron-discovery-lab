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
              Founder <span className="text-gradient-violet-magenta">Story</span>
            </h2>
            <div className="space-y-4 text-base text-muted-foreground font-sans leading-relaxed">
              <p>Cherazen was founded by <strong className="text-foreground">Manish Talukdar</strong>, an independent builder in his early twenties who started this journey from a modest background.</p>
              <p>After losing his father and facing financial challenges, he had to begin working shortly after completing high school.</p>
              <p>He worked in Amazon e-commerce operations for a year while learning about business, technology, and the rapidly evolving world of artificial intelligence.</p>
              <p>Despite not having a traditional engineering background, he became deeply fascinated with AI and its potential to transform scientific discovery.</p>
              <p>In today's AI era, powerful tools allow even small teams to build systems that once required massive organizations.</p>
              <p>Driven by curiosity and persistence, Manish began building software projects independently.</p>
              <p className="text-foreground/70 italic">Cherazen and ApeironAI are being developed from the ground up with limited resources but with a strong belief that innovative ideas and determination can create meaningful impact.</p>
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
