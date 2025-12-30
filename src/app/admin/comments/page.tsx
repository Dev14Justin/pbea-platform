import prisma from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { deleteComment } from "@/actions/admin";
import Link from "next/link";

export default async function AdminCommentsPage() {
  const comments = await prisma.comment.findMany({
    orderBy: { createdAt: "desc" },
    include: { author: true, post: true },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Modération des Commentaires</h1>

      <div className="space-y-4">
         {comments.map((comment) => (
            <Card key={comment.id}>
               <CardContent className="pt-6">
                  <div className="flex justify-between">
                     <div>
                        <p className="font-semibold text-sm">{comment.author.name}</p>
                        <p className="text-xs text-gray-400">Sur l'article : <Link href={`/blog/${comment.postId}`} className="underline">{comment.post.title}</Link></p>
                     </div>
                     <span className="text-xs text-gray-400">{new Date(comment.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="mt-2 text-gray-700">{comment.content}</p>
                  <div className="mt-4 flex justify-end">
                     <form action={deleteComment.bind(null, comment.id)}>
                        <Button size="sm" variant="destructive">Supprimer</Button>
                     </form>
                  </div>
               </CardContent>
            </Card>
         ))}
         {comments.length === 0 && <p>Aucun commentaire.</p>}
      </div>
    </div>
  );
}
