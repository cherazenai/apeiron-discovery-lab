import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useCallback, useState } from "react";

/* ── Galaxy Knowledge Map Canvas ── */
interface MapNode {
  id: number;
  label: string;
  domain: string;
  type: "concept" | "paper" | "hypothesis" | "discovery";
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  r: number;
  color: string;
  cluster: number;
}

interface MapEdge {
  from: number;
  to: number;
}

const DOMAINS = [
  { name: "Materials Science", color: "#7B5CFF", cx: 0.2, cy: 0.3 },
  { name: "Energy Technology", color: "#1DE9B6", cx: 0.75, cy: 0.25 },
  { name: "Chemistry", color: "#FF4DA6", cx: 0.5, cy: 0.55 },
  { name: "Medicine", color: "#7B5CFF", cx: 0.15, cy: 0.7 },
  { name: "Climate Science", color: "#1DE9B6", cx: 0.8, cy: 0.65 },
  { name: "AI", color: "#FF4DA6", cx: 0.45, cy: 0.15 },
  { name: "Quantum Physics", color: "#7B5CFF", cx: 0.85, cy: 0.45 },
  { name: "Biotechnology", color: "#1DE9B6", cx: 0.3, cy: 0.85 },
];

const NODE_LABELS = [
  "Perovskite Materials", "Solar Cells", "Catalysts", "Battery Electrolytes",
  "Carbon Capture", "Drug Discovery", "Protein Folding", "Graph Neural Nets",
  "Superconductors", "Quantum Computing", "Gene Editing", "Nanomaterials",
  "Polymer Science", "Reaction Kinetics", "Molecular Dynamics", "CRISPR",
  "Hydrogen Storage", "Photovoltaics", "Organic Synthesis", "Deep Learning",
];

function buildGraph(w: number, h: number) {
  const nodes: MapNode[] = [];
  const edges: MapEdge[] = [];
  const types: MapNode["type"][] = ["concept", "paper", "hypothesis", "discovery"];

  NODE_LABELS.forEach((label, i) => {
    const cluster = i % DOMAINS.length;
    const d = DOMAINS[cluster];
    const angle = (i / 3) * Math.PI * 2 + Math.random() * 0.8;
    const spread = 40 + Math.random() * 60;
    const x = d.cx * w + Math.cos(angle) * spread;
    const y = d.cy * h + Math.sin(angle) * spread;
    nodes.push({
      id: i, label, domain: d.name, type: types[i % 4],
      x, y, baseX: x, baseY: y,
      r: types[i % 4] === "discovery" ? 6 : 3.5 + Math.random() * 2,
      color: d.color, cluster,
    });
  });

  // Intra-cluster edges
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].cluster === nodes[j].cluster && Math.random() < 0.5) {
        edges.push({ from: i, to: j });
      }
    }
  }
  // Cross-cluster edges
  for (let i = 0; i < 8; i++) {
    const a = Math.floor(Math.random() * nodes.length);
    let b = Math.floor(Math.random() * nodes.length);
    while (b === a) b = Math.floor(Math.random() * nodes.length);
    edges.push({ from: a, to: b });
  }

  return { nodes, edges };
}

const DiscoveryMapCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const graphRef = useRef<{ nodes: MapNode[]; edges: MapEdge[] }>({ nodes: [], edges: [] });
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const reasoningRef = useRef({ active: false, path: [] as number[], timer: 0, alpha: 0 });
  const [tooltip, setTooltip] = useState<{ x: number; y: number; node: MapNode } | null>(null);

  const initGraph = useCallback((w: number, h: number) => {
    graphRef.current = buildGraph(w, h);
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
      initGraph(rect.width, rect.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      mouseRef.current = { x: mx, y: my };

      // Tooltip check
      const nodes = graphRef.current.nodes;
      let found = false;
      for (const n of nodes) {
        const dx = n.x - mx;
        const dy = n.y - my;
        if (Math.sqrt(dx * dx + dy * dy) < 15) {
          setTooltip({ x: mx, y: my, node: n });
          found = true;
          break;
        }
      }
      if (!found) setTooltip(null);
    };
    const handleLeave = () => { mouseRef.current = { x: -1000, y: -1000 }; setTooltip(null); };
    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleLeave);

    let animId: number;
    let time = 0;

    const draw = () => {
      time += 0.008;
      const w = canvas.width / 2;
      const h = canvas.height / 2;
      ctx.clearRect(0, 0, w, h);

      const { nodes, edges } = graphRef.current;
      const reasoning = reasoningRef.current;

      // Animate nodes
      nodes.forEach((n) => {
        n.x = n.baseX + Math.sin(time * 0.2 + n.id * 1.1) * 5;
        n.y = n.baseY + Math.cos(time * 0.15 + n.id * 0.8) * 4;
        const dx = n.x - mouseRef.current.x;
        const dy = n.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 60 && dist > 0) {
          n.x += (dx / dist) * (60 - dist) * 0.15;
          n.y += (dy / dist) * (60 - dist) * 0.15;
        }
      });

      // AI reasoning pulse
      reasoning.timer += 0.008;
      if (reasoning.timer > 10 && !reasoning.active) {
        reasoning.active = true;
        reasoning.alpha = 0;
        reasoning.timer = 0;
        // Pick a random cross-cluster path
        const crossEdges = edges.filter((e) => nodes[e.from].cluster !== nodes[e.to].cluster);
        if (crossEdges.length > 0) {
          const e = crossEdges[Math.floor(Math.random() * crossEdges.length)];
          reasoning.path = [e.from, e.to];
        }
      }
      if (reasoning.active) {
        reasoning.alpha += 0.015;
        if (reasoning.alpha > 1.5) {
          reasoning.active = false;
          reasoning.alpha = 0;
        }
      }

      // Draw edges
      edges.forEach((edge) => {
        const a = nodes[edge.from];
        const b = nodes[edge.to];
        const isReasoning = reasoning.active && reasoning.path.includes(edge.from) && reasoning.path.includes(edge.to);

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        if (isReasoning) {
          const gAlpha = Math.min(1, reasoning.alpha);
          ctx.strokeStyle = `rgba(123,92,255,${0.3 + gAlpha * 0.5})`;
          ctx.lineWidth = 2;
        } else {
          ctx.strokeStyle = a.cluster === b.cluster ? "rgba(123,92,255,0.08)" : "rgba(29,233,182,0.06)";
          ctx.lineWidth = 0.5;
        }
        ctx.stroke();

        // Particle
        const t = (time * 0.12 + edge.from * 0.2) % 1;
        const px = a.x + (b.x - a.x) * t;
        const py = a.y + (b.y - a.y) * t;
        ctx.beginPath();
        ctx.arc(px, py, 1, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(29,233,182,0.35)";
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach((n) => {
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3);
        glow.addColorStop(0, n.color + "25");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.fillRect(n.x - n.r * 3, n.y - n.r * 3, n.r * 6, n.r * 6);

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();
      });

      // Reasoning label
      if (reasoning.active && reasoning.alpha > 0.3 && reasoning.alpha < 1.3 && reasoning.path.length === 2) {
        const a = nodes[reasoning.path[0]];
        const b = nodes[reasoning.path[1]];
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2 - 12;
        const alpha = Math.min(1, reasoning.alpha, 1.5 - reasoning.alpha);
        ctx.font = "10px Inter, system-ui, sans-serif";
        ctx.fillStyle = `rgba(123,92,255,${alpha * 0.9})`;
        ctx.textAlign = "center";
        ctx.fillText("AI reasoning path detected", mx, my);
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
  }, [initGraph]);

  return (
    <div className="relative w-full" style={{ minHeight: 400 }}>
      <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" style={{ minHeight: 400 }} />
      {tooltip && (
        <div
          className="absolute pointer-events-none z-10 px-3 py-2 rounded-xl bg-card border border-border shadow-lg text-xs max-w-[200px]"
          style={{ left: tooltip.x + 16, top: tooltip.y - 10 }}
        >
          <p className="font-medium text-foreground">{tooltip.node.label}</p>
          <p className="text-muted-foreground mt-0.5">{tooltip.node.domain}</p>
          <span className="inline-block mt-1 px-1.5 py-0.5 rounded bg-accent text-accent-foreground text-[10px] capitalize">
            {tooltip.node.type}
          </span>
        </div>
      )}
    </div>
  );
};

/* ── Section ── */
const DiscoveryMapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding-lg relative bg-muted/40" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">AI Visualization</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
            Mapping the Universe of <span className="text-gradient-violet-teal">Knowledge</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-sans leading-relaxed">
            ApeironAI connects ideas across scientific disciplines to reveal hidden relationships in knowledge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl border border-border bg-background shadow-lg overflow-hidden"
        >
          <DiscoveryMapCanvas />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 space-y-3"
        >
          <p className="text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto">
            The future of discovery may not come from isolated ideas, but from connecting knowledge across disciplines.
          </p>
          <p className="text-muted-foreground/80 font-sans">
            ApeironAI is designed to explore this space.
          </p>
          <p className="text-sm font-serif italic text-primary/70">
            Toward Artificial Infinite Intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DiscoveryMapSection;
