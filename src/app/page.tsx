import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BookOpen, Leaf, Users } from "lucide-react";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 lg:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Parlons Business en Agronomie
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Transformez votre agriculture en une activité rentable. Conseils,
              formations et réseau pour les acteurs agricoles au Togo.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/formations">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Nos Formations
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white"
                >
                  Lire le Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative background pattern could go here */}
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Notre Mission
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Nous accompagnons les agriculteurs vers une réussite économique
              durable à travers trois piliers fondamentaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl bg-gradient-to-br from-green-50 to-white hover:shadow-2xl transition-all duration-300">
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

            <Card className="border-none shadow-xl bg-gradient-to-br from-green-50 to-white hover:shadow-2xl transition-all duration-300">
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

            <Card className="border-none shadow-xl bg-gradient-to-br from-green-50 to-white hover:shadow-2xl transition-all duration-300">
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
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Projets Phares
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Découvrez nos initiatives et réalisations concrètes pour
              transformer le paysage agricole au Togo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Optimisation de la Filière Soja",
                category: "Développement",
                description:
                  "Accompagnement de 50 coopératives pour l'amélioration des rendements et la certification bio.",
                image:
                  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Digitalisation des Marchés Ruraux",
                category: "Technologie",
                description:
                  "Mise en place d'une plateforme de mise en relation directe entre producteurs et acheteurs urbains.",
                image:
                  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Irrigation Solaire au Nord Togo",
                category: "Infrastructure",
                description:
                  "Installation de systèmes de pompage solaire basse consommation pour les cultures de contre-saison.",
                image:
                  "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "École d'Entrepreneuriat Agricole",
                category: "Formation",
                description:
                  "Un programme intensif de 6 mois pour transformer les jeunes diplômés en agri-preneurs prospères.",
                image:
                  "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white transition-all hover:shadow-2xl border border-gray-100"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                  <span className="text-white bg-primary px-4 py-1.5 rounded-full text-xs font-bold w-fit mb-4 shadow-lg">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Resources */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Dernières Ressources
              </h2>
              <p className="mt-2 text-gray-500">
                Nos guides et formations les plus récents pour booster votre
                activité.
              </p>
            </div>
            <Link
              href="/ressources"
              className="hidden sm:flex items-center text-primary hover:text-primary/80 font-bold text-lg transition-colors"
            >
              Voir tout <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-100 overflow-hidden">
              <div className="h-52 bg-gray-100 w-full overflow-hidden flex items-center justify-center text-gray-400 relative">
                <img
                  src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=400&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Formation"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  Maîtriser la Culture du Maïs
                </CardTitle>
                <CardDescription className="font-semibold text-primary">
                  Formation Complète
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  Une formation complète pour optimiser vos rendements de maïs
                  avec des techniques modernes adaptées au Togo.
                </p>
                <p className="mt-6 text-2xl font-extrabold text-primary">
                  15 000 FCFA
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-100 overflow-hidden">
              <div className="h-52 bg-gray-100 w-full overflow-hidden flex items-center justify-center text-gray-400 relative">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=400&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Guide"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  Guide des Engrais Bio
                </CardTitle>
                <CardDescription className="font-semibold text-primary">
                  Guide Pratique
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  Découvrez comment fabriquer et utiliser des engrais naturels
                  pour réduire vos coûts de production.
                </p>
                <p className="mt-6 text-2xl font-extrabold text-primary">
                  5 000 FCFA
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center sm:hidden">
            <Link
              href="/ressources"
              className="inline-flex items-center text-primary hover:text-primary/80 font-bold"
            >
              Voir tout <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Pattern placeholder */}
        </div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold text-white sm:text-5xl mb-6">
            Prêt à développer votre activité ?
          </h2>
          <p className="mt-4 text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Rejoignez notre communauté d&apos;acteurs du changement et accédez à
            des outils exclusifs pour votre réussite.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 px-10 py-7 text-lg font-bold shadow-xl"
              >
                Nous Contacter
              </Button>
            </Link>
            <Link href="/register">
              <Button
                size="lg"
                variant="outline"
                className="text-primary border-white hover:bg-white/10 px-10 py-7 text-lg font-bold"
              >
                S&apos;inscrire gratuitement
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
