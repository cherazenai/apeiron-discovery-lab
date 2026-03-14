import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useCallback } from "react";
import heroImg from "@/assets/hero-molecular.jpg";

const MeshGradientBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let time = 0;
    let animId: number;

    const draw = () => {
      time += 0.002;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Mesh gradient blobs
      const blobs = [
        { x: 0.3 + Math.sin(time * 0.7) * 0.1, y: 0.3 + Math.cos(time * 0.5) * 0.1, r: 0.4, color: "hsla(255, 70%, 58%, 0.08)" },
        { x: 0.7 + Math.cos(time * 0.6) * 0.1, y: 0.5 + Math.sin(time * 0.4) * 0.15, r: 0.35, color: "hsla(166, 60%, 42%, 0.06)" },
        { x: 0.5 + Math.sin(time * 0.8) * 0.15, y: 0.7 + Math.cos(time * 0.3) * 0.1, r: 0.3, color: "hsla(240, 60%, 55%, 0.05)" },
      ];

      blobs.forEach((blob) => {
        const gradient = ctx.createRadialGradient(
          blob.x * canvas.width, blob.y * canvas.height, 0,
          blob.x * canvas.width, blob.y * canvas.height, blob.r * canvas.width
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    const cleanup = animate();
    return cleanup;
  }, [animate]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroImg}
          alt="Molecular structure visualization"
          className="w-full h-full object-cover scale-110"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </motion.div>

      {/* Animated mesh gradient overlay */}
      <MeshGradientBg />

      {/* Light diffusion effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24"
        style={{ y: textY, opacity }}
      >
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border bg-background/80 text-sm text-muted-foreground mb-10 shadow-sm backdrop-blur-sm"
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
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base hover:opacity-90 transition-all duration-300 shadow-lg glow-violet hover:shadow-xl hover:scale-[1.02]"
            >
              Explore ApeironAI
            </a>
            <a
              href="https://ai.cherazen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border text-foreground font-medium text-base hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02]"
            >
              Join Early Access
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
