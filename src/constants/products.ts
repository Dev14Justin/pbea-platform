export const MOCK_PRODUCTS = {
  FORMATION: [
    {
      id: "1",
      title: "Maîtrise de la culture du Maïs",
      description:
        "Optimisez vos rendements avec des techniques de pointe pour la culture du Maïs au Togo.",
      image: "/mais.jpg",
      type: "FORMATION" as const,
    },
    {
      id: "2",
      title: "Maîtrise de la culture de l'Arachide",
      description:
        "Accompagnement technique complet pour une production d'arachide performante et rentable.",
      image: "/arachide.jpg",
      type: "FORMATION" as const,
    },
    {
      id: "3",
      title: "Maîtrise de la culture du Soja",
      description:
        "Structuration et certification bio pour une filière soja togolais d'excellence.",
      image: "/pexels-fatima-yusuf.jpg",
      type: "FORMATION" as const,
    },
  ],
  GUIDE: [
    {
      id: "4",
      title: "Guide des Engrais Bio",
      description:
        "Découvrez comment fabriquer et utiliser des engrais naturels pour réduire vos coûts.",
      image:
        "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=800&auto=format&fit=crop",
      type: "GUIDE" as const,
    },
    {
      id: "5",
      title: "Réussir son Élevage de Poulets",
      description:
        "Les bases essentielles pour lancer et réussir un élevage de poulets de chair au Togo.",
      image: "/pexels-alexasfotos.jpg",
      type: "GUIDE" as const,
    },
  ],
};
