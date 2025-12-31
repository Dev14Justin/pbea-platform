"use server";

import { mockPosts, mockUsers } from "@/lib/mock-data";
import { revalidatePath } from "next/cache";

// Since we are mocking, we can't really "save" data permanently across restarts without a DB,
// but we can simulate success.

export async function createPost(prevState: any, formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  if (!title || !content) {
      // Return type compatible with the frontend expectation (errors object)
      return {
          success: false,
          message: "Titre et contenu requis.",
          errors: {
              title: !title ? ["Titre requis"] : [],
              content: !content ? ["Contenu requis"] : []
          }
      };
  }

  console.log("Mock creating post:", { title, content });

  return { success: true, message: "Article créé (simulation) !", errors: undefined };
}

export async function createComment(prevState: any, formData: FormData) {
   await new Promise((resolve) => setTimeout(resolve, 500));
   const content = formData.get("content") as string;
   const postId = formData.get("postId") as string;

   if (!content) return { success: false, message: "Contenu vide" };

   console.log("Mock creating comment on post", postId, ":", content);

   revalidatePath(`/blog/${postId}`);
   return { success: true, message: "Commentaire ajouté (simulation) !" };
}
