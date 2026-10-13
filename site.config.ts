import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Rebecca Braidz",
  tagline: "Knotless braids with hair included in Brampton, ON.",
  category: "Knotless braids",
  schemaType: "BeautySalon",
  area: "Brampton, ON",
  siteUrl: "https://rebecca-braidz.vercel.app",

  theme: {
    preset: "salon-chic",
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton, ON",
    headline: "Knotless braids, hair included",
    subhead:
      "Smedium, medium, boho, and loose wave styles. Calendar opens on the 15th. Book online or send a DM.",
    images: [
      { src: "/images/post-1.jpg", alt: "Smedium knotless braids in colour 1B30", width: 1440, height: 1440 },
      { src: "/images/post-2.jpg", alt: "Smedium knotless braids in colour 99J", width: 1440, height: 1440 },
      { src: "/images/post-5.jpg", alt: "Body wave boho knotless braids", width: 1440, height: 1440 },
    ],
    primaryCta: { label: "Book online", href: "https://rebeccabraidz.as.me" },
    secondaryCta: { label: "See the styles", href: "#gallery" },
  },

  highlights: [
    "Knotless braids, hair included",
    "Calendar opens on the 15th",
    "Brampton, ON",
    "Book via Acuity",
  ],

  about: {
    title: "Protective styles in Brampton",
    body: [
      "Rebecca Braidz specializes in knotless braids with hair always included. From smedium and medium lengths to boho and synthetic loose wave, every install is booked with care.",
      "The booking calendar opens on the 15th. Use the Acuity link to grab a spot, or send an Instagram DM with your style and preferred date.",
    ],
    image: { src: "/images/post-8.jpg", alt: "Medium knotless braids waist length", width: 640, height: 640 },
  },

  menu: {
    label: "Services",
    title: "Services",
    intro: "Popular knotless styles. Pricing is shared when you book.",
    variant: "list",
    showPrices: false,
    priceNote: "Message or book online for current pricing.",
    groups: [
      {
        title: "Braids",
        items: [
          { name: "Knotless braids (smedium, medium)", description: "Hair included." },
          { name: "Boho braids", description: "Body wave boho styles." },
          { name: "Synthetic loose wave", description: "Long loose wave finishes." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent installs",
    items: [
      { src: "/images/post-1.jpg", width: 1440, height: 1440, alt: "Smedium knotless braids colour 1B30", caption: "Smedium knotless, 1B30", href: "https://www.instagram.com/p/Decwzl_lBU5/" },
      { src: "/images/post-2.jpg", width: 1440, height: 1440, alt: "Smedium knotless braids colour 99J", caption: "Smedium knotless, 99J", href: "https://www.instagram.com/p/DeIxN3Wlccz/" },
      { src: "/images/post-3.jpg", width: 1440, height: 1440, alt: "Smedium knotless braids", caption: "Smedium knotless", href: "https://www.instagram.com/p/DeIwji4lej3/" },
      { src: "/images/post-4.jpg", width: 1440, height: 1440, alt: "Synthetic loose wave braids", caption: "Synthetic loose wave", href: "https://www.instagram.com/p/DeDsQ7bDOvm/" },
      { src: "/images/post-5.jpg", width: 1440, height: 1440, alt: "Body wave boho braids", caption: "Body wave boho", href: "https://www.instagram.com/p/DeDrwghjPsv/" },
      { src: "/images/post-6.jpg", width: 1440, height: 1440, alt: "Knotless braids install", caption: "Knotless in Brampton", href: "https://www.instagram.com/p/DWSntullVzn/" },
      { src: "/images/post-7.jpg", width: 640, height: 640, alt: "Booking open for knotless braids", caption: "Hair always included", href: "https://www.instagram.com/p/DTtp82gkeVI/" },
      { src: "/images/post-8.jpg", width: 640, height: 640, alt: "Medium waist length knotless braids", caption: "Medium knotless, waist length", href: "https://www.instagram.com/p/DMrPiYzt8Rg/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "rebeccabraidz",
    embeds: [
      "https://www.instagram.com/p/Decwzl_lBU5/",
      "https://www.instagram.com/p/DeIxN3Wlccz/",
      "https://www.instagram.com/p/DeDrwghjPsv/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book your install",
    intro:
      "The calendar opens on the 15th. Book online on Acuity, or send a DM with your style and preferred date.",
    dmMessage:
      "Hi Rebecca! I would love to book braids.\nPreferred date:\nStyle (smedium, medium, boho, loose wave):\nLength and colour idea:",
    links: [
      { label: "Book on Acuity", href: "https://rebeccabraidz.as.me" },
    ],
    note: "Hair is always included.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Use the Acuity booking link, or send an Instagram DM with your preferred date and style. The calendar opens on the 15th." },
    { q: "Is hair included?", a: "Yes. Hair is always included with knotless braid installs." },
    { q: "Where are you located?", a: "Brampton, Ontario. Details are shared when you book." },
    { q: "What styles do you offer?", a: "Knotless braids in smedium and medium sizes, boho braids, and synthetic loose wave." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton, Ontario",
    socials: [],
  },

  seo: {
    title: "Rebecca Braidz | Knotless braids in Brampton",
    description:
      "Knotless braids with hair included in Brampton, ON. Smedium, medium, boho, and loose wave. Book on Acuity or by Instagram DM.",
    keywords: [
      "knotless braids Brampton",
      "Brampton braider",
      "boho braids Brampton",
      "GTA knotless braids",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
