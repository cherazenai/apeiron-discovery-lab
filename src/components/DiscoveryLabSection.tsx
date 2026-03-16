import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useCallback } from "react";

/* ── Knowledge Graph Canvas ── */
interface Node {
  id: number;
  label: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  baseX: number;
  baseY: number;
}

interface Edge {
  from: number;
  to: number;
}

const LABELS = [
  "Chemistry", "Reaction Kinetics", "Molecular Dynamics",
  "Chemical Bonds", "Organic Synthesis", "Graph Neural Networks", "Catalytic Reactions",
];
const COLORS = ["#7B5CFF", "#1DE9B6", "#FF4DA6", "#7B5CFF", "#1DE9B6", "#FF4DA6", "#7B5CFF"];
const EDGES: Edge[] = [
  { from: 0, to: 1 }, { from: 0, to: 2 }, { from: 0, to: 3 },
  { from: 0, to: 5 }, { from: 1, to: 6 }, { from: 2, to: 3 },
  { from: 3, to: 4 }, { from: 4, to: 5 }, { from: 5, to: 6 },
  { from: 1, to: 2 }, { from: 4, to: 0 },
];

const KnowledgeGraphCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const discoveryRef = useRef({ active: false, edgeIdx: 0, timer: 0, alpha: 0 });

  const init = useCallback((w: number, h: number) => {
    const cx = w / 2, cy = h / 2;
    const radius = Math.min(w, h) * 0.32;
    nodesRef.current = LABELS.map((label, i) => {
      const angle = (i / LABELS.length) * Math.PI * 2 - Math.PI / 2;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      return { id: i, label, x, y, baseX: x, baseY: y, vx: 0, vy: 0, r: 5 + Math.random() * 4, color: COLORS[i] };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * 2;
      canvas.height = rect.height * 2;
      ctx.scale(2, 2);
      init(rect.width, rect.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleLeave = () => { mouseRef.current = { x: -1000, y: -1000 }; };
    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleLeave);

    let animId: number;
    let time = 0;

    const draw = () => {
      time += 0.01;
      const w = canvas.width / 2;
      const h = canvas.height / 2;
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const disc = discoveryRef.current;

      nodes.forEach((n) => {
        n.x = n.baseX + Math.sin(time * 0.3 + n.id * 1.2) * 8;
        n.y = n.baseY + Math.cos(time * 0.25 + n.id * 0.9) * 6;
        const dx = n.x - mouseRef.current.x;
        const dy = n.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80 && dist > 0) {
          const force = (80 - dist) / 80 * 12;
          n.x += (dx / dist) * force;
          n.y += (dy / dist) * force;
        }
      });

      disc.timer += 0.01;
      if (disc.timer > 8 && !disc.active) {
        disc.active = true;
        disc.edgeIdx = Math.floor(Math.random() * EDGES.length);
        disc.alpha = 0;
        disc.timer = 0;
      }
      if (disc.active) {
        disc.alpha += 0.02;
        if (disc.alpha > 1) {
          disc.alpha = Math.max(0, 2 - disc.alpha * 1.2);
          if (disc.alpha <= 0) disc.active = false;
        }
      }

      EDGES.forEach((edge, idx) => {
        const a = nodes[edge.from];
        const b = nodes[edge.to];
        const isDisc = disc.active && idx === disc.edgeIdx;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        if (isDisc) {
          ctx.strokeStyle = `rgba(123,92,255,${0.4 + disc.alpha * 0.6})`;
          ctx.lineWidth = 2;
        } else {
          ctx.strokeStyle = "rgba(123,92,255,0.12)";
          ctx.lineWidth = 1;
        }
        ctx.stroke();

        const t = (time * 0.15 + idx * 0.3) % 1;
        const px = a.x + (b.x - a.x) * t;
        const py = a.y + (b.y - a.y) * t;
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(29,233,182,0.5)";
        ctx.fill();
      });

      nodes.forEach((n) => {
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
        grad.addColorStop(0, n.color + "30");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(n.x - n.r * 4, n.y - n.r * 4, n.r * 8, n.r * 8);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();
        ctx.font = "11px Inter, system-ui, sans-serif";
        ctx.fillStyle = "rgba(100,100,120,0.8)";
        ctx.textAlign = "center";
        ctx.fillText(n.label, n.x, n.y + n.r + 16);
      });

      if (disc.active && disc.alpha > 0.2) {
        const edge = EDGES[disc.edgeIdx];
        const a = nodes[edge.from];
        const b = nodes[edge.to];
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2 - 14;
        ctx.font = "10px Inter, system-ui, sans-serif";
        ctx.fillStyle = `rgba(123,92,255,${disc.alpha * 0.8})`;
        ctx.textAlign = "center";
        ctx.fillText("Relationship detected", mx, my);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseleave", handleLeave);
    };
  }, [init]);

  return (
    <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" style={{ minHeight: 360 }} />
  );
};

/* ── Discovery Lab Section ── */
const DiscoveryLabSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="discovery-lab" className="section-padding-lg" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border border-primary/20 text-primary mb-6 shadow-[0_0_16px_-4px_hsl(255_70%_58%/0.25)]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Experimental
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            ApeironAI Research Lab
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive AI Research Experiments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              The ApeironAI Research Lab is an interactive environment demonstrating how AI systems can explore scientific ideas by combining research data, reasoning models, and knowledge graphs.
            </p>
            <p className="text-muted-foreground/80 leading-relaxed">
              This experience demonstrates the core concept behind ApeironAI — accelerating discovery through intelligent reasoning systems.
            </p>

            <div className="rounded-2xl bg-[#0A0A0B] p-6 border border-border/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/50">AI Research Console</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Simulate how AI systems explore scientific ideas by combining knowledge graphs, datasets, and reasoning models to generate new hypotheses.
              </p>
            </div>

            <a
              href="https://labs.cherazen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-base text-primary-foreground transition-all duration-300 hover:scale-[1.02] min-h-[48px]"
              style={{ background: "linear-gradient(135deg, #7B5CFF, #1DE9B6)" }}
            >
              Enter Research Lab
            </a>
          </div>

          <div className="rounded-3xl bg-background border border-border/60 shadow-lg overflow-hidden aspect-square max-h-[480px]">
            <KnowledgeGraphCanvas />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoveryLabSection;
