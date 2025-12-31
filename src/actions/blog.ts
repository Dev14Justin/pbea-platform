"use server";

export async function createPost(prevState: any, formData: FormData) {
  return {
    success: true,
    message: "Votre article a été soumis pour validation ! (Mode Démo)",
    errors: null as any,
  };
}

export async function createComment(prevState: any, formData: FormData) {
  return {
    success: true,
    message: "Merci pour votre commentaire ! (Mode Démo)",
    errors: null as any,
  };
}
