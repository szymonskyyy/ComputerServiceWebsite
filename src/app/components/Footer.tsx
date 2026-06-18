import { Link } from "react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "../../imports/unainow_logo_4x.png";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <ImageWithFallback
                src={logo}
                alt="umakeIT"
                className="h-10 w-auto object-contain rounded-xl"
              />
              <div>
                <div className="font-bold text-lg leading-tight text-white">umakeIT</div>
                <div className="text-xs text-gray-400 leading-tight">Serwis Komputerowy Wrocław</div>
              </div>
            </div>
            <p className="text-sm mb-4">
              Profesjonalny montaż i serwis komputerów stacjonarnych we Wrocławiu.
              Indywidualne podejście, uczciwe ceny, gwarancja rozruchowa.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Szybkie linki</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Strona główna" },
                { to: "/uslugi", label: "Usługi" },
                { to: "/o-nas", label: "O mnie" },
                { to: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-violet-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 flex-shrink-0 text-violet-400" />
                <span>Wrocław i okolice</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 flex-shrink-0 text-violet-400" />
                <a href="tel:+48532809383" className="hover:text-violet-400 transition-colors">
                  532 809 383
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 flex-shrink-0 text-violet-400" />
                <span>kontakt@umakei.pl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} umakeIT – Szymon Malek. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}