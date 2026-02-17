export const MOCK_POSTS = [
  {
    id: "1",
    title: "Comment booster sa production de Maïs au Togo",
    excerpt: "Découvrez les 5 étapes clés pour doubler votre rendement de maïs en utilisant des techniques d'agriculture de précision adaptées aux sols togolais.",
    content: `Le maïs est la base de l'alimentation au Togo, mais beaucoup de producteurs plafonnent à des rendements de 1 à 2 tonnes par hectare. Pourtant, avec les bonnes méthodes, il est possible d'atteindre 4 voire 6 tonnes.

### 1. Le choix de la semence
L'utilisation de semences certifiées est le premier pas. Les variétés hybrides proposées par l'ICAT offrent une meilleure résistance aux ravageurs et un rendement supérieur.

### 2. La préparation du sol
Un labour profond et l'apport de matière organique (fiente de volaille ou compost) changent radicalement la structure de votre sol et sa capacité à retenir l'eau.

### 3. Le semis de précision
Respecter les écartements (75cm entre les lignes, 25cm entre les poquets) permet à chaque plant de recevoir la lumière et les nutriments nécessaires.

### 4. La fertilisation raisonnée
N'appliquez pas l'engrais au hasard. Le NPK 15-15-15 doit être apporté au semis ou 15 jours après, suivi de l'urée au moment de la floraison.

### 5. La gestion de la Chenille Légionnaire
Surveillez vos champs dès la levée. Une détection précoce permet un traitement ciblé et efficace avant que les dégâts ne soient irréversibles.`,
    author: { name: "AgriBusiness-Lab", role: "Équipe Innovation"},
    category: "Cultures",
    image: "/mais.jpg",
    createdAt: "2024-02-15T10:00:00Z",
    readTime: "5 min",
    comments: [],
  },
  {
    id: "2",
    title: "Le business de l'ananas : De la terre à l'exportation",
    excerpt: "L'ananas togolais est très prisé sur le marché européen. Apprenez comment structurer votre exploitation pour répondre aux normes bio internationales.",
    content: `L'exportation d'ananas est une opportunité en or. Le Togo s'est imposé comme l'un des leaders de l'ananas bio en Afrique de l'Ouest. Mais comment passer d'une petite production locale à une entreprise d'exportation ?

### La certification Bio : Le sésame
Sans certification (Ecocert), l'accès aux marchés premium est impossible. Cela demande une traçabilité rigoureuse et l'absence totale de pesticides chimiques.

### Le conditionnement
Le fruit doit être récolté à la main, calibré selon les exigences du client et emballé dans des conditions d'hygiène strictes.

### La logistique
Travailler avec des coopératives permet de mutualiser les coûts de transport vers le Port Autonome de Lomé ou l'aéroport Gnassingbé Eyadéma.`,
    author: { name: "AgriBusiness-Lab", role: "Équipe Innovation" },
    category: "Business",
    image: "/pexels-mouni-melouni.jpg",
    createdAt: "2024-02-10T14:30:00Z",
    readTime: "8 min",
    comments: [
      {
        id: "c1",
        author: { name: "Koffi Amétépé" },
        content: "Article très pertinent. Quelle est la surface minimale conseillée pour commencer l'exportation ?",
        createdAt: "2024-02-11T09:00:00Z",
      }
    ],
  },
  {
    id: "3",
    title: "Digitalisation : L'agriculteur 2.0 au Togo",
    excerpt: "Comment les applications mobiles et les drones transforment la gestion des grandes exploitations dans la région des Plateaux.",
    content: `La technologie n'est plus réservée aux pays industrialisés. Dans le Kloto et l'Ogou, des fermiers utilisent leurs smartphones pour bien plus que Facebook.

### Suivi météo en temps réel
Des applications permettent désormais d'anticiper les pluies avec une précision de 70%, crucial pour planifier les semis et les récoltes.

### Gestion financière
Finies les notes sur papier qui se perdent. Des outils simples permettent de suivre les dépenses de main-d'œuvre et d'intrants au jour le jour.`,
    author: { name: "AgriBusiness-Lab", role: "Équipe Innovation" },
    category: "Technologie",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    createdAt: "2024-02-01T08:00:00Z",
    readTime: "6 min",
    comments: [],
  },
];
