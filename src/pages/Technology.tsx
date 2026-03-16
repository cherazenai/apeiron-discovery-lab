import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Database, Network, Brain, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const layers = [
  {
    icon: Database,
    title: "Data Layer",
    desc: "The foundation of scientific AI — ingesting, cleaning, and structuring data from millions of research papers, experimental databases, patents, and open datasets.",
    items: ["Scientific papers and preprints", "Experimental datasets and results", "Research archives and patent databases"],
  },
  {
    icon: Network,
    title: "Knowledge Layer",
    desc: "Transforming raw data into structured, interconnected knowledge that AI systems can reason about.",
    items: ["Knowledge graphs connecting concepts across disciplines", "Semantic relationships between entities", "Concept linking and ontology mapping"],
  },
  {
    icon: Brain,
    title: "Reasoning Layer",
    desc: "AI systems that can analyze, reason, and generate insights from structured scientific knowledge.",
    items: ["AI reasoning models for hypothesis generation", "Symbolic reasoning for logical inference", "Machine learning models for pattern detection"],
  },
  {
    icon: Cpu,
    title: "Simulation Layer",
    desc: "Computational systems that predict experimental outcomes and explore scenarios before physical testing.",
    items: ["Experiment prediction and outcome estimation", "Scenario exploration across parameter spaces", "Virtual laboratory environments"],
  },
];

const Technology = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Infrastructure</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
            System <span className="text-gradient-violet-teal">Architecture</span>
          </h1>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-16 max-w-2xl">
            ApeironAI is built on a layered architecture designed to transform raw scientific data into actionable research insights.
          </p>

          <div className="space-y-8">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="p-8 rounded-3xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <layer.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="text-xl font-serif font-bold text-foreground">{layer.title}</h2>
                </div>
                <p className="text-muted-foreground font-sans leading-relaxed mb-4">{layer.desc}</p>
                <ul className="space-y-2">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm font-serif italic text-primary/70">Toward Artificial Infinite Intelligence.</p>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Technology;
