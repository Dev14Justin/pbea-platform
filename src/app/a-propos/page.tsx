import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Eye, Landmark } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-32 bg-primary overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl mb-8 leading-none">
            AgriBusiness-Lab
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto">
            Parlons Business en Agronomie : La force motrice derrière la
            transformation durable de l&apos;agriculture au Togo.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] border border-gray-100">
              <Image
                src="/motion.jpg"
                alt="Notre vision en mouvement"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Design detail - solid background square behind image */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
          </div>

          <div className="space-y-16">
            <div className="flex gap-6">
              <div className="shrink-0 w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-primary">
                <Landmark className="w-7 h-7" />
              </div>
              <div>
                <span className="uppercase text-sm font-bold text-primary tracking-widest mb-2 block">
                  Notre Histoire
                </span>
                <h3 className="text-3xl font-black text-gray-900 tracking-tight mb-4">
                  L&apos;émergence d&apos;une vision
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Née d&apos;un constat simple : l&apos;agriculture togolaise
                  regorge de potentiel mais manque souvent de structuration
                  business. L&apos;AgriBusiness-Lab a été créé pour combler ce
                  fossé entre production brute et rentabilité économique réelle.
                  Nous transformons le travail acharné en réussite stratégique.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-primary">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <span className="uppercase text-sm font-bold text-primary tracking-widest mb-2 block">
                  Notre Mission
                </span>
                <h3 className="text-3xl font-black text-gray-900 tracking-tight mb-4">
                  Équiper le changement
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Nous nous donnons pour mission d&apos;équiper chaque
                  entrepreneur agricole avec les connaissances, les outils
                  décisionnels et le réseau nécessaires pour s&apos;imposer sur
                  le marché. Nous aidons les producteurs à mieux produire et
                  surtout, à mieux valoriser leur production.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-primary">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <span className="uppercase text-sm font-bold text-primary tracking-widest mb-2 block">
                  Notre Vision
                </span>
                <h3 className="text-3xl font-black text-gray-900 tracking-tight mb-4">
                  L&apos;excellence Ouest-Africaine
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Devenir la plateforme de référence absolue en Afrique de
                  l&apos;Ouest pour l&apos;entrepreneuriat agricole. Notre
                  ambition est de forger une nouvelle génération
                  d&apos;agri-preneurs prospères qui bâtissent une Afrique plus
                  forte.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <Link href="/contact">
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 py-8 text-xl font-black shadow-xl transition-all hover:scale-105 active:scale-95">
                  Rejoignez l&apos;aventure{" "}
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Simple grid of solid blocks */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tighter text-gray-900 sm:text-6xl mb-6">
              Nos Valeurs
            </h2>
            <div className="h-2 w-24 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Intégrité",
                desc: "La transparence totale dans toutes nos relations d'affaires et stratégies.",
              },
              {
                title: "Innovation",
                desc: "Adapter les technologies modernes aux réalités du terrain africain.",
              },
              {
                title: "Impact",
                desc: "Chaque action que nous entreprenons doit générer une valeur mesurable.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-4xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  {v.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
