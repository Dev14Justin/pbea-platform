
export interface User {
  id: string;
  name: string;
  image?: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author: User;
  createdAt: string;
  comments: Comment[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  type: "FORMATION" | "GUIDE";
  fileUrl?: string;
}

export const mockUsers: User[] = [
  { id: "1", name: "Alice Admin", image: "/avatars/alice.png" },
  { id: "2", name: "Bob User", image: "/avatars/bob.png" },
];

export const mockPosts: Post[] = [
  {
    id: "1",
    title: "Comment débuter avec PBEA",
    content: "Bienvenue sur la plateforme PBEA. Voici quelques conseils pour commencer...",
    published: true,
    author: mockUsers[0],
    createdAt: new Date("2023-10-01").toISOString(),
    comments: [
      {
        id: "c1",
        content: "Super article !",
        author: mockUsers[1],
        createdAt: new Date("2023-10-02").toISOString(),
      },
    ],
  },
  {
    id: "2",
    title: "Les meilleures pratiques en 2024",
    content: "Découvrez les nouvelles tendances et comment les appliquer...",
    published: true,
    author: mockUsers[0],
    createdAt: new Date("2023-11-15").toISOString(),
    comments: [],
  },
  {
    id: "3",
    title: "Article en attente de validation",
    content: "Ce contenu n'est pas encore visible publiquement normalement...",
    published: false, // In a real app this wouldn't be shown, but for static mock we might filter it out.
    author: mockUsers[1],
    createdAt: new Date("2023-12-01").toISOString(),
    comments: [],
  },
];

export const mockProducts: Product[] = [
  {
    id: "p1",
    title: "Formation Complète JS",
    description: "Apprenez JavaScript de A à Z avec cette formation intensive.",
    price: 99.99,
    type: "FORMATION",
  },
  {
    id: "p2",
    title: "Guide du Freelance",
    description: "Tout ce qu'il faut savoir pour se lancer en tant qu'indépendant.",
    price: 19.99,
    type: "GUIDE",
  },
  {
    id: "p3",
    title: "Masterclass React",
    description: "Perfectionnez vos compétences React avec des projets concrets.",
    price: 149.00,
    type: "FORMATION",
  },
];
