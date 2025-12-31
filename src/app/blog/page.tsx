import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const MOCK_POSTS = [
  {
    id: "1",
    title: "Comment booster sa production de manioc",
    content:
      "Le manioc est une culture résiliente mais qui nécessite des soins spécifiques pour atteindre son plein potentiel de rendement...",
    author: { name: "Jessica" },
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Le business de l'ananas au Togo",
    content:
      "L'exportation d'ananas est une opportunité croissante. Voici comment structurer votre exploitation pour l'export...",
    author: { name: "Jean Kouassi" },
    createdAt: new Date().toISOString(),
  },
];

export default async function BlogPage() {
  const posts = MOCK_POSTS;

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">
              Le Blog Agricole
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Partagez vos expériences et découvrez celles des autres.
            </p>
          </div>
          <Link href="/blog/nouveau">
            <Button>Publier un article</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="line-clamp-2">
                  <Link
                    href={`/blog/${post.id}`}
                    className="hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-sm text-gray-500">
                  Par {post.author.name || "Anonyme"}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3">{post.content}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary font-medium hover:underline"
                >
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
