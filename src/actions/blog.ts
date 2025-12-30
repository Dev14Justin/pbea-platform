"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const postSchema = z.object({
  title: z.string().min(5, "Le titre doit contenir au moins 5 caractères"),
  content: z.string().min(20, "Le contenu doit contenir au moins 20 caractères"),
});

const commentSchema = z.object({
  content: z.string().min(2, "Le commentaire est trop court"),
  postId: z.string(),
});

export async function createPost(prevState: any, formData: FormData) {
  const session = await auth();
  if (!session || !session.user) {
    return { success: false, message: "Vous devez être connecté pour publier un article." };
  }

  const validatedFields = postSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, content } = validatedFields.data;

  try {
    // User role check could be here if we want to restrict creation, but requirement says "Participative Blog"
    // By default, published = false (requires moderation)
    await prisma.post.create({
      data: {
        title,
        content,
        authorId: session.user.id!,
        published: false, 
      },
    });
    
    revalidatePath("/blog");
    return { success: true, message: "Article soumis pour validation !" };
  } catch (error) {
    console.error("Create post error:", error);
    return { success: false, message: "Erreur lors de la création de l'article." };
  }
}

export async function createComment(prevState: any, formData: FormData) {
   const session = await auth();
   if (!session || !session.user) {
     return { success: false, message: "Vous devez être connecté pour commenter." };
   }

   const validatedFields = commentSchema.safeParse({
     content: formData.get("content"),
     postId: formData.get("postId"),
   });

   if (!validatedFields.success) {
     return { success: false, message: "Commentaire invalide." };
   }

   try {
     await prisma.comment.create({
       data: {
         content: validatedFields.data.content,
         postId: validatedFields.data.postId,
         authorId: session.user.id!,
       },
     });

     revalidatePath(`/blog/${validatedFields.data.postId}`);
     return { success: true, message: "Commentaire ajouté !" };
   } catch (error) {
     console.error("Comment error:", error);
     return { success: false, message: "Erreur lors de l'ajout du commentaire." };
   }
}
