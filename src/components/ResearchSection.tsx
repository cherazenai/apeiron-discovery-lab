import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Zap, FlaskRound, Pill, Cloud, Rocket } from "lucide-react";
import heroMolecular from "@/assets/hero-molecular.jpg";
import proteinImg from "@/assets/protein-structure.jpg";
import energyImg from "@/assets/energy-materials.jpg";
import carbonImg from "@/assets/carbon-capture.jpg";
import aerospaceImg from "@/assets/aerospace.jpg";
import labImg from "@/assets/lab-research.jpg";

const areas = [
  { icon: Layers, title: "Materials Science", desc: "Exploring advanced materials and nanotechnology for next-generation technologies.", img: heroMolecular },
  { icon: Zap, title: "Energy Technology", desc: "Designing new battery materials, catalysts, and clean energy systems.", img: energyImg },
  { icon: FlaskRound, title: "Chemistry", desc: "Predicting chemical reactions and molecular interactions.", img: proteinImg },
  { icon: Pill, title: "Medicine", desc: "Supporting drug discovery and biological research.", img: labImg },
  { icon: Cloud, title: "Climate Science", desc: "Developing solutions for carbon capture and environmental sustainability.", img: carbonImg },
  { icon: Rocket, title: "Aerospace", desc: "Exploring advanced materials and propulsion systems.", img: aerospaceImg },
];

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="section-padding relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Research Focus</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Across the Frontiers of <span className="text-gradient-violet-teal">Science</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-sans leading-relaxed">
            Cherazen aims to build AI tools that assist researchers across a wide range of scientific domains.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={area.img}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <area.icon className="w-5 h-5 text-secondary" />
                  <h3 className="text-base font-serif font-semibold text-foreground">{area.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground font-sans">{area.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-muted-foreground font-sans mt-10 italic"
        >
          Although the long-term vision spans many fields, the current focus is to solve smaller problems extremely well before expanding into broader domains.
        </motion.p>
      </div>
    </section>
  );
};

export default ResearchSection;
