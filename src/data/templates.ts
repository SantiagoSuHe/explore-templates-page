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
      en: "https://res.cloudinary.com/du5i6ansa/image/upload/v1735618825/4-en_i8ybo1.png",
      es: "https://res.cloudinary.com/du5i6ansa/image/upload/v1735618825/4-es_nebulj.png"
    },
    demoUrl: "https://template4.menunow.xyz"
  },
  {
    id: 2,
    imageUrl: {
      en: "https://res.cloudinary.com/du5i6ansa/image/upload/v1735618824/3-en_suxxkc.png",
      es: "https://res.cloudinary.com/du5i6ansa/image/upload/v1735618825/3-es_ape15p.png"
    },
    demoUrl: "https://template3.menunow.xyz"
  },
  {
    id: 3,
    imageUrl: {
      en: "https://res.cloudinary.com/du5i6ansa/image/upload/v1735618824/2-en_f0d4x6.png",
      es: "https://res.cloudinary.com/du5i6ansa/image/upload/v1735618824/2-es_zvxxnq.png"
    },
    demoUrl: "https://template2.menunow.xyz"
  },
  {
    id: 4,
    imageUrl: {
      en: "https://res.cloudinary.com/du5i6ansa/image/upload/v1735618823/1-en_wcdqzg.png",
      es: "https://res.cloudinary.com/du5i6ansa/image/upload/v1735618824/1-es_jz41bo.png"
    },
    demoUrl: "https://template1.menunow.xyz"
  }
];