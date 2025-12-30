import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="container-custom py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            À propos de PBEA
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Parlons Business en Agronomie : Transformer l'agriculture en activité rentable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
               {/* Placeholder for About Image */}
               <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100 min-h-[300px]">
                  Image Institutionnelle
               </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Notre Histoire</h2>
              <p className="mt-2 text-lg text-gray-600">
                Née d'un constat simple : l'agriculture togolaise regorge de potentiel mais manque souvent de structuration business. PBEA a été créé pour combler ce fossé entre production brute et rentabilité économique.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Notre Mission</h2>
              <p className="mt-2 text-lg text-gray-600">
                Nous nous donnons pour mission d'équiper chaque acteur agricole avec les connaissances, les outils et le réseau nécessaires pour réussir. Que vous soyez débutant ou expérimenté, nous voulons vous aider à mieux produire et mieux vendre.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Notre Vision</h2>
              <p className="mt-2 text-lg text-gray-600">
                Devenir la plateforme de référence en Afrique de l'Ouest pour l'entrepreneuriat agricole, en favorisant une agriculture durable, moderne et lucrative.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/contact">
                <Button>Contactez-nous</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
