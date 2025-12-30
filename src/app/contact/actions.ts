"use server";

import prisma from "@/lib/prisma";
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

  try {
    await prisma.contactMessage.create({
      data: {
        email: result.data.email,
        message: result.data.message,
      },
    });
    return { success: true, message: "Message envoyé avec succès !" };
  } catch (error) {
    console.error("Error saving contact message:", error);
    return { success: false, message: "Une erreur est survenue." };
  }
}
