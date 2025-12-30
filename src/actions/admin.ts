"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// --- Post Actions ---

export async function approvePost(id: string) {
  await prisma.post.update({
    where: { id },
    data: { published: true },
  });
  revalidatePath("/admin/posts");
  revalidatePath("/blog");
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: { id },
  });
  revalidatePath("/admin/posts");
  revalidatePath("/blog");
}

// --- Comment Actions ---

export async function deleteComment(id: string) {
  await prisma.comment.delete({
    where: { id },
  });
  revalidatePath("/admin/comments");
  // We might not know the post ID easily here to revalidate the specific blog post page without fetching, 
  // but usually admin just needs the list updated.
}

// --- Product Actions ---

export async function createProduct(prevState: any, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const type = formData.get("type") as string;

  try {
    await prisma.product.create({
      data: {
        title,
        description,
        price,
        type,
      },
    });
    revalidatePath("/admin/products");
    revalidatePath("/formations");
    revalidatePath("/ressources");
    return { success: true, message: "Produit créé !" };
  } catch (error) {
    return { success: false, message: "Erreur création produit." };
  }
}

export async function deleteProduct(id: string) {
   await prisma.product.delete({ where: { id }});
   revalidatePath("/admin/products");
   revalidatePath("/formations");
   revalidatePath("/ressources");
}

// --- Message Actions ---

export async function markMessageRead(id: string) {
   await prisma.contactMessage.update({
      where: { id },
      data: { read: true }
   });
   revalidatePath("/admin/messages");
}
