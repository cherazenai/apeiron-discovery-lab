import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
            <p><strong className="text-foreground">Effective Date:</strong> March 1, 2026</p>
            <p>Cherazen ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website cherazen.com and related services.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referral sources.</li>
              <li><strong className="text-foreground">Device Information:</strong> Browser type, operating system, and device identifiers.</li>
              <li><strong className="text-foreground">Contact Information:</strong> If you voluntarily provide your email address through our contact forms or newsletter signup.</li>
            </ul>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To improve and optimize our website experience</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To respond to inquiries and communications</li>
              <li>To send updates about Cherazen and ApeironAI (only if you opt in)</li>
            </ul>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Third-Party Services</h2>
            <p>We may use third-party analytics services (such as Google Analytics) to help understand how visitors use our website. These services may collect information about your online activities across websites.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Data Security</h2>
            <p>We implement reasonable security measures to protect the information we collect. However, no method of transmission over the Internet is 100% secure.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information by contacting us at cherazen.ai@gmail.com.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

            <h2 className="text-xl font-serif font-bold text-foreground mt-8">Contact</h2>
            <p>For questions about this Privacy Policy, contact us at: <a href="mailto:cherazen.ai@gmail.com" className="text-primary hover:underline">cherazen.ai@gmail.com</a></p>
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
