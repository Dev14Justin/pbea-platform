"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createPost } from "@/actions/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const initialState = {
  success: false,
  message: "",
  errors: null as any,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" aria-disabled={pending}>
      {pending ? "Envoi en cours..." : "Soumettre pour validation"}
    </Button>
  );
}

export default function NewPostPage() {
  const [state, dispatch] = useFormState(createPost, initialState);

  if (state.success) {
    return (
      <div className="container-custom py-16 flex justify-center">
        <Card className="w-full max-w-2xl text-center p-8">
           <h2 className="text-2xl font-bold text-green-600 mb-4">Merci !</h2>
           <p className="text-gray-600 mb-6">{state.message}</p>
           <Link href="/blog">
             <Button variant="outline">Retour au blog</Button>
           </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="container-custom py-16 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Rédiger un nouvel article</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={dispatch} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="font-medium">Titre de l'article</label>
              <Input id="title" name="title" placeholder="Ex: Mon expérience avec le maïs bio" required />
              {state.errors?.title && <p className="text-red-500 text-sm">{state.errors.title}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="font-medium">Contenu</label>
              <textarea
                id="content"
                name="content"
                rows={10}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Racontez votre histoire..."
                required
              />
              {state.errors?.content && <p className="text-red-500 text-sm">{state.errors.content}</p>}
            </div>

             {state.message && !state.success && (
                <div className="text-red-500 text-sm">{state.message}</div>
              )}

            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
