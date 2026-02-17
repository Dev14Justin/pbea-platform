import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MOCK_PRODUCTS } from "@/constants/products";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowRight, BookOpen, Leaf, Users } from "lucide-react";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center py-16 lg:py-24 overflow-hidden bg-gray-900">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/farmer.jpg"
            alt="Agriculture Business Togo"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Solid Overlays */}
          <div className="absolute inset-0 bg-primary/40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl leading-none mb-4">
              AgriBusiness-Lab
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90 tracking-tight mb-10">
              Parlons Business en Agronomie
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto font-medium leading-relaxed mb-12">
              Transformez votre agriculture en une activité rentable. Bénéficiez
              de conseils stratégiques, de formations immersives et d'un réseau
              solide pour les acteurs agricoles au Togo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/formations">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 border-none rounded-full px-10 py-7 text-lg font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Nos Formations
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary rounded-full px-10 py-7 text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Lire le Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-black tracking-tighter text-gray-900 sm:text-6xl mb-6">
              Notre Mission
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Nous propulsons les agriculteurs vers une réussite économique
              durable en nous appuyant sur trois piliers stratégiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl bg-green-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-2xl w-fit mb-6 shadow-inner">
                  <Leaf className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Mieux Produire
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600 leading-relaxed px-6 pb-8">
                Accédez à des guides techniques et des formations pour optimiser
                vos rendements agricoles durablement avec des méthodes adaptées.
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-green-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-2xl w-fit mb-6 shadow-inner">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Réseau Participatif
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600 leading-relaxed px-6 pb-8">
                Rejoignez une communauté d&apos;agriculteurs engagés, partagez
                vos expériences et trouvez de nouvelles opportunités de
                croissance.
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-green-50 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-4 rounded-2xl w-fit mb-6 shadow-inner">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Mieux Vendre
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600 leading-relaxed px-6 pb-8">
                Apprenez les stratégies business avancées pour valoriser vos
                produits sur le marché et augmenter significativement vos
                revenus.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projets Phares */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
                Nos Projets Phares
              </h2>
              <p className="mt-6 text-xl text-gray-500 leading-relaxed">
                Découvrez les initiatives stratégiques sur lesquelles nous
                travaillons actuellement pour révolutionner l'agribusiness au
                Togo.
              </p>
            </div>
            <Link href="/contact">
              <span className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all cursor-pointer">
                Soutenir un projet <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Optimisation de la Filière Soja",
                category: "Développement",
                description:
                  "Nous accompagnons des coopératives pour l'amélioration des rendements et la certification bio.",
                image: "/pexels-fatima-yusuf.jpg",
              },
              {
                title: "Optimisation de la Filières Arachide et Maïs",
                category: "Optimisation",
                description:
                  "Étude technique pour l'optimisation des chaînes de valeur de l'arachide et du maïs au niveau national.",
                image: "/pexels-mvdheuvel.jpg",
              },
              {
                title: "Digitalisation des Marchés Ruraux",
                category: "Technologie",
                description:
                  "Concevoir des plateformes de mise en relation directe entre producteurs et acheteurs urbains.",
                image:
                  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "École d'Entrepreneuriat Agricole",
                category: "Formation",
                description:
                  "Nous élaborons un programme complet de formations pour transformer les jeunes diplômés en agri-preneurs prospères.",
                image: "/pexels-omotayo-tajudeen.jpg",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group flex flex-col bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white text-primary text-xs font-black uppercase tracking-wider rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 grow">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Resources */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
                Formations & Guides
              </h2>
              <p className="mt-6 text-xl text-gray-500 leading-relaxed font-medium">
                Accédez aux outils stratégiques et aux connaissances pratiques
                pour transformer votre exploitation en une véritable entreprise
                rentable.
              </p>
            </div>
            <Link href="/ressources">
              <span className="inline-flex items-center text-primary font-black uppercase tracking-widest text-sm hover:gap-3 transition-all cursor-pointer">
                Voir tout{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[...MOCK_PRODUCTS.FORMATION, ...MOCK_PRODUCTS.GUIDE]
              .slice(0, 3)
              .map((product) => (
                <Card
                  key={product.id}
                  className="group flex flex-col bg-white border-none rounded-[2 rem] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-5 py-2 bg-white/95 backdrop-blur-sm text-primary text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                        {product.type === "FORMATION" ? "Workshop" : "E-Book"}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="p-8 pb-0">
                    <CardTitle className="text-2xl font-black text-gray-900 tracking-tight leading-tight group-hover:text-primary transition-colors min-h-16 line-clamp-2">
                      {product.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-8 grow">
                    <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </CardContent>

                  <CardFooter className="p-8 pt-0">
                    <WhatsAppButton productTitle={product.title} />
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-900">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/pexels-matthiaszomer.jpg"
            alt="Business Agronomie Togo"
            fill
            className="object-cover opacity-50"
          />
          {/* Solid Overlays */}
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-8 leading-tight">
            Prêt à transformer votre <br className="hidden md:block" /> activité
            agricole ?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Rejoignez l&apos;AgriBusiness-Lab et accédez aux outils stratégiques
            nécessaires pour faire passer votre exploitation au niveau
            supérieur.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 rounded-full px-12 py-8 text-xl font-black shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Commencer Maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
