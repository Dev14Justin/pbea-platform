import prisma from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { markMessageRead } from "@/actions/admin";

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Messages de Contact</h1>

      <div className="space-y-4">
         {messages.map((msg) => (
            <Card key={msg.id} className={msg.read ? "opacity-70" : "border-l-4 border-l-primary"}>
               <CardHeader className="flex flex-row justify-between pb-2">
                  <div>
                     <CardTitle className="text-sm font-bold">{msg.email}</CardTitle>
                     <p className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleString()}</p>
                  </div>
                  {!msg.read && (
                     <form action={markMessageRead.bind(null, msg.id)}>
                        <Button size="sm" variant="ghost">Marquer comme lu</Button>
                     </form>
                  )}
               </CardHeader>
               <CardContent>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{msg.message}</p>
               </CardContent>
            </Card>
         ))}
         {messages.length === 0 && <p>Aucun message.</p>}
      </div>
    </div>
  );
}
