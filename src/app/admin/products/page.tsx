import prisma from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/actions/admin";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
         <h1 className="text-3xl font-bold text-gray-800">Gestion des Produits</h1>
         <Link href="/admin/products/new">
            <Button>
               <Plus className="mr-2 h-4 w-4" /> Ajouter
            </Button>
         </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {products.map((product) => (
            <Card key={product.id}>
               <CardHeader>
                  <CardTitle className="text-lg flex justify-between">
                     <span className="truncate">{product.title}</span>
                  </CardTitle>
                  <Badge variant="outline">{product.type}</Badge>
               </CardHeader>
               <CardContent>
                  <p className="text-sm text-gray-600 mb-2 h-10 overflow-hidden">{product.description}</p>
                  <p className="font-bold">{product.price} FCFA</p>
                  <div className="mt-4 flex justify-end">
                     <form action={deleteProduct.bind(null, product.id)}>
                        <Button size="sm" variant="destructive">Supprimer</Button>
                     </form>
                  </div>
               </CardContent>
            </Card>
         ))}
         {products.length === 0 && <p>Aucun produit.</p>}
      </div>
    </div>
  );
}
