import Link from "next/link";
import { mockPosts } from "@/lib/mock-data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function BlogPage() {
  const posts = mockPosts.filter(p => p.published).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

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
          {/* Always allow publishing in this demo version, or just link to the new post page */}
          <Link href="/blog/nouveau">
            <Button>Publier un article</Button>
          </Link>
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
