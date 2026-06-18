import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Monitor, Wrench, HardDrive, Cpu, Fan, Settings, CircuitBoard } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Services() {
  useEffect(() => {
    document.title = "Usługi – umakeIT Serwis Komputerowy Wrocław";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Składanie komputerów PC na zamówienie, naprawa laptopów, wymiana podzespołów, czyszczenie i konserwacja. Serwis komputerowy Wrocław – umakeIT.");
  }, []);

  const services = [
    {
      icon: Monitor,
      title: "Montaż komputerów na zamówienie",
      description: "Złożę komputer idealnie dopasowany do Twoich potrzeb i budżetu.",
      price: "od 200 zł",
      includes: ["Konsultacja i dobór podzespołów", "Profesjonalny montaż", "Instalacja systemu Windows/Linux", "Instalacja sterowników", "Test stabilności i wydajności", "Gwarancja rozruchowa"],
    },
    {
      icon: Wrench,
      title: "Diagnostyka i naprawa",
      description: "Diagnozuję i naprawiam usterki komputerów stacjonarnych wszystkich marek.",
      price: "od 100 zł",
      includes: ["Pełna diagnostyka sprzętowa", "Identyfikacja problemu", "Naprawa lub wymiana wadliwych podzespołów", "Test po naprawie", "Gwarancja na wykonaną usługę"],
    },
    {
      icon: HardDrive,
      title: "Modernizacja i upgrade",
      description: "Rozbudowa komputera — więcej mocy bez kupowania nowego sprzętu.",
      price: "od 150 zł",
      includes: ["Analiza obecnej konfiguracji", "Dobór kompatybilnych podzespołów", "Wymiana/dodanie RAM", "Wymiana dysku na SSD", "Upgrade karty graficznej", "Upgrade procesora"],
    },
    {
      icon: Fan,
      title: "Czyszczenie i konserwacja",
      description: "Kompleksowe czyszczenie komputera i wymiana pasty termoprzewodzącej.",
      price: "od 80 zł",
      includes: ["Czyszczenie wnętrza obudowy", "Czyszczenie wentylatorów", "Wymiana pasty termoprzewodzącej", "Optymalizacja przepływu powietrza", "Organizacja okablowania"],
    },
    {
      icon: Settings,
      title: "Instalacja i konfiguracja systemu",
      description: "Instalacja systemu operacyjnego i niezbędnego oprogramowania.",
      price: "od 100 zł",
      includes: ["Instalacja Windows/Linux", "Instalacja sterowników", "Instalacja podstawowego oprogramowania", "Konfiguracja systemu", "Aktualizacje systemu"],
    },
    {
      icon: CircuitBoard,
      title: "Komputer gamingowy",
      description: "Specjalistyczny montaż PC dla graczy z optymalnie dobranymi komponentami.",
      price: "od 300 zł",
      includes: ["Dobór podzespołów gamingowych", "Montaż z dbałością o detale", "Cable management", "Overclocking (opcjonalnie)", "Instalacja i konfiguracja", "Test w grach"],
    },
    {
      icon: Cpu,
      title: "Serwis pogwarancyjny",
      description: "Naprawa i serwis komputerów po upływie gwarancji producenta.",
      price: "od 120 zł",
      includes: ["Diagnostyka problemu", "Wymiana wadliwych podzespołów", "Dokumentacja naprawy", "Gwarancja na usługę"],
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <section className="bg-gradient-to-br from-violet-600 to-violet-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <p className="text-violet-300 uppercase tracking-widest text-sm mb-3">Co oferuję</p>
            <h1 className="text-5xl md:text-6xl mb-4">Usługi i cennik</h1>
            <p className="text-xl text-violet-100 max-w-2xl">Ceny orientacyjne — ostateczna wycena po konsultacji, zawsze przed realizacją</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <FadeUp key={i} delay={(i % 2) * 0.1}>
                <Card className="hover:shadow-xl transition-shadow duration-500 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="size-12 bg-violet-100 dark:bg-violet-900/40 rounded-lg flex items-center justify-center flex-shrink-0">
                        <s.icon className="size-6 text-violet-600 dark:text-violet-400" />
                      </div>
                      <Badge variant="secondary" className="ml-4 text-sm">{s.price}</Badge>
                    </div>
                    <CardTitle className="text-xl">{s.title}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">Usługa obejmuje:</p>
                    <ul className="space-y-2">
                      {s.includes.map((item, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <span className="text-violet-500 dark:text-violet-400 mt-0.5 font-bold">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeUp className="mb-12 text-center"><h2 className="text-3xl">Jak to działa?</h2></FadeUp>
          <div>
            {[
              { step: "01", title: "Skontaktuj się", desc: "Zadzwoń lub napisz — opowiedz mi co potrzebujesz." },
              { step: "02", title: "Wycena", desc: "Ustalamy szczegóły i cenę — zawsze przed realizacją, bez niespodzianek." },
              { step: "03", title: "Realizacja", desc: "Wykonuję usługę starannie i w ustalonym terminie." },
              { step: "04", title: "Odbiór z gwarancją rozruchową", desc: "Odbierasz działający sprzęt z gwarancją." },
            ].map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.1}>
                <div className="flex gap-6 py-6 border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <div className="text-3xl font-bold text-violet-200 dark:text-violet-900 select-none w-12 flex-shrink-0">{item.step}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
