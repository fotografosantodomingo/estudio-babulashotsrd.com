// English service page translations — hand-written for SEO quality, not literal
// translation. Each entry maps an existing Spanish page slug to a polished EN
// counterpart with proper schema.org markup served via app/en/[slug]/page.tsx.
//
// Adding a new entry automatically wires up:
//   • /en/<enSlug>/  static route via app/en/[slug]/generateStaticParams
//   • hreflang reciprocity via lib/languageRoutes.ts
//   • sitemap entry via app/sitemap.ts
//
// Priority slugs were selected by 2026-05-10 GSC impressions on Spanish-only
// pages (see ~/Documents/search-console/2026-05-10/estudio*pages.csv).

export type EnServicePage = {
  esPath: string;            // canonical Spanish source page
  enPath: string;            // canonical English URL (must start with /en/ and end with /)
  enSlug: string;            // slug part only (after /en/)
  topic: string;             // short topic tag (e.g. "boudoir", "corporate")
  title: string;             // <title> — ~60 chars
  description: string;       // meta description — ~155 chars
  h1: string;                // H1
  eyebrow: string;           // small label above H1
  intro: string;             // lead paragraph (under H1)
  sections: Array<{
    h2: string;
    paragraphs?: string[];   // each becomes a <p>
    list?: string[];         // each becomes <li>; rendered after paragraphs
    listIntro?: string;      // optional <p> before the list
  }>;
  faq: Array<{ q: string; a: string }>;
  priceFromDop?: number;     // for Service.offers — RD$ price
  priceFromUsd?: number;     // optional, for description copy
  imageUrl?: string;         // hero image for OG/Service.image
};

const HERO_FALLBACK = "/wp-content/uploads/2024/06/Estudio-fotografo-santo-domingo.webp";

