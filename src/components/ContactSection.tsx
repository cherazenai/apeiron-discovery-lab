import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding-lg relative bg-muted/40">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-sans uppercase tracking-widest text-secondary mb-4">Collaborate</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
            Join the <span className="text-gradient-violet-teal">Journey</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-sans leading-relaxed mb-4">
            Cherazen is currently an early-stage independent project. We are open to discussions with researchers, engineers, and curious minds interested in the future of scientific discovery.
          </p>
          <p className="text-muted-foreground font-sans mb-12">
            If you are interested in collaboration, feedback, or joining the journey, feel free to reach out.
          </p>

          {/* Emails */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="mailto:apeironaipro@gmail.com" className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border text-sm text-foreground font-sans hover:shadow-lg hover:border-primary/20 transition-all duration-300">
              <Mail className="w-4 h-4 text-primary" />
              apeironaipro@gmail.com
            </a>
            <a href="mailto:cherazen.ai@gmail.com" className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border text-sm text-foreground font-sans hover:shadow-lg hover:border-primary/20 transition-all duration-300">
              <Mail className="w-4 h-4 text-secondary" />
              cherazen.ai@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
