import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Leaf, Users } from "lucide-react";
import { mockProducts } from "@/lib/mock-data";

export default async function Home() {
  const featuredProducts = mockProducts.slice(0, 3);

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
              Transformez votre agriculture en une activité rentable. Conseils, formations et réseau pour les acteurs agricoles au Togo.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link href="/formations">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Nos Formations
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                  Lire le Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Notre Mission
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Accompagner les agriculteurs vers la réussite économique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-green-50">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Mieux Produire</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Accédez à des guides techniques et des formations pour optimiser vos rendements agricoles durablement.
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-green-50">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Réseau Participatif</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Rejoignez une communauté d'agriculteurs, partagez vos expériences et trouvez des opportunités.
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-green-50">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Mieux Vendre</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Apprenez les stratégies business pour valoriser vos produits et augmenter vos revenus.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
           <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Dernières Ressources</h2>
                <p className="mt-2 text-gray-500">Nos guides et formations les plus récents.</p>
              </div>
              <Link href="/ressources" className="hidden sm:flex items-center text-primary hover:text-primary/80 font-medium">
                Voir tout <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id}>
                  <div className="h-48 bg-gray-200 w-full object-cover rounded-t-lg flex items-center justify-center text-gray-400">
                     {product.type === 'FORMATION' ? 'Formation' : 'Guide'}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                    <CardDescription>{product.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <p className="text-sm text-gray-600 line-clamp-3">
                       {product.description}
                     </p>
                     <p className="mt-4 font-bold text-primary">{product.price.toLocaleString("fr-FR")} FCFA</p>
                  </CardContent>
                </Card>
              ))}
           </div>
            <div className="mt-8 text-center sm:hidden">
              <Link href="/ressources" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                Voir tout <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
           </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary">
         <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Prêt à développer votre activité ?</h2>
            <p className="mt-4 text-xl text-primary-foreground/90 mb-8">
               Rejoignez notre communauté et accédez à des outils exclusifs.
            </p>
            <Link href="/contact">
               <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Nous Contacter
               </Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
