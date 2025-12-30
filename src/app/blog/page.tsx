import Link from "next/link";
import prisma from "@/lib/prisma";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";

export default async function BlogPage() {
  const session = await auth();
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">Le Blog Agricole</h1>
            <p className="mt-4 text-lg text-gray-500">
              Partagez vos expériences et découvrez celles des autres.
            </p>
          </div>
          {session ? (
            <Link href="/blog/nouveau">
              <Button>Publier un article</Button>
            </Link>
          ) : (
            <Link href="/login">
               <Button variant="outline">Connectez-vous pour publier</Button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="line-clamp-2">
                   <Link href={`/blog/${post.id}`} className="hover:text-primary">
                      {post.title}
                   </Link>
                </CardTitle>
                <p className="text-sm text-gray-500">Par {post.author.name || "Anonyme"}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3">{post.content}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.id}`} className="text-primary font-medium hover:underline">
                  Lire la suite
                </Link>
              </CardFooter>
            </Card>
          ))}
          {posts.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-12">
              Aucun article publié pour le moment. Soyez le premier !
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
