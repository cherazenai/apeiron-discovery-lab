import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles = [
  {
    id: "ai-accelerate-scientific-discovery",
    title: "How AI Could Accelerate Scientific Discovery",
    excerpt: "Artificial intelligence is reshaping the landscape of scientific research. From predicting protein structures to discovering new materials, AI systems are enabling researchers to explore hypotheses at unprecedented speed.",
    date: "March 10, 2026",
    readTime: "8 min read",
    content: `
      <p>Artificial intelligence is reshaping the landscape of scientific research. From predicting protein structures to discovering new materials, AI systems are enabling researchers to explore hypotheses at unprecedented speed. The traditional cycle of scientific discovery — observe, hypothesize, experiment, analyze — has remained largely unchanged for centuries. But AI is beginning to compress each stage dramatically.</p>
      
      <h3>The Bottleneck in Modern Research</h3>
      <p>Scientists today face an overwhelming volume of published research. With millions of papers published annually across disciplines, no single researcher can synthesize all relevant knowledge. This creates blind spots — important connections between fields go unnoticed, and promising hypotheses remain unexplored. AI research assistants can process and connect information across vast corpora of scientific literature, identifying patterns that human researchers might miss.</p>
      
      <h3>AI as a Scientific Research Partner</h3>
      <p>The most promising applications of AI in science go beyond simple automation. Advanced AI systems can serve as collaborative partners — suggesting experimental designs, predicting outcomes of chemical reactions, and generating novel hypotheses grounded in existing scientific knowledge. These AI research tools don't replace scientists; they amplify human creativity and intuition with computational power.</p>
      
      <h3>Knowledge Graphs and Scientific Reasoning</h3>
      <p>One of the key technologies enabling AI-powered scientific discovery is the knowledge graph. By structuring scientific information as interconnected nodes — papers, datasets, molecules, experimental results — AI systems can traverse relationships that span disciplines. When combined with reasoning models, these knowledge graphs become powerful engines for hypothesis generation, capable of proposing research directions that bridge materials science, chemistry, biology, and beyond.</p>
      
      <h3>From Simulation to Experiment</h3>
      <p>AI simulation systems represent another frontier. Before committing resources to physical experiments, researchers can use AI to model potential outcomes. These simulation engines, trained on historical experimental data, can estimate reaction yields, predict material properties, and identify the most promising experimental pathways. This approach reduces waste, saves time, and focuses laboratory resources on the highest-probability discoveries.</p>
      
      <h3>The Future of AI in Science</h3>
      <p>We are still in the early stages of AI-assisted scientific discovery. As models become more sophisticated and training data more comprehensive, the potential for AI to accelerate breakthroughs across chemistry, medicine, energy technology, and climate science will only grow. The question is not whether AI will transform science, but how quickly — and which teams and platforms will lead this transformation.</p>
    `,
  },
  {
    id: "why-scientists-need-ai-assistants",
    title: "Why Scientists Need AI Research Assistants",
    excerpt: "The volume of scientific literature has grown exponentially, making it impossible for any individual researcher to stay current across even a single discipline. AI research assistants offer a solution by synthesizing knowledge and surfacing relevant insights.",
    date: "March 5, 2026",
    readTime: "6 min read",
    content: `
      <p>The volume of scientific literature has grown exponentially, making it impossible for any individual researcher to stay current across even a single discipline. Every year, millions of new papers are published across journals, preprint servers, and conference proceedings. This information overload creates a fundamental challenge: the most important insights often lie at the intersection of disciplines, buried in papers that no single scientist would think to read.</p>
      
      <h3>The Information Overload Problem</h3>
      <p>Consider a materials scientist researching new battery electrolytes. Relevant insights might come from organic chemistry, polymer science, computational physics, and even biology. An AI research assistant can continuously monitor publications across all these fields, extracting relevant findings and connecting them to the researcher's specific questions. This isn't just convenience — it's a qualitative change in what's possible.</p>
      
      <h3>Beyond Search: Intelligent Synthesis</h3>
      <p>Traditional search tools return lists of papers. AI research assistants go further — they synthesize information, identify contradictions in the literature, highlight emerging trends, and suggest connections between seemingly unrelated findings. The best AI for scientists doesn't just find information; it helps researchers think about that information in new ways.</p>
      
      <h3>Accelerating the Hypothesis Cycle</h3>
      <p>The most time-consuming part of research is often the early exploration phase: reading broadly, forming mental models, and developing testable hypotheses. AI assistants can compress this phase from months to days by providing structured summaries, identifying gaps in current knowledge, and proposing specific hypotheses for experimental validation. This acceleration doesn't diminish scientific rigor — it focuses it on the most promising directions.</p>
      
      <h3>Democratizing Research</h3>
      <p>AI research tools also have the potential to democratize scientific discovery. Researchers at smaller institutions, independent scientists, and interdisciplinary teams can access the same depth of literature analysis that was previously available only to well-funded labs with large teams. This democratization could unlock discoveries from unexpected places and diverse perspectives.</p>
    `,
  },
  {
    id: "future-ai-hypothesis-generation",
    title: "The Future of AI Hypothesis Generation",
    excerpt: "AI hypothesis generation represents one of the most exciting frontiers in computational science. By combining knowledge graphs with advanced reasoning models, AI systems can propose novel scientific hypotheses that humans might never consider.",
    date: "February 28, 2026",
    readTime: "7 min read",
    content: `
      <p>AI hypothesis generation represents one of the most exciting frontiers in computational science. Traditional hypothesis formation relies on a scientist's accumulated knowledge, intuition, and creative thinking. While these human qualities remain irreplaceable, AI systems can augment them by processing vastly more information and identifying non-obvious patterns across disciplines.</p>
      
      <h3>How AI Generates Hypotheses</h3>
      <p>Modern AI hypothesis generators work by building rich representations of scientific knowledge — connecting concepts, experimental results, molecular properties, and theoretical frameworks into structured knowledge graphs. Reasoning models then traverse these graphs, identifying unexplored combinations and predicting which novel hypotheses are most likely to be valid based on existing evidence.</p>
      
      <h3>The Role of Scientific Context</h3>
      <p>Unlike simple pattern matching, effective AI hypothesis generation requires deep scientific context. The AI must understand not just correlations but causal mechanisms, experimental constraints, and theoretical frameworks. This is why the most promising AI discovery engines combine large language models with domain-specific knowledge bases and physics-informed reasoning.</p>
      
      <h3>Validation and Ranking</h3>
      <p>Not all AI-generated hypotheses are equally promising. Advanced systems rank hypotheses by estimated plausibility, novelty, and potential impact. They can also suggest specific experiments to test each hypothesis, estimate resource requirements, and predict the likelihood of success. This transforms hypothesis generation from a creative brainstorming exercise into a systematic, data-driven process.</p>
      
      <h3>Real-World Applications</h3>
      <p>AI hypothesis generation is already showing results in drug discovery, where AI systems have proposed novel molecular candidates that passed initial screening. In materials science, AI has suggested new alloy compositions with predicted properties that were later confirmed experimentally. As these systems mature, they will become essential tools for researchers across every scientific discipline.</p>
    `,
  },
  {
    id: "knowledge-graphs-scientific-discovery",
    title: "Knowledge Graphs for Scientific Discovery",
    excerpt: "Knowledge graphs are emerging as a foundational technology for AI-powered scientific research. By structuring vast amounts of scientific data into interconnected networks, they enable new forms of reasoning and discovery.",
    date: "February 20, 2026",
    readTime: "7 min read",
    content: `
      <p>Knowledge graphs are emerging as a foundational technology for AI-powered scientific research. Unlike traditional databases that store information in rigid tables, knowledge graphs represent data as networks of interconnected entities and relationships. This structure mirrors how scientific knowledge actually works — every discovery is connected to prior work, every molecule interacts with others, and every experimental result exists within a web of context.</p>
      
      <h3>Building Scientific Knowledge Graphs</h3>
      <p>Constructing a knowledge graph for scientific discovery involves extracting structured information from unstructured sources — research papers, patents, experimental databases, and textbooks. Natural language processing models parse these sources, identifying entities (molecules, genes, materials, techniques) and relationships (catalyzes, inhibits, is-composed-of, correlates-with). The resulting graph can contain millions of nodes and billions of edges.</p>
      
      <h3>Traversal and Reasoning</h3>
      <p>The power of knowledge graphs lies in traversal. AI reasoning models can follow paths through the graph that cross disciplinary boundaries — connecting a polymer chemistry finding to a battery engineering challenge, or linking a protein folding insight to a drug delivery mechanism. These cross-domain connections are precisely the kind of insights that are hardest for human researchers to make, given the siloed nature of academic specialization.</p>
      
      <h3>Dynamic and Evolving Knowledge</h3>
      <p>Unlike static databases, scientific knowledge graphs continuously evolve. As new papers are published and new experimental results emerge, the graph grows and updates. AI systems can monitor these changes, alerting researchers when new findings are relevant to their work or when previously disconnected areas of research become linked by new discoveries.</p>
      
      <h3>The Foundation for AI Research Platforms</h3>
      <p>Knowledge graphs serve as the foundation for comprehensive AI research platforms. By combining graph-based knowledge representation with hypothesis generation, simulation systems, and experiment planning tools, platforms like ApeironAI aim to provide researchers with an integrated environment for accelerating discovery across scientific disciplines.</p>
    `,
  },
  {
    id: "building-ai-scientific-research-scratch",
    title: "Building AI for Scientific Research From Scratch",
    excerpt: "Creating AI systems for scientific research is one of the most ambitious challenges in technology. This article explores the technical architecture, challenges, and vision behind building an AI research platform from the ground up.",
    date: "February 12, 2026",
    readTime: "9 min read",
    content: `
      <p>Creating AI systems for scientific research is one of the most ambitious challenges in technology. Unlike consumer AI applications, scientific AI must be grounded in physical reality, respect experimental constraints, and produce outputs that can be verified and reproduced. Building such systems from scratch requires a unique combination of AI expertise, scientific domain knowledge, and engineering discipline.</p>
      
      <h3>The Architecture of a Scientific AI Platform</h3>
      <p>A comprehensive AI research platform requires multiple interconnected components: data ingestion pipelines for processing scientific literature, knowledge graph construction systems, reasoning engines for hypothesis generation, simulation modules for predicting experimental outcomes, and experiment planning tools. Each component must be designed to handle the complexity and nuance of real scientific data.</p>
      
      <h3>Data Challenges in Scientific AI</h3>
      <p>Scientific data presents unique challenges for AI systems. Experimental results often include measurement uncertainty, conflicting findings, and domain-specific notation. Research papers use technical language that varies across disciplines. Building robust AI systems requires careful handling of these complexities — cleaning and normalizing data while preserving the nuances that make it scientifically valuable.</p>
      
      <h3>The Small Team Advantage</h3>
      <p>In today's AI era, powerful open-source tools and cloud computing have dramatically lowered the barriers to building sophisticated AI systems. Small, focused teams can now develop platforms that would have required hundreds of engineers a decade ago. This democratization of AI development means that innovative ideas and determination can create meaningful impact, even with limited resources.</p>
      
      <h3>From Prototype to Platform</h3>
      <p>Building an AI research platform is inherently iterative. Early prototypes focus on specific, well-defined problems — predicting properties of known materials, summarizing research in a narrow domain, or generating hypotheses within a single field. As these focused systems prove their value, they can be expanded and integrated into comprehensive platforms that serve researchers across multiple scientific disciplines.</p>
      
      <h3>The Vision Ahead</h3>
      <p>The ultimate goal of AI for scientific research is not to replace scientists but to give them superpowers. Imagine a researcher who can instantly access and synthesize all relevant knowledge across every scientific discipline, generate and rank thousands of hypotheses, simulate experiments before stepping into the lab, and design optimal experimental protocols. This vision drives the development of platforms like ApeironAI — tools designed to accelerate the pace of human discovery.</p>
    `,
  },
];

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const article = articles.find((a) => a.id === selectedArticle);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {article ? (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </button>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans mb-12">
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> Cherazen Research</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                <span>{article.date}</span>
              </div>

              <div
                className="prose prose-lg max-w-none font-sans text-muted-foreground leading-relaxed [&_h3]:font-serif [&_h3]:text-foreground [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-10 [&_h3]:mb-4 [&_p]:mb-5"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="mt-16 pt-8 border-t border-border text-center">
                <p className="text-sm text-muted-foreground font-sans mb-4">Ready to explore AI-powered research?</p>
                <a
                  href="https://ai.cherazen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-lg glow-violet"
                >
                  Explore ApeironAI
                </a>
              </div>
            </motion.article>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans">
                  <ArrowLeft className="w-4 h-4" />
                  Back to home
                </Link>
                <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Insights</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                  AI Research <span className="text-gradient-violet-teal">Insights</span>
                </h1>
                <p className="max-w-xl mx-auto text-muted-foreground font-sans leading-relaxed">
                  Exploring the intersection of artificial intelligence and scientific discovery.
                </p>
              </motion.div>

              <div className="grid gap-8">
                {articles.map((a, i) => (
                  <motion.button
                    key={a.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06 * i }}
                    onClick={() => setSelectedArticle(a.id)}
                    className="w-full text-left p-8 rounded-3xl bg-card border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-sans mb-3">
                      <span>{a.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {a.title}
                    </h2>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                      {a.excerpt}
                    </p>
                  </motion.button>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
