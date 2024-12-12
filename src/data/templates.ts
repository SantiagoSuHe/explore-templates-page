export interface Template {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
}

export const templates: Template[] = [
  {
    id: 1,
    title: "Modern Portfolio",
    description: "A sleek and minimalist portfolio template perfect for creative professionals.",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80",
    demoUrl: "https://template4.menunow.xyz"
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Feature-rich e-commerce template with a clean and modern design.",
    imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
    demoUrl: "https://template3.menunow.xyz"
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "Beautiful and responsive blog template with dark mode support.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80",
    demoUrl: "https://template2.menunow.xyz"
  },
  {
    id: 4,
    title: "Business Landing",
    description: "Professional landing page template for modern businesses.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    demoUrl: "https://template3.menunow.xyz"
  }
];