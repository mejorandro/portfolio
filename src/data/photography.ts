import type { PhotoEntry } from "@/types";

export const photography: PhotoEntry[] = [
  {
    title: "Still afternoon",
    caption:
      "A quieter personal frame; Light, space, and a slower moment outside the screen.",
    image: {
      src: "/images/photography/DJI_20250518123942_0105_D.jpg",
      alt: "Alejandro sitting outdoors in a bright, calm setting surrounded by trees.",
      width: 1638,
      height: 2048,
    },
    featuredOnHome: true,
    homeOrder: 1,
  },
  {
    title: "Open valley",
    caption:
      "A wider frame with distance and scale — the kind of landscape that recenters everything.",
    image: {
      src: "/images/photography/DJI_20250522141758_0531_D.jpg",
      alt: "A mountain Andes valley road under a bright blue sky with clouds.",
      width: 2048,
      height: 1152,
    },
    featuredOnHome: true,
    homeOrder: 2,
  },
  {
    title: "Morning reading",
    caption:
      "A simple ritual: coffee, a book, and the kind of quiet that helps ideas settle.",
    image: {
      src: "/images/photography/DJI_20250818062546_0883_D.jpg",
      alt: "A book and a cup of coffee on a wooden table near a balcony with greenery outside.",
      width: 1080,
      height: 1350,
    },
    featuredOnHome: true,
    homeOrder: 3,
  },
];

export function getFeaturedPhotography(limit = 3) {
  return photography
    .filter((photo) => photo.featuredOnHome)
    .sort((a, b) => (a.homeOrder ?? 999) - (b.homeOrder ?? 999))
    .slice(0, limit);
}
