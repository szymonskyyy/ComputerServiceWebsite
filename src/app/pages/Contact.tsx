import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
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

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Tworzenie mailto link z danymi z formularza
    const subject = encodeURIComponent(`Kontakt od ${formData.name}`);
    const body = encodeURIComponent(
      `Imię i nazwisko: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefon: ${formData.phone || 'Nie podano'}\n\n` +
      `Wiadomość:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:unainow.help@gmail.com?subject=${subject}&body=${body}`;
    
    // Otwarcie domyślnego klienta email
    window.location.href = mailtoLink;
    
    // Czyszczenie formularza po krótkiej chwili (dajemy czas na otwarcie klienta email)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, title: "Telefon", content: "532 809 383", link: "tel:+48532809383" },
    { icon: Mail, title: "Email", content: "unainow.help@gmail.com", link: "mailto:unainow.help@gmail.com" },
    { icon: MapPin, title: "Lokalizacja", content: "Wrocław i okolice", link: null },
    { icon: Clock, title: "Dostępność", content: "Pon–Sob, popołudniami i weekendy", link: null },
  ];

  return (
    <div className="overflow-x-hidden">
      <section className="bg-gradient-to-br from-violet-600 to-violet-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <p className="text-violet-300 uppercase tracking-widest text-sm mb-3">Napisz do mnie</p>
            <h1 className="text-5xl md:text-6xl mb-4">Kontakt</h1>
            <p className="text-xl text-violet-100 max-w-xl">Chętnie odpowiem na pytania, doradzę i wycenię zlecenie</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeUp className="lg:col-span-1">
              <h2 className="text-2xl mb-6">Dane kontaktowe</h2>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="size-10 bg-violet-100 dark:bg-violet-900/40 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="size-5 text-violet-600 dark:text-violet-400" />
                        </div>
                        <CardTitle className="text-base">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {info.link ? (
                        <a href={info.link} className="text-violet-600 dark:text-violet-400 hover:underline">{info.content}</a>
                      ) : (
                        <p className="text-gray-700 dark:text-gray-300">{info.content}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Formularz kontaktowy</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name">Imię i nazwisko *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Jan Kowalski" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="jan@example.com" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefon</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="np. 532 809 383" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Wiadomość *</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Opisz co potrzebujesz..." rows={6} />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                    </Button>
                    <p className="text-sm text-gray-600 dark:text-gray-400">* Pola wymagane. Dane nie będą udostępniane osobom trzecim.</p>
                  </form>
                </CardContent>
              </Card>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeUp className="mb-10 text-center"><h2 className="text-3xl">Często zadawane pytania</h2></FadeUp>
          <div className="space-y-4">
            {[
              { q: "Ile trwa montaż komputera?", a: "Standardowo 1–2 dni robocze. Przed realizacją ustawimy konkretny termin." },
              { q: "Co to jest gwarancja rozruchowa?", a: "Każdy zmontowany komputer musi działać od pierwszego włączenia. Jeśli pojawi się problem z montażu, naprawię go bezpłatnie. Do tego montaż objęty jest 12-miesięczną gwarancją." },
              { q: "Czy mogę dostarczyć własne podzespoły?", a: "Oczywiście! Możesz dostarczyć własne komponenty lub poprosić mnie o pomoc w doborze i zakupie." },
              { q: "Czy dojeżdżasz do klienta?", a: "W niektórych przypadkach tak — skontaktuj się, żebyśmy omówili szczegóły." },
              { q: "Jakie formy płatności akceptujesz?", a: "Gotówka lub przelew bankowy. Płatność po wykonaniu usługi." },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <Card>
                  <CardHeader><CardTitle className="text-lg">{item.q}</CardTitle></CardHeader>
                  <CardContent><p className="text-gray-700 dark:text-gray-300">{item.a}</p></CardContent>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}