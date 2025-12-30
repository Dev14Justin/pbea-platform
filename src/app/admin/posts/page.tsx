import prisma from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { approvePost, deletePost } from "@/actions/admin";
import { Badge } from "@/components/ui/badge";

export default async function AdminPostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: { author: true },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Gestion des Articles</h1>

      <div className="space-y-4">
         {posts.map((post) => (
            <Card key={post.id}>
               <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex flex-col">
                     <CardTitle className="text-lg">{post.title}</CardTitle>
                     <p className="text-sm text-gray-500">Par {post.author.name} - {new Date(post.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div>
                     {post.published ? (
                        <Badge className="bg-green-500">Publié</Badge>
                     ) : (
                        <Badge variant="outline" className="text-orange-500 border-orange-500">En attente</Badge>
                     )}
                  </div>
               </CardHeader>
               <CardContent>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.content}</p>
                  <div className="flex space-x-2">
                     {!post.published && (
                        <form action={approvePost.bind(null, post.id)}>
                           <Button size="sm" className="bg-green-600 hover:bg-green-700">Valider</Button>
                        </form>
                     )}
                     <form action={deletePost.bind(null, post.id)}>
                        <Button size="sm" variant="destructive">Supprimer</Button>
                     </form>
                  </div>
               </CardContent>
            </Card>
         ))}
         {posts.length === 0 && <p>Aucun article.</p>}
      </div>
    </div>
  );
}
