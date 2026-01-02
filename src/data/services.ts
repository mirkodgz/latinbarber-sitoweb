import { ServiceCategory, PremiumPackage } from "@/types/services";

export const PREMIUM_PACKAGES: PremiumPackage[] = [
    {
        id: "taglio-barba",
        name: "PACCHETTI TAGLIO + BARBA",
        oldPrice: "25€",
        price: "20€",
        features: [
            "Taglio Artistico",
            "Modellatura Barba Express con Sfumatura",
            "Definizione Sopracciglia",
        ],
    },
    {
        id: "tinta-capelli",
        name: "PACCHETTO TINTA CAPELLI",
        oldPrice: "90€",
        price: "80€",
        features: [
            "Tinta personalizzata",
            "Taglio sfumato",
            "Design personalizzato",
            "Maschera viso rigenerante",
            "Definizione sopracciglia, naso e orecchie",
        ],
    },
    {
        id: "permanente",
        name: "PACCHETTO PERMANENTE",
        oldPrice: "95€",
        price: "DA 80€",
        features: [],
    },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        id: "taglio",
        title: "TAGLIO DI CAPELLI",
        description: "Un’esperienza di stile personalizzata che valorizza al massimo il tuo look. Realizziamo tagli di capelli su misura, studiati per adattarsi perfettamente alla forma del viso, al tipo di capello e al tuo stile personale. Ogni dettaglio viene curato con precisione e attenzione, utilizzando tecniche moderne e strumenti professionali, per garantire un risultato impeccabile. Sia che tu preferisca un taglio classico e pulito o un look più audace e creativo, il nostro obiettivo è offrirti un servizio di alta qualità che esalti la tua personalidad e ti faccia sentire al meglio.",
        images: [
            "/taglio01.webp",
            "/taglio02.webp",
            "/taglio03.webp",
        ],
        services: [
            {
                id: "taglio-uomo",
                name: "TAGLIO DI CAPELLI UOMO + SFUMATURA",
                price: "20€",
            },
            {
                id: "taglio-bimbo",
                name: "TAGLIO BIMBO (UNDER 12)",
                price: "15€",
            },
            {
                id: "taglio-disegno",
                name: "TAGLIO UOMO CON DISEGNO ARTISTICO / HAIR TATTOO",
                price: "DA CONCORDARE",
            },
        ],
    },
    {
        id: "barba",
        title: "BARBA",
        description: "La cura della barba è un’arte che combina precisione, stile e benessere. Offriamo servizi personalizzati per modellare, definire e valorizzare la tua barba, adattandola al tuo viso e al tuo stile unico. Dai trattamenti rapidi per chi desidera una barba sempre in ordine ai rituali completi con panno caldo e prodotti di alta qualità, garantiamo risultati impeccabili e un’esperienza di comfort e relax. Ogni dettaglio viene curato con professionalità, per una barba morbida, sana e dal look perfetto.",
        images: [
            "/barba01.avif",
            "/barba02.avif",
            "/barba03.avif",
        ],
        services: [
            {
                id: "barba-xpress",
                name: "MODELLATURA BARBA XPRESS",
                price: "10€",
            },
            {
                id: "barba-panno",
                name: "MODELLATURA BARBA CON PULIZIA, SFUMATURA, PANNO CALDO",
                price: "15€",
                highlighted: true,
            },
            {
                id: "barba-deluxe",
                name: "TRATTAMENTO BARBA DELUXE CON PANNI CALDI, OZONO E MASCHERA VISO",
                price: "20€",
            },
            {
                id: "barba-personalizzata",
                name: "SERVIZI BARBA PERSONALIZZATA: CURA PER IL TUO STILE",
                price: "DA CONCORDARE",
            },
        ],
    },
    {
        id: "trattamenti",
        title: "TRATTAMENTI AGGIUNTIVI",
        description: "I nostri trattamenti aggiuntivi sono pensati per prendersi cura di ogni dettaglio del tuo benessere e della tua estetica. Dalla pulizia viso profonda per una pelle rigenerata, alla maschera nera per eliminare le impurità, fino alla ceretta specifica per definire contorni e dettagli. Ogni servizio è pensato per completare il tuo look e offrirti un'esperienza di relax totale, utilizzando prodotti specifici di alta qualità per risultati visibili e duraturi.",
        images: [
            "/trattamenti-aggiuntivi-01.avif",
            "/trattamenti-aggiuntivi-02.avif",
            "/trattamenti-aggiuntivi-03.avif",
        ],
        services: [
            {
                id: "pulizia-viso",
                name: "PULIZIA VISO COMPLETA",
                price: "20€",
            },
            {
                id: "maschera-nera",
                name: "MASCHERA NERA (BLACK MASK)",
                price: "10€",
            },
            {
                id: "trattamento-ozono",
                name: "TRATTAMENTO VAPORE E OZONO",
                price: "10€",
            },
            {
                id: "ceretta-naso",
                name: "CERETTA NASO / ORECCHIE",
                price: "5€",
            },
            {
                id: "ceretta-sopracciglia",
                name: "CERETTA SOPRACCIGLIA",
                price: "5€",
            },
            {
                id: "prodotti-capelli",
                name: "PRODOTTI PROFESSIONALI PER CAPELLI E BARBA",
                price: "VARIA",
            },
        ],
    },
    {
        id: "tinte",
        title: "TINTE E COLORAZIONI",
        description: "Esprimi la tua creatività o ritrova il tuo colore naturale con i nuestros servicios de coloración profesional. Realizziamo colori audaci per un look d'impatto o coperture naturali per nascondere i capelli bianchi con discrezione. Utilizziamo prodotti delicati di alta qualità che rispettano la salute del capello, garantendo una tenuta perfetta e un risultato omogeneo e brillante.",
        images: [
            "/tinte-colorazioni-01.avif",
            "/tinte-colorazioni-02.avif",
            "/tinte-colorazioni-03.avif",
        ],
        services: [
            {
                id: "decolorazione",
                name: "DECOLORAZIONE COMPLETA",
                price: "35€+",
            },
            {
                id: "colore-fantasy",
                name: "COLORE FANTASY / CREATIVO",
                price: "VARIA",
            },
            {
                id: "riflessante",
                name: "RIFLESSANTE (ANTIGIALLO / TONALIZZANTE)",
                price: "15€",
            },
            {
                id: "piastra-capelli",
                name: "PIASTRA / STYLING AVANZATO",
                price: "5€",
            },
        ],
    },
];