export const EN_SERVICE_PAGES: EnServicePage[] = [
  {
    esPath: "/sesion-de-fotos-exterior-en-santo-domingo-precios-y-planes-exterior/",
    enPath: "/en/outdoor-photo-session-santo-domingo/",
    enSlug: "outdoor-photo-session-santo-domingo",
    topic: "Outdoor photography",
    title: "Outdoor Photo Session in Santo Domingo · Babula Shots · 4.9★ 98 reviews",
    description: "Professional outdoor photo sessions in Santo Domingo — Zona Colonial, Malecón, Güibia, Boca Chica, beach and golden-hour locations. Direction, edited delivery in 5-7 days.",
    h1: "Outdoor Photo Sessions in Santo Domingo",
    eyebrow: "Outdoor photography · Babula Shots Estudio",
    intro: "When studio walls aren't the right backdrop, we shoot outdoors across Santo Domingo and the Dominican Republic. Zona Colonial cobblestones at sunset, Malecón cityscape, Güibia beach, Boca Chica oceanfront — each location has a different feel and we plan the shoot around what makes your portraits, family or brand feel real.",
    sections: [
      {
        h2: "Popular outdoor locations in Santo Domingo",
        listIntro: "We've shot in dozens of spots and these consistently deliver the best results:",
        list: [
          "Zona Colonial — cobblestone streets, Catedral Primada, Calle Las Damas (works best at golden hour)",
          "Plaza España — open square with the Alcázar de Colón backdrop",
          "Malecón — Caribbean Sea horizon, ideal for editorial portraits",
          "Playa Güibia — closest urban beach, walkable from most hotels",
          "Jardín Botánico — tropical foliage and water lily ponds",
          "Boca Chica beach — 45 minutes from the city, calm water, white sand",
          "Juan Dolio — wider beaches, fewer crowds than Boca Chica"
        ]
      },
      {
        h2: "How an outdoor session runs",
        paragraphs: [
          "We start ~90 minutes before sunset (golden hour) for the warmest, most flattering light. A typical session covers 2–3 locations within walking distance — for example Zona Colonial → Catedral Primada → Plaza España, or Malecón → Güibia. We move quickly, direct gently, and shoot in short bursts so the energy stays fresh.",
          "We bring portable flashes for cloudy days or interior shots inside churches, but most outdoor sessions are pure natural light. You bring 2–3 outfits and we change between locations."
        ]
      },
      {
        h2: "Best months for outdoor sessions in the Dominican Republic",
        paragraphs: [
          "November–April is dry season — the most reliable months for sunset shoots. May–October is rainy season but rain is usually short afternoon bursts, so we still shoot most days. The most challenging months are September–October (hurricane season) where we book with a reschedule clause."
        ]
      }
    ],
    faq: [
      { q: "How long is a typical outdoor session?", a: "60–90 minutes covering 2–3 nearby locations. Longer sessions (couples, families with multiple looks) run 2 hours." },
      { q: "Do you bring permits for Zona Colonial?", a: "For tourist-style portrait sessions no permit is needed — we shoot from public spaces. For commercial campaigns or weddings we secure the relevant permits from the Ministry of Culture." },
      { q: "What if it rains?", a: "We monitor the forecast 48h before and reschedule for free if rain is high-probability. If we're already shooting and it starts, we have backup indoor spots in Zona Colonial." },
      { q: "Can we do an outdoor session outside Santo Domingo?", a: "Yes — Boca Chica, Juan Dolio, La Romana, Punta Cana, Las Terrenas. We charge a small transport fee outside the metro area." },
      { q: "How are the photos delivered?", a: "20–40 edited high-resolution photos via private online gallery, typically 5–7 days after the session. Express 48h delivery available." }
    ],
    priceFromDop: 8940,
    priceFromUsd: 150
  },
  {
    esPath: "/sesion-de-fotos-boudoir-republica-dominicana/",
    enPath: "/en/boudoir-photo-session-dominican-republic/",
    enSlug: "boudoir-photo-session-dominican-republic",
    topic: "Boudoir photography",
    title: "Boudoir Photo Session in Dominican Republic · Babula Shots · 4.9★ 98 reviews",
    description: "Professional boudoir photography in Santo Domingo. Private studio or luxury hotel suite, expert direction, edited delivery in 48-72h. Discreet, respectful sessions.",
    h1: "Boudoir Photo Session in the Dominican Republic",
    eyebrow: "Boudoir · Babula Shots Estudio",
    intro: "A boudoir session is a celebration of self — confidence, intimacy and quiet strength captured on camera. We shoot in a private studio setting or in a luxury hotel suite, with professional lighting and the kind of direction that puts you at ease in minutes, not hours.",
    sections: [
      {
        h2: "What makes a boudoir session work",
        paragraphs: [
          "Three things: a private setting, slow pacing, and gentle direction. No rushed shot lists, no awkward poses you'd never naturally hold. We talk through the mood you want — soft and romantic, bold and editorial, classic black-and-white — and then we shoot in a way that produces images you'll actually love."
        ]
      },
      {
        h2: "Setting options",
        list: [
          "Our private Santo Domingo studio — Profoto lighting, multiple backdrops, full wardrobe assistance",
          "Luxury hotel suite — 5-star hotels in Santo Domingo or Punta Cana (we coordinate the booking and bring portable lighting)",
          "Your home — for the most personal feel, we shoot in your own bedroom with available light + our portable kit"
        ]
      },
      {
        h2: "Privacy and editing",
        paragraphs: [
          "Every session is treated as confidential. Images stay in a private password-protected online gallery — only you can access them. We never publish boudoir work without explicit written consent.",
          "Editing is done by Michal personally — natural skin tones, subtle retouching, no over-smoothing. You receive 25–40 edited images in 48–72 hours via the private gallery."
        ]
      }
    ],
    faq: [
      { q: "I've never done a session like this. Will I be nervous?", a: "Most clients are, and it's normal. We spend the first 15 minutes talking and looking at past work so you know exactly what to expect. By the time we pick up the camera you'll be comfortable." },
      { q: "Do you offer hair and makeup?", a: "Yes — we work with trusted MUAs in Santo Domingo who join the session. Total session including hair/makeup runs 3–4 hours." },
      { q: "What do I wear?", a: "Bring 3–5 options: lingerie, oversized sweater, white button-down shirt, soft robe, swimwear. We help pick what photographs best on the day. We also keep wardrobe pieces at the studio you can use." },
      { q: "Can my partner be in the session?", a: "Yes — couple boudoir is a beautiful option. Same private setting, same discretion." },
      { q: "How fast can I get the photos?", a: "Standard delivery 48–72 hours via private gallery. Express same-day previews available." }
    ],
    priceFromDop: 23800,
    priceFromUsd: 400
  },
  {
    esPath: "/sesiones-fotograficas-de-navidad/",
    enPath: "/en/christmas-photo-session-santo-domingo/",
    enSlug: "christmas-photo-session-santo-domingo",
    topic: "Christmas photography",
    title: "Christmas Photo Session in Santo Domingo · Babula Shots · 4.9★ 98 reviews",
    description: "Studio Christmas photo sessions in Santo Domingo. Family portraits with curated holiday sets, professional lighting, ready for Christmas cards. Book November–December.",
    h1: "Christmas Photo Sessions in Santo Domingo",
    eyebrow: "Christmas studio · Babula Shots Estudio",
    intro: "Every November and December our Santo Domingo studio transforms into a curated Christmas set — pine trees with warm lights, soft fabric backdrops, props for kids and adults, and the kind of lighting that makes a family portrait feel like a vintage holiday film still. Sessions book up early — we recommend reserving by mid-November.",
    sections: [
      {
        h2: "What's included",
        list: [
          "30–60 minute studio session in our curated Christmas set",
          "Up to 6 people in the frame (kids, parents, grandparents, pets welcome)",
          "Multiple backdrop variations within the same session",
          "Professional retouching of 15–25 final images",
          "Private online gallery for sharing and ordering prints",
          "Christmas-card-ready crops (4×6, 5×7, square)"
        ]
      },
      {
        h2: "Booking calendar",
        paragraphs: [
          "We open the Christmas set the first week of November and book sessions through the third week of December. Weekend slots fill first — book early if you want a Saturday or Sunday. Weekday sessions are often available with shorter notice."
        ]
      },
      {
        h2: "Outfit suggestions",
        paragraphs: [
          "The most photogenic palette: deep reds, forest green, cream, and warm beige. Avoid bright primary colours that compete with the set lights. Matching is fine but identical outfits look stiff — coordinate by colour palette, not by exact garment."
        ]
      }
    ],
    faq: [
      { q: "When should I book?", a: "Mid-November for prime December weekend slots. Last-minute December bookings are sometimes possible on weekdays." },
      { q: "Can I bring my dog or cat?", a: "Yes — pets photograph beautifully in Christmas sets. We have a few pet props on hand." },
      { q: "How fast are the photos delivered?", a: "5–7 business days standard. We offer 48-hour express in December for clients who need cards printed in time." },
      { q: "Can we do an outdoor Christmas session instead of studio?", a: "Yes — Zona Colonial with its old-town feel works beautifully in December. Discuss when you book." }
    ],
    priceFromDop: 11900,
    priceFromUsd: 200
  },
  {
    esPath: "/session-de-fotos-embrazada-estudio-en-santo-domingo/",
    enPath: "/en/maternity-photo-session-santo-domingo/",
    enSlug: "maternity-photo-session-santo-domingo",
    topic: "Maternity photography",
    title: "Maternity Photo Session in Santo Domingo · Babula Shots · 4.9★ 98 reviews",
    description: "Studio maternity photography in Santo Domingo — Profoto lighting, curated wardrobe of gowns and drapes, partner and sibling looks. Best between weeks 28–36.",
    h1: "Maternity Photo Sessions in Santo Domingo",
    eyebrow: "Maternity · Babula Shots Estudio",
    intro: "A maternity session captures a brief, irreplaceable moment — usually scheduled between week 28 and week 36 when the bump is fully showing but you still feel comfortable. We shoot in our Santo Domingo studio with soft Profoto lighting and a curated wardrobe of maternity gowns, drapes and styled pieces so you arrive without needing to source anything yourself.",
    sections: [
      {
        h2: "What the session includes",
        list: [
          "60–90 minute studio session with multiple looks",
          "Wardrobe options on hand — gowns, drapes, robes, classic styled pieces",
          "Solo, with partner, with siblings, with pets — every configuration covered",
          "Both colour and black-and-white edits in the delivery",
          "Soft, comfort-first posing — we direct gently and never rush",
          "25–40 fully edited high-resolution photos delivered in 5–7 days"
        ]
      },
      {
        h2: "Best week range to book",
        paragraphs: [
          "Weeks 28–36 is the sweet spot. Earlier than 28 the bump may not show enough in photos; after 36 most expectant mothers feel less comfortable holding poses. If you're booking ahead, count from your due date and target 4–8 weeks before."
        ]
      },
      {
        h2: "Newborn follow-up",
        paragraphs: [
          "Many clients book a newborn session in the first 14 days after birth as a follow-up. We offer a maternity + newborn bundle at a discount."
        ]
      }
    ],
    faq: [
      { q: "When in pregnancy should I schedule?", a: "Between week 28 and week 36, ideally around week 32 for the most flattering bump." },
      { q: "Do you provide gowns?", a: "Yes — we keep a wardrobe of maternity gowns and styled pieces at the studio. Bring your own favourite outfit too if you want to include it." },
      { q: "Can my partner be in the session?", a: "Yes — partner shots are part of every maternity session at no extra cost." },
      { q: "Hair and makeup?", a: "We work with trusted MUAs who can join the session. Adds ~2 hours to total time." },
      { q: "How fast can I get the photos?", a: "5–7 business days standard. Sneak-peek of one favourite image in 48 hours included." }
    ],
    priceFromDop: 8940,
    priceFromUsd: 150
  },
  {
    esPath: "/fotografia-corporativa-en-estudio-en-punta-cana-rd/",
    enPath: "/en/corporate-photography-studio-punta-cana/",
    enSlug: "corporate-photography-studio-punta-cana",
    topic: "Corporate photography Punta Cana",
    title: "Corporate Photography Studio Punta Cana · Babula Shots · 4.9★ 98 reviews",
    description: "Executive headshots and corporate portraits in Punta Cana. On-location at your resort or office, professional studio lighting, 48h delivery. Commercial usage included.",
    h1: "Corporate Photography Studio in Punta Cana, Dominican Republic",
    eyebrow: "Corporate photography · Punta Cana",
    intro: "Punta Cana is home to dozens of major resorts, real estate developments and international corporate offices. We travel from Santo Domingo to Punta Cana with a full Profoto studio kit and shoot executive headshots, team portraits and brand sessions on-location — at your office, conference venue or resort meeting room.",
    sections: [
      {
        h2: "Punta Cana corporate clients we serve",
        list: [
          "Resort executives and management teams",
          "Real estate developers (Cap Cana, Bávaro, Cocotal)",
          "Conference speakers and event photography",
          "Tourism industry leadership portraits",
          "Restaurant and hospitality brand portraits",
          "Construction and engineering project leadership"
        ]
      },
      {
        h2: "How on-location sessions run in Punta Cana",
        paragraphs: [
          "We arrive 60 minutes before the first session to set up lighting in a designated room (conference room, executive office, or empty meeting space). Each headshot takes ~20 minutes — that's set-up time included. A team of 10 wraps in about 3 hours total.",
          "Standard delivery is 48 hours via a private online gallery with high-resolution files and web-optimised crops. We coordinate the timing with your administrative team so nobody's day is disrupted."
        ]
      },
      {
        h2: "Studio option in Santo Domingo",
        paragraphs: [
          "If you prefer a studio environment, our Santo Domingo studio is a 2.5-hour drive from Punta Cana. Some clients combine a Santo Domingo studio day with a Punta Cana on-location day for executives who can't travel."
        ]
      }
    ],
    faq: [
      { q: "Do you travel from Santo Domingo with all equipment?", a: "Yes — we bring full studio lighting, backdrops if needed, and all camera gear. You only need to provide an electrical outlet and a quiet room." },
      { q: "How much for a Punta Cana on-location session?", a: "Travel from Santo Domingo is included for sessions of 5+ headshots. Single-executive sessions add a small transport fee." },
      { q: "Commercial usage?", a: "All corporate session prices include commercial license — use on LinkedIn, company website, marketing collateral, social media without per-use fees." },
      { q: "What about Cap Cana, Bávaro, Bayahibe?", a: "All covered — same travel-included pricing for groups of 5+ people. Smaller groups have a transport surcharge." }
    ],
    priceFromDop: 17880,
    priceFromUsd: 300
  },
  {
    esPath: "/retratos-profesionales-en-estudio-santo-domingo/",
    enPath: "/en/professional-portrait-photography-santo-domingo/",
    enSlug: "professional-portrait-photography-santo-domingo",
    topic: "Professional portraits",
    title: "Professional Portrait Photography Santo Domingo · Babula Shots · 4.9★ 98 reviews",
    description: "Professional portrait sessions in Santo Domingo studio. Editorial-style lighting, multiple looks, retouched delivery in 48 hours. Personal, corporate and creative portraits.",
    h1: "Professional Portrait Photography in Santo Domingo",
    eyebrow: "Portrait photography · Babula Shots Estudio",
    intro: "A great portrait does one thing: it makes you look like the best version of yourself — not someone else, not an over-retouched version, just you, framed and lit deliberately. We've built a Santo Domingo studio with the lighting, backdrops and direction style that consistently produces portraits people actually want to use.",
    sections: [
      {
        h2: "Portrait styles we shoot",
        list: [
          "Classic editorial — clean background, soft directional light, neutral expression",
          "Personal branding — multi-look library for consultants, coaches, founders",
          "LinkedIn / corporate headshot — square crop ready, suit-and-tie or business casual",
          "Creative portraits — coloured gels, hard light, fashion-style direction",
          "Black-and-white character portraits — dramatic contrast, monochrome editing",
          "Couple portraits — soft natural posing, edited in colour and B&W"
        ]
      },
      {
        h2: "What's included",
        paragraphs: [
          "60-minute studio session with 2–3 outfit changes. We shoot 80–150 frames per session and deliver 15–25 fully edited high-resolution images. Standard delivery: 48 hours via a private online gallery. Express 24-hour available."
        ]
      },
      {
        h2: "Direction style",
        paragraphs: [
          "We direct gently — small adjustments to head tilt, chin angle, shoulder line — rather than asking you to hold uncomfortable poses. Most clients tell us they expected the session to feel awkward and it didn't. The first 5 minutes are about getting comfortable; the rest is just shooting."
        ]
      }
    ],
    faq: [
      { q: "How long is a portrait session?", a: "60 minutes standard. 90 minutes if you want multiple looks with significant outfit/styling changes." },
      { q: "Do I need to bring anything?", a: "2–3 outfits, light makeup if you wear it daily. We provide everything else." },
      { q: "Retouching included?", a: "Yes — natural skin retouching, blemish removal, soft skin texture preservation. We don't over-edit." },
      { q: "Can I get unedited (RAW) files?", a: "No — we deliver finished work only. RAW files don't represent the final product and can be misused." }
    ],
    priceFromDop: 5960,
    priceFromUsd: 100
  },
  {
    esPath: "/fotografo-en-rd/",
    enPath: "/en/photographer-dominican-republic/",
    enSlug: "photographer-dominican-republic",
    topic: "Photographer DR",
    title: "Professional Photographer in Dominican Republic · Babula Shots · 4.9★ 98 reviews",
    description: "Bilingual professional photographer based in Santo Domingo, covering the entire Dominican Republic. Studio, weddings, real estate, drone. Polish-Dominican team since 2020.",
    h1: "Professional Photographer in the Dominican Republic",
    eyebrow: "About the photographer · Babula Shots",
    intro: "Babula Shots is a professional photography network based in Santo Domingo and covering the entire Dominican Republic — Punta Cana, La Romana, Casa de Campo, Samaná, Las Terrenas, Puerto Plata and every major destination in between. We work in Spanish, English and Polish, and we coordinate directly with international clients planning destination shoots in the DR.",
    sections: [
      {
        h2: "What we cover",
        list: [
          "Studio photography in Santo Domingo (portraits, headshots, fashion, food, commercial)",
          "Weddings across the Dominican Republic (destination, resort, civil, beach)",
          "Real estate photography for MLS, Airbnb, villas, hotels",
          "Certified drone services (DJI Mavic 3 Pro, IDAC-compliant)",
          "Editorial and commercial campaigns",
          "Event photography (corporate, social, sports)"
        ]
      },
      {
        h2: "The Babula Shots network",
        paragraphs: [
          "Rather than being one photographer who does everything, we run four specialised sub-brands so each service has dedicated focus: Estudio (studio + portraits), Bodas (weddings), Inmobiliaria (real estate), Drone. Same team, same standards, same contact number — but each subdomain has its own catalogue, pricing and FAQ for its specific service."
        ]
      },
      {
        h2: "Languages and international clients",
        paragraphs: [
          "Native Spanish, fluent English, Polish (Michal is Polish, based in Santo Domingo since 2020). We're set up for international booking — Wise, Zelle and credit card payments accepted for clients abroad, contracts in English on request."
        ]
      }
    ],
    faq: [
      { q: "Do you travel across the Dominican Republic?", a: "Yes — Santo Domingo, Punta Cana, Bávaro, Cap Cana, La Romana, Casa de Campo, Samaná, Las Terrenas, Puerto Plata, Bayahíbe, Juan Dolio, Jarabacoa, Miches all covered." },
      { q: "Can I book everything (wedding + drone + studio) through one contact?", a: "Yes — single contact for the whole network. We coordinate cross-team for bundled projects." },
      { q: "Do you work in English?", a: "Yes — bilingual support, English contracts, international payments." },
      { q: "What's your style?", a: "Documentary with light direction. Real moments, not over-posed. Editorial editing — true colour, no aggressive retouching." }
    ],
    priceFromDop: 5960,
    priceFromUsd: 100
  },
  {
    esPath: "/fotografia-alimentos-bebidas-republica-dominicana/",
    enPath: "/en/food-beverage-photography-dominican-republic/",
    enSlug: "food-beverage-photography-dominican-republic",
    topic: "Food photography",
    title: "Food & Beverage Photography Dominican Republic · Babula Shots · 4.9★ 98 reviews",
    description: "Professional food and beverage photography for restaurants, menus, social media and packaging. Studio or on-location in Santo Domingo and across the Dominican Republic.",
    h1: "Food & Beverage Photography in the Dominican Republic",
    eyebrow: "Food photography · Babula Shots Estudio",
    intro: "Food photography sells dishes that the menu copy can't describe. We shoot for restaurants, beverage brands, hotels and packaging clients across the Dominican Republic — clean overhead flatlays for menus, atmospheric scene shots for social media, isolated product shots for e-commerce.",
    sections: [
      {
        h2: "What we shoot",
        list: [
          "Restaurant menus — consistent lighting and treatment across the whole dish list",
          "Social media food content — Instagram-ready square and vertical crops",
          "Beverage and cocktail photography — backlit glass, pour shots, garnish detail",
          "Packaging shots — clean white-background product photography",
          "Hotel and resort F&B — atmospheric dining-room scenes with mood lighting",
          "Recipe and cookbook editorial — step-by-step process documentation"
        ]
      },
      {
        h2: "Studio or on-location",
        paragraphs: [
          "Studio in Santo Domingo gives us full lighting control and is best for menu shoots where consistency matters. On-location works for restaurants that want their dining-room atmosphere in the shot — we bring portable lighting that complements ambient warmth without over-correcting it."
        ]
      },
      {
        h2: "Delivery and usage",
        paragraphs: [
          "Standard delivery: 48–72 hours for menu and product shoots, 5 days for editorial sessions. All images come with full commercial usage rights — use on menus, websites, social media, packaging, ads."
        ]
      }
    ],
    faq: [
      { q: "Can you shoot a full menu in one day?", a: "Yes — typical capacity is 25–35 dishes in an 8-hour day, depending on complexity and styling time." },
      { q: "Do you provide a food stylist?", a: "For menu and product shoots we work directly with your kitchen team. For editorial campaigns we coordinate a dedicated food stylist (added cost)." },
      { q: "Studio vs. on-location pricing?", a: "Studio in Santo Domingo is typically less expensive (no travel, faster setup). On-location is needed when the venue atmosphere is part of the shot." },
      { q: "Do you shoot in Punta Cana / La Romana?", a: "Yes — for restaurant and hotel F&B clients across the DR. Travel from Santo Domingo is included for multi-hour shoots." }
    ],
    priceFromDop: 14900,
    priceFromUsd: 250
  },
  {
    esPath: "/estudio-fotografico-para-moda-en-rd/",
    enPath: "/en/fashion-photography-studio-dominican-republic/",
    enSlug: "fashion-photography-studio-dominican-republic",
    topic: "Fashion photography",
    title: "Fashion Photography Studio Dominican Republic · Babula Shots · 4.9★ 98 reviews",
    description: "Editorial fashion photography studio in Santo Domingo. Lookbooks, portfolios, brand campaigns, runway documentation. Profoto lighting and creative direction.",
    h1: "Fashion Photography Studio in the Dominican Republic",
    eyebrow: "Fashion photography · Babula Shots Estudio",
    intro: "Fashion in the Dominican Republic has its own visual language — colour, light, energy that doesn't translate well to imported aesthetics. We shoot for local designers, modeling agencies, fashion startups and editorial publications, with a setup built for both lookbook efficiency and editorial creativity.",
    sections: [
      {
        h2: "What we shoot",
        list: [
          "Designer lookbooks — full collection coverage, consistent treatment, white-background and styled",
          "Model portfolios — diverse looks, varied lighting, editorial finish",
          "Brand campaigns — concept-driven editorial with creative direction support",
          "Runway documentation — Fashion Week and private shows",
          "E-commerce product shots — clean white background, ghost mannequin",
          "Magazine editorial — fashion stories for local and international publications"
        ]
      },
      {
        h2: "Studio setup",
        paragraphs: [
          "Profoto lighting, multiple backdrop options (white seamless, coloured paper, textured fabric, set builds), 8m+ shooting depth for full-body fashion compositions. Hair and makeup station available. We work with a network of stylists, MUAs and assistants in Santo Domingo."
        ]
      },
      {
        h2: "Editorial and creative direction",
        paragraphs: [
          "We can shoot from your full creative brief or develop concept and styling collaboratively. For brand campaigns we offer pre-production planning — mood board, location scouting, model casting support — as a separate service."
        ]
      }
    ],
    faq: [
      { q: "Can you shoot a 40-piece lookbook in one day?", a: "Yes — efficient lookbook shooting in our studio averages 6–10 looks per hour for clean white-background shoots. A 40-piece collection wraps in one long day or two relaxed days." },
      { q: "Do you work with model agencies?", a: "Yes — we shoot test shoots and portfolio updates for the major Santo Domingo agencies and freelance models." },
      { q: "Can you handle on-location fashion shoots?", a: "Yes — beach, urban, architectural, jungle. We have a portable kit and crew for full-day on-location productions." },
      { q: "Commercial usage and licensing?", a: "Full commercial usage included in standard fashion packages. For exclusive long-term campaigns we offer extended licensing terms." }
    ],
    priceFromDop: 35760,
    priceFromUsd: 600
  },
  {
    esPath: "/sesion-de-fotografia-de-producto-con-tecnica-avanzada-de-iluminacion-2/",
    enPath: "/en/product-photography-studio-dominican-republic/",
    enSlug: "product-photography-studio-dominican-republic",
    topic: "Product photography",
    title: "Product Photography Studio Dominican Republic · Babula Shots · 4.9★ 98 reviews",
    description: "E-commerce, packaging and editorial product photography in Santo Domingo. White-background, lifestyle, hero-shot lighting. 48-hour delivery with commercial usage included.",
    h1: "Product Photography Studio in the Dominican Republic",
    eyebrow: "Product photography · Babula Shots Estudio",
    intro: "Whether you sell on Mercado Libre, Amazon, Shopify or in physical retail, your product images carry the weight of selling without a salesperson in the room. We shoot product photography for Dominican Republic brands and e-commerce sellers — clean white-background catalogue shots, atmospheric lifestyle photography, and high-impact hero shots for ads and packaging.",
    sections: [
      {
        h2: "Product photography styles we shoot",
        list: [
          "White-background e-commerce — clean, consistent, marketplace-ready",
          "Ghost mannequin — apparel without distracting mannequins or models",
          "Lifestyle product — in-use shots with models, props and ambient setting",
          "Hero / advertising — single dramatic shot for campaigns and landing pages",
          "Packaging detail — close-up texture, material and branding shots",
          "360° rotation — for e-commerce product viewers (separate package)"
        ]
      },
      {
        h2: "Studio capacity and turnaround",
        paragraphs: [
          "Our Santo Domingo studio handles small products (cosmetics, electronics, accessories) through medium (apparel, food packaging) efficiently. Typical capacity: 20–40 SKUs per day for white-background catalogue work, 8–15 SKUs for styled lifestyle shoots.",
          "Standard delivery is 48 hours for catalogue work, 72 hours for lifestyle and hero shots. All images include full commercial license — use on your website, ads, social media, packaging without per-use fees."
        ]
      },
      {
        h2: "What to send before the shoot",
        paragraphs: [
          "Send your product spec list (SKU, name, dimensions) and any brand guidelines (colours, mood references, competitor inspiration). We use this to plan the lighting style and shot list. For large catalogues we set up a shot-tracking sheet so nothing is missed."
        ]
      }
    ],
    faq: [
      { q: "Do I need to ship the products to the studio?", a: "Yes — ship in advance with a packing list. We unpack, photograph, repack and can return-ship if you need them back." },
      { q: "Can you photograph fragile or valuable items?", a: "Yes — we handle jewelry, electronics, glassware, art with appropriate care. Insurance considerations are discussed during quote." },
      { q: "Do you offer styling and props?", a: "For lifestyle shoots we work with a stylist who brings props or sources them. For pure white-background work no styling is needed." },
      { q: "Can you match the lighting of my existing catalogue?", a: "Yes — send sample images of your existing catalogue and we'll match treatment, angle and shadow style." },
      { q: "Pricing per SKU?", a: "Typical pricing is per-product for catalogue work, per-day for lifestyle/hero shoots. Send your SKU count for a tailored quote." }
    ],
    priceFromDop: 14900,
    priceFromUsd: 250
  },
  {
    esPath: "/fotos-pantalla-verde-estudio-santo-domingo/",
    enPath: "/en/green-screen-chroma-key-photography-santo-domingo/",
    enSlug: "green-screen-chroma-key-photography-santo-domingo",
    topic: "Green screen photography",
    title: "Green Screen Chroma Key Photography Studio Santo Domingo · Babula Shots",
    description: "Professional green screen (chroma key) photo and video in Santo Domingo. For composite imagery, virtual backgrounds, broadcast and creative campaigns. Studio in Santo Domingo.",
    h1: "Green Screen / Chroma Key Photography in Santo Domingo",
    eyebrow: "Chroma key studio · Babula Shots Estudio",
    intro: "Green screen photography opens creative possibilities that no location shoot can match — drop your subject into any background, build composite scenes, produce broadcast-ready footage with virtual sets. Our Santo Domingo studio is set up for both photo and video chroma key work with proper lighting, evenly-lit screens and clean edge separation.",
    sections: [
      {
        h2: "What we shoot on green screen",
        list: [
          "Composite advertising imagery — subject + custom background composited in post",
          "Broadcast and virtual-set video for TV presenters and YouTube creators",
          "Real estate virtual staging — show people in spaces they've never visited",
          "Corporate training videos with branded backgrounds",
          "Editorial fashion with surreal or impossible backgrounds",
          "E-commerce product cutouts for transparent-background catalogue images"
        ]
      },
      {
        h2: "Why studio chroma key matters",
        paragraphs: [
          "A clean key starts with even lighting on the green screen, separated by at least 2m from the subject so green spill doesn't contaminate skin and hair edges. Our studio is set up with the lighting separation that makes post-production keying clean, fast and refund-proof.",
          "Bad chroma key shoots create work that can't be fixed in post — green fringes, halos around hair, blown-out highlights. We light to avoid all of that from the start."
        ]
      },
      {
        h2: "Delivery options",
        paragraphs: [
          "We can deliver the raw keyed image (transparent background PNG/EXR) for you to composite, OR we can do the full composite in-house if you provide the background plate. Discuss when you book."
        ]
      }
    ],
    faq: [
      { q: "Can you handle blonde or curly hair on green screen?", a: "Yes — these are the hardest cases for keying but with proper edge lighting and a backlight rim we get clean separation. Send a sample of hair type when booking." },
      { q: "Photo and video in the same session?", a: "Yes — same setup serves both. Most sessions deliver photo composites + a video clip." },
      { q: "Do you provide the composited background or just the keyed subject?", a: "Both options available. Pure keying is faster/cheaper; full composite includes background plate sourcing or creation." },
      { q: "Can I direct from a remote location?", a: "Yes — we set up a tethered shooting station so a remote art director can review every shot live via screen-share." }
    ],
    priceFromDop: 11900,
    priceFromUsd: 200
  },
  {
    esPath: "/lugares-recomendados-para-alquilar-un-estudio-de-fotografia-en-republica-dominicana/",
    enPath: "/en/rent-photography-studio-dominican-republic/",
    enSlug: "rent-photography-studio-dominican-republic",
    topic: "Studio rental",
    title: "Rent a Photography Studio in the Dominican Republic · Babula Shots Estudio",
    description: "Professional photography studio rental in Santo Domingo. Profoto lighting, multiple backdrops, equipment included. Hourly and daily rates for photographers and brands.",
    h1: "Rent a Photography Studio in the Dominican Republic",
    eyebrow: "Studio rental · Babula Shots Estudio",
    intro: "If you're a photographer, brand or content creator and you need a fully-equipped photography studio in Santo Domingo for your own production, we offer studio rental at hourly and daily rates. Profoto lighting, multiple backdrops, modifiers, dressing area — everything ready, you just bring your camera (or rent ours too).",
    sections: [
      {
        h2: "What's included in studio rental",
        list: [
          "Full Profoto lighting kit (strobes + modifiers — softboxes, octaboxes, beauty dish, grids, gels)",
          "Multiple backdrops — white seamless, black, grey, coloured paper, textured fabric",
          "C-stands, light stands, sandbags, gobos",
          "Dressing area with mirror, steamer and hangers",
          "WiFi, AC, beverages",
          "Loading-area access for equipment cases"
        ]
      },
      {
        h2: "Rates",
        paragraphs: [
          "Hourly: from RD$2,500/hr (3-hour minimum). Half-day (4 hr): from RD$8,000. Full-day (8 hr): from RD$14,000. Add-ons: assistant from RD$1,500/hr, camera kit rental, hair/makeup coordination."
        ]
      },
      {
        h2: "Who rents from us",
        list: [
          "Independent photographers without studio space",
          "International photographers visiting the DR for client work",
          "Brand teams running in-house photo days",
          "Content creators producing video and photo simultaneously",
          "Educators teaching photography workshops"
        ]
      }
    ],
    faq: [
      { q: "Do I need to book in advance?", a: "Yes — at least 48h ahead. Weekend slots fill 1–2 weeks out. Weekday slots often available same-week." },
      { q: "Can I bring my own lighting?", a: "Yes — we have plenty of outlets and floor space. Most renters use our Profoto kit because the modifier collection is hard to match." },
      { q: "Is there parking?", a: "Yes — street parking nearby, with a loading zone for equipment cases." },
      { q: "Can I rent overnight or weekend?", a: "Yes — weekend rentals available with advance booking. Overnight productions case-by-case." }
    ],
    priceFromDop: 2500,
    priceFromUsd: 42
  },
  {
    esPath: "/tecnicas-en-estudio/",
    enPath: "/en/studio-photography-lighting-techniques/",
    enSlug: "studio-photography-lighting-techniques",
    topic: "Studio techniques",
    title: "Studio Photography Lighting Techniques · Babula Shots Estudio",
    description: "Studio photography lighting techniques we use at Babula Shots: Rembrandt, butterfly, split, loop, broad, short lighting. How each shapes the portrait and when to use which.",
    h1: "Studio Photography Lighting Techniques",
    eyebrow: "Studio techniques · Babula Shots Estudio",
    intro: "Studio portraits live or die on light direction. The same person, same camera, same backdrop will produce a completely different image with Rembrandt vs. butterfly lighting. Here are the techniques we use at our Santo Domingo studio and when each one is the right call.",
    sections: [
      {
        h2: "The six classic lighting patterns",
        listIntro: "Every studio portrait can be traced to one of these patterns:",
        list: [
          "Rembrandt lighting — small triangle of light on the shadow-side cheek. Dramatic, character-focused. Works on most faces.",
          "Butterfly / paramount lighting — light directly in front and above the subject, creating a shadow under the nose. Classic Hollywood glamour. Best for symmetric faces.",
          "Split lighting — light from 90° to one side, splitting the face in half. Bold, dramatic, character study.",
          "Loop lighting — small loop-shaped shadow from the nose. Most versatile, flattering on nearly everyone. Default for headshots.",
          "Broad lighting — main light on the side of the face turned toward camera. Makes face look wider. Used for slim or angular faces.",
          "Short lighting — main light on the side turned away. Slims the face. Used for fuller faces."
        ]
      },
      {
        h2: "Hard vs soft light",
        paragraphs: [
          "Soft light (large modifier close to the subject) creates gradual shadow transitions and flatters skin. Used for most portraits, fashion, beauty. Hard light (small modifier or bare bulb) creates sharp shadow edges and emphasizes texture. Used for character portraits, B&W work, dramatic editorial.",
          "Most of our portrait work uses soft light from a large octabox or softbox. We switch to hard light for editorial sessions where character matters more than flattery."
        ]
      },
      {
        h2: "Adding accent lights",
        paragraphs: [
          "Beyond the key light, accent lights shape the image: a hair light separates the subject from the background, a fill light softens shadows, a rim light traces the silhouette. We typically use 2–4 lights per portrait depending on the look."
        ]
      }
    ],
    faq: [
      { q: "Can I request a specific lighting style?", a: "Yes — if you have a reference image you love, send it and we'll match the lighting style." },
      { q: "What lights do you use?", a: "Profoto strobes (D2 and B10X kit) with modifiers from softboxes through grids and gels." },
      { q: "Do you teach workshops?", a: "Occasionally we run small private workshops for photographers. Email if interested." },
      { q: "Can I see a behind-the-scenes of a shoot?", a: "Yes — request when booking and we'll film a short BTS of your session." }
    ]
  },
  {
    esPath: "/galeria/",
    enPath: "/en/photo-gallery/",
    enSlug: "photo-gallery",
    topic: "Studio portfolio",
    title: "Photo Studio Gallery — Portfolio · Babula Shots Estudio · Santo Domingo",
    description: "Photo studio portfolio from Babula Shots Estudio in Santo Domingo. Portraits, fashion, food, corporate, maternity and creative studio sessions. Real client work.",
    h1: "Photo Studio Gallery",
    eyebrow: "Portfolio · Babula Shots Estudio",
    intro: "Below is selected work from our Santo Domingo studio — portrait, fashion, food, corporate, maternity, boudoir and creative sessions. Every image is real client work shot in our studio; no stock, no AI, no third-party stock licensing.",
    sections: [
      {
        h2: "What's in the portfolio",
        list: [
          "Editorial portraits — natural and styled, colour and black & white",
          "Corporate headshots — executive, team, LinkedIn-style",
          "Fashion sessions — designer lookbooks and model portfolios",
          "Food and beverage — menu, packaging and atmospheric scene shots",
          "Maternity and family — soft natural sessions with curated wardrobe",
          "Boudoir — private, respectful sessions in studio or hotel suite",
          "Creative & experimental — Snoot Óptico, gels, hard light editorial"
        ]
      },
      {
        h2: "How we work",
        paragraphs: [
          "Each session is direction-led — we talk through your goal in advance, plan a shot list, then shoot in short focused bursts so the energy stays high. Standard delivery is 5–7 days for portraits, 48 hours for headshots and product, 72 hours for editorial.",
          "Want to see specific examples in your category? Email us — we have extensive archives organised by session type and can share relevant portfolio links."
        ]
      },
      {
        h2: "Book your own session",
        paragraphs: [
          "If you want a session like the work you've seen, just message us with your date, topic and any reference images. We respond within 24 hours with a proposal."
        ]
      }
    ],
    faq: [
      { q: "Can I see full sessions, not just selects?", a: "Yes — request examples in your category by email and we'll send a private link to full session galleries." },
      { q: "Do you have a video reel?", a: "We're working on a portfolio reel — for now the static gallery is the most current view of our work." },
      { q: "Can I license images from the portfolio for my own use?", a: "No — all portfolio images are client work and not licensed for third-party use." }
    ]
  },
  {
    esPath: "/fotografias-de-retrato-en-blanco-y-negro/",
    enPath: "/en/black-and-white-portrait-photography/",
    enSlug: "black-and-white-portrait-photography",
    topic: "Black and white portraits",
    title: "Black & White Portrait Photography · Babula Shots · 4.9★ 98 reviews",
    description: "Editorial black and white portrait sessions in Santo Domingo. Dramatic monochrome lighting, character-focused direction, timeless prints. Studio in Santo Domingo.",
    h1: "Black & White Portrait Photography in Santo Domingo",
    eyebrow: "B&W portraits · Babula Shots Estudio",
    intro: "Black and white strips away colour distractions and forces the portrait to live or die on light, character and composition alone. We shoot dedicated B&W portrait sessions for clients who want a timeless, gallery-style result — not just a colour photo desaturated in post.",
    sections: [
      {
        h2: "How we shoot B&W differently",
        paragraphs: [
          "B&W portraits aren't just colour photos converted in post. We light for contrast (harder direction, deeper shadows, less fill), pose for character (stronger angles, deliberate expression), and pick wardrobe for tonal range rather than colour palette. The session is planned end-to-end for monochrome."
        ]
      },
      {
        h2: "When B&W works best",
        list: [
          "Character portraits — emphasis on personality and expression",
          "Editorial / magazine-style images",
          "Couple and family portraits with timeless feel",
          "Album covers and creative brand assets",
          "Photographic prints for home or office display",
          "Profile photos for clients who want something less generic than colour headshots"
        ]
      },
      {
        h2: "Editing approach",
        paragraphs: [
          "We deliver final B&W edits with full tonal range — deep blacks, clean whites, controlled grain. No flat grey conversions. Both digital files and print-ready versions are included; we partner with a Santo Domingo print lab if you want fine-art prints or framed wall art."
        ]
      }
    ],
    faq: [
      { q: "Can I get colour AND B&W versions of the same shot?", a: "Yes — if you book a regular portrait session and just want a B&W edit added, no extra cost. The dedicated B&W session uses different lighting from the start." },
      { q: "What should I wear?", a: "Solid tones with strong tonal contrast — deep black, crisp white, mid-grey. Avoid bright primary colours that translate to flat mid-tones in B&W." },
      { q: "Do you offer prints?", a: "Yes — through our Santo Domingo print lab partner, with sizes from 8×10 to large framed wall art." },
      { q: "How long is the session?", a: "60–90 minutes including styling discussion and lighting setup." }
    ],
    priceFromDop: 5960,
    priceFromUsd: 100
  },
  {
    esPath: "/sesion-de-fotos-para-empresas-en-rd/",
    enPath: "/en/corporate-headshots-dominican-republic/",
    enSlug: "corporate-headshots-dominican-republic",
    topic: "Corporate / Business photography",
    title: "Corporate Headshots Santo Domingo · Babula Shots · 4.9★ 98 reviews",
    description: "Professional business headshots at Babula Shots Estudio in Santo Domingo, DR. Studio lighting, fast 3-day delivery, packages from RD$3,000. Book online or WhatsApp us today.",
    h1: "Corporate Headshots & Business Photography in the Dominican Republic",
    eyebrow: "Business photography · Babula Shots Estudio · Santo Domingo, DR",
    intro: "First impressions happen in seconds — and in today's digital world, your professional photo is often the first thing clients, partners, and recruiters see. At Babula Shots Estudio in Santo Domingo, we specialize in corporate headshots and business photography that make executives, teams, and brands look their absolute best. From solo CEO portraits to full company shoots, we deliver polished, high-resolution images ready for LinkedIn, your website, and marketing materials.",
    sections: [
      {
        h2: "Studio Packages & Pricing",
        paragraphs: ["We offer three straightforward packages designed to fit solo professionals, small teams, and larger corporate clients. All sessions take place at our professionally equipped studio in Santo Domingo and include expert retouching and a high-resolution digital gallery delivered within three business days.", "Need something outside our standard packages? Our client services team is happy to put together a custom quote tailored to your project, timeline, and budget."],
        listIntro: "Choose the package that fits your needs:",
        list: ["Starter — 5 retouched digital photos | 30-minute studio session | Digital gallery | RD$3,000 | 3-day delivery", "Professional — 10 retouched digital photos | 120-minute studio session | Digital gallery | RD$9,000 | 3-day delivery", "Premium — 15 retouched digital photos | 120-minute studio session | Digital gallery | RD$12,000 | 3-day delivery"]
      },
      {
        h2: "Why Businesses Choose Babula Shots Estudio",
        paragraphs: ["We've worked with executives, entrepreneurs, and corporate teams across a wide range of industries throughout the Dominican Republic. Whether you need a commanding CEO portrait, consistent headshots for an entire department, or imagery for an advertising campaign, we know how to translate your brand identity into compelling visuals.", "Our studio is built around professional-grade lighting systems that produce sharp, clean, well-lit portraits with a polished finish. We use advanced lighting techniques to enhance your features and project the confidence and authority your brand deserves."],
        list: ["State-of-the-art studio lighting for flawless, publication-ready results", "Experienced photographers with a background in corporate and executive portraiture", "Comfortable, relaxed environment that brings out natural, authentic expressions", "Fast 3-day turnaround — because we know time is money in the business world", "Professional retouching included in every package"],
        listIntro: "What sets us apart:"
      },
      {
        h2: "A Tailored Experience from Start to Finish",
        paragraphs: ["No two clients are alike, and we don't treat them that way. Before your session, we'll discuss your goals, brand guidelines, and how the images will be used — so everything we produce feels intentional and on-brand. Whether you're refreshing your LinkedIn profile, updating your company website, or preparing a press kit, we build the session around your specific needs.", "Our Santo Domingo studio is designed to put you at ease the moment you walk in. A relaxed client makes for natural, confident photos — and that's exactly the impression you want to leave."],
        list: [],
        listIntro: undefined
      },
      {
        h2: "What You Receive After Your Session",
        paragraphs: ["Within three business days of your shoot, you'll receive a private digital gallery with your fully retouched images in maximum resolution. Files are optimized for both digital use (websites, social media, email signatures) and print (business cards, brochures, press materials).", "Need extra images or a longer session? Just ask. We can scale any package to match your project scope."],
        list: ["High-resolution retouched digital files", "Private online gallery for easy download and sharing", "Images ready for web, social media, and print", "3-business-day delivery on all packages"],
        listIntro: "Every package includes:"
      }
    ],
    faq: [
      { q: "How long does a corporate headshot session take at Babula Shots?", a: "Our Starter package includes a 30-minute session, while both the Professional and Premium packages are 120-minute sessions. The longer sessions give us time to try different looks, backgrounds, or outfits — ideal for teams or clients who need more variety." },
      { q: "How quickly will I receive my photos?", a: "All packages come with a 3-business-day turnaround. You'll receive a link to your private digital gallery with fully retouched, high-resolution images ready to download." },
      { q: "Do you offer group or team headshot packages?", a: "Yes. While our listed packages are designed with individuals in mind, we regularly photograph full teams and corporate groups. Contact us directly and we'll put together a custom quote based on the number of people and your specific requirements." },
      { q: "What should I wear to my business headshot session?", a: "We recommend wearing professional attire that aligns with your industry and brand. Solid colors tend to photograph better than busy patterns. If you'd like more guidance before your session, our team is happy to advise." },
      { q: "Where is Babula Shots Estudio located?", a: "Our studio is based in Santo Domingo, Dominican Republic. You can book online, give us a call, or reach us via WhatsApp to confirm the exact address and schedule your session." },
      { q: "Can I book a custom corporate photography package?", a: "Absolutely. If our standard packages don't quite fit your project — whether you need more images, on-location photography, or a longer session — reach out to our client services team and we'll design a plan that works for you." }
    ],
    priceFromDop: 3000
  },
  {
    esPath: "/estudio-fotografico-en-santo-domingo/",
    enPath: "/en/fashion-photography-studio-santo-domingo/",
    enSlug: "fashion-photography-studio-santo-domingo",
    topic: "Fashion photography",
    title: "Fashion Photography Studio in Santo Domingo · Babula Shots · 4.9★ 98 reviews",
    description: "Professional fashion photography in Santo Domingo, DR. Editorial shoots, lookbooks & ad campaigns with studio lighting. Book your session — call Babula Shots today.",
    h1: "Fashion Photography Studio in Santo Domingo, Dominican Republic",
    eyebrow: "Studio photography · Babula Shots Estudio",
    intro: "In fashion, image is everything — and the right studio makes all the difference. At Babula Shots Estudio in Santo Domingo, we combine precision lighting, versatile backdrops, and an experienced creative team to deliver fashion photos that command attention. Whether you need a polished lookbook, a high-impact editorial, or a full advertising campaign, our controlled studio environment gives your brand the visual edge it deserves.",
    sections: [
      {
        h2: "Why Shoot Fashion in a Professional Studio?",
        paragraphs: ["Outdoor locations have their charm, but when it comes to fashion photography, a professional studio gives you a level of control that's simply impossible to replicate outside. No rain delays, no unwanted shadows, no scrambling because the golden hour disappeared behind a cloud. Every minute of your session stays focused on what matters: creating stunning images.", "At Babula Shots Estudio, our Santo Domingo studio is equipped with continuous lights, strobes, and a full range of modifiers so we can dial in exactly the look your project demands — whether that's soft, romantic diffusion or punchy high-contrast drama straight out of a luxury magazine."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Studio Advantages That Elevate Every Shot",
        paragraphs: [],
        listIntro: "Here's what sets a professional fashion studio session apart from the rest:",
        list: ["Perfect lighting for every style — tailored setups that highlight textures, colour, and garment construction with pinpoint accuracy.", "Versatile backdrops — seamless neutrals for minimalist campaigns, bold colours for brand personality, or textured surfaces for artistic editorial work.", "Full climate and environment control — no weather surprises, no wasted time, no compromises.", "Detail-focused optics — specialist lenses and lighting techniques that capture every pleat, stitch, and accessory at its best.", "Quick backdrop changes — mix multiple looks within a single session to maximise variety and value."]
      },
      {
        h2: "Fashion Session Types We Specialise In",
        paragraphs: ["Every fashion project has its own goals, and we tailor each shoot to match. From intimate designer portraits to large-scale campaign production, Babula Shots Estudio has the experience and equipment to deliver."],
        listIntro: "Our most popular fashion photography formats include:",
        list: ["Fashion editorials — expressive, conceptual images built for magazines, luxury campaigns, and creative portfolios.", "Brand lookbooks — clean, well-lit catalogue photography that presents collections clearly for e-commerce and print.", "Haute couture sessions — elegant, sophisticated imagery that lets the craftsmanship of designer pieces take centre stage.", "Advertising campaigns — strategically crafted visuals designed to represent your brand identity and connect with your target audience."]
      },
      {
        h2: "How to Prepare for Your Studio Fashion Shoot",
        paragraphs: ["Great results start before the camera fires. Once you book your session with Babula Shots Estudio, we'll walk you through everything — but here are the essentials to keep in mind.", "Choose your looks carefully: garments, accessories, and shoes should all reflect the concept you want to convey on camera. Professional hair and make-up are highly recommended — the right team enhances the model without overshadowing the clothing. Finally, come ready to move. A great fashion photographer will guide you through poses and expressions that carry attitude and sell the story, but bringing energy and confidence into the studio makes every frame stronger."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Book Your Fashion Photography Session in Santo Domingo",
        paragraphs: ["Babula Shots Estudio is Santo Domingo's go-to studio for fashion photographers, emerging models, established designers, and brands that refuse to settle for average. Our team brings creative direction, technical expertise, and genuine passion for the craft to every project.", "Ready to build a portfolio or campaign that turns heads? Get in touch today to discuss your concept, check availability, and lock in your date."],
        list: [],
        listIntro: ""
      }
    ],
    faq: [
      { q: "Where is Babula Shots Estudio located?", a: "Babula Shots Estudio is based in Santo Domingo, Dominican Republic. Contact us directly for the exact studio address and directions." },
      { q: "What types of fashion photography do you offer?", a: "We cover the full range: editorial shoots, brand lookbooks, haute couture sessions, and advertising campaigns. Each session is customised to your concept and goals." },
      { q: "Do I need to bring my own hair and make-up team?", a: "You're welcome to bring your own team. We can also recommend trusted hair and make-up professionals in Santo Domingo if you need referrals — just ask when you book." },
      { q: "How long does a studio fashion shoot typically take?", a: "Session length depends on the number of looks, outfit changes, and backdrop setups. We'll agree on a schedule during the booking process to make sure there's enough time to do your project justice." },
      { q: "Can I change backdrops during my session?", a: "Absolutely. Our studio has multiple backdrop options, and switching between them mid-session is straightforward — a great way to add variety to a lookbook or editorial without booking extra days." },
      { q: "How do I book a fashion photography session at Babula Shots Estudio?", a: "Reach out via our website or give us a call to discuss your project, confirm availability, and reserve your studio time. We recommend booking in advance, especially for larger productions." }
    ],
  },
  {
    esPath: "/fotos-estudio/",
    enPath: "/en/professional-studio-photography-santo-domingo/",
    enSlug: "professional-studio-photography-santo-domingo",
    topic: "Studio photography",
    title: "Studio Photography Santo Domingo · Babula Shots · 4.9★ 98 reviews",
    description: "Professional studio photography in Santo Domingo, DR — portraits, family sessions, maternity, newborn & product shoots. Perfect lighting, every time. Book today!",
    h1: "Professional Studio Photography in Santo Domingo, Dominican Republic",
    eyebrow: "Studio photography · Babula Shots Estudio",
    intro: "Some photos deserve more than a lucky moment — they deserve perfect light, a clean backdrop, and a photographer who controls every detail. At Babula Shots Estudio in Santo Domingo, our fully equipped photography studio gives you exactly that: a controlled, professional environment built to capture portraits, family milestones, product shots, maternity sessions, and fashion editorials at their absolute best.",
    sections: [
      {
        h2: "Why a Controlled Studio Environment Makes All the Difference",
        paragraphs: ["Outdoor shoots are beautiful, but they come with trade-offs — shifting sunlight, unpredictable weather, and distracting backgrounds. In a professional studio, none of that is a factor. At Babula Shots Estudio, we control the lighting, the backdrop, and every technical element of the space, so the only thing that matters is you — or your product, your brand, or your family.", "Our studio is equipped with high-resolution cameras, professional softbox and strobe lighting, reflectors, and a curated selection of seamless backgrounds. Whether you need clean, crisp whites for e-commerce or dramatic shadows for an editorial portrait, we set the scene to match your vision."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Studio Session Types at Babula Shots Estudio",
        paragraphs: [],
        listIntro: "Our Santo Domingo studio is versatile enough to handle a wide range of photography needs. Popular session types include:",
        list: ["Professional Headshots & Portraits — ideal for executives, actors, models, and anyone who needs a polished, high-quality image for LinkedIn, a résumé, or a portfolio.", "Family Photography — from classic formal poses to relaxed, candid-style groupings, studio sessions guarantee perfect lighting with no distracting backgrounds, so the focus stays on your family.", "Maternity & Newborn Photography — soft, flattering light and carefully chosen props make these emotionally rich sessions truly timeless. We specialise in the delicate details that define these early moments.", "Product Photography — clean angles, neutral or custom backdrops, and precise lighting make your products look their best for catalogues, online stores, and ad campaigns.", "Fashion & Editorial Photography — dramatic compositions, bold lighting setups, and a creative team ready to bring your concept to life, whether for a model portfolio or a brand campaign."]
      },
      {
        h2: "Portrait Sessions: Your Image, Elevated",
        paragraphs: ["A great portrait does more than show what you look like — it communicates who you are. Our studio portrait sessions use carefully positioned softbox lighting to flatter facial features, reduce harsh shadows, and bring out natural skin tones. The result is an image that feels polished but genuine.", "These sessions are especially popular with professionals building their personal brand, models updating their portfolio, and creatives who want a standout profile image. We also offer black-and-white portrait options for a classic, timeless aesthetic."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Product & Fashion Photography in Santo Domingo",
        paragraphs: ["If you sell products online or need commercial-quality imagery for a marketing campaign, the studio is the smartest investment you can make. At Babula Shots Estudio, we work with local and regional brands to produce consistent, high-quality product photos that convert browsers into buyers.", "Fashion shoots at our Santo Domingo studio have the same attention to detail — precise lighting ratios, thoughtful composition, and an experienced photographer who understands how clothing, accessories, and styling translate on camera."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Book Your Studio Session in Santo Domingo",
        paragraphs: ["Babula Shots Estudio is conveniently located in Santo Domingo and serves clients throughout the Dominican Republic, including Punta Cana and surrounding areas. Our team speaks both Spanish and English, making it easy for international clients and expats to book and communicate.", "Ready to create images that last a lifetime — or drive real business results? Reach out to us today to check availability, discuss your project, and get a personalised quote for your studio session."],
        list: [],
        listIntro: ""
      }
    ],
    faq: [
      { q: "What types of studio photography does Babula Shots offer in Santo Domingo?", a: "Babula Shots Estudio offers a full range of studio sessions including professional headshots, family portraits, maternity and newborn photography, product photography, and fashion or editorial shoots. Each session is tailored to the client's needs." },
      { q: "How long does a studio photography session take?", a: "Session length varies by type. A professional headshot session can be completed in 30–60 minutes, while family, maternity, or fashion sessions typically run 1–2 hours. We'll give you a clear time estimate when you book." },
      { q: "Do I need to bring my own props or outfits to the studio?", a: "For most sessions, you're welcome to bring outfits and personal items that reflect your style. Our studio also has a selection of props and accessories, particularly for newborn and maternity sessions. We'll advise you on what to bring during the booking process." },
      { q: "Can Babula Shots photograph products for my online store?", a: "Absolutely. Product photography is one of our core studio services. We produce clean, commercially ready images suitable for e-commerce listings, printed catalogues, and digital advertising campaigns." },
      { q: "Is the studio available for clients outside Santo Domingo, such as Punta Cana?", a: "Yes — while our studio is based in Santo Domingo, Babula Shots serves clients from across the Dominican Republic, including Punta Cana. Contact us to discuss travel options or to schedule your session." },
      { q: "How do I book a studio session at Babula Shots Estudio?", a: "You can get in touch via our website contact form or by phone to check availability and discuss your project. We'll walk you through session options, pricing, and how to prepare so you get the most from your shoot." }
    ],
  },
  {
    esPath: "/sesion-y-servicio-de-fotografia-en-estudio-profesional-en-santo-domingo/",
    enPath: "/en/professional-studio-photography-santo-domingo/",
    enSlug: "professional-studio-photography-santo-domingo",
    topic: "Professional studio photography",
    title: "Professional Studio Photography in Santo Domingo · Babula Shots · 4.9★ 98 reviews",
    description: "Book a professional photo session at Babula Shots Estudio in Santo Domingo, DR. Portraits, fashion, products & more. High-end gear, expert editing. Call to reserve today.",
    h1: "Professional Studio Photography Sessions in Santo Domingo, Dominican Republic",
    eyebrow: "Studio photography · Babula Shots Estudio",
    intro: "A great photograph is more than a snapshot — it's a lasting record of a moment, a mood, or a brand. At Babula Shots Estudio in Santo Domingo, we combine professional-grade equipment, controlled studio lighting, and experienced direction to deliver images that truly stand out. Whether you need personal portraits, brand content, fashion shots, or product photography, our Santo Domingo studio is built to bring your vision to life.",
    sections: [
      {
        h2: "Why Choose a Professional Photography Studio in Santo Domingo?",
        paragraphs: ["Shooting in a professional studio gives you a level of consistency and control that outdoor or informal sessions simply can't match. At Babula Shots Estudio, every element of the environment — lighting, backdrops, angles — is dialed in before the shutter clicks, so the final image looks exactly as intended.", "Our photographers don't just point and shoot. They guide you through posing, wardrobe choices, and backdrop selection, making sure every frame captures the best version of you or your product. That hands-on direction is what separates a forgettable snapshot from a portfolio-worthy image."],
        listIntro: "Key advantages of booking a studio session with us:",
        list: ["High-resolution cameras and professional lenses for razor-sharp results", "Fully controlled studio lighting — no harsh sun, no awkward shadows", "Multiple backdrop styles to match any aesthetic or brand identity", "Expert posing guidance and creative direction throughout your session", "Professional post-production: color grading, retouching, and final delivery"]
      },
      {
        h2: "Studio Session Types We Offer",
        paragraphs: ["Babula Shots Estudio handles a wide range of photography needs under one roof. From individual portraits to commercial product shoots, our team adapts the setup, lighting scheme, and creative approach to suit each project.", "No two sessions look the same. We work closely with every client to understand the purpose of the photos — social media content, corporate headshots, editorial fashion, or personal keepsakes — and tailor the entire experience accordingly."],
        listIntro: "Popular session types available at our Santo Domingo studio:",
        list: ["Portrait photography — individuals, couples, and families", "Fashion and editorial photography", "Product and commercial photography", "Social media content creation", "Corporate headshots and professional profiles", "Artistic and conceptual photo shoots"]
      },
      {
        h2: "Professional Editing and Post-Production",
        paragraphs: ["The session is only half the story. After the shoot, every selected image goes through a thorough post-production process — exposure balancing, color correction, skin retouching, and detail enhancement — so what you receive is a polished, print-ready or web-ready file, not a raw draft.", "This level of finishing is what separates a professional studio like Babula Shots from a quick, informal shoot. You walk away with images you're genuinely proud to share, publish, or print."],
        list: [],
        listIntro: undefined
      },
      {
        h2: "Booking Your Studio Session at Babula Shots Estudio",
        paragraphs: ["Getting started is simple. Reach out to our team in Santo Domingo to discuss your goals, choose a session type, and schedule your shoot. We'll advise you on wardrobe, timing, and anything else you need to prepare so the day of your session runs smoothly.", "Babula Shots Estudio is centrally located in Santo Domingo, Dominican Republic, and serves clients from across the country — from individuals and creatives to businesses and marketing agencies looking for consistent, high-quality visual content."],
        list: [],
        listIntro: undefined
      }
    ],
    faq: [
      { q: "How long does a studio photography session at Babula Shots take?", a: "Session length varies depending on the type of shoot. A standard portrait session typically runs 1–2 hours, while commercial or multi-look fashion shoots may take longer. We'll give you a clear time estimate when you book." },
      { q: "What should I wear to my studio photo session?", a: "Our photographers will give you personalized wardrobe guidance based on your session type and goals. As a general rule, solid colors and classic cuts photograph well in studio settings and keep the focus on you." },
      { q: "Does Babula Shots Estudio offer product photography in Santo Domingo?", a: "Yes. We offer full commercial product photography services, including lighting setups tailored for e-commerce, advertising, and editorial use. Contact us to discuss your product and we'll recommend the best approach." },
      { q: "How are the final edited photos delivered?", a: "Finished images are delivered digitally in high resolution, ready for print or digital use. We'll confirm the exact format and turnaround time when you book your session." },
      { q: "Can I book a studio session for social media content creation?", a: "Absolutely. Social media content shoots are one of our most popular services. We can plan multiple looks or concepts in a single session to give you a batch of cohesive, on-brand images ready to post." },
      { q: "Where is Babula Shots Estudio located?", a: "Babula Shots Estudio is based in Santo Domingo, Dominican Republic. Get in touch through our website or by phone to confirm the studio address and schedule your visit." }
    ],
  },
  {
    esPath: "/servicio-de-fotografia-profesional-en-estudio-en-santo-domingo-en-rd/",
    enPath: "/en/fashion-editorial-studio-photography-santo-domingo/",
    enSlug: "fashion-editorial-studio-photography-santo-domingo",
    topic: "Fashion & editorial studio photography",
    title: "Fashion & Editorial Studio Photography Santo Domingo · Babula Shots · 4.9★ 98 reviews",
    description: "Look your absolute best with a fashion or editorial studio session at Babula Shots in Santo Domingo. High-end lighting, creative backdrops, flawless edits. Book via WhatsApp today.",
    h1: "Fashion & Editorial Studio Photography in Santo Domingo, Dominican Republic",
    eyebrow: "Studio photography · Babula Shots Estudio",
    intro: "Whether you're building a modeling portfolio, shooting content for a brand, or simply want stunning images that reflect your personal style, Babula Shots Estudio delivers a fully professional fashion photography experience in the heart of Santo Domingo. Our purpose-built studio combines editorial-grade lighting, creative backdrops, and expert direction so every frame tells a story worth sharing.",
    sections: [
      {
        h2: "A Studio Designed Around Your Vision",
        paragraphs: ["Not every photographer has a space that keeps up with great ideas — ours does. Babula Shots Estudio is set up specifically for fashion and editorial work, giving you the controlled environment you need to produce images that look like they belong in a magazine, a lookbook, or a high-profile social campaign.", "From the moment you arrive, the focus is entirely on you. We work with you on posing, styling direction, and mood so the final gallery captures your personality, not just your outfit."],
        list: [],
        listIntro: ""
      },
      {
        h2: "What to Expect from Your Studio Session",
        paragraphs: [],
        listIntro: "Every fashion and editorial session at Babula Shots Estudio includes:",
        list: ["Professional studio lighting tailored to your look and skin tone", "A curated selection of creative and neutral backdrops", "On-set posing guidance from an experienced photographer", "High-resolution, fully retouched final images", "A comfortable, private studio environment in Santo Domingo"]
      },
      {
        h2: "Perfect for Models, Creatives, and Brands",
        paragraphs: ["A strong portfolio starts with strong images. Whether you're an aspiring model looking for agency-ready shots, a content creator who wants editorial-quality visuals, or a brand that needs polished product or lookbook photography, our studio sessions are built to deliver results you can actually use.", "Sunny and the Babula Shots team have developed a workflow that keeps the session relaxed and productive — so you get more usable shots in less time, without ever feeling rushed or uncomfortable in front of the camera."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Why Clients in the Dominican Republic Choose Babula Shots",
        paragraphs: ["With a 4.9-star rating across 98 reviews, Babula Shots Estudio has become one of Santo Domingo's most trusted names in professional studio photography. Clients return not just for the quality of the images, but for the whole experience — a team that listens, a space that inspires, and results that exceed expectations.", "We serve clients across Santo Domingo and the broader Dominican Republic, and we're always happy to discuss custom projects, collaboration ideas, or specific creative briefs before you book."],
        list: [],
        listIntro: ""
      }
    ],
    faq: [
      { q: "How long does a fashion studio session at Babula Shots last?", a: "Session length varies depending on the package you choose. We recommend discussing your goals in advance — whether it's a quick personal branding shoot or a full editorial day — so we can plan the right amount of time for your project." },
      { q: "Do I need modeling experience to book a studio session?", a: "Not at all. Our photographer provides hands-on posing direction throughout the session, so you'll always know how to position yourself for the best shot. Many of our most popular galleries feature first-time clients." },
      { q: "What should I wear to a fashion photo session?", a: "Bring outfits that reflect the look you want to project — bold, minimalist, editorial, or everyday chic. We suggest bringing at least two or three outfit options so we can create variety across your gallery." },
      { q: "Where is Babula Shots Estudio located?", a: "We are based in Santo Domingo, Dominican Republic. Contact us via WhatsApp or phone to get the exact studio address and schedule your session." },
      { q: "Can Babula Shots handle brand or commercial editorial shoots?", a: "Yes. We work with brands, designers, and creative agencies on editorial, lookbook, and campaign photography. Reach out to discuss your brief and we'll put together a tailored proposal." },
      { q: "How do I book a studio photography session?", a: "The easiest way is to message us on WhatsApp or give us a call — you can also schedule a video call to walk through your project before committing to a date." }
    ],
  },
  {
    esPath: "/galeria-estudio-sesion-de-fotos-comida-santo-domingo/",
    enPath: "/en/italian-food-photography-studio-santo-domingo/",
    enSlug: "italian-food-photography-studio-santo-domingo",
    topic: "Food photography",
    title: "Italian Food Photography Studio, Santo Domingo · Babula Shots · 4.9★ 98 reviews",
    description: "Professional food & restaurant photography in Santo Domingo. Studio sessions for Italian cuisine, menus & brands. Book your shoot — call or WhatsApp Babula Shots today.",
    h1: "Food Photography Studio in Santo Domingo, Dominican Republic",
    eyebrow: "Food & Restaurant Photography · Babula Shots Estudio",
    intro: "At Babula Shots Estudio, we turn dishes into cravings. Our Santo Domingo studio specialises in professional food photography — from Italian pasta and wood-fired pizza to full restaurant menu shoots. Whether you need imagery for social media, a delivery app, or a print menu, we craft every frame to make your food impossible to scroll past.",
    sections: [
      {
        h2: "Studio Food Photography That Sells",
        paragraphs: ["Great food photography is about more than a pretty plate. It's about light, texture, steam, colour, and composition working together to trigger an emotional response in the viewer. Our controlled studio environment in Santo Domingo lets us dial in every variable — no blown-out windows, no distracting backgrounds, no compromise.", "The gallery from our Italian cuisine session shows exactly what that looks like in practice: rich pasta dishes, glistening sauces, and artisan ingredients photographed with the depth and warmth that printed menus and Instagram feeds demand."],
        list: [],
        listIntro: ""
      },
      {
        h2: "What We Photograph",
        paragraphs: [],
        listIntro: "Our food and restaurant photography services cover a wide range of needs, including:",
        list: ["Full restaurant menu shoots — every dish, styled and consistent", "Italian cuisine and specialty food sessions in-studio", "Street food, fusion, and Caribbean cuisine", "Beverage and cocktail photography", "Delivery-app and e-commerce product shots", "Social media content packages for restaurants and food brands"]
      },
      {
        h2: "Serving Santo Domingo, Punta Cana & Beyond",
        paragraphs: ["Based in Santo Domingo, Babula Shots Estudio works with restaurants, chefs, hotels, and food brands across the Dominican Republic — including regular shoots in Punta Cana for resort restaurants and hospitality groups. Wherever you are on the island, we can bring the studio to you or welcome you to ours.", "Our portfolio includes dozens of successful food campaigns for both local favourites and international brands operating in the DR. We understand the local market, the light, and the visual language that resonates with Dominican and international diners alike."],
        list: [],
        listIntro: ""
      },
      {
        h2: "How a Studio Food Session Works",
        paragraphs: [],
        listIntro: "Booking a food photography session with Babula Shots is straightforward:",
        list: ["Consultation — we discuss your brand, menu, and goals via video call or WhatsApp", "Pre-shoot planning — shot list, styling direction, and prop sourcing", "Studio session — typically half-day or full-day depending on the volume of dishes", "Editing & delivery — fully retouched, print- and web-ready images delivered digitally", "Licensing — usage rights clearly outlined for menus, social media, and advertising"]
      },
      {
        h2: "Pricing & Booking",
        paragraphs: ["Every food photography project is different in scope, so we provide custom quotes based on the number of dishes, session length, and deliverables you need. Contact us to receive a tailored proposal with no obligation.", "Ready to make your food look as good as it tastes? Schedule a free video call, send us a WhatsApp message, or give us a call — we'd love to hear about your project."],
        list: [],
        listIntro: ""
      }
    ],
    faq: [
      { q: "Do you offer food photography for restaurants in Punta Cana as well as Santo Domingo?", a: "Yes. While our main studio is in Santo Domingo, Babula Shots Estudio regularly travels to Punta Cana for restaurant and hotel food shoots. Contact us to discuss on-location options." },
      { q: "Should the restaurant bring the food to the studio, or do you shoot on location?", a: "Both options are available. For the cleanest, most controlled results we recommend studio sessions where food is brought fresh to us. We also do on-location shoots at your restaurant if ambiance is part of the story." },
      { q: "How many dishes can be photographed in a single session?", a: "A half-day session typically covers 8–15 dishes depending on complexity and styling. A full-day session can accommodate 20 or more. We'll give you a realistic estimate after reviewing your menu." },
      { q: "What file formats and sizes will I receive?", a: "You'll receive fully retouched high-resolution JPEG files optimised for both print and digital use. Web-optimised versions for social media and delivery platforms are included." },
      { q: "How long does it take to receive the finished photos?", a: "Edited images are typically delivered within 5–7 business days after the shoot. Rush delivery can be arranged — just let us know your deadline when booking." },
      { q: "Can you help with food styling, or do I need to hire a separate stylist?", a: "Our team has hands-on experience with food styling and can guide plating and presentation on the day. For large-scale campaigns requiring a dedicated food stylist, we can recommend trusted professionals in Santo Domingo." }
    ],
  },
  {
    esPath: "/galeria-estudio-sesion-de-fotos-genesis/",
    enPath: "/en/black-and-white-studio-portrait-photography-santo-domingo/",
    enSlug: "black-and-white-studio-portrait-photography-santo-domingo",
    topic: "Studio portrait photography",
    title: "Black & White Studio Portraits Santo Domingo · Babula Shots · 4.9★ 98 reviews",
    description: "Timeless black & white studio portraits in Santo Domingo, DR. Professional softbox lighting, expert retouching & same-day booking. WhatsApp us to reserve your session.",
    h1: "Black & White Studio Portrait Photography in Santo Domingo, Dominican Republic",
    eyebrow: "Studio Photography · Babula Shots Estudio",
    intro: "Some portraits deserve to be seen in black and white. At Babula Shots Estudio in Santo Domingo, we craft timeless monochrome portraits using professional softbox lighting and carefully controlled studio conditions. Whether you want a single striking headshot or a full creative session, our studio gives you the clean, dramatic results that colour photography simply can't replicate.",
    sections: [
      {
        h2: "Professional Black & White Portraits — The Babula Shots Studio Experience",
        paragraphs: ["Our dedicated studio in Santo Domingo is set up specifically for portrait work. We use high-output softbox lighting rigs that wrap light evenly around your face, eliminating harsh shadows and revealing texture, depth, and expression in every frame. The result is the kind of polished monochrome portrait you'd expect from a high-end editorial shoot.", "Every session is led by an experienced photographer who guides you through poses, adjusts the lighting setup for your features, and keeps the atmosphere relaxed so your personality comes through naturally on camera."],
        list: [],
        listIntro: ""
      },
      {
        h2: "What's Included in Your Studio Session",
        paragraphs: [],
        listIntro: "When you book a black and white portrait session at Babula Shots Estudio, here's what you can expect:",
        list: ["Private use of our fully equipped Santo Domingo studio for your session", "Professional softbox and continuous lighting tailored to your look", "Expert direction on posing and expression throughout the shoot", "Monochrome processing with professional retouching on selected images", "High-resolution digital files delivered ready for print or social media", "Friendly, relaxed environment — no experience in front of a camera needed"]
      },
      {
        h2: "Why Black & White? The Timeless Power of Monochrome Portraiture",
        paragraphs: ["Stripping away colour forces the viewer to focus on what matters most: your expression, the geometry of light and shadow, and the story in your eyes. Black and white portraits have an enduring, editorial quality that holds up for decades — which is why they remain the gold standard for professional headshots, artistic portraits, and personal branding imagery.", "At Babula Shots Estudio we've fine-tuned our monochrome workflow to get the most out of every session. We shoot in RAW format and process each image individually, so the final photos have genuine tonal depth rather than a simple Instagram-style filter."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Book Your Portrait Session in Santo Domingo Today",
        paragraphs: ["Ready to see yourself in a whole new light? Booking your session at Babula Shots Estudio is simple. Reach out via WhatsApp, give us a call, or schedule a quick video call to talk through your vision. We'll confirm your date, walk you through what to wear, and handle everything else from there.", "Our studio is conveniently located in Santo Domingo, making it an easy choice for clients across the Dominican Republic — whether you're looking for professional headshots, a personal creative project, or a memorable gift portrait."],
        list: [],
        listIntro: ""
      }
    ],
    faq: [
      { q: "What should I wear to a black and white portrait session?", a: "Solid colours and simple textures tend to photograph best in monochrome because they keep the focus on your face and expression. Avoid very busy patterns or logos. When you book, our team will give you specific style tips based on the look you're going for." },
      { q: "How long does a studio portrait session at Babula Shots Estudio take?", a: "Most sessions run between 60 and 90 minutes, which gives us plenty of time to work through different lighting setups and poses without feeling rushed. The exact duration depends on the package you choose." },
      { q: "Do I need any modelling or photography experience?", a: "Not at all. Our photographers are experienced at directing clients who have never been in a professional studio before. We'll guide you through every pose and make sure you feel comfortable throughout the session." },
      { q: "Where is Babula Shots Estudio located?", a: "We're based in Santo Domingo, Dominican Republic. Contact us via WhatsApp or phone to get the full studio address and directions." },
      { q: "Can I use the black and white portraits for professional headshots or LinkedIn?", a: "Absolutely. Monochrome portraits are a popular choice for professional headshots, LinkedIn profiles, press kits, and personal branding. We'll make sure you leave with images that represent you at your best." },
      { q: "How do I book a session and what is the pricing?", a: "You can book by calling us, messaging on WhatsApp, or scheduling a video call directly through our website. Our team will walk you through current packages and pricing during that conversation." }
    ],
  },
  {
    esPath: "/reserva-estudio/",
    enPath: "/en/book-photo-studio-session/",
    enSlug: "book-photo-studio-session",
    topic: "Studio session booking",
    title: "Book a Photo Studio Session · Babula Shots · 4.9★ 98 reviews",
    description: "Reserve your fashion, portrait, or food & beverage studio session online in minutes. Babula Shots Estudio, Santo Domingo. Book now or call to check availability.",
    h1: "Book Your Studio Session at Babula Shots — Santo Domingo",
    eyebrow: "Photography Studio · Babula Shots Estudio · Dominican Republic",
    intro: "Ready to create something great? Babula Shots Estudio makes it easy to reserve your session online — no back-and-forth, no waiting. Choose from our fashion and portrait shoots or our specialist food and beverage studio, pick a time that works for you, and lock in your spot in just a few clicks. Great photography starts with a great booking experience.",
    sections: [
      {
        h2: "How to Book Your Session",
        paragraphs: ["Reserving time at Babula Shots Estudio is straightforward. Browse the session types below, select the package that fits your project, and complete your booking online in minutes. Once confirmed, you'll receive all the details you need to prepare for shoot day.", "Whether you're planning a personal portrait session or a professional product shoot, our online reservation system keeps things simple so you can focus on what matters — showing up ready to create."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Fashion & Portrait Studio Sessions",
        paragraphs: ["Our fashion and portrait studio is designed to flatter every subject. With professional lighting setups, a range of backdrops, and an experienced team behind the camera, this space is ideal for headshots, model portfolios, personal branding content, and creative editorial work.", "Sessions are available for individuals, couples, families, and professional talent. Check availability and reserve your portrait or fashion session directly through our booking page."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Food & Beverage Studio Sessions",
        paragraphs: ["Great food deserves great photography. Babula Shots Estudio offers a dedicated food and beverage studio built for culinary shoots — restaurants, brands, caterers, and product lines all benefit from purposeful lighting and styling that makes every dish look its absolute best.", "If you need imagery for menus, social media, advertising, or packaging, our food and beverage studio sessions are the right fit. Book your slot online and bring your culinary vision to life."],
        list: ["Restaurant menu and promotional photography", "Beverage and cocktail product shots", "Packaged food and brand content", "Social media content for culinary businesses"],
        listIntro: "Common food and beverage projects we shoot:"
      },
      {
        h2: "Why Shoot at Babula Shots Estudio?",
        paragraphs: ["Located in Santo Domingo, Dominican Republic, Babula Shots Estudio is a fully equipped professional studio with the gear, space, and expertise to handle a wide range of photography projects — from intimate personal portraits to polished commercial campaigns."],
        list: ["Online booking — fast and hassle-free", "Dedicated fashion and portrait studio space", "Specialist food and beverage shooting environment", "Professional lighting and equipment included", "Experienced team fluent in both creative and commercial photography"],
        listIntro: "Here's what you get when you book with us:"
      }
    ],
    faq: [
      { q: "How do I book a studio session at Babula Shots?", a: "You can reserve your session directly online through our booking page. Simply choose your session type — fashion and portraits or food and beverage — select your preferred date and time, and confirm your reservation in minutes." },
      { q: "What types of studio sessions does Babula Shots offer?", a: "We currently offer two studio session tracks: fashion and portrait photography, and food and beverage photography. Each has its own dedicated space and pricing — see the booking page for full details." },
      { q: "Where is Babula Shots Estudio located?", a: "Babula Shots Estudio is based in Santo Domingo, Dominican Republic. Exact studio address and directions are provided upon booking confirmation." },
      { q: "Do I need to bring my own equipment or props?", a: "No — our studio comes fully equipped with professional lighting and backdrops. For food and beverage shoots, you're welcome to bring your own props and styling elements, and our team can advise on what works best for your concept." },
      { q: "How far in advance should I book my session?", a: "We recommend booking at least a few days ahead to secure your preferred time slot, especially for weekend sessions. Popular dates fill up quickly, so early booking is always a good idea." },
      { q: "Can I book a studio session for commercial or business use?", a: "Absolutely. Both our portrait and food and beverage studios are well-suited for commercial photography — brand content, advertising, menus, packaging, and more. Contact us if you have a large-scale or custom project to discuss." }
    ],
  },
  {
    esPath: "/servicio-fotos-comida-mariscos/",
    enPath: "/en/restaurant-food-photography-santo-domingo/",
    enSlug: "restaurant-food-photography-santo-domingo",
    topic: "Restaurant food photography",
    title: "Restaurant Food Photography in Santo Domingo · Babula Shots · 4.9★ 98 reviews",
    description: "Mouth-watering food photos that fill tables and boost online orders. Babula Shots shoots stunning restaurant photography in Santo Domingo. Call or WhatsApp us today.",
    h1: "Restaurant Food Photography in Santo Domingo, Dominican Republic",
    eyebrow: "Food & restaurant photography · Babula Shots Estudio",
    intro: "Great food deserves great photos. At Babula Shots Estudio, we create high-quality restaurant photography that makes your dishes impossible to scroll past — whether customers are browsing Instagram, ordering online, or checking out your menu. Based in Santo Domingo, we've helped restaurants across the Dominican Republic, including Boca Chica, turn delicious food into images that genuinely drive business.",
    sections: [
      {
        h2: "Photos That Make People Hungry — On Purpose",
        paragraphs: ["There's a reason the best-performing restaurants on delivery apps and social media invest in professional food photography. A great shot doesn't just show a dish — it triggers appetite, builds trust, and pushes customers to hit 'order.' At Babula Shots, we understand light, styling, and composition well enough to make every plate look as good as it tastes.", "We've shot for restaurants in Santo Domingo, Boca Marina, and the Boca Chica seafood scene, capturing everything from rustic local favorites to refined plated dishes. Whatever your concept, we tailor the visual style to match your brand."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Why Your Restaurant Needs Professional Food Photos",
        paragraphs: [],
        listIntro: "In today's market, your photos are often the first impression — and the deciding factor. Here's where strong imagery pays off:",
        list: ["Online ordering platforms — better photos mean higher click-through and conversion rates", "Instagram and social media — thumb-stopping content that grows your following organically", "Google Business Profile — quality images increase map views and direction requests", "Printed and digital menus — help guests visualize dishes and upsell higher-margin items", "PR and press features — editorial-quality shots that get your restaurant noticed"]
      },
      {
        h2: "Our Food Photography Process",
        paragraphs: ["Every shoot starts with a conversation. We want to understand your restaurant's personality, your signature dishes, and where the photos will be used. From there, we plan the shot list, discuss styling, and choose the right time of day for natural light if your space allows.", "On shoot day, our team handles everything — camera setup, lighting, and food styling guidance — so your kitchen staff can focus on plating. We deliver edited, print- and web-ready images that are yours to use across every channel without restrictions."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Seafood & Caribbean Cuisine — A Specialty",
        paragraphs: ["The Dominican Republic's seafood and coastal dining culture is world-class, and we know how to photograph it. From whole grilled fish and lobster platters at a Boca Marina waterfront restaurant to ceviches and shrimp dishes at a Boca Chica beach spot, we bring out the color, texture, and freshness that makes Caribbean seafood so compelling.", "If your restaurant specializes in mariscos or traditional Dominican cuisine, we have the experience to shoot it in a way that feels authentic and appetizing — not overly stylized or out of place."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Ready to Elevate Your Restaurant's Image?",
        paragraphs: ["Whether you're launching a new menu, refreshing your delivery app listing, or building your social media presence, Babula Shots Estudio is ready to help. We serve restaurants throughout Santo Domingo and the greater Dominican Republic — reach out to discuss your project and get a custom quote."],
        list: [],
        listIntro: ""
      }
    ],
    faq: [
      { q: "How much does restaurant food photography cost in Santo Domingo?", a: "Pricing depends on the number of dishes, the length of the shoot, and how the images will be used. Contact Babula Shots Estudio directly via WhatsApp or phone for a custom quote tailored to your restaurant's needs." },
      { q: "How many dishes can you photograph in one session?", a: "That depends on the complexity of each dish and your desired styling. During your consultation, we'll plan a realistic shot list so you get the most out of every hour on set." },
      { q: "Do you shoot on location at the restaurant or in a studio?", a: "We can do both. On-location shoots capture your restaurant's atmosphere and natural setting, while studio sessions offer more controlled lighting. We'll recommend the best approach based on your goals." },
      { q: "Can you photograph seafood and traditional Dominican dishes?", a: "Absolutely — it's one of our specialties. We've shot mariscos, grilled fish, and classic Dominican cuisine for restaurants in Boca Chica, Boca Marina, and across Santo Domingo." },
      { q: "How long does it take to receive the edited photos?", a: "Turnaround time is discussed and agreed upon before the shoot. We deliver fully edited, high-resolution images ready for print, social media, and online ordering platforms." },
      { q: "Will the photos work for Instagram and food delivery apps like Uber Eats or PedidosYa?", a: "Yes — we deliver images optimized for digital use, including the square and portrait formats preferred by Instagram and the product image specs used by major delivery platforms." }
    ],
  },
  {
    esPath: "/servicio-fotos-comida-y-bebida/",
    enPath: "/en/food-and-beverage-photography/",
    enSlug: "food-and-beverage-photography",
    topic: "Food & beverage photography",
    title: "Food & Beverage Photography for Restaurants · Babula Shots · 4.9★ 98 reviews",
    description: "Professional food & drink photography for Dominican Republic restaurants. Menu shots, social content & video. Serving Santo Domingo, Santiago & Punta Cana. Book today.",
    h1: "Food & Beverage Photography for Restaurants in the Dominican Republic",
    eyebrow: "Restaurant photography · Babula Shots Estudio",
    intro: "A single scroll-stopping photo can turn a curious browser into a paying guest. At Babula Shots Estudio, we specialise in professional food and beverage photography for restaurants, bars, and hospitality brands across the Dominican Republic. From ceviche to cocktails, we capture the colour, texture, and appetite appeal of your menu — creating visuals that perform on Google, TripAdvisor, Instagram, and beyond.",
    sections: [
      {
        h2: "Why High-Quality Food Photography Is a Business Decision",
        paragraphs: ["Diners in Santo Domingo, Santiago, Punta Cana, and across the Dominican Republic make dining decisions based on what they see online — long before they set foot in your restaurant. Platforms like Google Business, TripAdvisor, and Instagram reward venues that invest in compelling visuals with higher engagement, more clicks, and ultimately more covers.", "Weak, poorly lit phone photos can undercut even the best kitchen. Professional food photography signals quality, builds trust, and gives potential guests a reason to choose you over the competition. It is one of the highest-return marketing investments a restaurant can make."],
        list: [],
        listIntro: ""
      },
      {
        h2: "What's Included in Our Food & Beverage Photography Service",
        paragraphs: [],
        listIntro: "Every shoot at Babula Shots Estudio is tailored to your brand and goals. Depending on your project, our service can include:",
        list: ["High-resolution hero shots for your digital menu, website, and print materials", "Social-media-ready content sized for Instagram, Facebook, and TikTok", "Beverage photography — cocktails, craft beers, wines, fresh juices, and more", "Behind-the-scenes preparation videos that showcase your kitchen's craftsmanship", "Flat-lay and styled tabletop compositions that highlight colour, texture, and detail", "On-location shooting at your restaurant or at our Santo Domingo studio"]
      },
      {
        h2: "Our Approach: Lighting, Composition, and Appetite Appeal",
        paragraphs: ["Great food photography is equal parts technical skill and creative storytelling. Our photographers use professional lighting setups and carefully considered compositions to make every dish look irresistible — not just accurate. We study your menu, your brand aesthetic, and your target audience before we fire a single frame.", "Whether we're shooting a beachside seafood platter in Boca Chica, a fine-dining tasting menu in the Colonial Zone, or a full bar programme in Punta Cana, we adapt our style to suit the setting. The result is imagery that feels authentic to your restaurant while consistently stopping thumbs mid-scroll."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Where We Shoot: All Major Cities in the Dominican Republic",
        paragraphs: ["Babula Shots Estudio is based in Santo Domingo but works with restaurant and hospitality clients throughout the country. Our team regularly travels to Santiago, Punta Cana, La Romana, Boca Chica, Puerto Plata, and other locations — wherever great Dominican food is being made.", "If you're outside our usual areas, get in touch and we'll work out the logistics together. We're passionate about showcasing Dominican gastronomy at its best, no matter where you are on the island."],
        list: [],
        listIntro: ""
      },
      {
        h2: "Boost Your Digital Presence with Scroll-Stopping Visuals",
        paragraphs: ["Consistent, high-quality visual content is the engine behind successful restaurant marketing in 2024. Posting professionally shot photos and short-form videos keeps your brand visible, increases engagement rates, and signals credibility to both algorithms and potential guests.", "Ready to transform how your restaurant looks online? Contact Babula Shots Estudio today to discuss your project, request availability, or get a custom quote for your food and beverage photography needs."],
        list: [],
        listIntro: ""
      }
    ],
    faq: [
      { q: "How much does food photography for a restaurant cost in the Dominican Republic?", a: "Pricing at Babula Shots Estudio is project-dependent and varies based on the number of dishes, location, video requirements, and usage rights. Contact us for a personalised quote tailored to your menu and budget." },
      { q: "Do you shoot on location at my restaurant, or do I have to bring food to a studio?", a: "We offer both options. We can come to your restaurant to capture the real atmosphere and setting, or you can use our Santo Domingo studio for a more controlled environment with full lighting equipment. Many clients choose a mix of both." },
      { q: "How many dishes can you photograph in a single session?", a: "The number of dishes covered in a session depends on complexity, styling time, and whether video is included. We'll agree on a realistic shot list with you before the shoot so there are no surprises." },
      { q: "Can you also create video content for Instagram Reels or TikTok?", a: "Yes. We produce high-quality short-form videos showing dish preparation, plating, and presentation — ideal for Instagram Reels, TikTok, and Facebook. Video content can be added to any photography package." },
      { q: "Do you work outside Santo Domingo — for example in Punta Cana or Santiago?", a: "Absolutely. Our team shoots throughout the Dominican Republic, including Santo Domingo, Santiago, Punta Cana, Boca Chica, La Romana, and Puerto Plata. Travel fees may apply for locations outside the capital." },
      { q: "How long does it take to receive the final edited photos?", a: "Turnaround time varies by project size, but clients typically receive a first gallery of edited images within a few business days of the shoot. Rush delivery can be arranged on request." }
    ],
  }
];
