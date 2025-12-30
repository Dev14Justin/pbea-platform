"use client";

import { useFormState } from "react-dom";
import { submitContactForm } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const initialState = {
  success: false,
  message: "",
  errors: null as any,
};

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Contactez-nous</h1>
          <p className="mt-4 text-lg text-gray-500">
            Une question ? Un projet ? N'hésitez pas à nous écrire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
             <Card>
                <CardHeader>
                   <CardTitle className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-primary" /> Email
                   </CardTitle>
                </CardHeader>
                <CardContent>
                   <a href="mailto:contact@pbea.tg" className="text-gray-600 hover:text-primary">contact@pbea.tg</a>
                </CardContent>
             </Card>

             <Card>
                <CardHeader>
                   <CardTitle className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-primary" /> WhatsApp / Téléphone
                   </CardTitle>
                </CardHeader>
                <CardContent>
                   <Link 
                      href="https://wa.me/22890000000" 
                      target="_blank" 
                      className="text-gray-600 hover:text-primary block"
                    >
                      +228 90 00 00 00
                   </Link>
                </CardContent>
             </Card>

             <Card>
                <CardHeader>
                   <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-primary" /> Adresse
                   </CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-gray-600">Lomé, Togo</p>
                </CardContent>
             </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envoyez-nous un message</CardTitle>
            </CardHeader>
            <CardContent>
              {state.success ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-md">
                  {state.message}
                </div>
              ) : (
                <form action={formAction} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="votre@email.com" required />
                    {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea 
                       id="message" 
                       name="message" 
                       rows={4}
                       className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                       placeholder="Votre message..." 
                       required
                    />
                     {state.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>}
                  </div>

                  <Button type="submit" className="w-full">
                    Envoyer
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
