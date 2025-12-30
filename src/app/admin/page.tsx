import prisma from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, ShoppingBag, MessageCircle } from "lucide-react";

export default async function AdminDashboard() {
  const [userCount, postCount, productCount, messageCount] = await Promise.all([
     prisma.user.count(),
     prisma.post.count(),
     prisma.product.count(),
     prisma.contactMessage.count({ where: { read: false } })
  ]);

  return (
    <div>
       <h1 className="text-3xl font-bold mb-8 text-gray-800">Tableau de bord</h1>
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
             </CardHeader>
             <CardContent>
                <div className="text-2xl font-bold">{userCount}</div>
             </CardContent>
          </Card>
          
          <Card>
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Articles</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
             </CardHeader>
             <CardContent>
                <div className="text-2xl font-bold">{postCount}</div>
             </CardContent>
          </Card>

          <Card>
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Produits</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
             </CardHeader>
             <CardContent>
                <div className="text-2xl font-bold">{productCount}</div>
             </CardContent>
          </Card>

          <Card>
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Messages non lus</CardTitle>
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
             </CardHeader>
             <CardContent>
                <div className="text-2xl font-bold">{messageCount}</div>
             </CardContent>
          </Card>
       </div>
    </div>
  );
}
