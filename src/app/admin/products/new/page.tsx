"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createProduct } from "@/actions/admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" aria-disabled={pending}>
      {pending ? "Création..." : "Créer le produit"}
    </Button>
  );
}

export default function NewProductPage() {
  const [state, dispatch] = useFormState(createProduct, { success: false, message: "" });

  return (
    <div className="max-w-2xl mx-auto">
      <Link href="/admin/products" className="flex items-center text-gray-500 mb-6 hover:text-gray-900">
         <ArrowLeft className="mr-2 h-4 w-4" /> Retour
      </Link>
      
      <Card>
        <CardHeader>
          <CardTitle>Ajouter un Produit</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={dispatch} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Titre</label>
              <Input name="title" required placeholder="Titre de la formation/guide" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Type</label>
              <select name="type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                 <option value="FORMATION">Formation</option>
                 <option value="GUIDE">Guide / Ebook</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Prix (FCFA)</label>
              <Input name="price" type="number" required placeholder="15000" />
            </div>

            <div>
               <label className="block text-sm font-medium mb-1">Description</label>
               <textarea 
                  name="description" 
                  rows={4} 
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
               />
            </div>
            
            {state.message && (
               <p className={state.success ? "text-green-600" : "text-red-600"}>{state.message}</p>
            )}

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
