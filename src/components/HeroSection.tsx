import { motion } from "framer-motion";
import heroImg from "@/assets/hero-molecular.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with soft overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Molecular structure visualization"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border bg-background/80 text-sm text-muted-foreground mb-10 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Independent AI Research Initiative
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
            Building Intelligence for the{" "}
            <span className="text-gradient-violet-teal">Future of Scientific Discovery</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-5 font-sans leading-relaxed">
            Cherazen is an independent AI research initiative building systems that help scientists discover new knowledge faster.
          </p>

          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto mb-5 font-sans leading-relaxed">
            Artificial intelligence is beginning to transform how scientific discovery happens. Cherazen is building next-generation tools that combine knowledge synthesis, reasoning models, and simulation systems to accelerate breakthroughs across multiple scientific disciplines.
          </p>

          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto mb-12 font-sans leading-relaxed">
            Our goal is to create intelligent systems capable of assisting researchers in exploring ideas, generating hypotheses, and testing possibilities before real-world experiments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default HeroSection;
