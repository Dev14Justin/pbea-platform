"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createComment } from "@/actions/blog";
import { Button } from "@/components/ui/button";

function SubmitCommentButton() {
  const { pending } = useFormStatus();
  return (
    <Button size="sm" type="submit" disabled={pending}>
      {pending ? "..." : "Envoyer"}
    </Button>
  );
}

export function CommentForm({ postId }: { postId: string }) {
  const [state, dispatch] = useFormState(createComment, {
    success: false,
    message: "",
    errors: null,
  });

  return (
    <form action={dispatch} className="mt-4">
      <input type="hidden" name="postId" value={postId} />
      <div className="flex gap-2">
        <input
          name="content"
          className="grow rounded-md border border-input px-3 py-2 text-sm"
          placeholder="Ajouter un commentaire..."
          required
        />
        <SubmitCommentButton />
      </div>
      {state.message && (
        <p className="text-xs text-gray-500 mt-1">{state.message}</p>
      )}
    </form>
  );
}
