import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">Cookie Policy</h1>
          <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
            <p><strong className="text-foreground">Effective Date:</strong> March 1, 2026</p>
            <p>This Cookie Policy explains how Cherazen uses cookies and similar tracking technologies on our website cherazen.com.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember your preferences, and provide analytics information to site operators.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">How We Use Cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Essential Cookies:</strong> Required for basic website functionality such as navigation and access to secure areas.</li>
              <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting information about page views, traffic sources, and user behavior patterns. We may use services like Google Analytics for this purpose.</li>
              <li><strong className="text-foreground">Preference Cookies:</strong> Remember your settings and choices to provide a more personalized experience.</li>
            </ul>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Managing Cookies</h2>
            <p>You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of our website.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Third-Party Cookies</h2>
            <p>Some cookies may be set by third-party services that appear on our pages. We do not control these cookies and recommend reviewing the privacy policies of these third-party providers.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Contact</h2>
            <p>For questions about our cookie practices, contact us at: <a href="mailto:cherazen.ai@gmail.com" className="text-primary hover:underline">cherazen.ai@gmail.com</a></p>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Cookies;
