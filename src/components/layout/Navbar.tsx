"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const mainLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Formations", href: "/formations" },
  { name: "Ressources", href: "/ressources" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <span className="text-3xl font-black tracking-tighter text-primary group-hover:scale-105 transition-transform duration-200">
                AgriBusiness-Lab
              </span>
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <div className="flex space-x-8 mr-4">
              {mainLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold transition-all duration-200",
                      isActive
                        ? "border-primary text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="bg-primary text-white hover:bg-primary/90 rounded-full px-7 py-2.5 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center text-sm"
            >
              Nous Contacter
            </Link>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200 animate-in slide-in-from-top duration-300">
          <div className="pt-2 pb-6 space-y-1 px-4">
            {mainLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-lg text-base font-semibold transition-colors duration-200",
                    isActive
                      ? "bg-primary/5 text-primary"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700",
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold inline-flex items-center justify-center text-center shadow-lg shadow-primary/10"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
