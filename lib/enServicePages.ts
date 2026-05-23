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
  }
];
