import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FlaskConical } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import apeironLogo from "@/assets/apeiron-logo.png";

const navLinks = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Vision", href: "#vision", sectionId: "vision" },
  { label: "Products", href: "#products", sectionId: "products" },
  { label: "Research", href: "#research", sectionId: "research" },
  { label: "Labs", href: "https://labs.cherazen.com", sectionId: null, external: true, icon: true },
  { label: "Founder", href: "#founder", sectionId: "founder" },
  { label: "Blog", href: "/blog", sectionId: null },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .filter((l) => l.sectionId)
        .map((l) => l.sectionId as string);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsOpen(false);
    if (link.sectionId && isHomePage) {
      const el = document.getElementById(link.sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderDesktopLink = (link: typeof navLinks[0]) => {
    const isActive = link.sectionId
      ? activeSection === link.sectionId && isHomePage
      : !link.external && location.pathname === link.href;

    // External link (Labs)
    if (link.external) {
      const linkEl = (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-1.5 text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        >
          {link.icon && <FlaskConical size={14} className="text-primary/70 group-hover:text-primary transition-colors" />}
          {link.label}
          <span className="absolute -inset-x-2 -inset-y-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/5 to-secondary/5 -z-10" />
        </a>
      );

      return (
        <Tooltip key={link.label}>
          <TooltipTrigger asChild>{linkEl}</TooltipTrigger>
          <TooltipContent side="bottom" className="text-xs">
            Interactive AI Research Experiments
          </TooltipContent>
        </Tooltip>
      );
    }

    // Internal section link on homepage
    if (link.sectionId && isHomePage) {
      return (
        <button
          key={link.label}
          onClick={() => handleNavClick(link)}
          className={`relative text-sm font-sans transition-colors duration-200 ${
            isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {link.label}
          {isActive && (
            <motion.div
              layoutId="nav-underline"
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>
      );
    }

    // Section link but not on homepage
    if (link.sectionId && !isHomePage) {
      return (
        <Link
          key={link.label}
          to={`/${link.href}`}
          className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {link.label}
        </Link>
      );
    }

    // Regular internal route (Blog)
    return (
      <Link
        key={link.label}
        to={link.href}
        className={`relative text-sm font-sans transition-colors duration-200 ${
          isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {link.label}
        {isActive && (
          <motion.div
            layoutId="nav-underline"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={apeironLogo} alt="Cherazen" className="h-8 w-8" />
            <span className="font-serif text-xl font-bold text-foreground tracking-tight">
              Cherazen
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(renderDesktopLink)}
          </div>

          <div className="hidden md:block">
            <a
              href="https://ai.cherazen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              Launch ApeironAI
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                if (link.external) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <FlaskConical size={16} className="text-primary/70" />
                      {link.label}
                    </a>
                  );
                }
                if (link.sectionId && isHomePage) {
                  return (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link)}
                      className={`block text-base transition-colors w-full text-left ${
                        activeSection === link.sectionId ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    to={link.sectionId ? `/${link.href}` : link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="https://ai.cherazen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium"
              >
                Launch ApeironAI
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
