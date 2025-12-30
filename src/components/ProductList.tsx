import prisma from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";

interface ProductListProps {
  type: "FORMATION" | "GUIDE";
  title: string;
  description: string;
}

export async function ProductList({ type, title, description }: ProductListProps) {
  const products = await prisma.product.findMany({
    where: {
      type: type,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>
          <p className="mt-4 text-lg text-gray-500">{description}</p>
        </div>

        {products.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            Aucun produit disponible pour le moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col">
                <div className="h-48 bg-gray-200 rounded-t-lg flex items-center justify-center text-gray-400">
                   {/* Placeholder Image Logic could go here */}
                   {type === 'FORMATION' ? 'Formation Image' : 'Guide Image'}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="line-clamp-2 min-h-[3.5rem]">{product.title}</CardTitle>
                  </div>
                    <Badge variant="secondary" className="w-fit mt-2">
                       {type === 'FORMATION' ? 'Formation' : 'Guide / Ebook'}
                    </Badge>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 line-clamp-4">{product.description}</p>
                  <p className="mt-4 text-2xl font-bold text-primary">
                    {product.price.toLocaleString("fr-FR")} FCFA
                  </p>
                </CardContent>
                <CardFooter>
                  <WhatsAppButton productTitle={product.title} price={product.price} />
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
