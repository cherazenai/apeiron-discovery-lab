import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Youtube } from "lucide-react";

const socials = [
  {
    platform: "X (Twitter)",
    username: "@Apeironailabs",
    link: "https://x.com/Apeironailabs",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    platform: "Reddit",
    username: "ApeironAI",
    link: "https://www.reddit.com/u/ApeironAI/s/cSo6NJTEmk",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701z" />
      </svg>
    ),
  },
  {
    platform: "Instagram",
    username: "@apeironaipro",
    link: "https://www.instagram.com/apeironaipro",
    icon: <Instagram className="w-6 h-6" />,
  },
  {
    platform: "YouTube",
    username: "Vision Andromeda",
    link: "https://youtube.com/@visionandromeda?si=5iJlsoQUrIyHk6lh",
    icon: <Youtube className="w-6 h-6" />,
  },
];

const SocialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding-lg relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Community</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Follow the <span className="text-gradient-violet-teal">Journey</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={s.platform}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group p-6 rounded-3xl bg-card border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 text-accent-foreground">
                {s.icon}
              </div>
              <p className="text-sm font-sans font-medium text-foreground mb-1">{s.platform}</p>
              <p className="text-xs text-muted-foreground font-sans">{s.username}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
