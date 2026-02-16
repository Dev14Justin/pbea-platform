import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-16">
          {/* Brand and Description */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="inline-block group">
              <span className="text-3xl font-black tracking-tighter text-primary group-hover:opacity-80 transition-opacity">
                PBEA
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Parlons Business en Agronomie. La plateforme leader au Togo pour
              transformer votre agriculture en une activité rentable et durable.
            </p>
            <div className="flex items-center gap-5 pt-2">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="p-2 rounded-full bg-gray-50 text-gray-400 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-sm font-bold text-gray-900 tracking-widest uppercase">
              Plateforme
            </h3>
            <ul className="flex flex-col space-y-4">
              {[
                { name: "Accueil", href: "/" },
                { name: "Nos Formations", href: "/formations" },
                { name: "Guides & Ressources", href: "/ressources" },
                { name: "Blog Agricole", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Support */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-sm font-bold text-gray-900 tracking-widest uppercase">
              Entreprise
            </h3>
            <ul className="flex flex-col space-y-4">
              {[
                { name: "À propos de nous", href: "/a-propos" },
                { name: "Contact", href: "/contact" },
                { name: "Mentions Légales", href: "#" },
                { name: "Confidentialité", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-sm font-bold text-gray-900 tracking-widest uppercase">
              Contact
            </h3>
            <ul className="flex flex-col space-y-5">
              <li className="flex items-center group">
                <div className="p-2.5 rounded-xl bg-green-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  contact@pbea.tg
                </span>
              </li>
              <li className="flex items-center group">
                <div className="p-2.5 rounded-xl bg-green-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  +228 90 52 39 99
                </span>
              </li>
              <li className="flex items-center group">
                <div className="p-2.5 rounded-xl bg-green-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  Lomé, Togo
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p
            className="text-sm text-gray-400 font-medium"
            suppressHydrationWarning
          >
            &copy; {currentYear} Parlons Business en Agronomie. Tous droits
            réservés.
          </p>
          <div className="flex items-center gap-8">
            <p className="text-xs text-gray-300 font-medium tracking-tight">
              DESIGNED FOR IMPACT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
