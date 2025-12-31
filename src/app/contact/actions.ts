"use server";

import { z } from "zod";

const contactSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const message = formData.get("message");

  const result = contactSchema.safeParse({ email, message });

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  // Pure frontend mode: log the message and return success
  console.log("Contact form submitted (Frontend Mode):", result.data);
  
  return { success: true, message: "Message envoyé avec succès ! (Mode démo)" };
}
