import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { MOCK_POSTS } from "@/constants/blog";

export default async function BlogPage() {
  const posts = MOCK_POSTS;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-32 bg-primary overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl mb-8 leading-none">
            Intelligence Agricole
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto">
            Analyses, conseils et innovations pour transformer le secteur
            agricole en Afrique.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="group flex flex-col bg-gray-50 border-none rounded-[2 rem] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="block relative aspect-16/10 overflow-hidden"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 bg-white/95 backdrop-blur-sm text-primary text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </Link>

                <CardHeader className="p-8 pb-0">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5 text-primary">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.createdAt).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-black text-gray-900 tracking-tight leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[4rem]">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-8 grow">
                  <p className="text-gray-600 font-medium leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-black text-gray-900 leading-none mb-1">
                        {post.author.name}
                      </p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-8 pt-0">
                  <Link href={`/blog/${post.id}`} className="w-full">
                    <span className="flex items-center justify-between w-full text-primary font-black uppercase tracking-widest text-sm group/btn">
                      Lire l&apos;article
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </span>
                  </Link>
                </CardFooter>
              </Card>
            ))}

            {posts.length === 0 && (
              <div className="col-span-full text-center text-gray-400 py-20 border-2 border-dashed border-gray-100 rounded-[3rem]">
                <p className="text-xl font-bold italic">
                  Aucun article publié pour le moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
