import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, Play } from "lucide-react";
import visionAndromedaThumb from "@/assets/vision-andromeda-thumb.png";

const YouTubeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding-lg relative bg-muted/40">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Youtube className="w-6 h-6 text-destructive" />
              <p className="text-sm font-sans uppercase tracking-widest text-secondary">YouTube Channel</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-5 text-foreground">
              Vision <span className="text-gradient-violet-magenta">Andromeda</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              Vision Andromeda documents the real journey of building technology and startups from the ground up.
            </p>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">
              The channel shares personal vlogs, startup building process, learning AI and coding, challenges faced along the journey, and real life progress from zero.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground/70 font-sans mb-6">
              <span className="px-3 py-1 rounded-full bg-muted border border-border">Early Stage</span>
              <span className="px-3 py-1 rounded-full bg-muted border border-border">2 Videos</span>
              <span className="px-3 py-1 rounded-full bg-muted border border-border">Personal Documentation</span>
            </div>
            <a
              href="https://youtube.com/@visionandromeda?si=5iJlsoQUrIyHk6lh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              Visit Channel
            </a>
          </div>

          {/* Preview Card */}
          <motion.a
           href="https://youtu.be/nJ6iqTi6QEE?si=CD1QXBc5wK95jfB-"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative aspect-video rounded-3xl overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <img src={visionAndromedaThumb} alt="Vision Andromeda YouTube Channel" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-7 h-7 text-primary-foreground ml-1" />
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;
