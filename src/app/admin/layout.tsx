import Link from "next/link";
import { LayoutDashboard, FileText, MessageSquare, Package, Mail, Home } from "lucide-react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  
  // Basic protection (Role check should be robust in middleware/auth config too)
  if (!session || (session.user as any).role !== "ADMIN") {
     redirect("/login");
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex-shrink-0 hidden md:block">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-primary">PBEA Admin</h2>
        </div>
        <nav className="p-4 space-y-2">
           <Link href="/admin" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <LayoutDashboard className="mr-3 h-5 w-5" /> Dashboard
           </Link>
           <Link href="/admin/posts" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <FileText className="mr-3 h-5 w-5" /> Articles (Blog)
           </Link>
           <Link href="/admin/comments" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <MessageSquare className="mr-3 h-5 w-5" /> Commentaires
           </Link>
           <Link href="/admin/products" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Package className="mr-3 h-5 w-5" /> Produits
           </Link>
           <Link href="/admin/messages" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Mail className="mr-3 h-5 w-5" /> Messages
           </Link>
           <div className="pt-8 border-t mt-4">
              <Link href="/" className="flex items-center p-2 text-gray-500 hover:bg-gray-100 rounded-md">
                 <Home className="mr-3 h-5 w-5" /> Retour au site
              </Link>
           </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
         {children}
      </main>
    </div>
  );
}
