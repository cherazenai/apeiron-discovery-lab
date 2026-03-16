import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const researchData: Record<string, { title: string; subtitle: string; overview: string; topics: string[]; methods: string[]; impact: string[] }> = {
  "materials-science": {
    title: "Materials Science",
    subtitle: "AI-Driven Materials Discovery",
    overview: "Materials science stands at the frontier of technological progress. From stronger alloys to more efficient semiconductors, new materials enable breakthroughs across every industry. AI is revolutionizing this field by predicting material properties computationally, dramatically reducing the time from concept to synthesis.",
    topics: ["Nanomaterials and nanocomposites", "High-temperature superconductors", "Catalysts for chemical reactions", "Advanced alloys and metamaterials", "Battery materials and solid-state electrolytes", "Biodegradable and sustainable materials"],
    methods: ["Machine learning for materials property prediction — training models on existing databases (such as the Materials Project) to predict properties like band gap, tensile strength, and thermal conductivity for untested compositions", "Graph neural networks for crystal structure analysis — representing atomic arrangements as graphs to predict stability and reactivity", "Generative models for novel material design — using variational autoencoders and diffusion models to propose entirely new material compositions", "Simulation-based discovery with density functional theory (DFT) acceleration — using ML surrogates to approximate expensive quantum mechanical calculations"],
    impact: ["Next-generation energy storage with higher energy density batteries", "Lighter, stronger materials for aerospace and automotive industries", "More efficient solar cells through novel photovoltaic materials", "Sustainable alternatives to environmentally harmful materials"],
  },
  "energy-technology": {
    title: "Energy Technology",
    subtitle: "AI for Clean Energy Innovation",
    overview: "The global energy transition requires fundamental breakthroughs in how we generate, store, and distribute energy. AI systems can accelerate the discovery of new energy materials, optimize energy systems, and predict the performance of novel technologies before physical prototyping.",
    topics: ["Advanced battery chemistry and solid-state batteries", "Hydrogen production and fuel cell catalysts", "Next-generation solar cell materials", "Grid-scale energy storage solutions", "Nuclear fusion materials research", "Thermoelectric materials for waste heat recovery"],
    methods: ["High-throughput computational screening of candidate materials using machine learning models trained on experimental databases", "Reinforcement learning for optimizing energy system designs and grid management strategies", "Physics-informed neural networks that incorporate thermodynamic constraints into predictions", "Active learning systems that prioritize the most informative experiments to reduce development cycles"],
    impact: ["Affordable, high-capacity batteries enabling widespread electric vehicle adoption", "Efficient hydrogen production for clean industrial processes", "Solar cells exceeding 30% efficiency through novel material combinations", "Reduced reliance on rare earth elements through AI-discovered alternatives"],
  },
  "chemistry": {
    title: "Chemistry",
    subtitle: "AI-Powered Chemical Discovery",
    overview: "Chemistry is the central science connecting physics, biology, and materials science. AI is transforming chemistry by predicting reaction outcomes, designing synthesis pathways, and discovering molecules with targeted properties. These capabilities accelerate both fundamental research and industrial applications.",
    topics: ["Reaction prediction and retrosynthesis planning", "Molecular property prediction", "Catalyst design and optimization", "Green chemistry and sustainable synthesis", "Computational pharmacology", "Polymer chemistry and macromolecular design"],
    methods: ["Transformer models for reaction prediction — trained on millions of known reactions to predict products from given reactants and conditions", "Graph neural networks for molecular representation — encoding molecular structures as graphs for property prediction", "Reinforcement learning for synthesis planning — finding optimal multi-step synthesis routes for target molecules", "Generative chemistry using variational autoencoders to propose molecules with desired properties"],
    impact: ["Faster drug candidate identification through computational screening", "Reduced chemical waste through optimized synthesis pathways", "Discovery of new catalysts for industrial chemical processes", "Accelerated development of biodegradable plastics and sustainable materials"],
  },
  "medicine": {
    title: "Medicine",
    subtitle: "AI for Biomedical Research",
    overview: "Medical research is one of the most impactful areas for AI application. From drug discovery to understanding disease mechanisms, AI systems can process vast amounts of biomedical data to identify therapeutic targets, predict drug interactions, and accelerate clinical development timelines.",
    topics: ["Drug discovery and lead optimization", "Protein structure prediction and design", "Genomics and personalized medicine", "Drug repurposing for existing compounds", "Biomarker discovery for disease diagnosis", "Clinical trial design optimization"],
    methods: ["Deep learning for protein structure prediction — following breakthroughs like AlphaFold to predict 3D structures from amino acid sequences", "Virtual screening using molecular docking simulations enhanced by machine learning scoring functions", "Natural language processing for mining medical literature and clinical trial reports", "Multi-task learning models that simultaneously predict efficacy, toxicity, and pharmacokinetics"],
    impact: ["Reduced drug development timelines from decades to years", "Discovery of treatments for rare diseases through computational drug repurposing", "Personalized treatment plans based on individual genetic profiles", "Early disease detection through AI-identified biomarkers"],
  },
  "climate-science": {
    title: "Climate Science",
    subtitle: "AI for Environmental Solutions",
    overview: "Climate change presents one of the most urgent challenges facing humanity. AI systems can accelerate climate science by improving weather prediction models, discovering new materials for carbon capture, optimizing renewable energy systems, and modeling complex environmental interactions.",
    topics: ["Carbon capture and storage technologies", "Climate modeling and prediction", "Atmospheric chemistry and pollution monitoring", "Ocean carbon cycle analysis", "Sustainable agriculture and land use", "Biodiversity monitoring and conservation"],
    methods: ["Physics-informed machine learning for climate system modeling with improved resolution and accuracy", "Computer vision for satellite imagery analysis to track deforestation, ice cover, and land use changes", "Reinforcement learning for optimizing carbon capture processes and materials", "Time series forecasting for renewable energy production planning and grid optimization"],
    impact: ["More efficient carbon capture materials reducing CO₂ atmospheric concentrations", "Improved climate predictions enabling better policy decisions", "Optimized agricultural practices reducing emissions while maintaining food production", "Enhanced monitoring of ecosystem health and biodiversity trends"],
  },
  "aerospace": {
    title: "Aerospace",
    subtitle: "AI for Space and Aviation Research",
    overview: "Aerospace engineering pushes the boundaries of materials science, propulsion, and systems design. AI accelerates aerospace research by optimizing designs, discovering new materials capable of withstanding extreme conditions, and simulating complex aerodynamic and structural scenarios computationally.",
    topics: ["Ultra-high temperature ceramics and thermal protection", "Lightweight structural composites", "Advanced propulsion system materials", "Radiation-resistant electronics materials", "Additive manufacturing for aerospace components", "Space environment simulation and testing"],
    methods: ["Topology optimization using generative design algorithms to create lightweight yet strong structural components", "Machine learning surrogate models for computational fluid dynamics reducing simulation time", "Multi-objective optimization balancing weight, strength, thermal resistance, and cost", "Anomaly detection systems for predictive maintenance of aircraft and spacecraft components"],
    impact: ["Lighter aircraft and spacecraft reducing fuel consumption and launch costs", "Materials capable of withstanding higher temperatures enabling more efficient engines", "Faster design iteration cycles through AI-accelerated simulation", "More reliable space systems through predictive maintenance and anomaly detection"],
  },
};

const ResearchDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? researchData[slug] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-24 px-4 text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Research Area Not Found</h1>
          <Link to="/" className="text-primary hover:underline font-sans">Return to Home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">{data.subtitle}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
              AI for <span className="text-gradient-violet-teal">{data.title}</span>
            </h1>

            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground font-sans leading-relaxed">{data.overview}</p>
            </section>

            {/* Key Topics */}
            <section className="mb-12">
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Key Research Topics</h2>
              <div className="flex flex-wrap gap-2">
                {data.topics.map((t) => (
                  <span key={t} className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-sans border border-border">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            {/* AI Methods */}
            <section className="mb-12">
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">AI Methods Used</h2>
              <div className="space-y-4">
                {data.methods.map((m, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-card border border-border">
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">{m}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Potential Impact */}
            <section className="mb-12">
              <h2 className="text-xl font-serif font-bold text-foreground mb-4">Potential Impact</h2>
              <ul className="space-y-3">
                {data.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <span className="text-muted-foreground font-sans leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-border text-center">
              <p className="text-sm font-serif italic text-primary/70 mb-6">Toward Artificial Infinite Intelligence.</p>
              <a
                href="https://ai.cherazen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-lg glow-violet"
              >
                Explore ApeironAI
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchDetail;
