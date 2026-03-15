import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useCallback, useState } from "react";
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

/* ── System Status Panel ── */
const statusMetrics = [
  { label: "Knowledge Graph Nodes", base: 12400000, format: (n: number) => (n / 1e6).toFixed(1) + "M" },
  { label: "Research Papers Indexed", base: 48231, format: (n: number) => n.toLocaleString() },
  { label: "Active Reasoning Models", base: 5, format: (n: number) => String(n) },
  { label: "Simulations Running", base: 128, format: (n: number) => String(n) },
];

const SystemStatusPanel = () => {
  const [values, setValues] = useState(statusMetrics.map((m) => m.base));

  useEffect(() => {
    const interval = setInterval(() => {
      setValues((prev) =>
        prev.map((v, i) => {
          const m = statusMetrics[i];
          const jitter = m.base > 10000 ? Math.floor(Math.random() * 50 - 25) : Math.random() < 0.3 ? (Math.random() > 0.5 ? 1 : -1) : 0;
          return Math.max(0, v + jitter);
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.7 }}
      className="mt-10 mx-auto max-w-2xl"
    >
      <div className="rounded-2xl border border-primary/15 bg-background/60 backdrop-blur-xl p-5 shadow-[0_0_30px_-10px_hsl(255_70%_58%/0.15)]">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">System Status</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statusMetrics.map((m, i) => (
            <div key={m.label} className="text-center">
              <div className="text-lg md:text-xl font-mono font-bold text-foreground tabular-nums">
                {m.format(values[i])}
              </div>
              <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
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
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroImg}
          alt="Molecular structure visualization"
          className="w-full h-full object-cover scale-110"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </motion.div>

      <MeshGradientBg />

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
            <a
              href="https://labs.cherazen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-base transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              {/* Glass bg */}
              <span className="absolute inset-0 rounded-full bg-background/60 backdrop-blur-md border border-primary/20 group-hover:border-primary/40 transition-colors" />
              {/* Gradient glow on hover */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_24px_4px_hsl(255_70%_58%/0.2),0_0_24px_4px_hsl(166_60%_42%/0.15)]" />
              <span className="relative text-foreground">Enter Discovery Lab</span>
            </a>
          </div>

          <SystemStatusPanel />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
