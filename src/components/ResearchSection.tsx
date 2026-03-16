import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Layers, Zap, FlaskRound, Pill, Cloud, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import heroMolecular from "@/assets/hero-molecular.jpg";
import proteinImg from "@/assets/protein-structure.jpg";
import energyImg from "@/assets/energy-materials.jpg";
import carbonImg from "@/assets/carbon-capture.jpg";
import aerospaceImg from "@/assets/aerospace.jpg";
import labImg from "@/assets/lab-research.jpg";

const areas = [
  { icon: Layers, title: "Materials Science", desc: "Exploring advanced materials and nanotechnology for next-generation technologies.", img: heroMolecular, slug: "materials-science" },
  { icon: Zap, title: "Energy Technology", desc: "Designing new battery materials, catalysts, and clean energy systems.", img: energyImg, slug: "energy-technology" },
  { icon: FlaskRound, title: "Chemistry", desc: "Predicting chemical reactions and molecular interactions.", img: proteinImg, slug: "chemistry" },
  { icon: Pill, title: "Medicine", desc: "Supporting drug discovery and biological research.", img: labImg, slug: "medicine" },
  { icon: Cloud, title: "Climate Science", desc: "Developing solutions for carbon capture and environmental sustainability.", img: carbonImg, slug: "climate-science" },
  { icon: Rocket, title: "Aerospace", desc: "Exploring advanced materials and propulsion systems.", img: aerospaceImg, slug: "aerospace" },
];

const ParallaxCard = ({ area, i, isInView }: { area: typeof areas[0]; i: number; isInView: boolean }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 * i }}
      className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <Link to={`/research/${area.slug}`}>
        <div className="aspect-[4/3] overflow-hidden relative">
          <motion.img
            src={area.img}
            alt={area.title}
            className="w-full h-full object-cover scale-110"
            style={{ y: imgY }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-7">
          <div className="flex items-center gap-3 mb-2">
            <area.icon className="w-5 h-5 text-primary-foreground/80" />
            <h3 className="text-base font-serif font-semibold text-primary-foreground">{area.title}</h3>
          </div>
          <p className="text-sm text-primary-foreground/70 font-sans">{area.desc}</p>
        </div>
      </Link>
    </motion.div>
  );
};

const ResearchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="section-padding-lg relative bg-muted/40">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Research Focus</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
            Across the Frontiers of <span className="text-gradient-violet-teal">Science</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-sans leading-relaxed">
            Cherazen aims to build AI tools that assist researchers across a wide range of scientific domains.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, i) => (
            <ParallaxCard key={area.title} area={area} i={i} isInView={isInView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-muted-foreground font-sans mt-12 italic"
        >
          Click on any research area to learn more about how AI is transforming that field.
        </motion.p>
      </div>
    </section>
  );
};

export default ResearchSection;
