import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Award, CheckCircle, ThumbsUp, Cpu, Phone } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import profilePhoto from "../../imports/IMG_3831.jpg";
import cablePhoto from "../../imports/IMG_0285.jpg";
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

export function About() {
  useEffect(() => {
    document.title = "O mnie – Szymon Malek | umakeIT Serwis Komputerowy Wrocław";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Szymon Malek – założyciel umakeIT. Montuję komputery i serwisuje sprzęt we Wrocławiu z pasją i uczciwością. Indywidualne podejście do każdego zlecenia.");
  }, []);

  const values = [
    { icon: ThumbsUp, title: "Szczerość", description: "Mówię wprost, co można naprawić, co wymienić i ile to kosztuje. Bez naciągania." },
    { icon: Award, title: "Gwarancja rozruchowa", description: "Każdy zmontowany komputer musi działać od pierwszego włączenia — inaczej naprawiam bezpłatnie." },
    { icon: Cpu, title: "Pasja do sprzętu", description: "Komputery to moje hobby od lat. Do każdego zlecenia podchodzę tak, jakby to był mój własny PC." },
  ];


  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-600 to-violet-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <p className="text-violet-300 uppercase tracking-widest text-sm mb-3">Poznajmy się</p>
            <h1 className="text-5xl md:text-6xl mb-4">O mnie</h1>
            <p className="text-xl text-violet-100 max-w-2xl">Student, pasjonat technologii i człowiek, który od lat składa komputery</p>
          </motion.div>
        </div>
      </section>

      {/* Profile + Bio */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start mb-14">
              <FadeUp className="w-full md:w-72 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback src={profilePhoto} alt="Szymon Malek" className="w-full h-auto object-cover" loading="lazy" />
                </div>
                <div className="mt-5 text-center">
                  <p className="font-bold text-gray-900 dark:text-white text-xl">Szymon Malek</p>
                  <p className="text-sm text-violet-600 dark:text-violet-400 mt-1">Założyciel · Montażysta · Student</p>
                  <a href="tel:+48532809383" className="inline-flex items-center gap-2 mt-3 text-sm text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    <Phone className="size-4" />
                    532 809 383
                  </a>
                </div>
              </FadeUp>

              <FadeUp delay={0.15} className="flex-1 space-y-5 text-gray-700 dark:text-gray-300">
                <h2 className="text-3xl text-gray-900 dark:text-white">Cześć, jestem Szymon!</h2>
                <p>
                  Jestem studentem i pasjonatem sprzętu komputerowego. Zaczynałem od składania własnych
                  komputerów, potem pomagałem znajomym — i tak się to wszystko zaczęło. umakeIT to mój
                  pomysł na robienie czegoś, co naprawdę lubię, i jednoczesne pomaganie innym.
                </p>
                <p>
                  Nie jestem korporacją ani dużym serwisem. Jestem jedną osobą, która wie, co robi
                  i traktuje każde zlecenie poważnie. Dobiorę podzespoły pod Twój budżet, złożę
                  komputer starannie i upewnię się, że wszystko działa — zanim go odbierzesz.
                </p>
                <p>
                  Działam z Wrocławia, docieram też do okolic. Ceny są uczciwe, a komunikacja bezpośrednia —
                  żadnych ukrytych kosztów i firmowego żargonu.
                </p>
              </FadeUp>
            </div>

            <FadeUp>
              <Card className="border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-950/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-violet-900 dark:text-violet-300 text-lg mb-1">Gwarancja rozruchowa</h3>
                      <p className="text-violet-800 dark:text-violet-200 text-sm leading-relaxed">
                        Każdy zmontowany komputer przechodzi testy przed wydaniem. Jeżeli po uruchomieniu
                        pojawi się jakikolwiek problem wynikający z montażu, <strong>naprawię go bezpłatnie</strong>.
                        Twój sprzęt musi działać bez zarzutu od pierwszego włączenia — to moja obietnica.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeUp className="mb-12"><h2 className="text-3xl text-gray-900 dark:text-white">Moje podejście</h2></FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="size-12 bg-violet-100 dark:bg-violet-900/40 rounded-lg flex items-center justify-center mb-3">
                      <v.icon className="size-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <CardTitle className="text-xl">{v.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{v.description}</p>
                  </CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Cable management */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <FadeUp className="w-full md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={cablePhoto}
                  alt="Cable management – umakeIT"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="w-full md:w-1/2 space-y-4">
              <p className="text-violet-600 dark:text-violet-400 uppercase tracking-widest text-sm">Dbałość o detale</p>
              <h2 className="text-3xl text-gray-900 dark:text-white">Pedant w kwestii okablowania</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Osobiście jestem pedantem, jeśli chodzi o cable management. Każdy kabel ma swoje miejsce —
                prowadzę je przez tylną ściankę obudowy, spinam opaskami i dbam o to, żeby wnętrze
                komputera wyglądało tak samo dobrze, jak działa.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Schludne okablowanie to nie tylko estetyka — to też lepszy przepływ powietrza,
                niższe temperatury i łatwiejszy serwis w przyszłości. Zawsze staram się
                o jak najczystsze rozwiązania.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why me */}
      <section className="py-20 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeUp className="mb-8"><h2 className="text-3xl">Dlaczego warto?</h2></FadeUp>
          <FadeUp delay={0.1}>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {[
                    { title: "Gwarancja rozruchowa", desc: "Komputer musi działać od pierwszego włączenia" },
                    { title: "Uczciwa wycena", desc: "Pełna przejrzystość kosztów — bez niespodzianek" },
                    { title: "Szybka realizacja", desc: "Większość zleceń w ciągu 24–48 godzin" },
                    { title: "Indywidualne podejście", desc: "Nie sprzedaję gotowych zestawów — słucham i doradzam" },
                    { title: "Bezpośredni kontakt", desc: "Rozmawiasz z osobą, która faktycznie wykonuje pracę" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-violet-500 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300"><strong>{item.title}:</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}