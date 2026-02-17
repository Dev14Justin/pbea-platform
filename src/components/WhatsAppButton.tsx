import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

interface WhatsAppButtonProps {
  productTitle: string;
}

export function WhatsAppButton({ productTitle }: WhatsAppButtonProps) {
  const phoneNumber = "22890523999";
  const message = `Bonjour AgriBusiness-Lab, je souhaite avoir plus d'informations sur : ${productTitle}.`;
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Link href={waLink} target="_blank" className="w-full">
      <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-14 rounded-xl shadow-lg shadow-green-500/10 transition-all hover:scale-[1.02] active:scale-95">
        <MessageSquare className="mr-2 h-5 w-5" />
        S'inscrire
      </Button>
    </Link>
  );
}
