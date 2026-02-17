"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { BookOpen, MapPin, Clock } from "lucide-react";

interface ProductListProps {
  type: "FORMATION" | "GUIDE";
  title: string;
  description: string;
}

import { MOCK_PRODUCTS } from "@/constants/products";

export function ProductList({ type, title, description }: ProductListProps) {
  const products = MOCK_PRODUCTS[type as keyof typeof MOCK_PRODUCTS] || [];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header for List */}
      <section className="relative py-20 lg:py-32 bg-primary overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl mb-8 leading-none">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 font-medium leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          {products.length === 0 ? (
            <div className="text-center text-gray-400 py-20 border-2 border-dashed border-gray-100 rounded-[3rem]">
              <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-20" />
              <p className="text-xl font-bold italic">
                Aucune ressource disponible pour le moment.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group flex flex-col bg-gray-50 border-none rounded-[2 rem] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-5 py-2 bg-white/95 backdrop-blur-sm text-primary text-xs font-black uppercase tracking-widest rounded-full shadow-lg">
                        {type === "FORMATION" ? "Workshop" : "E-Book"}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="p-8 pb-0">
                    <CardTitle className="text-2xl font-black text-gray-900 tracking-tight leading-tight group-hover:text-primary transition-colors">
                      {product.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-8 grow">
                    <p className="text-gray-600 font-medium leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </CardContent>

                  <CardFooter className="p-8 pt-0">
                    <WhatsAppButton productTitle={product.title} />
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
