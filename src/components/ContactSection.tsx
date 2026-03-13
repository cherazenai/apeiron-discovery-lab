import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Instagram } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Collaborate</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Join the <span className="text-gradient-violet-teal">Journey</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-sans leading-relaxed mb-4">
            Cherazen is currently an early-stage independent project. We are open to discussions with researchers, engineers, and curious minds interested in the future of scientific discovery.
          </p>
          <p className="text-muted-foreground font-sans mb-10">
            If you are interested in collaboration, feedback, or joining the journey, feel free to reach out.
          </p>

          {/* Emails */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="mailto:cherazen.ai@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border text-sm text-foreground font-sans hover:border-primary/40 transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              cherazen.ai@gmail.com
            </a>
            <a href="mailto:apeironailabs@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card border border-border text-sm text-foreground font-sans hover:border-primary/40 transition-colors">
              <Mail className="w-4 h-4 text-secondary" />
              apeironailabs@gmail.com
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a href="https://instagram.com/aperionlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
              <Instagram className="w-4 h-4" />
              @aperionlabs
            </a>
            <a href="https://x.com/Aperionlabs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              @Aperionlabs
            </a>
            <a href="https://reddit.com/u/AperionAI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
              AperionAI
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
