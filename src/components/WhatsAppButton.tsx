import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  productTitle: string;
  price: number;
}

export function WhatsAppButton({ productTitle, price }: WhatsAppButtonProps) {
  const phoneNumber = "22890000000"; // Replace with real number
  const message = `Bonjour, je souhaite commander : ${productTitle} au prix de ${price} FCFA.`;
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <Link href={waLink} target="_blank">
      <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold">
        <MessageCircle className="mr-2 h-5 w-5" />
        Commander sur WhatsApp
      </Button>
    </Link>
  );
}
