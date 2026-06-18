import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "../../imports/unainow_logo_4x-1.png";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Strona główna" },
    { href: "/uslugi", label: "Usługi" },
    { href: "/o-nas", label: "O mnie" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors text-sm ${
                  location.pathname === link.href
                    ? "text-violet-600 dark:text-violet-400 font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button asChild>
              <Link to="/kontakt">Skontaktuj się</Link>
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors ${
                  location.pathname === link.href
                    ? "text-violet-600 dark:text-violet-400 font-medium"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link to="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                Skontaktuj się
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}