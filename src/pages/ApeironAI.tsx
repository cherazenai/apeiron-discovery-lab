import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Lightbulb, Atom, FlaskConical } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import apeironLogo from "@/assets/apeiron-logo.png";

const systems = [
  {
    icon: Brain,
    title: "Knowledge Graph Engine",
    desc: "Connects research knowledge across papers, datasets, and experimental results. The engine builds a structured web of scientific concepts, enabling traversal across disciplines to identify hidden relationships.",
  },
  {
    icon: Lightbulb,
    title: "Hypothesis Generator",
    desc: "AI-assisted idea generation based on reasoning models. The system analyzes existing knowledge to propose novel hypotheses ranked by plausibility, novelty, and potential impact.",
  },
  {
    icon: Atom,
    title: "Simulation Engine",
    desc: "Predicts experimental outcomes before conducting physical tests. By modeling chemical reactions, material properties, and biological interactions, the simulation engine helps researchers prioritize the most promising experiments.",
  },
  {
    icon: FlaskConical,
    title: "Discovery Lab",
    desc: "An interactive environment for exploring research ideas. Discovery Lab allows researchers to simulate how AI systems traverse knowledge graphs, generate hypotheses, and propose experimental designs.",
  },
];

const ApeironAI = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <img src={apeironLogo} alt="ApeironAI" className="h-16 w-16" />
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                <span className="text-gradient-violet-magenta">ApeironAI</span>
              </h1>
              <p className="text-sm text-muted-foreground font-sans mt-1">AI Research Copilot for Scientists</p>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-xl font-serif font-bold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              ApeironAI is an AI research copilot designed to assist scientists in exploring hypotheses, identifying hidden relationships in data, and generating new research directions.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              The system combines knowledge graph technology, machine learning reasoning models, and simulation capabilities to help researchers navigate the vast landscape of scientific knowledge more effectively. Rather than replacing human intuition, ApeironAI amplifies it — surfacing connections and possibilities that would be difficult to discover manually.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-xl font-serif font-bold text-foreground mb-8">Core Systems</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {systems.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="p-8 rounded-3xl bg-card border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                    <s.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="text-center space-y-4">
            <a
              href="https://ai.cherazen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-opacity shadow-lg glow-violet"
            >
              Launch ApeironAI
            </a>
            <p className="text-sm font-serif italic text-primary/70">Toward Artificial Infinite Intelligence.</p>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ApeironAI;
