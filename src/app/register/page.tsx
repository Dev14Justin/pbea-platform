"use client";

import { useFormState, useFormStatus } from "react-dom";
import { register } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { redirect } from "next/navigation";

const initialState = {
  success: false,
  message: "",
  errors: null as any,
};

function RegisterButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" aria-disabled={pending}>
      {pending ? "Inscription en cours..." : "S'inscrire"}
    </Button>
  );
}

export default function RegisterPage() {
  const [state, dispatch] = useFormState(register, initialState);

  if (state.success) {
     // Redirect to login after successful registration or show success message with link
     // For better UX, let's show the success message.
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Inscription</CardTitle>
          <p className="text-center text-gray-500">Créez un compte pour participer au blog</p>
        </CardHeader>
        <CardContent>
          {state.success ? (
             <div className="text-center space-y-4">
                <p className="text-green-600 font-medium">{state.message}</p>
                <Link href="/login">
                   <Button className="w-full">Se connecter</Button>
                </Link>
             </div>
          ) : (
            <form action={dispatch} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name">Nom complet</label>
                <Input id="name" name="name" placeholder="Jean Dupont" required />
                {state.errors?.name && <p className="text-red-500 text-sm">{state.errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                {state.errors?.email && <p className="text-red-500 text-sm">{state.errors.email}</p>}
              </div>
              <div className="space-y-2">
                 <label htmlFor="password">Mot de passe</label>
                <Input id="password" name="password" type="password" required />
                {state.errors?.password && <p className="text-red-500 text-sm">{state.errors.password}</p>}
              </div>
              {state.message && !state.success && (
                <div className="text-red-500 text-sm">{state.message}</div>
              )}
              <RegisterButton />
            </form>
          )}
        </CardContent>
        {!state.success && (
            <CardFooter className="flex flex-col space-y-2 text-center text-sm text-gray-500">
               <p>
                 Déjà un compte ? <Link href="/login" className="text-primary hover:underline">Se connecter</Link>
               </p>
            </CardFooter>
        )}
      </Card>
    </div>
  );
}
