"use client";

import { useActionState } from "react";
import { createComment } from "@/actions/blog";
import { Button } from "@/components/ui/button";

function SubmitCommentButton({ pending }: { pending: boolean }) {
   return (
      <Button size="sm" type="submit" disabled={pending}>
         {pending ? "..." : "Envoyer"}
      </Button>
   )
}

export function CommentForm({ postId }: { postId: string }) {
  // Use useActionState instead of useFormState in newer React/Next versions if available,
  // or fall back to useFormState. Since Next 16/React 19, useActionState is preferred.
  // The original code used useFormState from react-dom, but let's stick to the previous pattern if it worked,
  // or update to React 19 pattern if needed.
  // However, `useFormState` is deprecated in React 19 for `useActionState`.
  const [state, dispatch, isPending] = useActionState(createComment, { success: false, message: "" });

  return (
    <form action={dispatch} className="mt-4">
      <input type="hidden" name="postId" value={postId} />
      <div className="flex gap-2">
        <input
          name="content"
          className="flex-grow rounded-md border border-input px-3 py-2 text-sm"
          placeholder="Ajouter un commentaire..."
          required
        />
        <SubmitCommentButton pending={isPending} />
      </div>
      {state.message && <p className="text-xs text-gray-500 mt-1">{state.message}</p>}
    </form>
  );
}
