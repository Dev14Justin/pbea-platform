import { mockPosts } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { CommentForm } from "@/components/CommentForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = mockPosts.find(p => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container-custom max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-6">
           <ArrowLeft className="mr-2 h-4 w-4" /> Retour au blog
        </Link>
        
        <article className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="p-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-500 text-sm mb-8">
              <span>Par {post.author.name || "Anonyme"}</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.createdAt).toLocaleDateString("fr-FR")}</span>
            </div>
            <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
              {post.content}
            </div>
          </div>
        </article>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Commentaires ({post.comments.length})</h2>
          
             <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <p className="text-sm font-medium mb-2">Laissez un commentaire</p>
                <CommentForm postId={post.id} />
             </div>

          <div className="space-y-4">
            {post.comments.map((comment) => (
              <Card key={comment.id}>
                <CardHeader className="py-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm">{comment.author.name}</span>
                    <span className="text-xs text-gray-400">{new Date(comment.createdAt).toLocaleDateString("fr-FR")}</span>
                  </div>
                </CardHeader>
                <CardContent className="py-3 pt-0 text-sm text-gray-700">
                  {comment.content}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
