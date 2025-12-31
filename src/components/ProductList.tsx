import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";

interface ProductListProps {
  type: "FORMATION" | "GUIDE";
  title: string;
  description: string;
}

const MOCK_PRODUCTS = {
  FORMATION: [
    {
      id: "1",
      title: "Maîtriser la Culture du Maïs",
      description:
        "Une formation complète pour optimiser vos rendements de maïs avec des techniques modernes adaptées au Togo.",
      price: 15000,
      type: "FORMATION",
    },
    {
      id: "2",
      title: "Gestion Financière Agricole",
      description:
        "Apprenez à gérer les finances de votre exploitation pour assurer sa rentabilité à long terme.",
      price: 25000,
      type: "FORMATION",
    },
  ],
  GUIDE: [
    {
      id: "3",
      title: "Guide des Engrais Bio",
      description:
        "Découvrez comment fabriquer et utiliser des engrais naturels pour réduire vos coûts.",
      price: 5000,
      type: "GUIDE",
    },
    {
      id: "4",
      title: "Réussir son Élevage de Poulets",
      description:
        "Les bases essentielles pour lancer et réussir un élevage de poulets de chair au Togo.",
      price: 7500,
      type: "GUIDE",
    },
  ],
};

export async function ProductList({
  type,
  title,
  description,
}: ProductListProps) {
  const products = MOCK_PRODUCTS[type as keyof typeof MOCK_PRODUCTS] || [];

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
                  {type === "FORMATION" ? "Formation Image" : "Guide Image"}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="line-clamp-2 min-h-14">
                      {product.title}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary" className="w-fit mt-2">
                    {type === "FORMATION" ? "Formation" : "Guide / Ebook"}
                  </Badge>
                </CardHeader>
                <CardContent className="grow">
                  <p className="text-gray-600 line-clamp-4">
                    {product.description}
                  </p>
                  <p className="mt-4 text-2xl font-bold text-primary">
                    {product.price.toLocaleString("fr-FR")} FCFA
                  </p>
                </CardContent>
                <CardFooter>
                  <WhatsAppButton
                    productTitle={product.title}
                    price={product.price}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
