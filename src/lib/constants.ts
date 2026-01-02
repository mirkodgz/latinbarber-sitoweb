export const SITE_CONFIG = {
  name: "LatinBarber Studio",
  primaryColor: "#ffca2e",
  description:
    "Barberia moderna ispirata alla cultura latina. Tagli sartoriali, trattamenti premium e uno stile unico.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/servizi" },
  { label: "Gallery", href: "/gallery" },
  { label: "Prenota", href: "/prenota" },
];

export const SERVICES_PREVIEW = [
  {
    title: "Barba",
    description: "Rituali caldi, oli essenziali e rifiniture sartoriali.",
    image: "/servizi/Foto-Home-1.avif",
    href: "/servizi",
  },
  {
    title: "Tagli capelli",
    description: "Precisione millimetrica e consulenza personalizzata.",
    image: "/servizi/Foto-Home-2.avif",
    href: "/servizi",
  },
  {
    title: "Design personalizzato",
    description: "Linee creative e look iconici per distinguerti.",
    image: "/servizi/Foto-Home-3.avif",
    href: "/servizi",
  },
  {
    title: "Tinte per capelli",
    description: "Colorazioni premium e coperture naturali.",
    image: "/servizi/Foto-Home-4.avif",
    href: "/servizi",
  },
];

export const SERVICE_PACKAGES = [
  {
    name: "Signature Fade",
    price: "€60",
    duration: "60 min",
    description: "Taglio sartoriale + rifinitura barba + styling premium.",
    image: "/servizi/packages-1.jpg",
    features: ["Consulenza personalizzata", "Styling incluso", "Prodotti premium"],
  },
  {
    name: "Urban Ritual",
    price: "€85",
    duration: "75 min",
    description: "Taglio completo, barba steam ritual e trattamento viso.",
    image: "/servizi/packages-2.jpg",
    features: [
      "Rituale panni caldi",
      "Trattamento detox",
      "Massaggio finale",
    ],
  },
  {
    name: "Total Look",
    price: "€120",
    duration: "90 min",
    description: "Restyling totale con colorazione e trattamento intensivo.",
    image: "/servizi/packages-3.jpg",
    features: ["Tecniche avanzate", "Colori personalizzati", "After care kit"],
  },
];

export const HAIR_SERVICES = {
  title: "Taglio di capelli",
  description:
    "Precisione millimetrica, sfumature fluenti e dettagli che raccontano il tuo stile.",
  image: "/servizi/hair.jpg",
  includes: [
    "Consultazione stile",
    "Sfumatura o taglio classico",
    "Hair styling e finish",
  ],
};

export const BEARD_SERVICES = {
  title: "Barba",
  description:
    "Rituali su misura con panni caldi, oli essenziali e rifiniture precise.",
  image: "/servizi/beard.jpg",
  includes: [
    "Sagomatura personalizzata",
    "Rasatura tradizionale",
    "Trattamento nutriente",
  ],
};

export const TREATMENT_SERVICES = {
  title: "Trattamenti aggiuntivi",
  description:
    "Percorsi di benessere per cute e capelli con tecnologie all’avanguardia.",
  image: "/servizi/treatments.jpg",
  includes: [
    "Detox cute",
    "Rigenerazione capelli",
    "Massaggio cranio sacrale",
  ],
};

export const COLOR_SERVICES = {
  title: "Tinte e colorazioni",
  description:
    "Colori vibranti o naturali, studiati per valorizzare la tua personalità.",
  image: "/servizi/color.jpg",
  includes: [
    "Copertura capelli bianchi",
    "Neutralizzazione toni caldi",
    "Colori creativi",
  ],
};

export const GALLERY_IMAGES = [
  "/gallery/gallery01.webp",
  "/gallery/gallery02.avif",
  "/gallery/gallery03.avif",
  "/gallery/gallery04.avif",
  "/gallery/gallery05.avif",
  "/gallery/gallery06.avif",
  "/gallery/gallery07.avif",
  "/gallery/gallery08.avif",
  "/gallery/gallery09.avif",
  "/gallery/gallery10.avif",
  "/gallery/gallery11.avif",
  "/gallery/gallery12.avif",
].map((src, index) => ({
  src,
  alt: `LatinBarber gallery image ${index + 1}`,
}));

export const LOCATIONS = [
  {
    id: "lorenteggio",
    name: "Milano Lorenteggio",
    address: "Via Lorenteggio 155, Milano",
    whatsapp: "+39 333 123 4567",
    hours: "Lun–Sab · 10:00 - 20:00",
    image: "/prenota/location-lorenteggio.jpg",
    bookingUrl: "/prenota",
  },
  {
    id: "bicocca",
    name: "Milano Bicocca",
    address: "Viale Sarca 214, Milano",
    whatsapp: "+39 333 765 4321",
    hours: "Lun–Dom · 09:30 - 21:00",
    image: "/prenota/location-bicocca.jpg",
    bookingUrl: "/prenota",
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "Studio",
    links: [
      { label: "Home", href: "/" },
      { label: "Servizi", href: "/servizi" },
      { label: "Gallery", href: "/gallery" },
      { label: "Prenota", href: "/prenota" },
    ],
  },
  {
    title: "Servizi",
    links: [
      { label: "Taglio sartoriale", href: "/servizi" },
      { label: "Barber rituals", href: "/servizi" },
      { label: "Trattamenti", href: "/servizi" },
      { label: "Color Lab", href: "/servizi" },
    ],
  },
  {
    title: "Info",
    links: [
      { label: "Sede Lorenteggio", href: "/prenota" },
      { label: "Sede Bicocca", href: "/prenota" },
      { label: "Privacy", href: "#" },
      { label: "Cookie", href: "#" },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/latinbarberstudio", handle: "@latinbarberstudio" },
  { label: "TikTok", href: "https://www.tiktok.com/@latinos.en.milano", handle: "@latinos.en.milano" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61555240567299&locale=it_IT", handle: "LatinBarber Studio" },
];

