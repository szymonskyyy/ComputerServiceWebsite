import { useEffect } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Monitor, Zap, Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Home() {
  useEffect(() => {
    document.title = "umakeIT – Serwis Komputerowy Wrocław | Składanie PC, Naprawa";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Profesjonalny serwis komputerowy we Wrocławiu. Składanie komputerów stacjonarnych na zamówienie, naprawa laptopów i PC. Zadzwoń: 532 809 383.");
  }, []);

  const features = [
    { icon: Zap, title: "Szybka realizacja", description: "Większość zleceń w ciągu 24–48 godzin. Bez niepotrzebnego czekania." },
    { icon: Shield, title: "Gwarancja rozruchowa", description: "Komputer musi działać od razu po odebraniu — naprawię każdy problem z montażu bezpłatnie." },
    { icon: Clock, title: "Elastyczne godziny", description: "Działam w weekendy i popołudniami — dostosuję się do Twojego grafiku." },
  ];

  const services = [
    {
      title: "Montaż komputerów",
      description: "Składam komputery stacjonarne dopasowane do Twoich potrzeb i budżetu.",
      image: "https://images.unsplash.com/photo-1619597455322-4fbbd820250a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwY29tcHV0ZXIlMjBhc3NlbWJseSUyMGNvbXBvbmVudHN8ZW58MXx8fHwxNzgxNjMxMDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Dobór podzespołów", "Montaż i konfiguracja", "Instalacja systemu", "Gwarancja rozruchowa"],
    },
    {
      title: "Serwis i naprawa",
      description: "Diagnozuję i naprawiam usterki komputerów stacjonarnych wszystkich marek.",
      image: "https://images.unsplash.com/photo-1603969409447-ba86143a03f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpciUyMHRlY2huaWNpYW4lMjBkZXNrdG9wfGVufDF8fHx8MTc4MTYzMTAwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Diagnostyka usterek", "Wymiana podzespołów", "Czyszczenie i konserwacja", "Aktualizacja systemu"],
    },
    {
      title: "Modernizacja",
      description: "Rozbudowuję istniejące komputery — więcej mocy bez kupowania nowego sprzętu.",
      image: "https://images.unsplash.com/photo-1580835916901-40770720c505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGhhcmR3YXJlJTIwd29ya3Nob3B8ZW58MXx8fHwxNzgxNjMxMDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Upgrade RAM i procesora", "Wymiana karty graficznej", "Dysk SSD", "Upgrade zasilacza"],
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-violet-600 via-violet-700 to-violet-900 text-white py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-violet-400/15 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="text-violet-300 mb-4 tracking-widest uppercase text-sm"
          >
            Wrocław · Montaż &amp; Serwis
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="text-5xl md:text-7xl mb-6 leading-tight"
          >
            Twój komputer,
            <br />
            <span className="text-violet-200">złożony z pasją.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
            className="text-xl mb-10 text-violet-100 max-w-2xl leading-relaxed"
          >
            Składam i serwisuje komputery stacjonarne we Wrocławiu. Indywidualne
            podejście, uczciwe ceny i gwarancja rozruchowa na każde zlecenie.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" variant="secondary" asChild className="text-base px-8">
              <Link to="/uslugi">
                Zobacz usługi <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base px-8 bg-transparent border-white text-white hover:bg-white hover:text-violet-700"
            >
              <Link to="/kontakt">Skontaktuj się</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-16">
            <p className="text-violet-600 dark:text-violet-400 uppercase tracking-widest text-sm mb-3">Dlaczego umakeIT?</p>
            <h2 className="text-4xl md:text-5xl">Prosto i bez ściemy</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div className="flex flex-col items-center text-center p-6">
                  <div className="size-16 bg-violet-100 dark:bg-violet-900/40 rounded-2xl flex items-center justify-center mb-5">
                    <f.icon className="size-8 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{f.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{f.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-16">
            <p className="text-violet-600 dark:text-violet-400 uppercase tracking-widest text-sm mb-3">Co robię</p>
            <h2 className="text-4xl md:text-5xl">Moje usługi</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-4">
              Kompleksowa opieka nad Twoim sprzętem — od montażu po serwis
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-500 h-full">
                  <div className="aspect-video overflow-hidden">
                    <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.5, ease }} className="h-full">
                      <ImageWithFallback src={s.image} alt={s.title} className="size-full object-cover" />
                    </motion.div>
                  </div>
                  <CardHeader>
                    <CardTitle>{s.title}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {s.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="size-4 text-violet-500 dark:text-violet-400 flex-shrink-0" />
                          <span className="text-sm">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="text-center mt-14">
            <Button size="lg" asChild>
              <Link to="/uslugi">
                Pełna oferta i cennik <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-violet-700 dark:bg-violet-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-violet-400/15 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <FadeUp>
            <Monitor className="size-14 mx-auto mb-6 opacity-70" />
            <h2 className="text-4xl md:text-5xl mb-5">Masz pytanie?</h2>
            <p className="text-xl mb-10 text-violet-100 max-w-xl mx-auto leading-relaxed">
              Napisz lub zadzwoń — chętnie doradze, wycenię i umówię się na termin.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-base px-10">
              <Link to="/kontakt">Skontaktuj się</Link>
            </Button>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
