import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">Terms of Use</h1>
          <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
            <p><strong className="text-foreground">Effective Date:</strong> March 1, 2026</p>
            <p>By accessing and using the Cherazen website (cherazen.com) and related services, you agree to the following terms and conditions.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Acceptable Use</h2>
            <p>You agree to use this website for lawful purposes only. You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attempt to disrupt or interfere with the website's operation</li>
              <li>Use automated tools to scrape or harvest data from the website without permission</li>
              <li>Impersonate Cherazen or its representatives</li>
              <li>Use the website in any manner that could damage, disable, or impair it</li>
            </ul>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and software, is the property of Cherazen or its content suppliers and is protected by applicable intellectual property laws.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Disclaimer</h2>
            <p>The information provided on this website is for general informational purposes only. Cherazen is an early-stage research initiative, and all product descriptions, research claims, and system capabilities represent development goals rather than guaranteed outcomes.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Limitation of Liability</h2>
            <p>Cherazen shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Modifications</h2>
            <p>We reserve the right to modify these Terms of Use at any time. Continued use of the website after changes constitutes acceptance of the updated terms.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Contact</h2>
            <p>For questions about these terms, contact us at: <a href="mailto:cherazen.ai@gmail.com" className="text-primary hover:underline">cherazen.ai@gmail.com</a></p>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;
