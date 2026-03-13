import { motion } from "framer-motion";
import heroImg from "@/assets/hero-molecular.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Molecular structure visualization"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface-elevated text-sm text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Independent AI Research Initiative
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6">
            Building Intelligence for the{" "}
            <span className="text-gradient-violet-teal">Future of Scientific Discovery</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 font-sans leading-relaxed">
            Cherazen is an independent AI research initiative building systems that help scientists discover new knowledge faster.
          </p>

          <p className="text-base text-muted-foreground/80 max-w-2xl mb-4 font-sans leading-relaxed">
            Artificial intelligence is beginning to transform how scientific discovery happens. Cherazen is building next-generation tools that combine knowledge synthesis, reasoning models, and simulation systems to accelerate breakthroughs across multiple scientific disciplines.
          </p>

          <p className="text-base text-muted-foreground/80 max-w-2xl mb-10 font-sans leading-relaxed">
            Our goal is to create intelligent systems capable of assisting researchers in exploring ideas, generating hypotheses, and testing possibilities before real-world experiments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://ai.cherazen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-opacity glow-violet"
            >
              Explore ApeironAI
            </a>
            <a
              href="https://ai.cherazen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border text-foreground font-medium text-base hover:bg-surface-elevated transition-colors"
            >
              Join Early Access
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
