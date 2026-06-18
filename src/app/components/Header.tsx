import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../imports/unainow_logo_4x.png";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: "/", label: "Strona główna" },
    { href: "/uslugi", label: "Usługi" },
    { href: "/o-nas", label: "O mnie" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-none"}`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <ImageWithFallback
              src={logo}
              alt="umakeIT"
              className="h-10 w-auto object-contain rounded-xl"
            />
            <div>
              <div className="font-bold text-lg leading-tight text-gray-900 dark:text-white">umakeIT</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">Serwis Komputerowy Wrocław</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
              >
                <Link
                  to={link.href}
                  className={`relative text-sm transition-colors group ${
                    location.pathname === link.href
                      ? "text-violet-600 dark:text-violet-400 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-violet-500 rounded-full transition-all duration-300 ${location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.35 }}
            className="hidden md:flex items-center gap-2"
          >
            <ThemeToggle />
            <Button asChild>
              <Link to="/kontakt">Skontaktuj się</Link>
            </Button>
          </motion.div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.2 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block transition-colors ${
                        location.pathname === link.href
                          ? "text-violet-600 dark:text-violet-400 font-medium"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.06, duration: 0.2 }}
                >
                  <Button asChild className="w-full">
                    <Link to="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                      Skontaktuj się
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
