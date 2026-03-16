import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground font-sans leading-relaxed mb-12">
            Cherazen is open to discussions with researchers, engineers, developers, and anyone interested in the future of AI-powered scientific discovery.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:apeironaipro@gmail.com"
              className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-sans font-medium text-foreground">General Inquiries</p>
                <p className="text-xs text-muted-foreground mt-0.5">apeironaipro@gmail.com</p>
              </div>
            </a>
            <a
              href="mailto:cherazen.ai@gmail.com"
              className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-sans font-medium text-foreground">Research & Collaboration</p>
                <p className="text-xs text-muted-foreground mt-0.5">cherazen.ai@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="p-8 rounded-3xl bg-muted/50 border border-border">
            <h2 className="text-lg font-serif font-bold text-foreground mb-4">What We're Looking For</h2>
            <ul className="space-y-3 text-sm text-muted-foreground font-sans">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <span>Researchers interested in AI-assisted scientific discovery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
                <span>Engineers and developers passionate about building AI research tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-magenta mt-1.5 shrink-0" />
                <span>Investors and partners who believe in the future of AI for science</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <span>Anyone curious about the intersection of AI and scientific discovery</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;
