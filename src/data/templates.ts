export interface Template {
  id: number;
  imageUrl: {
    en: string;
    es: string;
  };
  demoUrl: string;
}

export const templates: Template[] = [
  {
    id: 1,
    imageUrl: {
      en: "https://res.cloudinary.com/du5i6ansa/image/upload/v1733981949/1._Desktop_Sample_r3kasf.png",
      es: "https://res.cloudinary.com/du5i6ansa/image/upload/v1733981949/1._Desktop_Sample_es_r3kasf.png"
    },
    demoUrl: "https://template4.menunow.xyz"
  },
  {
    id: 2,
    imageUrl: {
      en: "https://res.cloudinary.com/du5i6ansa/image/upload/v1733981949/3._Desktop_Sample_j1vmvr.png",
      es: "https://res.cloudinary.com/du5i6ansa/image/upload/v1733981949/3._Desktop_Sample_es_j1vmvr.png"
    },
    demoUrl: "https://template3.menunow.xyz"
  },
  {
    id: 3,
    imageUrl: {
      en: "https://res.cloudinary.com/du5i6ansa/image/upload/v1733981949/2._Desktop_Sample_w9jg36.png",
      es: "https://res.cloudinary.com/du5i6ansa/image/upload/v1733981949/2._Desktop_Sample_es_w9jg36.png"
    },
    demoUrl: "https://template2.menunow.xyz"
  },
  {
    id: 4,
    imageUrl: {
      en: "https://res.cloudinary.com/du5i6ansa/image/upload/v1733981949/4._Desktop_Sample_qyad8w.png",
      es: "https://res.cloudinary.com/du5i6ansa/image/upload/v1733981949/4._Desktop_Sample_es_qyad8w.png"
    },
    demoUrl: "https://template1.menunow.xyz"
  }
];