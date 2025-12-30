import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
           {/* Social links placeholders */}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Parlons Business en Agronomie. Tous droits réservés.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-sm text-gray-500">
             <Link href="/mentions-legales" className="hover:text-gray-900">Mentions Légales</Link>
             <Link href="/confidentialite" className="hover:text-gray-900">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
