"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" aria-disabled={pending}>
      {pending ? "Connexion en cours..." : "Se connecter"}
    </Button>
  );
}

export default function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Connexion</CardTitle>
          <p className="text-center text-gray-500">Entrez vos identifiants pour accéder à votre compte</p>
        </CardHeader>
        <CardContent>
          <form action={dispatch} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input id="email" name="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
               <label htmlFor="password">Mot de passe</label>
              <Input id="password" name="password" type="password" required />
            </div>
            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}
            <LoginButton />
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-center text-sm text-gray-500">
           <p>
             Pas encore de compte ? <Link href="/register" className="text-primary hover:underline">S'inscrire</Link>
           </p>
        </CardFooter>
      </Card>
    </div>
  );
}
