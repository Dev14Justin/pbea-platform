"use server";

import { z } from "zod";

const contactSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const email = formData.get("email");
  const message = formData.get("message");

  const result = contactSchema.safeParse({ email, message });

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  // Logic to send email would go here. For now, we just simulate success.
  console.log("Contact form submitted (Simulation):", { email: result.data.email, message: result.data.message });

  return { success: true, message: "Message envoyé avec succès (Simulation) !" };
}
