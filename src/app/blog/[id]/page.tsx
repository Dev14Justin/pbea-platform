import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MOCK_POSTS } from "@/constants/blog";
import ReactMarkdown from "react-markdown";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = MOCK_POSTS.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Article Header */}
      <header className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gray-50">
        <div className="container-custom relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary font-black uppercase tracking-widest text-xs mb-12 hover:gap-3 transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour au blog
          </Link>

          <div className="max-w-4xl">
            <Badge className="bg-primary text-white mb-8 text-sm font-bold uppercase tracking-widest px-4 py-1.5 hover:bg-primary">
              {post.category}
            </Badge>
            <h1 className="text-4xl font-black tracking-tighter text-gray-900 sm:text-6xl lg:text-7xl mb-10 leading-none">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 py-8 border-y border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-black text-xl">
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
              <div className="h-10 w-px bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <Calendar className="w-4 h-4 text-primary" />
                  {new Date(post.createdAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <Clock className="w-4 h-4 text-primary" />
                  {post.readTime} de lecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container-custom -mt-12 lg:-mt-20 relative z-20">
        <div className="aspect-21/9 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <section className="py-20 lg:py-32">
        <div className="container-custom max-w-4xl">
          <div
            className="prose prose-xl prose-slate max-w-none 
            prose-headings:text-gray-900 prose-headings:font-black prose-headings:tracking-tight
            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-medium
            prose-strong:text-gray-900 prose-strong:font-black
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-[2rem] prose-img:shadow-xl
            prose-ul:list-disc prose-li:font-medium prose-li:text-gray-600
            prose-blockquote:border-l-primary prose-blockquote:bg-gray-50 prose-blockquote:p-8 prose-blockquote:rounded-r-3xl prose-blockquote:italic prose-blockquote:text-gray-700"
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-20 pt-12 border-t border-gray-100 flex items-center justify-between">
          </div>
        </div>
      </section>
    </div>
  );
}
