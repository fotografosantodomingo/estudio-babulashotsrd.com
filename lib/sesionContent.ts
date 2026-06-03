/**
 * Content for /sesion-de-fotos/ master page + 6 cluster pages.
 * Master page targets "sesion de fotos" (vol 2,400/mo, current pos 24).
 * Cluster pages link back to master with exact-match anchor.
 */

export type SesionFaq = { q: string; a: string };

export type ClusterSection = { heading: string; body: string[] };

export type SesionOffer = {
  name: string;            // schema:Offer.name
  description: string;     // short description shown in schema only
  priceDOP: number;        // numeric price in Dominican Pesos
  priceUSD?: number;       // optional USD equivalent
  duration?: string;       // e.g. "PT60M"
};

export type SesionPage = {
  slug: string;
  url: string;            // canonical path
  title: string;          // <title>
  metaDescription: string;
  h1: string;
  eyebrow: string;
  introParagraphs: string[];
  sections: ClusterSection[];
  faq: SesionFaq[];
  heroImage: { src: string; alt: string; width: number; height: number };
  isMaster: boolean;      // master = the /sesion-de-fotos/ hub
  // For clusters: which OTHER clusters to show as related
  relatedClusterSlugs?: string[];
  // Concrete offers for schema.org Service+Offer (powers rich-results pricing).
  offers?: SesionOffer[];
};

const HERO = {
  master: {
    src: "/wp-content/uploads/2025/02/fotografo-pro-de-moda-santo-domingo-sesion-de-fotos-estudio4.webp",
    alt: "Sesión de fotos profesional en estudio en Santo Domingo, República Dominicana",
    width: 1600,
    height: 1067
  },
  pareja: {
    src: "/wp-content/uploads/2025/02/fotografoo-sesion-fotos-estudio-santo-domingo-rd-9.webp",
    alt: "Sesión de fotos para pareja en estudio profesional en Santo Domingo",
    width: 1600,
    height: 1067
  },
  cumple: {
    src: "/wp-content/uploads/2024/06/Estudio-sesion-de-fotos-republica-dominicana.jpg",
    alt: "Sesión de fotos para cumpleaños en Santo Domingo con set decorado",
    width: 1600,
    height: 1067
  },
  corporate: {
    src: "/wp-content/uploads/2025/03/Fotos-corporativas-en-estudio-1536x1013.webp",
    alt: "Fotos corporativas en estudio profesional en Santo Domingo",
    width: 1536,
    height: 1013
  },
  headshots: {
    src: "/wp-content/uploads/2024/05/FOTOGRAFO-RETRATOS-santo-domingo-estudio-edited-scaled.jpg",
    alt: "Headshots y retratos profesionales en estudio Santo Domingo",
    width: 1600,
    height: 1067
  },
  embarazo: {
    src: "/wp-content/uploads/2024/06/Estudio-fotografo-santo-domingo.webp",
    alt: "Sesión de fotos de embarazo en estudio íntimo en Santo Domingo",
    width: 1600,
    height: 1067
  },
  quinceanera: {
    src: "/wp-content/uploads/2024/06/Santo-Domingo-Fotografo-estudio.png",
    alt: "Sesión de fotos para quinceañera en Santo Domingo",
    width: 1600,
    height: 1067
  }
};

// ================================================================
// MASTER PAGE — /sesion-de-fotos/
// ================================================================
const master: SesionPage = {
  slug: "sesion-de-fotos",
  url: "/sesion-de-fotos/",
  // Title re-angled to catalog/buying intent (tipos · paquetes · precios) so it
  // stops duplicating the homepage's bare "sesión de fotos" head term. Per GSC
  // 2026-06, homepage owns "sesión de fotos" (pos 8.7, 979 impr); this hub was a
  // weaker duplicate at pos 9.8 (115 impr). Now targets type/price long-tail.
  title: "Tipos de Sesión de Fotos en Estudio: Paquetes y Precios | Babula Shots",
  metaDescription:
    "Todos los tipos de sesión de fotos en Santo Domingo: retratos, parejas, embarazo, quinceañera, corporativo y branding — con paquetes y precios fijos. Reserva por WhatsApp +1 809 720 9547.",
  h1: "Tipos de Sesión de Fotos en Santo Domingo",
  eyebrow: "Babula Shots Estudio",
  introParagraphs: [
    "Una sesión de fotos profesional en Santo Domingo no es solo presionar un botón. Es dirección de pose, lectura de luz, edición consistente, y una entrega rápida que llega lista para imprimir, compartir o publicar. En Babula Shots cubrimos cada uno de esos puntos en estudio propio, con equipo Sony G Master, iluminación Profoto, y un equipo bilingüe que trabaja de la misma forma desde el primer mensaje por WhatsApp hasta la galería online final.",
    "Cubrimos retratos individuales, parejas, familias, embarazos, sesiones de cumpleaños, comuniones, quinceañeras, headshots corporativos, books de modelo, branding personal y editoriales de marca. Trabajamos a precios fijos publicados (sin sorpresas) y entregamos las fotos editadas en plazos cortos: 24-48 horas para corporativo, 5-7 días para retratos personales, 7-10 días para editoriales con producción.",
    "Esta página es el punto de entrada al catálogo completo. Más abajo verás los tipos de sesiones disponibles con su precio y enlaces a páginas especializadas, las locaciones populares en Santo Domingo donde solemos trabajar exteriores, comparativa entre sesiones en estudio y al aire libre, consejos sobre qué ropa funciona mejor frente a la cámara, y respuestas a las preguntas más comunes."
  ],
  sections: [
    {
      heading: "Tipos de sesiones que cubrimos",
      body: [
        "Cada tipo de sesión tiene su propia lógica de iluminación, dirección y edición. No tratamos una sesión de pareja igual que una corporativa, ni un editorial de moda igual que un newborn. A continuación, los formatos más solicitados:",
        "**Sesión de pareja:** ideal para preboda, aniversario, o simplemente capturar un momento juntos sin esperar una ocasión. Trabajamos con luz suave en estudio o exteriores, dirección de poses naturales, y entregamos 30-40 fotos editadas. [Ver detalles de sesión de pareja](/sesion-de-fotos-pareja/).",
        "**Sesión de cumpleaños:** desde sesiones temáticas en estudio con set decorado hasta cobertura de la celebración. Adaptamos el setup según la edad (newborn, niños, adultos jóvenes, senior). [Ver detalles de sesión de cumpleaños](/sesion-de-fotos-cumpleanos/).",
        "**Sesión corporativa:** retratos para LinkedIn, equipos directivos, fotos para web corporativa, branding personal de profesionales independientes. Entrega rápida (24-48 horas) con derechos comerciales incluidos. [Ver detalles de sesión corporativa](/sesion-de-fotos-corporativas/).",
        "**Headshots profesionales:** retratos con fondo neutro tipo book de actor, modelo o ejecutivo. Múltiples looks, mismo fondo y luz para consistencia. [Ver detalles de headshots](/headshots-profesionales-santo-domingo/).",
        "**Sesión de embarazo:** sesión íntima entre la semana 30 y 36, en estudio cerrado, con dirección suave y galería privada que solo tú decides compartir. [Ver detalles de embarazo](/sesion-de-fotos-embarazo/).",
        "**Sesión de quinceañera:** desde el set tradicional con vestido formal hasta editoriales modernos en exterior. Incluimos múltiples cambios de look y maquillaje opcional como add-on. [Ver detalles de quinceañera](/sesion-de-fotos-quinceanera/).",
        "**Sesión de familia:** grupos hasta 6 personas con niños o bebés, en estudio o exterior. Calmamos a los más pequeños con un set adaptado y trabajamos en bloques cortos.",
        "**Sesión editorial / branding personal:** producciones más grandes con múltiples looks, locaciones, props, y derechos editoriales o comerciales según el contrato. Ideal para emprendedores, artistas, y marcas personales en construcción."
      ]
    },
    {
      heading: "Precios de sesión de fotos",
      body: [
        "Todos los precios son fijos, publicados, y aplicables para sesiones en nuestro estudio en Santo Domingo. Para sesiones en otras ciudades sumamos un travel fee fijo que cubre transporte y, cuando aplica, hospedaje del equipo. La cotización completa por WhatsApp llega en menos de 24 horas.",
        "**Retratos individuales — desde RD$ 5,960 / US$ 100.** 60 minutos, 15 fotos editadas en alta resolución, entrega en 48 horas, galería online compartible.",
        "**Sesión familiar — desde RD$ 8,940 / US$ 150.** 60 minutos, hasta 6 personas, 20 fotos editadas, entrega en 5-7 días.",
        "**Sesión maternidad — desde RD$ 8,940 / US$ 150.** Sesión íntima de 60 minutos en estudio privado, 30 fotos editadas, galería privada.",
        "**Sesión newborn — desde RD$ 11,920 / US$ 200.** Estudio climatizado y privado, props y mantas incluidas, 25 fotos suavemente editadas, entrega en 7 días.",
        "**Retratos corporativos — desde RD$ 10,700 / US$ 180.** Múltiples looks y fondos, derechos de uso comercial autorizado, entrega 24-48h.",
        "**Headshots de equipo — desde RD$ 17,880 / US$ 300.** Setup en oficina o estudio, mismo fondo y luz para todo el equipo (5-15 personas), 3 fotos editadas por persona.",
        "**Sesión boudoir — desde RD$ 23,800 / US$ 400.** Estudio privado o habitación de hotel de lujo, dirección experta, galería privada en 48-72h.",
        "**Editorial de moda — desde RD$ 35,760 / US$ 600.** Producción completa, múltiples looks, 50+ fotos editadas, cesión de derechos editoriales y comerciales.",
        "Los precios incluyen edición profesional, galería online compartible y archivos en alta resolución listos para imprimir o publicar. La reserva se confirma con un 50% de depósito; el saldo se paga el día de la sesión. Aceptamos transferencia local, Visa, Mastercard, AmEx, y para clientes internacionales Wise o Zelle. [Ver tarifas completas y comparativa](/precios/)."
      ]
    },
    {
      heading: "Cómo funciona — del WhatsApp a la galería",
      body: [
        "**Paso 1 — Contacto.** Escríbenos por WhatsApp al +1 809 720 9547 con el tipo de sesión, fecha tentativa y cualquier referencia visual (Pinterest, captura de Instagram). Te respondemos en menos de 24 horas con disponibilidad y propuesta detallada.",
        "**Paso 2 — Reserva.** Confirmamos la fecha con un depósito del 50%. Recibes un acuerdo simple, las indicaciones logísticas, la dirección del estudio y un checklist de qué traer.",
        "**Paso 3 — Preparación.** Te enviamos por WhatsApp un mini-guía con consejos de ropa, maquillaje y peinado según el tipo de sesión. Si necesitas servicio de makeup como add-on, lo coordinamos en este paso (5 días de anticipación).",
        "**Paso 4 — La sesión.** Llegada 15 minutos antes para revisar la luz, repasar referencias y empezar relajado. Trabajamos con dirección activa: no esperamos que sepas posar, la dirigimos en tiempo real.",
        "**Paso 5 — Edición.** Procesamos las fotos con un look consistente para tu sesión específica (no aplicamos un filtro genérico). Esto toma entre 24 horas y 10 días según el servicio.",
        "**Paso 6 — Entrega.** Recibes un enlace privado a una galería online donde puedes descargar en alta resolución para imprimir y baja resolución para redes sociales. La galería se mantiene activa por 6 meses; se puede extender bajo solicitud."
      ]
    },
    {
      heading: "Mejores lugares para sesión de fotos en Santo Domingo",
      body: [
        "Para sesiones en exterior dentro de Santo Domingo, estos son los puntos donde solemos trabajar y conocemos a fondo (mejor hora del día, accesos, permisos cuando aplican):",
        "**Zona Colonial.** Calle Las Damas, Plaza España, Fortaleza Ozama, Catedral Primada. Mejor momento: 7-9 AM (luz suave, menos turistas) o golden hour 5-6 PM. Ideal para parejas, quinceañeras, sesiones editoriales con estética histórica.",
        "**Malecón y Avenida George Washington.** Vista al mar, perfecto para golden hour y atardeceres. Acceso libre, cuidado con el viento.",
        "**Parque Mirador Sur.** Parque grande con árboles, ideal para sesiones de familia, embarazo y retratos relajados con verde de fondo. Mejor entre semana o sábado por la mañana temprano.",
        "**Plaza de la Cultura.** Arquitectura modernista, escaleras, espacios amplios. Muy buena para sesiones corporativas con un fondo más urbano-institucional.",
        "**Boca Chica y playas cercanas.** Para sesiones con mar, suelen ser desplazamientos de 30-45 minutos desde Santo Domingo. Llegamos antes del amanecer para evitar gente y aprovechar la luz.",
        "**Naco, Piantini, Bella Vista.** Si prefieres exteriores urbanos cerca del estudio, hay rincones con buena luz arquitectónica que no son los típicos clichés."
      ]
    },
    {
      heading: "Estudio vs. exterior — ¿cuál te conviene?",
      body: [
        "**Sesión en estudio.** Luz controlada, fondos a elección (papel sin costuras, tela texturizada, ciclorama blanco), aire acondicionado, área de cambio privada, props y mantas para newborn o sesiones temáticas. Ventaja principal: cero dependencia del clima, look consistente, sesión más rápida.",
        "**Sesión en exterior.** Luz natural, ambiente más relajado, más variedad de fondos por la misma sesión. Funciona mejor para parejas, familias, embarazos en jardines, y editoriales con narrativa de lugar. Dependencia del clima: monitoreamos 48 horas antes; si la probabilidad de lluvia supera el 60%, reagendamos sin costo.",
        "**Híbrido.** Cuando el cliente quiere ambos looks, partimos en estudio (1 hora) y movemos a exterior cercano (1 hora más). Esto suele aplicar en quinceañeras y sesiones editoriales con dos cambios de look claramente diferenciados."
      ]
    },
    {
      heading: "Qué ropa usar para una sesión de fotos",
      body: [
        "Recomendaciones generales que funcionan para casi cualquier tipo de sesión:",
        "**Colores sólidos.** Evita estampados pequeños tipo cuadros finos o líneas — vibran ante la cámara y hacen el editado más complicado. Tonos tierra, neutros, pasteles y joyas funcionan en cualquier estudio.",
        "**Trae 2-3 looks.** En 60 minutos caben cómodamente 2 outfits; en 90 minutos hasta 3. Llega 15 minutos antes con la ropa lista (sin arrugas — tenemos vapor de plancha en el estudio si lo necesitas).",
        "**Maquillaje natural** para corporativo o retratos personales. Más marcado para books de modelo, quinceañeras o editoriales (ofrecemos servicio de makeup como add-on por RD$3,500-6,000).",
        "**Joyería:** poco y deliberado. Evita pulseras o relojes brillantes que reflejen luz directa hacia la lente.",
        "**Trae camiseta blanca de respaldo.** Si algo no convence en cámara, una camisa básica blanca siempre funciona como reset.",
        "Para sesiones específicas (newborn, embarazo, quinceañera, editorial) te enviamos un guía detallado por WhatsApp después de confirmar la reserva."
      ]
    }
  ],
  faq: [
    {
      q: "¿Cuánto cuesta una sesión de fotos en Santo Domingo?",
      a: "Los precios fijos publicados van desde RD$5,960 (US$100) para retratos individuales hasta RD$35,760 (US$600) para editoriales de moda con producción. Las sesiones más solicitadas son retratos individuales (RD$5,960), familiares (RD$8,940), maternidad (RD$8,940), corporativos (RD$10,700) y newborn (RD$11,920). Todos los precios incluyen edición profesional, galería online y archivos en alta resolución."
    },
    {
      q: "¿Cuánto dura una sesión de fotos en estudio?",
      a: "La duración estándar es de 60 minutos para retratos individuales, 90-120 minutos para sesiones corporativas con varios looks, 60 minutos para maternidad y familiares, 2-3 horas para newborn (con descansos para alimentar al bebé), y 2-4 horas para editoriales de moda con producción. Te confirmamos la duración exacta al cotizar."
    },
    {
      q: "¿Puedo cambiarme de ropa durante la sesión?",
      a: "Sí. El estudio tiene un área de cambio privada con espejo de cuerpo entero, ganchos y vapor de plancha. En una sesión de 60 minutos caben cómodamente 2 looks; en 90 minutos hasta 3. Recomendamos llegar 15 minutos antes con la ropa lista para optimizar el tiempo de cámara."
    },
    {
      q: "¿Cómo recibo mis fotos después de la sesión?",
      a: "Recibes una galería online privada con todas las fotos editadas, accesible desde tu correo y compartible por link con quien decidas. Desde la galería puedes descargar en alta resolución (para imprimir) y baja resolución (para redes sociales). Tiempos de entrega: corporativos 24-48 horas, retratos 5-7 días, newborn 7 días, editoriales 7-10 días."
    },
    {
      q: "¿Las sesiones incluyen maquillaje o peinado?",
      a: "Las sesiones estándar no incluyen maquillaje o peinado, pero tenemos una makeup artist y peinadora aliadas que vienen al estudio bajo solicitud (add-on con costo aparte: RD$3,500-6,000). El servicio se reserva con 5 días de anticipación. Para corporativos recomendamos maquillaje natural; para books o editoriales se ajusta al concepto."
    },
    {
      q: "¿Cómo comprobar la disponibilidad?",
      a: "Escríbenos por WhatsApp al +1 809 720 9547 con la fecha tentativa, el tipo de sesión y la cantidad de personas. Te respondemos en menos de 24 horas con disponibilidad confirmada y una propuesta detallada. El calendario del estudio se llena con 1-3 semanas de anticipación, especialmente fines de semana."
    },
    {
      q: "¿Los precios aplican fuera de Santo Domingo?",
      a: "Los precios publicados aplican para sesiones en nuestro estudio en Santo Domingo. Para sesiones en otras ciudades (Santiago, Punta Cana, La Romana, Casa de Campo, Cap Cana, Bávaro y otras) sumamos un travel fee fijo que cubre transporte y, cuando aplica, una noche de hospedaje del equipo. Cotiza tu zona específica por WhatsApp."
    },
    {
      q: "¿Puedo reservar una sesión con poca anticipación?",
      a: "Sí, intentamos acomodar reservas urgentes cuando hay disponibilidad. Sesiones corporativas o de retrato a veces caben en agenda con 24-48 horas de anticipación. Para newborn, editorial o sesiones que requieren coordinación con makeup artist necesitamos 5-7 días mínimo. Pregúntanos por WhatsApp y respondemos rápido."
    },
    {
      q: "¿Cuál es el mejor fotógrafo de estudio en Santo Domingo?",
      a: "Es una pregunta subjetiva, pero los criterios objetivos para evaluar incluyen: portfolio consistente en el estilo que buscas, equipo profesional (Sony A7 series + iluminación Profoto/Godox son estándar de calidad), tiempos de entrega documentados, política clara de cancelación y reembolso, y reseñas reales de clientes. Babula Shots cumple los cinco criterios y publica precios fijos, pero te recomendamos comparar con 2-3 estudios antes de reservar."
    },
    {
      q: "¿Trabajan con menores de edad / niños?",
      a: "Sí. Tenemos experiencia con sesiones de bebés (newborn desde 2 semanas), niños, sesiones de cumpleaños, comuniones y quinceañeras. El estudio tiene aire acondicionado controlado, área para alimentación de bebés y un set de props. Para menores siempre debe estar presente al menos un adulto responsable durante toda la sesión."
    }
  ],
  heroImage: HERO.master,
  isMaster: true,
  offers: [
    { name: "Retratos individuales", description: "60 minutos, 15 fotos editadas en alta resolución, entrega en 48 horas.", priceDOP: 5960, priceUSD: 100, duration: "PT60M" },
    { name: "Sesión familiar", description: "60 minutos, hasta 6 personas, 20 fotos editadas, entrega en 5-7 días.", priceDOP: 8940, priceUSD: 150, duration: "PT60M" },
    { name: "Sesión maternidad", description: "Sesión íntima de 60 minutos en estudio privado, 30 fotos editadas, galería privada.", priceDOP: 8940, priceUSD: 150, duration: "PT60M" },
    { name: "Sesión newborn", description: "Estudio climatizado y privado, props y mantas incluidas, 25 fotos editadas, entrega en 7 días.", priceDOP: 11920, priceUSD: 200 },
    { name: "Retratos corporativos", description: "Múltiples looks y fondos, derechos de uso comercial autorizado, entrega 24-48h.", priceDOP: 10700, priceUSD: 180 },
    { name: "Headshots de equipo (5-15 personas)", description: "Setup en oficina o estudio, mismo fondo y luz para todo el equipo, 3 fotos editadas por persona.", priceDOP: 17880, priceUSD: 300 },
    { name: "Sesión boudoir", description: "Estudio privado o habitación de hotel de lujo, dirección experta, galería privada en 48-72h.", priceDOP: 23800, priceUSD: 400 },
    { name: "Editorial de moda", description: "Producción completa, múltiples looks, 50+ fotos editadas, cesión de derechos editoriales y comerciales.", priceDOP: 35760, priceUSD: 600 }
  ]
};

// ================================================================
// CLUSTER PAGES
// ================================================================
const pareja: SesionPage = {
  slug: "sesion-de-fotos-pareja",
  url: "/sesion-de-fotos-pareja/",
  title: "Sesión de Fotos para Pareja en Santo Domingo | Babula Shots",
  metaDescription: "Sesión de fotos para pareja en Santo Domingo: preboda, aniversario, anuncio o capricho. Estudio o exterior. Desde RD$5,960. Cotiza por WhatsApp.",
  h1: "Sesión de Fotos para Pareja en Santo Domingo",
  eyebrow: "Pareja · Preboda · Aniversario",
  introParagraphs: [
    "Una sesión de fotos para pareja captura la dinámica real entre dos personas — no la pose forzada de manual de Pinterest. Trabajamos en estudio con luz suave o en exterior en locaciones reconocibles de Santo Domingo (Zona Colonial, Malecón, Plaza España), con dirección activa para que ambos se sientan cómodos frente a la cámara incluso si nunca antes han posado juntos.",
    "Las parejas reservan esta sesión por motivos diversos: preboda para tener save-the-dates y galería pre-evento, aniversario para marcar un año concreto, anuncio de embarazo o compromiso, o simplemente porque llevaban tiempo queriendo fotos profesionales y nunca se animaban. Cualquier motivo es válido. Lo importante es que salgan fotos que ambos quieran imprimir, regalar a familia y publicar.",
    "Esta es una página específica del catálogo de [sesión de fotos](/sesion-de-fotos/) en Babula Shots Estudio. Más abajo encontrarás precios, qué incluye la sesión, cómo prepararse y respuestas a las preguntas más comunes."
  ],
  sections: [
    {
      heading: "¿Por qué hacer una sesión de fotos para pareja?",
      body: [
        "**Preboda (engagement session).** Sirve para que ambos se relajen frente a la cámara antes del día de la boda, prueben outfits y locaciones, y consigan imágenes para el save-the-date, página web de la boda y video de proyección durante la recepción. Las parejas que la hacen llegan al día de la boda mucho más cómodas — los nervios pre-cámara ya están resueltos.",
        "**Aniversario.** Capturar un año concreto. Las fotos de boda de hace 5-10 años ya no representan dónde están hoy; una sesión nueva sí lo hace.",
        "**Anuncio de compromiso o embarazo.** Las fotos de la sesión funcionan como contenido para el anuncio en redes y para enviar a familia.",
        "**Branding de pareja.** Si tienen un negocio juntos o construyen una marca personal compartida (creadores de contenido, emprendimiento conjunto), las fotos profesionales son material de prensa y redes que se usa todo el año."
      ]
    },
    {
      heading: "Cómo es la sesión",
      body: [
        "**Duración:** 60 minutos estándar, 90 minutos con cambio adicional de look o segunda locación.",
        "**Locación:** estudio en Santo Domingo (luz controlada, 3-4 fondos a elegir) o exterior en locación reconocible (Zona Colonial, Malecón, Parque Mirador Sur, Plaza de la Cultura). También sesiones híbridas: empezamos en estudio y nos movemos a exterior cercano.",
        "**Dirección:** trabajamos con dirección activa — no esperamos que sepan posar. Damos instrucciones claras, mostramos referencias en el momento si hace falta, y construimos las poses de menos a más naturales: caminar, mirar, abrazar, reír.",
        "**Outfits:** recomendamos 2 looks coordinados pero no idénticos. Tonos tierra y neutros funcionan siempre. Evita estampados pequeños que vibran en cámara.",
        "**Entrega:** 30-40 fotos editadas en alta resolución, galería online privada y compartible, plazo 5-7 días."
      ]
    },
    {
      heading: "Precios sesión de pareja",
      body: [
        "**Sesión estándar de pareja — desde RD$ 5,960 / US$ 100.** 60 minutos, 30 fotos editadas, galería online, entrega en 5-7 días.",
        "**Sesión preboda extendida — desde RD$ 10,700 / US$ 180.** 90 minutos, 2 looks, locación a elección, 40 fotos editadas, galería online compartible con familia.",
        "**Sesión híbrida estudio + exterior — desde RD$ 14,900 / US$ 250.** 2 horas, 2-3 looks, edición consistente en ambos formatos, 50 fotos editadas.",
        "Los precios incluyen edición profesional y derechos de uso personal. Para uso comercial (parejas que son creadores de contenido o tienen marca conjunta) cotizamos como add-on con cesión de derechos."
      ]
    },
    {
      heading: "Locaciones recomendadas en Santo Domingo",
      body: [
        "**Zona Colonial.** La opción más solicitada para parejas. Calle Las Damas, Plaza España, Fortaleza Ozama y Catedral Primada ofrecen fondos arquitectónicos con personalidad. Mejor momento: 7-9 AM (luz suave, sin turistas) o golden hour 5-6 PM.",
        "**Malecón y Avenida George Washington.** Vista al mar, perfecto para golden hour. Acceso libre. Llevar un cambio de ropa en el carro por si hay viento.",
        "**Parque Mirador Sur.** Verde, árboles, senderos. Ideal para sesiones más relajadas y románticas. Mejor entre semana por la mañana.",
        "**Estudio.** Si prefieren control total y no quieren depender del clima ni de horarios, el estudio en Santo Domingo cubre todo el rango con fondos sin costuras (blanco, gris, negro, beige) y ciclorama curvo blanco para cuerpo entero."
      ]
    },
    {
      heading: "Cómo prepararse",
      body: [
        "**Coordinen outfits con anticipación.** Los looks no tienen que ser idénticos pero sí complementarios. Eviten que ambos vistan estampados grandes simultáneamente.",
        "**Lleguen 15 minutos antes.** Damos un café, hablamos de cómo se conocieron, miramos referencias. Esto relaja muchísimo y mejora las fotos.",
        "**Repasen referencias visuales 2-3 días antes.** Pinterest, Instagram saves. Compartirlas con nosotros por WhatsApp para que sepamos la dirección estética que les gusta.",
        "**Hidratación + descanso la noche anterior.** Las fotos lo agradecen — ojeras y piel deshidratada se notan más en cámara que en el espejo.",
        "**Si una de las dos personas está nerviosa, díganlo.** Lo manejamos con dirección más suave al inicio y construyendo confianza progresivamente."
      ]
    }
  ],
  faq: [
    { q: "¿Cuánto cuesta una sesión de fotos de pareja?", a: "Desde RD$5,960 (US$100) para sesión estándar de 60 minutos con 30 fotos editadas. La preboda extendida (90 minutos, 2 looks, 40 fotos) cuesta desde RD$10,700, y la sesión híbrida estudio + exterior (2 horas, 2-3 looks, 50 fotos) desde RD$14,900." },
    { q: "¿Cuánto dura la sesión?", a: "60 minutos en formato estándar, 90 minutos para preboda con cambio de look, 2 horas para híbridas estudio + exterior. Recomendamos llegar 15 minutos antes para revisar luz y relajarse antes de empezar a disparar." },
    { q: "¿Hacen sesión preboda?", a: "Sí. La sesión preboda (engagement session) es uno de los formatos más solicitados. Trabajamos en estudio o en locación de la pareja a elección y entregamos archivos listos para save-the-dates, página web de la boda y video de proyección durante la recepción." },
    { q: "¿Y si nunca hemos posado juntos antes?", a: "Es lo más común — la mayoría de parejas que vienen no han posado juntas profesionalmente. Trabajamos con dirección activa: damos instrucciones claras paso a paso, no esperamos que sepan qué hacer. Construimos las poses progresivamente y mostramos las primeras fotos en cámara para ajustar en el momento si algo no convence." },
    { q: "¿Pueden venir con mascota?", a: "Sí, las mascotas son bienvenidas tanto en estudio como en exterior. Para sesiones con mascota recomendamos 60 minutos extra y traer agua, snacks y un acompañante que pueda manejar al animal mientras se hacen fotos solo de la pareja." }
  ],
  heroImage: HERO.pareja,
  isMaster: false,
  relatedClusterSlugs: ["sesion-de-fotos-cumpleanos", "sesion-de-fotos-embarazo"],
  offers: [
    { name: "Sesión estándar de pareja", description: "60 minutos, 30 fotos editadas, galería online, entrega en 5-7 días.", priceDOP: 5960, priceUSD: 100, duration: "PT60M" },
    { name: "Sesión preboda extendida", description: "90 minutos, 2 looks, locación a elección, 40 fotos editadas, galería online compartible con familia.", priceDOP: 10700, priceUSD: 180, duration: "PT90M" },
    { name: "Sesión híbrida estudio + exterior", description: "2 horas, 2-3 looks, edición consistente en ambos formatos, 50 fotos editadas.", priceDOP: 14900, priceUSD: 250, duration: "PT120M" }
  ]
};

const cumple: SesionPage = {
  slug: "sesion-de-fotos-cumpleanos",
  url: "/sesion-de-fotos-cumpleanos/",
  title: "Sesión de Fotos de Cumpleaños en Santo Domingo | Babula Shots",
  metaDescription: "Sesión de fotos para cumpleaños en Santo Domingo: smash cake, niños, adultos, senior. Estudio con set decorado o cobertura del evento. Desde RD$8,940.",
  h1: "Sesión de Fotos de Cumpleaños en Santo Domingo",
  eyebrow: "Cumpleaños · Smash cake · Familia",
  introParagraphs: [
    "Una sesión de fotos de cumpleaños cubre desde el smash cake del primer año hasta sesiones senior, retratos de cumpleaños individual con set decorado, o cobertura del evento real con familia e invitados. Cada formato pide un setup diferente: para newborn y bebés trabajamos con sets pequeños y luz suave; para niños mayores y adolescentes con sets temáticos personalizados; para adultos con retratos clásicos en estudio o producciones más editoriales.",
    "Esta página es parte del catálogo de [sesión de fotos](/sesion-de-fotos/) en Babula Shots Estudio en Santo Domingo. Si lo que buscas es cobertura del evento (decoración, invitados, momentos clave) trabajamos también con paquetes de evento más extensos — pregúntanos por WhatsApp."
  ],
  sections: [
    {
      heading: "Tipos de sesión de cumpleaños",
      body: [
        "**Smash cake (1 año).** Set decorado en estudio con globos, números 1, accesorios temáticos, y la tradicional torta para que el bebé la destruya. Sesión de 90 minutos con cambios de look (uno o dos outfits) y descanso para alimentar/cambiar al bebé. 30 fotos editadas.",
        "**Niños (2-12 años).** Set adaptado a la edad y tema preferido (superhéroes, princesas, deportes, naturaleza). Trabajamos en bloques cortos para mantener la atención. Recomendamos traer 2-3 outfits y dejar el chico desayunado y descansado.",
        "**Adolescentes (13-18 años) y quinceañeras.** Aquí los formatos varían: editoriales más maduros, fotos con amigas como complemento al evento principal, sesiones tipo book de modelo. Para quinceañeras tenemos página dedicada — ver [sesión de quinceañera](/sesion-de-fotos-quinceanera/).",
        "**Adultos (cumpleaños individual).** Retrato clásico para celebrar un cumpleaños redondo (30, 40, 50, 60). Generalmente formato más editorial, en estudio con luz cuidada, regalándose a sí mismo una sesión profesional.",
        "**Cobertura de evento.** Si lo que quieres es la fiesta documentada (decoración, invitados, momento de la torta, primera vela), trabajamos paquetes de cobertura de 2-4 horas en la locación que elijas. Cotizamos por WhatsApp según horas y cantidad de invitados."
      ]
    },
    {
      heading: "Cómo es la sesión en estudio",
      body: [
        "**Duración:** 60 minutos para retrato simple, 90 minutos con set decorado, 2 horas para smash cake con descansos.",
        "**Set decorado:** podemos preparar globos, números, fondo de papel a color (rojo, beige, gris, verde, azul, rosado) y props básicos (silla, marco, peluches). Para temáticas específicas (superhéroes, princesas Disney, dinosaurios) recomendamos que el cliente traiga props característicos.",
        "**Maquillaje:** opcional como add-on. Para niños menores de 8 años no recomendamos maquillaje completo; para adolescentes y adultos el servicio está disponible con 5 días de anticipación.",
        "**Acompañante:** para sesiones de bebés y niños siempre debe haber al menos un adulto responsable presente. Tenemos área de cambio + zona de descanso con sillas para acompañantes."
      ]
    },
    {
      heading: "Precios sesión cumpleaños",
      body: [
        "**Retrato simple cumpleaños — desde RD$ 5,960 / US$ 100.** 60 minutos, fondo a elección, 15 fotos editadas.",
        "**Sesión con set decorado — desde RD$ 8,940 / US$ 150.** 90 minutos, set temático preparado, 25 fotos editadas, galería online en 5-7 días.",
        "**Smash cake (1 año) — desde RD$ 11,920 / US$ 200.** 2 horas con descansos, set decorado completo, props incluidos, 30 fotos editadas, entrega en 7 días.",
        "**Cobertura de evento (en tu locación) — desde RD$ 17,880 / US$ 300.** 2 horas, cubrimos decoración, invitados, momento de la torta y primera vela, 80+ fotos editadas, galería en 7-10 días."
      ]
    }
  ],
  faq: [
    { q: "¿Cuánto cuesta una sesión de fotos de cumpleaños?", a: "Desde RD$5,960 para retrato simple de 60 minutos. Sesión con set decorado desde RD$8,940. Smash cake (1 año) desde RD$11,920. Cobertura de evento completo desde RD$17,880." },
    { q: "¿Trabajan smash cake?", a: "Sí. El smash cake del primer año es uno de los formatos más solicitados. Preparamos set decorado con globos, números, fondo a elección y los props clásicos. La sesión dura 2 horas con descansos para alimentar/cambiar al bebé." },
    { q: "¿Hacen sets temáticos?", a: "Sí — para temáticas básicas (color liso, globos, números, marco) lo preparamos en el estudio. Para temáticas muy específicas (superhéroes Marvel, princesas Disney, personajes específicos) recomendamos que el cliente traiga los props característicos. Coordinamos por WhatsApp 5 días antes." },
    { q: "¿Cuántos cambios de outfit puede hacer mi hijo/a?", a: "En una sesión de 90 minutos caben cómodamente 2 looks. Para sesiones de smash cake (2 horas) caben 2-3 looks: outfit pre-cake limpio + ropa para destrozar la torta + outfit final post-baño." },
    { q: "¿Pueden ir al evento en mi casa?", a: "Sí. Trabajamos cobertura de evento en cualquier locación dentro de Santo Domingo sin costo adicional de traslado. Para eventos fuera de la ciudad cotizamos travel fee según zona." }
  ],
  heroImage: HERO.cumple,
  isMaster: false,
  relatedClusterSlugs: ["sesion-de-fotos-quinceanera", "sesion-de-fotos-pareja"],
  offers: [
    { name: "Retrato simple cumpleaños", description: "60 minutos, fondo a elección, 15 fotos editadas.", priceDOP: 5960, priceUSD: 100, duration: "PT60M" },
    { name: "Sesión con set decorado", description: "90 minutos, set temático preparado, 25 fotos editadas, galería online en 5-7 días.", priceDOP: 8940, priceUSD: 150, duration: "PT90M" },
    { name: "Smash cake (1 año)", description: "2 horas con descansos, set decorado completo, props incluidos, 30 fotos editadas, entrega en 7 días.", priceDOP: 11920, priceUSD: 200, duration: "PT120M" },
    { name: "Cobertura de evento (en tu locación)", description: "2 horas, decoración, invitados, momento de la torta y primera vela, 80+ fotos editadas, galería en 7-10 días.", priceDOP: 17880, priceUSD: 300, duration: "PT120M" }
  ]
};

const corporativas: SesionPage = {
  slug: "sesion-de-fotos-corporativas",
  url: "/sesion-de-fotos-corporativas/",
  title: "Fotos Corporativas en Estudio Santo Domingo | Babula Shots",
  metaDescription: "Fotos corporativas en estudio en Santo Domingo: retratos LinkedIn, equipos directivos, headshots ejecutivos. Entrega 24-48h. Derechos comerciales. Desde RD$10,700.",
  h1: "Fotos Corporativas en Estudio en Santo Domingo",
  eyebrow: "Corporativo · LinkedIn · Branding personal",
  introParagraphs: [
    "Las fotos corporativas profesionales son una inversión que rinde durante 2-3 años en LinkedIn, web corporativa, materiales de prensa y firma de email. Una mala foto cuesta credibilidad cada vez que un cliente, inversor o reclutador la ve. Una buena dura años antes de necesitar refresco.",
    "En Babula Shots cubrimos retratos corporativos individuales, headshots de equipo (5-15 personas con mismo fondo y luz para consistencia), branding personal de profesionales independientes, y producciones más editoriales para emprendedores que están construyendo marca personal.",
    "Esta página es parte del catálogo de [sesión de fotos](/sesion-de-fotos/) en Santo Domingo. Para equipos grandes (20+ personas) y producciones recurrentes ofrecemos contratos con tarifa preferencial — pregúntanos."
  ],
  sections: [
    {
      heading: "Tipos de sesión corporativa",
      body: [
        "**Retrato individual ejecutivo.** Una persona, 60-90 minutos, 2-3 looks (formal, semi-formal, casual), 6-10 fotos editadas finales. Ideal para LinkedIn, página de equipo en web corporativa, biografía en libro o publicación.",
        "**Headshots de equipo.** 5-15 personas con el mismo fondo y luz. Trabajamos a 10-15 minutos por persona, 3 fotos finales editadas por cabeza. Resultado consistente que se ve como un equipo, no como una colección de fotos hechas en lugares distintos. [Ver detalles de headshots profesionales](/headshots-profesionales-santo-domingo/).",
        "**Branding personal.** Para emprendedores, consultores, coaches y creadores de contenido. Sesión más larga (2-3 horas) con múltiples escenarios y looks: retrato formal, foto en acción simulada (escribiendo, hablando), foto editorial. 30-50 fotos finales para alimentar redes durante todo el año.",
        "**Cobertura corporativa en oficina.** Vamos a la oficina con setup portátil de iluminación. Resultados más naturales con el ambiente real de trabajo. Ideal para empresas que quieren mostrar su cultura y espacio."
      ]
    },
    {
      heading: "Cómo trabajamos un día corporativo",
      body: [
        "**Pre-sesión.** Coordinamos por email 5-7 días antes: shot list, briefing del dress code (formal vs business casual), guidelines de marca si los hay (paleta de colores, fondos restringidos), y agenda hora-por-hora si es sesión de equipo.",
        "**Día de la sesión.** Llegamos 30 minutos antes para montar setup. Para equipos, el flujo va de a una persona cada 10-15 minutos. Hacemos las primeras fotos, mostramos en pantalla para validar dirección, ajustamos y completamos.",
        "**Edición consistente.** Para equipos editamos todas las fotos con el mismo look (mismo balance de blancos, mismo nivel de retoque facial, mismo crop y aspect ratio). Resultado: la galería entera se ve como un equipo unificado.",
        "**Entrega rápida.** Corporativo es nuestra entrega más rápida — 24-48 horas para sesiones individuales y de equipo pequeño, 3-5 días para producciones de branding personal. Te entregamos JPEG de alta resolución listos para imprimir o subir, y baja resolución para LinkedIn (recortados al ratio correcto)."
      ]
    },
    {
      heading: "Precios corporativos",
      body: [
        "**Retrato individual corporativo — desde RD$ 10,700 / US$ 180.** 60 minutos, múltiples looks y fondos, 6 fotos editadas, derechos comerciales autorizados, entrega 24-48h.",
        "**Headshots de equipo (5-15 personas) — desde RD$ 17,880 / US$ 300.** 3 horas en oficina o estudio, 3 fotos editadas por persona, mismo fondo y luz para todos, derechos de uso comercial.",
        "**Branding personal extendido — desde RD$ 23,800 / US$ 400.** 2-3 horas, múltiples escenarios y outfits, 30-50 fotos editadas, cesión de derechos para uso publicitario y editorial.",
        "**Cobertura de evento corporativo (en oficina o venue) — desde RD$ 14,900 / US$ 250.** 2 horas, formato documental, 50+ fotos editadas, entrega en 5-7 días.",
        "Para empresas con necesidades recurrentes (renovación trimestral de equipo, eventos mensuales) ofrecemos contratos de tarifa fija con descuento por volumen. Pago a 30 días contra factura disponible."
      ]
    },
    {
      heading: "Tips de preparación corporativa",
      body: [
        "**Dress code:** se conservador. Una camisa formal en color sólido (blanco, azul claro, negro) funciona casi siempre. Evita estampados pequeños y colores chillones que dominen la foto y compitan con el rostro.",
        "**Maquillaje:** natural y matte. Si la piel brilla ante la cámara las fotos quedan menos pulidas. Para hombres recomendamos polvo translúcido en frente y nariz si la piel es grasa.",
        "**Pelo:** acabado el día anterior, no recién cortado (los rasguños del corte se notan en cámara), no recién teñido (los tonos no terminan de sentar hasta 24 horas después).",
        "**Joyería:** mínima y opaca. Pulseras o relojes brillantes reflejan luz directa hacia la lente.",
        "**Hidratación + descanso.** Las ojeras y piel deshidratada son lo primero que se nota. Una semana de buena hidratación y dormir bien la noche anterior tiene impacto visible."
      ]
    }
  ],
  faq: [
    { q: "¿Cuánto cuesta una sesión de fotos corporativa?", a: "Retrato individual desde RD$10,700 (US$180), headshots de equipo desde RD$17,880, branding personal desde RD$23,800, cobertura de evento corporativo desde RD$14,900. Todos incluyen derechos de uso comercial." },
    { q: "¿En cuánto tiempo entregan?", a: "24-48 horas para retratos individuales y headshots de equipo. 3-5 días para branding personal con producción. 5-7 días para cobertura de evento. Servicio express de 12 horas disponible con costo adicional." },
    { q: "¿Vienen a la oficina?", a: "Sí. Trabajamos con setup portátil de iluminación que cubre cualquier oficina o sala de reuniones con espacio mínimo de 4x3 metros. Cobertura sin costo de traslado en Santo Domingo y Distrito Nacional; tarifa fija para Santiago, Punta Cana, La Romana, Bávaro." },
    { q: "¿Las fotos incluyen derechos comerciales?", a: "Sí. Todas las sesiones corporativas incluyen derechos de uso comercial autorizado: web corporativa, LinkedIn, materiales de prensa, presentaciones, firma de email, ferias. Para uso publicitario pagado (anuncios en Meta, Google, OOH) cotizamos cesión extendida como add-on." },
    { q: "¿Pueden hacer un equipo de 30 personas?", a: "Sí. Para equipos de 20+ personas dividimos la sesión en 2 días o coordinamos un día completo en oficina con flujo de 8-10 personas por hora. El precio escala por persona con descuento por volumen." }
  ],
  heroImage: HERO.corporate,
  isMaster: false,
  relatedClusterSlugs: ["headshots-profesionales-santo-domingo"],
  offers: [
    { name: "Retrato individual corporativo", description: "60 minutos, múltiples looks y fondos, 6 fotos editadas, derechos comerciales autorizados, entrega 24-48h.", priceDOP: 10700, priceUSD: 180, duration: "PT60M" },
    { name: "Headshots de equipo (5-15 personas)", description: "3 horas en oficina o estudio, 3 fotos editadas por persona, mismo fondo y luz para todos, derechos de uso comercial.", priceDOP: 17880, priceUSD: 300, duration: "PT180M" },
    { name: "Branding personal extendido", description: "2-3 horas, múltiples escenarios y outfits, 30-50 fotos editadas, cesión de derechos para uso publicitario y editorial.", priceDOP: 23800, priceUSD: 400, duration: "PT180M" },
    { name: "Cobertura de evento corporativo", description: "2 horas en oficina o venue, formato documental, 50+ fotos editadas, entrega en 5-7 días.", priceDOP: 14900, priceUSD: 250, duration: "PT120M" }
  ]
};

const headshots: SesionPage = {
  slug: "headshots-profesionales-santo-domingo",
  url: "/headshots-profesionales-santo-domingo/",
  title: "Headshots Profesionales en Santo Domingo | Babula Shots Estudio",
  metaDescription: "Headshots profesionales en Santo Domingo para LinkedIn, actores, modelos, ejecutivos. Estudio con luz controlada. Múltiples looks. Entrega 48h. Desde RD$5,960.",
  h1: "Headshots Profesionales en Santo Domingo",
  eyebrow: "Headshots · LinkedIn · Books actor / modelo",
  introParagraphs: [
    "Un headshot profesional es la foto más rentable que puedes tener: dura años en LinkedIn, casting websites, web corporativa, biografías y firma de email. Es la única foto que potencialmente verán miles de personas — clientes, reclutadores, casting directors — y en menos de 3 segundos formarán una primera impresión.",
    "En Babula Shots Estudio en Santo Domingo trabajamos headshots con luz controlada (Profoto / Godox), múltiples looks y fondos en una sola sesión, edición consistente y entrega rápida (48 horas). Cubrimos LinkedIn ejecutivo, books de actor y modelo, headshots editoriales para periodistas y autores, y branding personal de profesionales independientes.",
    "Esta página es parte del catálogo de [sesión de fotos](/sesion-de-fotos/) en Babula Shots. Para sesiones corporativas más amplias con equipo, ver [fotos corporativas en estudio](/sesion-de-fotos-corporativas/)."
  ],
  sections: [
    {
      heading: "¿Qué es un headshot profesional?",
      body: [
        "Un headshot es un retrato cerrado (de los hombros hacia arriba) con foco absoluto en el rostro y la expresión. La diferencia entre un headshot profesional y una selfie no es la cámara — es la dirección de luz, la posición del rostro, la expresión que captura, y la edición que pule sin distorsionar.",
        "**Para LinkedIn / corporativo:** expresión confiada y aproximable, mirada directa a cámara, fondo neutro (gris, blanco, beige). Camisa formal o business casual.",
        "**Para actor / modelo:** múltiples expresiones (neutral, sonrisa, intenso, alegre), fondo limpio sin distracciones, archivo en alta resolución para impresión y casting websites.",
        "**Para autor / periodista:** un look más editorial — fondo con textura o color sólido, expresión pensativa, posibilidad de incluir manos o un gesto característico."
      ]
    },
    {
      heading: "Cómo es la sesión de headshots",
      body: [
        "**Duración:** 60 minutos para 1 look + 1 fondo, 90-120 minutos para 2-3 looks o múltiples fondos.",
        "**Setup de iluminación.** Trabajamos con un esquema de iluminación profesional (key light + fill light + rim light cuando aplica) que esculpe el rostro sin endurecerlo. La luz se ajusta en tiempo real según el tono de piel, forma del rostro y referencias que aportes.",
        "**Dirección activa.** No esperamos que sepas posar. Damos indicaciones simples y precisas: 'inclina la cabeza 5 grados', 'mira al punto de la luz', 'imagina que estás escuchando algo divertido'. Construimos las expresiones desde lo neutral hasta lo más natural.",
        "**Validación en cámara.** Cada 10-15 fotos mostramos en pantalla para que valides la dirección. Esto evita terminar la sesión y descubrir después que el ángulo o la expresión no convencen.",
        "**Selección final.** Después de la sesión preseleccionamos 6-15 fotos según el paquete y editamos. Tú apruebas la selección antes de la edición final si quieres ajustar."
      ]
    },
    {
      heading: "Precios headshots",
      body: [
        "**Headshot individual — desde RD$ 5,960 / US$ 100.** 60 minutos, 1 look + 1 fondo, 6 fotos editadas, entrega en 48h.",
        "**Headshot multi-look — desde RD$ 10,700 / US$ 180.** 90 minutos, 2 looks + 2 fondos a elección, 10 fotos editadas, derechos comerciales autorizados.",
        "**Book de actor / modelo — desde RD$ 17,880 / US$ 300.** 2 horas, múltiples expresiones y looks, 25 fotos editadas, archivos en alta resolución para casting websites e impresión.",
        "**Headshots de equipo (5-15 personas) — desde RD$ 17,880 / US$ 300.** 3 horas, mismo fondo y luz para todos, 3 fotos editadas por persona. Ver detalles en [fotos corporativas](/sesion-de-fotos-corporativas/).",
        "Todos los paquetes incluyen edición profesional con retoque facial natural (limpieza de piel, control de brillos, ajuste de tono — no distorsión de rasgos). Para retoque editorial avanzado (skin smoothing, frequency separation) cotizamos como add-on."
      ]
    },
    {
      heading: "Tips para tu headshot",
      body: [
        "**Camisa formal en color sólido.** Blanco, azul claro o gris claro son los más versátiles. Evita estampados pequeños o colores muy saturados que compitan con el rostro.",
        "**Maquillaje natural matte.** La piel brillante ante la cámara saca peor que la piel mate. Si vas a aplicar maquillaje, polvo translúcido en frente, nariz y mentón.",
        "**Corte de pelo 5-10 días antes de la sesión.** No recién cortado (los rasguños se notan), no demasiado largo (pierde definición). Lavado y peinado el día de la sesión.",
        "**Hidratación + sueño 48 horas antes.** Ojeras y piel deshidratada son lo primero que se ve. Una semana de buenos hábitos tiene impacto visible.",
        "**Llega 15 minutos antes** con la ropa lista. Tenemos espejo de cuerpo entero y vapor de plancha si necesitas un retoque.",
        "**Trae un café o un agua que te relaje.** Los primeros disparos suelen ser tensos; los siguientes salen mejor cuando ya estás cómodo en el set."
      ]
    }
  ],
  faq: [
    { q: "¿Cuánto cuesta un headshot profesional?", a: "Headshot individual desde RD$5,960 (US$100, 60 minutos, 6 fotos). Multi-look desde RD$10,700. Book de actor o modelo desde RD$17,880. Para equipos de 5-15 personas ver fotos corporativas." },
    { q: "¿Cuánto dura la sesión?", a: "60 minutos para 1 look + 1 fondo. 90-120 minutos para 2-3 looks. Recomendamos llegar 15 minutos antes." },
    { q: "¿Cuántas fotos finales recibo?", a: "Depende del paquete: 6 fotos en headshot individual, 10 en multi-look, 25 en book de actor / modelo. Todas editadas profesionalmente." },
    { q: "¿Las fotos sirven para LinkedIn y casting websites a la vez?", a: "Sí. Entregamos archivos en alta resolución (para impresión y casting) y baja resolución pre-recortados al ratio cuadrado de LinkedIn / Instagram. Un solo paquete cubre múltiples destinos." },
    { q: "¿Hacen retoque de piel?", a: "Sí — retoque natural incluido en todos los paquetes: limpieza de imperfecciones, control de brillos, ajuste de tono. Lo que NO hacemos en el paquete estándar es retoque editorial agresivo (skin smoothing fuerte, frequency separation, alteración de rasgos). Eso se cotiza como add-on para books de modelo o editoriales." }
  ],
  heroImage: HERO.headshots,
  isMaster: false,
  relatedClusterSlugs: ["sesion-de-fotos-corporativas"],
  offers: [
    { name: "Headshot individual", description: "60 minutos, 1 look + 1 fondo, 6 fotos editadas, entrega en 48h.", priceDOP: 5960, priceUSD: 100, duration: "PT60M" },
    { name: "Headshot multi-look", description: "90 minutos, 2 looks + 2 fondos a elección, 10 fotos editadas, derechos comerciales autorizados.", priceDOP: 10700, priceUSD: 180, duration: "PT90M" },
    { name: "Book de actor / modelo", description: "2 horas, múltiples expresiones y looks, 25 fotos editadas, archivos en alta resolución para casting websites e impresión.", priceDOP: 17880, priceUSD: 300, duration: "PT120M" },
    { name: "Headshots de equipo (5-15 personas)", description: "3 horas, mismo fondo y luz para todos, 3 fotos editadas por persona.", priceDOP: 17880, priceUSD: 300, duration: "PT180M" }
  ]
};

const embarazo: SesionPage = {
  slug: "sesion-de-fotos-embarazo",
  url: "/sesion-de-fotos-embarazo/",
  title: "Sesión de Fotos de Embarazo en Santo Domingo | Babula Shots",
  metaDescription: "Sesión de fotos de embarazo en Santo Domingo: estudio íntimo y privado, ideal semanas 30-36, dirección suave. 30 fotos editadas. Desde RD$8,940.",
  h1: "Sesión de Fotos de Embarazo en Santo Domingo",
  eyebrow: "Maternidad · Privada · Íntima",
  introParagraphs: [
    "Una sesión de embarazo profesional documenta uno de los pocos meses irrepetibles de la vida. La idea no es solo tener una foto bonita — es capturar la transformación del cuerpo y la conexión con la vida que crece dentro, en un momento que no vuelve.",
    "En Babula Shots cerramos completamente el estudio para sesiones de embarazo. Solo el equipo asignado, la persona embarazada y un acompañante (pareja, mamá, amiga). La galería final es privada y solo tú decides quién tiene acceso al link.",
    "Recomendamos hacer la sesión entre la semana 30 y 36: la barriga ya tiene presencia clara y todavía hay movilidad y energía. Esta página es parte del catálogo de [sesión de fotos](/sesion-de-fotos/) en Santo Domingo."
  ],
  sections: [
    {
      heading: "Cómo es la sesión de embarazo",
      body: [
        "**Privacidad total.** Cerramos el estudio durante la sesión. Solo entran el equipo asignado y tu acompañante (si decides traer uno). Después de la sesión la galería es privada — solo tú tienes el link y decides con quién compartirlo.",
        "**Duración.** 60 minutos estándar, 90 minutos si quieres incluir más cambios de outfit o segundo participante (pareja, otros hijos).",
        "**Wardrobe.** Recomendamos 2-3 outfits que muestren la barriga: bralette + falda larga, vestido ajustado, body, lencería elegante si la sesión es boudoir-maternal. Si no tienes opciones, tenemos una colección de telas y body básicos en estudio para préstamo.",
        "**Dirección suave.** Trabajamos con dirección no invasiva. Empezamos con poses simples (de pie, de perfil, sentada) y construimos confianza progresivamente. Si en algún momento te sientes incómoda, paramos y reagrupamos.",
        "**Pareja y otros participantes.** Muchas sesiones incluyen pareja, otros hijos o mascota en algún momento. Las fotos individuales y las acompañadas se balancean según prefieras."
      ]
    },
    {
      heading: "Precios sesión maternidad",
      body: [
        "**Sesión estándar de embarazo — desde RD$ 8,940 / US$ 150.** 60 minutos, sesión íntima en estudio cerrado, 30 fotos editadas, galería privada en 7 días.",
        "**Sesión extendida con pareja / otros hijos — desde RD$ 11,920 / US$ 200.** 90 minutos, múltiples looks y composiciones (sola, con pareja, con otros niños), 40 fotos editadas.",
        "**Sesión maternidad + newborn (paquete) — desde RD$ 17,880 / US$ 300.** Sesión de embarazo + sesión newborn (cuando nazca el bebé, primeros 14 días). Galerías separadas pero diseño visual consistente.",
        "Los precios incluyen edición profesional, galería privada y archivos en alta resolución. Maquillaje y peinado disponibles como add-on (RD$3,500-6,000 con 5 días de anticipación)."
      ]
    },
    {
      heading: "Cuándo hacer la sesión",
      body: [
        "**Semanas 30-36.** El sweet spot. La barriga ya tiene presencia visible y redondeada, todavía hay movilidad sin agotarse, y queda margen antes del parto.",
        "**Semanas 28-30.** Si la barriga ya creció rápido (segundo o tercer embarazo), funciona. Para primer embarazo a veces es muy temprano.",
        "**Semanas 36-38.** Última oportunidad antes del parto. La energía baja un poco pero la barriga está en su punto máximo. Recomendamos sesiones más cortas (45 minutos) y dirección de baja exigencia física.",
        "**Después de la semana 38.** Solo si lo pide el cliente. Riesgo de cancelar por parto adelantado y reagendar es alto.",
        "Reservar con 2-3 semanas de anticipación para asegurar la fecha. Si el bebé llega antes, reagendamos sin penalidad."
      ]
    },
    {
      heading: "Cómo prepararse",
      body: [
        "**Hidratación 48h antes.** La piel y el rostro lo agradecen.",
        "**Manicura limpia y discreta.** Las manos aparecen mucho en sesiones de embarazo (sosteniendo la barriga, sobre la cara, sobre el pelo).",
        "**Bralette + falda larga / body / vestido ajustado** funcionan mejor que ropa holgada. La idea es que la silueta de la barriga se lea claro.",
        "**Lleva tu pareja (opcional)** si quieres incluirla en parte de la sesión. No te sientas obligada — muchas sesiones son solo de la persona embarazada.",
        "**Come algo ligero antes de salir.** No vengas con hambre — 60 minutos de sesión cuando estás embarazada es mucho.",
        "**Si necesitas pausa, dilo.** Paramos cuando lo necesites. Tenemos sillas, agua y aire acondicionado controlado."
      ]
    }
  ],
  faq: [
    { q: "¿Cuándo es la mejor semana para hacer la sesión?", a: "Entre la semana 30 y 36. La barriga ya tiene presencia visible y todavía hay movilidad sin agotamiento. Para segundos o terceros embarazos donde la barriga crece rápido, semanas 28-30 también funcionan." },
    { q: "¿Cuánto cuesta una sesión de embarazo?", a: "Sesión estándar de 60 minutos desde RD$8,940 (US$150) con 30 fotos editadas. Sesión extendida con pareja u otros niños desde RD$11,920. Paquete embarazo + newborn desde RD$17,880." },
    { q: "¿Es privada la sesión?", a: "Completamente. Cerramos el estudio durante la sesión — solo el equipo asignado y tu acompañante (si decides traer uno). La galería final es privada con link compartible solo por ti." },
    { q: "¿Puedo traer a mi pareja o a otros hijos?", a: "Sí. Muchas sesiones incluyen pareja u otros hijos en parte del tiempo. La sesión extendida (90 minutos) está pensada exactamente para esto." },
    { q: "¿Y si el bebé se adelanta?", a: "Reagendamos sin costo. Si la sesión ya estaba pagada y el bebé llega antes, aplicamos el depósito a una sesión newborn cuando estés lista. La política de reagendamiento es flexible para cualquier evento médico." }
  ],
  heroImage: HERO.embarazo,
  isMaster: false,
  relatedClusterSlugs: ["sesion-de-fotos-pareja", "sesion-de-fotos-cumpleanos"],
  offers: [
    { name: "Sesión estándar de embarazo", description: "60 minutos, sesión íntima en estudio cerrado, 30 fotos editadas, galería privada en 7 días.", priceDOP: 8940, priceUSD: 150, duration: "PT60M" },
    { name: "Sesión extendida con pareja u otros hijos", description: "90 minutos, múltiples looks y composiciones (sola, con pareja, con otros niños), 40 fotos editadas.", priceDOP: 11920, priceUSD: 200, duration: "PT90M" },
    { name: "Paquete maternidad + newborn", description: "Sesión de embarazo + sesión newborn (cuando nazca el bebé, primeros 14 días). Galerías separadas pero diseño visual consistente.", priceDOP: 17880, priceUSD: 300 }
  ]
};

const quinceanera: SesionPage = {
  slug: "sesion-de-fotos-quinceanera",
  url: "/sesion-de-fotos-quinceanera/",
  title: "Sesión de Fotos de Quinceañera en Santo Domingo | Babula Shots",
  metaDescription: "Sesión de fotos de quinceañera en Santo Domingo: estudio o exterior, múltiples looks, vestido formal y editorial. Maquillaje opcional. Desde RD$10,700.",
  h1: "Sesión de Fotos de Quinceañera en Santo Domingo",
  eyebrow: "15 años · Editorial · Tradicional",
  introParagraphs: [
    "La sesión de quinceañera marca un momento que vale la pena documentar bien — no con una foto al azar, sino con una sesión profesional que captura tanto el lado tradicional (vestido formal, look elegante) como el lado editorial moderno (looks casuales, fotos en exterior, estética de revista).",
    "En Babula Shots Estudio en Santo Domingo trabajamos sesiones de quinceañera con múltiples cambios de look (vestido principal, look casual, opcional editorial), maquillaje opcional como add-on, y locaciones que van desde el estudio hasta exteriores en Zona Colonial, Plaza España o golden hour en Malecón. Si quieres ideas concretas de qué poses funcionan mejor, lee nuestra guía de [10 mejores poses para fotos de quinceañera](/blog/poses-fotos-quinceanera/) — diez poses con ejemplos, tips de ejecución y FAQ.",
    "Esta página es parte del catálogo de [sesión de fotos](/sesion-de-fotos/) en Babula Shots Estudio. Para cobertura del evento (fiesta, vals, pastel) trabajamos también paquetes separados — pregúntanos por WhatsApp."
  ],
  sections: [
    {
      heading: "Tipos de sesión de quinceañera",
      body: [
        "**Sesión tradicional.** Vestido formal de quinceañera, fondo elegante, peinado y maquillaje formales, fotos clásicas que después se imprimen para invitaciones, cuadros familiares y materiales del evento. Locación: estudio en Santo Domingo o iglesia para sesión pre-evento.",
        "**Sesión editorial moderna.** Múltiples looks (vestido formal + casual + editorial), fotos con estética de revista, exteriores en Zona Colonial, Plaza de la Cultura, Malecón. Resultado más cercano a un book de modelo que a una sesión tradicional.",
        "**Sesión híbrida (la más popular).** Combina ambas: empezamos con vestido formal en estudio, cambiamos a look casual o editorial y nos movemos a exterior. Tenemos lo mejor de ambos mundos en una misma sesión.",
        "**Sesión con amigas / squad.** Algunas quinceañeras incluyen a sus amigas o damas de compañía en parte de la sesión. Esto requiere coordinar wardrobe (pueden ir todas en el mismo color o complementario) y reservar 30-60 minutos extra.",
        "**Cobertura del evento.** Si lo que necesitas es la fiesta documentada (vals, pastel, salón decorado, invitados), trabajamos paquetes de cobertura de evento separados — pregúntanos por WhatsApp con los detalles del salón y horario."
      ]
    },
    {
      heading: "Cómo es la sesión",
      body: [
        "**Duración.** 90-120 minutos para sesión sencilla con un look. 2-3 horas para sesión híbrida con 2-3 looks y traslado a exterior. Cobertura de evento es separada (3-6 horas).",
        "**Maquillaje y peinado.** Disponible como add-on (RD$3,500-6,000) con 5 días de anticipación. Trabajamos con makeup artist y peinadora aliadas que vienen al estudio. Recomendamos hacer maquillaje completo para la sesión tradicional; natural para los looks editoriales / exterior.",
        "**Vestidos.** La quinceañera trae el vestido formal (puede ser el mismo del evento o un vestido secundario para la sesión). Para looks casual o editorial, recomendamos 1-2 outfits adicionales que muestren su estilo personal.",
        "**Locaciones.** Estudio (luz controlada, fondos a elección), Zona Colonial (Plaza España, Calle Las Damas, Catedral), Malecón (golden hour), Plaza de la Cultura (arquitectura modernista). También cualquier locación que la familia prefiera con coordinación previa.",
        "**Acompañantes.** Para sesiones con menores siempre debe estar presente al menos un adulto responsable durante toda la sesión. Mamá, papá o tía suele ser quien acompaña."
      ]
    },
    {
      heading: "Precios sesión quinceañera",
      body: [
        "**Sesión sencilla — desde RD$ 10,700 / US$ 180.** 90 minutos, 1 look (vestido formal), 30 fotos editadas, galería online compartible.",
        "**Sesión híbrida estudio + exterior — desde RD$ 17,880 / US$ 300.** 2-3 horas, 2-3 looks, 50 fotos editadas, edición consistente en ambos formatos.",
        "**Sesión completa editorial — desde RD$ 23,800 / US$ 400.** 3 horas, múltiples looks y locaciones, 60+ fotos editadas con estética de revista.",
        "**Cobertura de evento (fiesta) — desde RD$ 17,880 / US$ 300.** 3 horas en el salón, 80+ fotos editadas, vals, pastel, momentos clave, invitados.",
        "**Paquete sesión + cobertura — desde RD$ 35,760 / US$ 600.** Sesión de fotos antes del evento + cobertura de la fiesta. Galerías separadas pero estética unificada.",
        "Add-on de maquillaje y peinado: RD$3,500-6,000 según servicio. Add-on de impresión profesional (poster, cuadros, álbum): cotizable según formato."
      ]
    },
    {
      heading: "Tips para una buena sesión",
      body: [
        "**Wardrobe pre-planeado.** Define los looks 1-2 semanas antes con la quinceañera. Si va a haber cambios, coordinar el orden (formal primero, casual después es más fácil que al revés).",
        "**Prueba de maquillaje y peinado** una semana antes. Esto evita sorpresas el día de la sesión y permite ajustar si algo no convence.",
        "**Llegada con tiempo.** Si la sesión es a las 10 AM, llegar a las 9:15 AM da margen para vestirse, hidratarse, ajustar peinado y empezar relajada.",
        "**Snack ligero antes de salir.** 2-3 horas de sesión sin comer es agotador, especialmente con vestido formal estructurado.",
        "**Repasen referencias visuales** en Pinterest o Instagram con la quinceañera. Saber qué le gusta visualmente nos da dirección clara y la sesión sale a la primera.",
        "**Mascota o accesorios sentimentales.** Si la quinceañera tiene una mascota o un accesorio importante para ella (collar de la abuela, por ejemplo), incluirlo en algunas fotos da significado emocional al material."
      ]
    }
  ],
  faq: [
    { q: "¿Cuánto cuesta una sesión de quinceañera?", a: "Sesión sencilla desde RD$10,700 (90 minutos, 1 look, 30 fotos). Híbrida estudio + exterior desde RD$17,880 (2-3 horas, 2-3 looks). Editorial completa desde RD$23,800. Cobertura del evento (separado) desde RD$17,880. Paquete combinado sesión + cobertura desde RD$35,760." },
    { q: "¿Cuántos looks puede usar?", a: "1 look en sesión sencilla, 2-3 en híbrida, 3-4+ en editorial completa. Recomendamos coordinar el orden (formal primero por logística de cabello / maquillaje, casual después)." },
    { q: "¿Incluyen maquillaje y peinado?", a: "Como add-on. RD$3,500-6,000 según servicio. Trabajamos con makeup artist y peinadora aliadas. Reservar con 5 días de anticipación. Recomendamos prueba una semana antes para evitar sorpresas." },
    { q: "¿Hacen sesión con amigas / damas?", a: "Sí. Para sesiones con grupo (quinceañera + 4-8 amigas) reservamos 30-60 minutos extra. Coordinar wardrobe complementario o el mismo tono de color funciona bien visualmente." },
    { q: "¿Cubren la fiesta también?", a: "Sí, como servicio separado o como paquete combinado con la sesión. La cobertura del evento (3 horas) cubre vals, pastel, momentos con familia e invitados, salón decorado. El paquete combinado da el mejor precio." }
  ],
  heroImage: HERO.quinceanera,
  isMaster: false,
  relatedClusterSlugs: ["sesion-de-fotos-cumpleanos", "sesion-de-fotos-pareja"],
  offers: [
    { name: "Sesión sencilla", description: "90 minutos, 1 look (vestido formal), 30 fotos editadas, galería online compartible.", priceDOP: 10700, priceUSD: 180, duration: "PT90M" },
    { name: "Sesión híbrida estudio + exterior", description: "2-3 horas, 2-3 looks, 50 fotos editadas, edición consistente en ambos formatos.", priceDOP: 17880, priceUSD: 300, duration: "PT180M" },
    { name: "Sesión completa editorial", description: "3 horas, múltiples looks y locaciones, 60+ fotos editadas con estética de revista.", priceDOP: 23800, priceUSD: 400, duration: "PT180M" },
    { name: "Cobertura de evento (fiesta)", description: "3 horas en el salón, 80+ fotos editadas, vals, pastel, momentos clave, invitados.", priceDOP: 17880, priceUSD: 300, duration: "PT180M" },
    { name: "Paquete sesión + cobertura", description: "Sesión de fotos antes del evento + cobertura de la fiesta. Galerías separadas pero estética unificada.", priceDOP: 35760, priceUSD: 600 }
  ]
};

export const sesionPages: Record<string, SesionPage> = {
  "sesion-de-fotos": master,
  "sesion-de-fotos-pareja": pareja,
  "sesion-de-fotos-cumpleanos": cumple,
  "sesion-de-fotos-corporativas": corporativas,
  "headshots-profesionales-santo-domingo": headshots,
  "sesion-de-fotos-embarazo": embarazo,
  "sesion-de-fotos-quinceanera": quinceanera
};

export const sesionSlugs = Object.keys(sesionPages);

// ================================================================
// EN MIRRORS — /en/photo-session/ + 6 cluster pages
// English translations of the same cluster, with localized internal links.
// ================================================================

const masterEn: SesionPage = {
  slug: "photo-session",
  url: "/en/photo-session/",
  title: "Photo Session in Santo Domingo | Babula Shots Studio",
  metaDescription:
    "Photo session in Santo Domingo with Babula Shots: professional studio, portraits, couples, corporate, maternity, quinceañera. WhatsApp +1 809 720 9547.",
  h1: "Photo Session in Santo Domingo",
  eyebrow: "Babula Shots Studio",
  introParagraphs: [
    "A professional photo session in Santo Domingo isn't just pressing a button. It's pose direction, light reading, consistent editing, and fast delivery that arrives ready to print, share, or publish. At Babula Shots we cover every one of those points in our own studio, with Sony G Master gear, Profoto lighting, and a bilingual team that works the same way from the first WhatsApp message to the final online gallery.",
    "We cover individual portraits, couples, families, maternity, birthday sessions, communions, quinceañeras, corporate headshots, model books, personal branding, and brand editorials. We work at fixed published prices (no surprises) and deliver edited photos on short timelines: 24-48 hours for corporate, 5-7 days for personal portraits, 7-10 days for editorials with full production.",
    "This page is the entry point to the full catalog. Below you'll find the available session types with pricing and links to specialized pages, popular outdoor locations in Santo Domingo where we usually work, a comparison between studio and outdoor sessions, advice on what clothing works best on camera, and answers to the most common questions."
  ],
  sections: [
    {
      heading: "Session types we cover",
      body: [
        "Each session type has its own lighting logic, direction, and editing. We don't treat a couples session like a corporate one, nor a fashion editorial like a newborn. Below are the most requested formats:",
        "**Couples session:** ideal for engagement, anniversary, or simply capturing a moment together without waiting for an occasion. We work with soft light in studio or outdoors, natural pose direction, and deliver 30-40 edited photos. [See couples photoshoot details](/en/couples-photoshoot/).",
        "**Birthday session:** from themed studio sessions with decorated sets to coverage of the celebration. We adapt the setup based on age (newborn, kids, young adults, senior). [See birthday photoshoot details](/en/birthday-photoshoot/).",
        "**Corporate session:** portraits for LinkedIn, leadership teams, photos for the corporate website, personal branding for independent professionals. Fast delivery (24-48 hours) with commercial rights included. [See corporate photoshoot details](/en/corporate-photoshoot/).",
        "**Professional headshots:** portraits with a neutral background — actor, model, or executive book style. Multiple looks, same background and light for consistency. [See professional headshots](/en/professional-headshots/).",
        "**Maternity session:** intimate session between week 30 and 36, in a closed studio, with gentle direction and a private gallery only you decide to share. [See maternity photoshoot details](/en/maternity-photoshoot/).",
        "**Quinceañera session:** from the traditional set with formal dress to modern outdoor editorials. Includes multiple look changes and optional makeup as add-on. [See quinceañera photoshoot details](/en/quinceanera-photoshoot/).",
        "**Family session:** groups up to 6 people with children or babies, in studio or outdoors. We keep the youngest calm with an adapted set and work in short blocks.",
        "**Editorial / personal branding session:** larger productions with multiple looks, locations, props, and editorial or commercial rights per contract. Ideal for entrepreneurs, artists, and personal brands under construction."
      ]
    },
    {
      heading: "Photo session pricing",
      body: [
        "All prices are fixed, published, and apply to sessions in our studio in Santo Domingo. For sessions in other cities we add a fixed travel fee covering transport and, when it applies, team lodging. The full quote via WhatsApp arrives in under 24 hours.",
        "**Individual portraits — from RD$ 5,960 / US$ 100.** 60 minutes, 15 high-resolution edited photos, delivery in 48 hours, shareable online gallery.",
        "**Family session — from RD$ 8,940 / US$ 150.** 60 minutes, up to 6 people, 20 edited photos, delivery in 5-7 days.",
        "**Maternity session — from RD$ 8,940 / US$ 150.** Intimate 60-minute session in a private studio, 30 edited photos, private gallery.",
        "**Newborn session — from RD$ 11,920 / US$ 200.** Climate-controlled and private studio, props and wraps included, 25 softly edited photos, delivery in 7 days.",
        "**Corporate portraits — from RD$ 10,700 / US$ 180.** Multiple looks and backgrounds, authorized commercial use rights, delivery 24-48h.",
        "**Team headshots — from RD$ 17,880 / US$ 300.** Setup in office or studio, same background and light for the whole team (5-15 people), 3 edited photos per person.",
        "**Boudoir session — from RD$ 23,800 / US$ 400.** Private studio or luxury hotel room, expert direction, private gallery in 48-72h.",
        "**Fashion editorial — from RD$ 35,760 / US$ 600.** Full production, multiple looks, 50+ edited photos, editorial and commercial rights assignment.",
        "Prices include professional editing, shareable online gallery, and high-resolution files ready to print or publish. Reservation is confirmed with a 50% deposit; the balance is paid on session day. We accept local transfer, Visa, Mastercard, AmEx, and for international clients Wise or Zelle. [See full pricing and comparison](/en/prices/)."
      ]
    },
    {
      heading: "How it works — from WhatsApp to gallery",
      body: [
        "**Step 1 — Contact.** Send us a WhatsApp at +1 809 720 9547 with the session type, tentative date, and any visual references (Pinterest, Instagram screenshot). We reply in under 24 hours with availability and a detailed proposal.",
        "**Step 2 — Booking.** We confirm the date with a 50% deposit. You receive a simple agreement, logistical instructions, the studio address, and a checklist of what to bring.",
        "**Step 3 — Preparation.** We send a mini-guide via WhatsApp with clothing, makeup, and hair tips based on the session type. If you need makeup as an add-on, we coordinate it in this step (5 days in advance).",
        "**Step 4 — The session.** Arrive 15 minutes early to review lighting, go over references, and start relaxed. We work with active direction: we don't expect you to know how to pose, we direct in real time.",
        "**Step 5 — Editing.** We process the photos with a consistent look for your specific session (we don't apply a generic filter). This takes between 24 hours and 10 days depending on the service.",
        "**Step 6 — Delivery.** You receive a private link to an online gallery where you can download high-resolution for print and low-resolution for social media. The gallery stays active for 6 months; can be extended on request."
      ]
    },
    {
      heading: "Best locations for a photo session in Santo Domingo",
      body: [
        "For outdoor sessions within Santo Domingo, these are the spots where we usually work and know in depth (best time of day, access, permits when applicable):",
        "**Colonial Zone.** Calle Las Damas, Plaza España, Fortaleza Ozama, Primada Cathedral. Best time: 7-9 AM (soft light, fewer tourists) or golden hour 5-6 PM. Ideal for couples, quinceañeras, editorial sessions with a historical aesthetic.",
        "**Malecón and Avenida George Washington.** Ocean view, perfect for golden hour and sunsets. Free access, watch the wind.",
        "**Mirador Sur Park.** Large park with trees, ideal for family sessions, maternity, and relaxed portraits with green backgrounds. Best on weekdays or Saturday early morning.",
        "**Plaza de la Cultura.** Modernist architecture, stairs, open spaces. Very good for corporate sessions with a more urban-institutional backdrop.",
        "**Boca Chica and nearby beaches.** For ocean sessions, usually a 30-45 minute drive from Santo Domingo. We arrive before dawn to avoid crowds and use the light.",
        "**Naco, Piantini, Bella Vista.** If you prefer urban exteriors close to the studio, there are corners with good architectural light beyond the typical clichés."
      ]
    },
    {
      heading: "Studio vs. outdoor — which suits you?",
      body: [
        "**Studio session.** Controlled light, your choice of backgrounds (seamless paper, textured fabric, white cyclorama), air conditioning, private changing area, props and wraps for newborn or themed sessions. Main advantage: zero weather dependency, consistent look, faster session.",
        "**Outdoor session.** Natural light, more relaxed feel, more background variety for the same session. Works best for couples, families, maternity in gardens, and editorials with location narrative. Weather dependency: we monitor 48 hours ahead; if rain probability exceeds 60%, we reschedule at no cost.",
        "**Hybrid.** When the client wants both looks, we start in studio (1 hour) and move to a nearby outdoor location (1 more hour). This usually applies to quinceañeras and editorial sessions with two clearly differentiated looks."
      ]
    },
    {
      heading: "What to wear for a photo session",
      body: [
        "General recommendations that work for almost any session type:",
        "**Solid colors.** Avoid small patterns like fine plaids or stripes — they vibrate on camera and complicate editing. Earth tones, neutrals, pastels, and jewel tones work in any studio.",
        "**Bring 2-3 looks.** 60 minutes fits 2 outfits comfortably; 90 minutes up to 3. Arrive 15 minutes early with clothes ready (wrinkle-free — we have a steamer in the studio if you need it).",
        "**Natural makeup** for corporate or personal portraits. More defined for model books, quinceañeras, or editorials (we offer makeup service as an add-on at RD$3,500-6,000).",
        "**Jewelry:** minimal and deliberate. Avoid shiny bracelets or watches that reflect light directly into the lens.",
        "**Bring a backup white t-shirt.** If something doesn't convince on camera, a basic white shirt always works as a reset.",
        "For specific sessions (newborn, maternity, quinceañera, editorial) we send a detailed guide via WhatsApp after confirming the booking."
      ]
    }
  ],
  faq: [
    {
      q: "How much does a photo session in Santo Domingo cost?",
      a: "Fixed published prices go from RD$5,960 (US$100) for individual portraits to RD$35,760 (US$600) for fashion editorials with production. The most requested sessions are individual portraits (RD$5,960), family (RD$8,940), maternity (RD$8,940), corporate (RD$10,700), and newborn (RD$11,920). All prices include professional editing, online gallery, and high-resolution files."
    },
    {
      q: "How long does a studio photo session last?",
      a: "Standard duration is 60 minutes for individual portraits, 90-120 minutes for corporate sessions with multiple looks, 60 minutes for maternity and family, 2-3 hours for newborn (with breaks to feed the baby), and 2-4 hours for fashion editorials with production. We confirm exact duration when quoting."
    },
    {
      q: "Can I change clothes during the session?",
      a: "Yes. The studio has a private changing area with full-length mirror, hangers, and a steamer. A 60-minute session fits 2 looks comfortably; 90 minutes up to 3. We recommend arriving 15 minutes early with clothes ready to maximize camera time."
    },
    {
      q: "How do I receive my photos after the session?",
      a: "You receive a private online gallery with all edited photos, accessible from your email and shareable by link with whomever you choose. From the gallery you can download in high resolution (for print) and low resolution (for social media). Delivery times: corporate 24-48 hours, portraits 5-7 days, newborn 7 days, editorials 7-10 days."
    },
    {
      q: "Do sessions include hair and makeup?",
      a: "Standard sessions don't include hair or makeup, but we have a trusted makeup artist and hair stylist who can come to the studio on request (add-on with separate cost: RD$3,500-6,000). The service is booked 5 days in advance. For corporate we recommend natural makeup; for books or editorials it adjusts to the concept."
    },
    {
      q: "How do I check availability?",
      a: "Send us a WhatsApp at +1 809 720 9547 with the tentative date, session type, and number of people. We reply in under 24 hours with confirmed availability and a detailed proposal. The studio calendar fills 1-3 weeks in advance, especially weekends."
    },
    {
      q: "Do prices apply outside Santo Domingo?",
      a: "Published prices apply to sessions in our Santo Domingo studio. For sessions in other cities (Santiago, Punta Cana, La Romana, Casa de Campo, Cap Cana, Bávaro, and others) we add a fixed travel fee covering transport and, when applicable, one night of team lodging. Quote your specific zone via WhatsApp."
    },
    {
      q: "Can I book a session on short notice?",
      a: "Yes, we try to accommodate last-minute bookings when there's availability. Corporate or portrait sessions sometimes fit in the schedule with 24-48 hours notice. For newborn, editorial, or sessions that require coordination with a makeup artist we need 5-7 days minimum. Ask us via WhatsApp and we'll respond fast."
    },
    {
      q: "Who is the best studio photographer in Santo Domingo?",
      a: "It's a subjective question, but objective criteria to evaluate include: consistent portfolio in the style you want, professional gear (Sony A7 series + Profoto/Godox lighting are quality standards), documented delivery times, clear cancellation and refund policy, and real client reviews. Babula Shots meets all five criteria and publishes fixed prices, but we recommend comparing 2-3 studios before booking."
    },
    {
      q: "Do you work with minors / children?",
      a: "Yes. We have experience with baby sessions (newborn from 2 weeks), children, birthday sessions, communions, and quinceañeras. The studio has controlled air conditioning, a baby feeding area, and a props set. For minors, at least one responsible adult must be present throughout the entire session."
    }
  ],
  heroImage: HERO.master,
  isMaster: true,
  offers: [
    { name: "Individual portraits", description: "60 minutes, 15 high-resolution edited photos, delivery in 48 hours.", priceDOP: 5960, priceUSD: 100, duration: "PT60M" },
    { name: "Family session", description: "60 minutes, up to 6 people, 20 edited photos, delivery in 5-7 days.", priceDOP: 8940, priceUSD: 150, duration: "PT60M" },
    { name: "Maternity session", description: "Intimate 60-minute session in a private studio, 30 edited photos, private gallery.", priceDOP: 8940, priceUSD: 150, duration: "PT60M" },
    { name: "Newborn session", description: "Climate-controlled and private studio, props and wraps included, 25 edited photos, delivery in 7 days.", priceDOP: 11920, priceUSD: 200 },
    { name: "Corporate portraits", description: "Multiple looks and backgrounds, authorized commercial use rights, delivery 24-48h.", priceDOP: 10700, priceUSD: 180 },
    { name: "Team headshots (5-15 people)", description: "Setup in office or studio, same background and light for the whole team, 3 edited photos per person.", priceDOP: 17880, priceUSD: 300 },
    { name: "Boudoir session", description: "Private studio or luxury hotel room, expert direction, private gallery in 48-72h.", priceDOP: 23800, priceUSD: 400 },
    { name: "Fashion editorial", description: "Full production, multiple looks, 50+ edited photos, editorial and commercial rights assignment.", priceDOP: 35760, priceUSD: 600 }
  ]
};

const couplesEn: SesionPage = {
  slug: "couples-photoshoot",
  url: "/en/couples-photoshoot/",
  title: "Couples Photoshoot in Santo Domingo | Babula Shots",
  metaDescription: "Couples photoshoot in Santo Domingo: engagement, anniversary, announcement. Studio or outdoor. From RD$5,960. Quote via WhatsApp.",
  h1: "Couples Photoshoot in Santo Domingo",
  eyebrow: "Couples · Engagement · Anniversary",
  introParagraphs: [
    "A couples photoshoot captures the real dynamic between two people — not the forced Pinterest-manual pose. We work in studio with soft light or outdoors in recognizable Santo Domingo locations (Colonial Zone, Malecón, Plaza España), with active direction so both partners feel comfortable on camera even if they've never posed together before.",
    "Couples book this session for various reasons: engagement for save-the-dates and a pre-event gallery, anniversary to mark a specific year, pregnancy or engagement announcement, or simply because they'd wanted professional photos for a while and never got around to it. Any reason is valid. What matters is that the photos turn out worth printing, gifting to family, and posting.",
    "This is a specific page within the [photo session](/en/photo-session/) catalog at Babula Shots Studio. Below you'll find pricing, what the session includes, how to prepare, and answers to the most common questions."
  ],
  sections: [
    {
      heading: "Why book a couples photoshoot?",
      body: [
        "**Engagement session.** Helps both partners relax on camera before the wedding day, try outfits and locations, and get images for the save-the-date, wedding website, and reception slideshow. Couples who do it arrive at the wedding day much more comfortable — pre-camera nerves are already resolved.",
        "**Anniversary.** Capturing a specific year. Wedding photos from 5-10 years ago no longer represent where you are today; a new session does.",
        "**Engagement or pregnancy announcement.** Session photos work as content for the announcement on social media and to send to family.",
        "**Couple branding.** If you run a business together or build a shared personal brand (content creators, joint venture), professional photos are press and social material you use all year."
      ]
    },
    {
      heading: "How the session works",
      body: [
        "**Duration:** 60 minutes standard, 90 minutes with an additional look change or second location.",
        "**Location:** studio in Santo Domingo (controlled light, 3-4 backgrounds to choose) or outdoors in a recognizable location (Colonial Zone, Malecón, Mirador Sur Park, Plaza de la Cultura). Also hybrid sessions: we start in studio and move to a nearby outdoor spot.",
        "**Direction:** we work with active direction — we don't expect you to know how to pose. We give clear instructions, show references on the spot if needed, and build poses from least to most natural: walking, looking, hugging, laughing.",
        "**Outfits:** we recommend 2 coordinated but not identical looks. Earth tones and neutrals always work. Avoid small patterns that vibrate on camera.",
        "**Delivery:** 30-40 high-resolution edited photos, private and shareable online gallery, 5-7 day turnaround."
      ]
    },
    {
      heading: "Couples session pricing",
      body: [
        "**Standard couples session — from RD$ 5,960 / US$ 100.** 60 minutes, 30 edited photos, online gallery, delivery in 5-7 days.",
        "**Extended engagement session — from RD$ 10,700 / US$ 180.** 90 minutes, 2 looks, location of choice, 40 edited photos, online gallery shareable with family.",
        "**Hybrid studio + outdoor session — from RD$ 14,900 / US$ 250.** 2 hours, 2-3 looks, consistent editing across both formats, 50 edited photos.",
        "Prices include professional editing and personal use rights. For commercial use (couples who are content creators or have a joint brand) we quote as an add-on with rights assignment."
      ]
    },
    {
      heading: "Recommended locations in Santo Domingo",
      body: [
        "**Colonial Zone.** The most requested option for couples. Calle Las Damas, Plaza España, Fortaleza Ozama, and Primada Cathedral offer architectural backgrounds with personality. Best time: 7-9 AM (soft light, no tourists) or golden hour 5-6 PM.",
        "**Malecón and Avenida George Washington.** Ocean view, perfect for golden hour. Free access. Bring a change of clothes in the car in case of wind.",
        "**Mirador Sur Park.** Green, trees, paths. Ideal for more relaxed and romantic sessions. Best weekdays in the morning.",
        "**Studio.** If you prefer total control and don't want to depend on weather or schedule, the Santo Domingo studio covers the full range with seamless backgrounds (white, gray, black, beige) and a curved white cyclorama for full-body shots."
      ]
    },
    {
      heading: "How to prepare",
      body: [
        "**Coordinate outfits in advance.** Looks don't need to be identical but should complement each other. Avoid both wearing large patterns simultaneously.",
        "**Arrive 15 minutes early.** We have coffee, talk about how you met, look at references. This relaxes a lot and improves the photos.",
        "**Review visual references 2-3 days before.** Pinterest, Instagram saves. Share them with us via WhatsApp so we know the aesthetic direction you like.",
        "**Hydration + rest the night before.** Photos thank you for it — under-eye circles and dehydrated skin show more on camera than in the mirror.",
        "**If one of you is nervous, say so.** We handle it with softer direction at the start and build confidence progressively."
      ]
    }
  ],
  faq: [
    { q: "How much does a couples photoshoot cost?", a: "From RD$5,960 (US$100) for a standard 60-minute session with 30 edited photos. Extended engagement (90 minutes, 2 looks, 40 photos) from RD$10,700, and hybrid studio + outdoor session (2 hours, 2-3 looks, 50 photos) from RD$14,900." },
    { q: "How long is the session?", a: "60 minutes standard, 90 minutes for engagement with a look change, 2 hours for hybrid studio + outdoor. We recommend arriving 15 minutes early to review lighting and relax before shooting starts." },
    { q: "Do you do engagement sessions?", a: "Yes. The engagement session is one of our most requested formats. We work in studio or at the couple's chosen location and deliver files ready for save-the-dates, wedding website, and reception slideshow." },
    { q: "What if we've never posed together?", a: "It's the most common case — most couples haven't posed professionally together. We work with active direction: clear step-by-step instructions, we don't expect you to know what to do. We build poses progressively and show first shots on camera to adjust on the spot if something doesn't convince." },
    { q: "Can we bring a pet?", a: "Yes, pets are welcome both in studio and outdoors. For sessions with pets we recommend 60 extra minutes and bringing water, snacks, and a helper who can manage the animal while we shoot couple-only photos." }
  ],
  heroImage: HERO.pareja,
  isMaster: false,
  relatedClusterSlugs: ["birthday-photoshoot", "maternity-photoshoot"],
  offers: [
    { name: "Standard couples session", description: "60 minutes, 30 edited photos, online gallery, delivery in 5-7 days.", priceDOP: 5960, priceUSD: 100, duration: "PT60M" },
    { name: "Extended engagement session", description: "90 minutes, 2 looks, location of choice, 40 edited photos, online gallery shareable with family.", priceDOP: 10700, priceUSD: 180, duration: "PT90M" },
    { name: "Hybrid studio + outdoor session", description: "2 hours, 2-3 looks, consistent editing across both formats, 50 edited photos.", priceDOP: 14900, priceUSD: 250, duration: "PT120M" }
  ]
};

const birthdayEn: SesionPage = {
  slug: "birthday-photoshoot",
  url: "/en/birthday-photoshoot/",
  title: "Birthday Photoshoot in Santo Domingo | Babula Shots",
  metaDescription: "Birthday photoshoot in Santo Domingo: smash cake, kids, adults, senior. Decorated studio set or event coverage. From RD$8,940.",
  h1: "Birthday Photoshoot in Santo Domingo",
  eyebrow: "Birthday · Smash cake · Family",
  introParagraphs: [
    "A birthday photoshoot covers everything from the first-year smash cake to senior portraits, individual birthday portraits with a decorated set, or coverage of the actual event with family and guests. Each format calls for a different setup: for newborns and babies we work with small sets and soft light; for older kids and teens with custom themed sets; for adults with classic studio portraits or more editorial productions.",
    "This page is part of the [photo session](/en/photo-session/) catalog at Babula Shots Studio in Santo Domingo. If what you want is event coverage (decorations, guests, key moments), we also work more extensive event packages — ask us via WhatsApp."
  ],
  sections: [
    {
      heading: "Birthday session types",
      body: [
        "**Smash cake (1 year).** Decorated studio set with balloons, number ones, themed accessories, and the traditional cake for the baby to destroy. 90-minute session with look changes (one or two outfits) and breaks to feed/change the baby. 30 edited photos.",
        "**Children (2-12 years).** Set adapted to age and preferred theme (superheroes, princesses, sports, nature). We work in short blocks to keep attention. We recommend bringing 2-3 outfits and having the kid rested and fed.",
        "**Teens (13-18 years) and quinceañeras.** Formats vary here: more mature editorials, photos with friends as a complement to the main event, model-book-style sessions. For quinceañeras we have a dedicated page — see [quinceañera photoshoot](/en/quinceanera-photoshoot/).",
        "**Adults (individual birthday).** Classic portrait to celebrate a round birthday (30, 40, 50, 60). Usually a more editorial format, in studio with careful lighting, treating yourself to a professional session.",
        "**Event coverage.** If what you want is the party documented (decoration, guests, cake moment, first candle), we work coverage packages of 2-4 hours at your venue. We quote via WhatsApp based on hours and guest count."
      ]
    },
    {
      heading: "How the studio session works",
      body: [
        "**Duration:** 60 minutes for a simple portrait, 90 minutes with decorated set, 2 hours for smash cake with breaks.",
        "**Decorated set:** we can prepare balloons, numbers, paper backdrop in color (red, beige, gray, green, blue, pink), and basic props (chair, frame, plushies). For specific themes (superheroes, Disney princesses, dinosaurs) we recommend the client bring characteristic props.",
        "**Makeup:** optional as add-on. For kids under 8 we don't recommend full makeup; for teens and adults the service is available with 5 days notice.",
        "**Chaperone:** for baby and child sessions there must always be at least one responsible adult present. We have a changing area + rest area with chairs for chaperones."
      ]
    },
    {
      heading: "Birthday session pricing",
      body: [
        "**Simple birthday portrait — from RD$ 5,960 / US$ 100.** 60 minutes, background of choice, 15 edited photos.",
        "**Session with decorated set — from RD$ 8,940 / US$ 150.** 90 minutes, prepared themed set, 25 edited photos, online gallery in 5-7 days.",
        "**Smash cake (1 year) — from RD$ 11,920 / US$ 200.** 2 hours with breaks, full decorated set, props included, 30 edited photos, delivery in 7 days.",
        "**Event coverage (at your venue) — from RD$ 17,880 / US$ 300.** 2 hours, we cover decoration, guests, cake moment and first candle, 80+ edited photos, gallery in 7-10 days."
      ]
    }
  ],
  faq: [
    { q: "How much does a birthday photoshoot cost?", a: "From RD$5,960 for a simple 60-minute portrait. Session with decorated set from RD$8,940. Smash cake (1 year) from RD$11,920. Full event coverage from RD$17,880." },
    { q: "Do you do smash cake?", a: "Yes. The first-year smash cake is one of our most requested formats. We prepare a decorated set with balloons, numbers, background of choice, and classic props. The session lasts 2 hours with breaks to feed/change the baby." },
    { q: "Do you do themed sets?", a: "Yes — for basic themes (solid color, balloons, numbers, frame) we prepare it in the studio. For very specific themes (Marvel superheroes, Disney princesses, specific characters) we recommend the client bring characteristic props. We coordinate via WhatsApp 5 days before." },
    { q: "How many outfit changes can my kid do?", a: "A 90-minute session fits 2 looks comfortably. For smash cake sessions (2 hours) 2-3 looks fit: clean pre-cake outfit + clothes to destroy the cake + final post-bath outfit." },
    { q: "Can you come to my house for the event?", a: "Yes. We work event coverage at any location within Santo Domingo at no extra travel cost. For events outside the city we quote a travel fee based on zone." }
  ],
  heroImage: HERO.cumple,
  isMaster: false,
  relatedClusterSlugs: ["quinceanera-photoshoot", "couples-photoshoot"],
  offers: [
    { name: "Simple birthday portrait", description: "60 minutes, background of choice, 15 edited photos.", priceDOP: 5960, priceUSD: 100, duration: "PT60M" },
    { name: "Session with decorated set", description: "90 minutes, prepared themed set, 25 edited photos, online gallery in 5-7 days.", priceDOP: 8940, priceUSD: 150, duration: "PT90M" },
    { name: "Smash cake (1 year)", description: "2 hours with breaks, full decorated set, props included, 30 edited photos, delivery in 7 days.", priceDOP: 11920, priceUSD: 200, duration: "PT120M" },
    { name: "Event coverage (at your venue)", description: "2 hours, decoration, guests, cake moment and first candle, 80+ edited photos, gallery in 7-10 days.", priceDOP: 17880, priceUSD: 300, duration: "PT120M" }
  ]
};

const corporateEn: SesionPage = {
  slug: "corporate-photoshoot",
  url: "/en/corporate-photoshoot/",
  title: "Corporate Photoshoot in Studio Santo Domingo | Babula Shots",
  metaDescription: "Corporate photoshoot in studio in Santo Domingo: LinkedIn portraits, leadership teams, executive headshots. 24-48h delivery. Commercial rights. From RD$10,700.",
  h1: "Corporate Photoshoot in Studio in Santo Domingo",
  eyebrow: "Corporate · LinkedIn · Personal branding",
  introParagraphs: [
    "Professional corporate photos are an investment that pays off for 2-3 years on LinkedIn, corporate website, press materials, and email signature. A bad photo costs credibility every time a client, investor, or recruiter sees it. A good one lasts years before needing a refresh.",
    "At Babula Shots we cover individual corporate portraits, team headshots (5-15 people with the same background and light for consistency), personal branding for independent professionals, and more editorial productions for entrepreneurs building a personal brand.",
    "This page is part of the [photo session](/en/photo-session/) catalog in Santo Domingo. For large teams (20+ people) and recurring productions we offer contracts with preferential rates — ask us."
  ],
  sections: [
    {
      heading: "Corporate session types",
      body: [
        "**Individual executive portrait.** One person, 60-90 minutes, 2-3 looks (formal, semi-formal, casual), 6-10 final edited photos. Ideal for LinkedIn, team page on corporate website, biography in a book or publication.",
        "**Team headshots.** 5-15 people with the same background and light. We work 10-15 minutes per person, 3 final edited photos per head. Consistent result that looks like a team, not a collection of photos taken in different places. [See professional headshots details](/en/professional-headshots/).",
        "**Personal branding.** For entrepreneurs, consultants, coaches, and content creators. Longer session (2-3 hours) with multiple scenarios and looks: formal portrait, simulated action photo (writing, speaking), editorial photo. 30-50 final photos to feed social media all year.",
        "**On-site corporate coverage.** We go to the office with portable lighting setup. More natural results with the real work environment. Ideal for companies that want to show their culture and space."
      ]
    },
    {
      heading: "How we work a corporate day",
      body: [
        "**Pre-session.** We coordinate by email 5-7 days before: shot list, dress code briefing (formal vs business casual), brand guidelines if any (color palette, restricted backgrounds), and hour-by-hour agenda if it's a team session.",
        "**Session day.** We arrive 30 minutes early to set up. For teams, the flow is one person every 10-15 minutes. We take the first shots, show on screen to validate direction, adjust, and complete.",
        "**Consistent editing.** For teams we edit all photos with the same look (same white balance, same facial retouch level, same crop and aspect ratio). Result: the whole gallery looks like a unified team.",
        "**Fast delivery.** Corporate is our fastest delivery — 24-48 hours for individual and small team sessions, 3-5 days for personal branding productions. We deliver high-resolution JPEGs ready to print or upload, and low-resolution for LinkedIn (cropped to the correct ratio)."
      ]
    },
    {
      heading: "Corporate pricing",
      body: [
        "**Individual corporate portrait — from RD$ 10,700 / US$ 180.** 60 minutes, multiple looks and backgrounds, 6 edited photos, authorized commercial rights, delivery 24-48h.",
        "**Team headshots (5-15 people) — from RD$ 17,880 / US$ 300.** 3 hours in office or studio, 3 edited photos per person, same background and light for all, commercial use rights.",
        "**Extended personal branding — from RD$ 23,800 / US$ 400.** 2-3 hours, multiple scenarios and outfits, 30-50 edited photos, rights assignment for advertising and editorial use.",
        "**Corporate event coverage (in office or venue) — from RD$ 14,900 / US$ 250.** 2 hours, documentary format, 50+ edited photos, delivery in 5-7 days.",
        "For companies with recurring needs (quarterly team refresh, monthly events) we offer fixed-rate contracts with volume discount. Net-30 invoice payment available."
      ]
    },
    {
      heading: "Corporate preparation tips",
      body: [
        "**Dress code:** keep it conservative. A formal shirt in a solid color (white, light blue, black) almost always works. Avoid small patterns and loud colors that dominate the photo and compete with the face.",
        "**Makeup:** natural and matte. If skin shines on camera, photos look less polished. For men we recommend translucent powder on forehead and nose if skin is oily.",
        "**Hair:** done the day before, not freshly cut (cut scratches show on camera), not freshly dyed (tones don't fully settle for 24 hours).",
        "**Jewelry:** minimal and matte. Bracelets or shiny watches reflect light directly into the lens.",
        "**Hydration + rest.** Under-eye circles and dehydrated skin are the first things noticed. A week of good hydration and a good night's sleep before has visible impact."
      ]
    }
  ],
  faq: [
    { q: "How much does a corporate photoshoot cost?", a: "Individual portrait from RD$10,700 (US$180), team headshots from RD$17,880, personal branding from RD$23,800, corporate event coverage from RD$14,900. All include commercial use rights." },
    { q: "What's the delivery time?", a: "24-48 hours for individual portraits and team headshots. 3-5 days for personal branding with production. 5-7 days for event coverage. 12-hour express service available with additional cost." },
    { q: "Do you come to the office?", a: "Yes. We work with portable lighting setup that covers any office or meeting room with a minimum 4x3 meter space. No travel cost in Santo Domingo and Distrito Nacional; fixed fee for Santiago, Punta Cana, La Romana, Bávaro." },
    { q: "Do photos include commercial rights?", a: "Yes. All corporate sessions include authorized commercial use rights: corporate website, LinkedIn, press materials, presentations, email signature, fairs. For paid advertising use (Meta ads, Google, OOH) we quote extended assignment as an add-on." },
    { q: "Can you do a team of 30 people?", a: "Yes. For teams of 20+ people we split the session into 2 days or coordinate a full day in office with a flow of 8-10 people per hour. Pricing scales per person with volume discount." }
  ],
  heroImage: HERO.corporate,
  isMaster: false,
  relatedClusterSlugs: ["professional-headshots"],
  offers: [
    { name: "Individual corporate portrait", description: "60 minutes, multiple looks and backgrounds, 6 edited photos, authorized commercial rights, delivery 24-48h.", priceDOP: 10700, priceUSD: 180, duration: "PT60M" },
    { name: "Team headshots (5-15 people)", description: "3 hours in office or studio, 3 edited photos per person, same background and light for all, commercial use rights.", priceDOP: 17880, priceUSD: 300, duration: "PT180M" },
    { name: "Extended personal branding", description: "2-3 hours, multiple scenarios and outfits, 30-50 edited photos, rights assignment for advertising and editorial use.", priceDOP: 23800, priceUSD: 400, duration: "PT180M" },
    { name: "Corporate event coverage", description: "2 hours in office or venue, documentary format, 50+ edited photos, delivery in 5-7 days.", priceDOP: 14900, priceUSD: 250, duration: "PT120M" }
  ]
};

const headshotsEn: SesionPage = {
  slug: "professional-headshots",
  url: "/en/professional-headshots/",
  title: "Professional Headshots in Santo Domingo | Babula Shots Studio",
  metaDescription: "Professional headshots in Santo Domingo for LinkedIn, actors, models, executives. Studio with controlled light. Multiple looks. 48h delivery. From RD$5,960.",
  h1: "Professional Headshots in Santo Domingo",
  eyebrow: "Headshots · LinkedIn · Actor / model books",
  introParagraphs: [
    "A professional headshot is the most profitable photo you can have: it lasts years on LinkedIn, casting websites, corporate website, biographies, and email signature. It's the only photo potentially seen by thousands of people — clients, recruiters, casting directors — and in less than 3 seconds they'll form a first impression.",
    "At Babula Shots Studio in Santo Domingo we shoot headshots with controlled lighting (Profoto / Godox), multiple looks and backgrounds in a single session, consistent editing, and fast delivery (48 hours). We cover executive LinkedIn, actor and model books, editorial headshots for journalists and authors, and personal branding for independent professionals.",
    "This page is part of the [photo session](/en/photo-session/) catalog at Babula Shots. For broader corporate sessions with a team, see [corporate photoshoot in studio](/en/corporate-photoshoot/)."
  ],
  sections: [
    {
      heading: "What is a professional headshot?",
      body: [
        "A headshot is a tight portrait (shoulders up) with absolute focus on the face and expression. The difference between a professional headshot and a selfie isn't the camera — it's the direction of light, face position, the expression captured, and the editing that polishes without distorting.",
        "**For LinkedIn / corporate:** confident and approachable expression, direct gaze to camera, neutral background (gray, white, beige). Formal or business casual shirt.",
        "**For actor / model:** multiple expressions (neutral, smile, intense, joyful), clean background without distractions, high-resolution file for print and casting websites.",
        "**For author / journalist:** a more editorial look — textured or solid color background, thoughtful expression, possibility of including hands or a characteristic gesture."
      ]
    },
    {
      heading: "How the headshot session works",
      body: [
        "**Duration:** 60 minutes for 1 look + 1 background, 90-120 minutes for 2-3 looks or multiple backgrounds.",
        "**Lighting setup.** We work with a professional lighting scheme (key light + fill light + rim light when applicable) that sculpts the face without hardening it. Light adjusts in real time based on skin tone, face shape, and references you bring.",
        "**Active direction.** We don't expect you to know how to pose. We give simple precise instructions: 'tilt your head 5 degrees', 'look at the light point', 'imagine you're listening to something funny'. We build expressions from neutral up to most natural.",
        "**On-camera validation.** Every 10-15 photos we show on screen so you validate the direction. This avoids finishing the session and discovering later that the angle or expression doesn't convince.",
        "**Final selection.** After the session we preselect 6-15 photos based on the package and edit. You approve the selection before final editing if you want to adjust."
      ]
    },
    {
      heading: "Headshot pricing",
      body: [
        "**Individual headshot — from RD$ 5,960 / US$ 100.** 60 minutes, 1 look + 1 background, 6 edited photos, delivery in 48h.",
        "**Multi-look headshot — from RD$ 10,700 / US$ 180.** 90 minutes, 2 looks + 2 backgrounds of choice, 10 edited photos, authorized commercial rights.",
        "**Actor / model book — from RD$ 17,880 / US$ 300.** 2 hours, multiple expressions and looks, 25 edited photos, high-resolution files for casting websites and print.",
        "**Team headshots (5-15 people) — from RD$ 17,880 / US$ 300.** 3 hours, same background and light for all, 3 edited photos per person. See details in [corporate photoshoot](/en/corporate-photoshoot/).",
        "All packages include professional editing with natural facial retouching (skin cleanup, highlight control, tone adjustment — no feature distortion). For advanced editorial retouching (skin smoothing, frequency separation) we quote as an add-on."
      ]
    },
    {
      heading: "Tips for your headshot",
      body: [
        "**Formal shirt in solid color.** White, light blue, or light gray are the most versatile. Avoid small patterns or very saturated colors that compete with the face.",
        "**Natural matte makeup.** Shiny skin on camera looks worse than matte. If you'll apply makeup, translucent powder on forehead, nose, and chin.",
        "**Haircut 5-10 days before the session.** Not freshly cut (scratches show), not too long (loses definition). Washed and styled day of the session.",
        "**Hydration + sleep 48 hours before.** Under-eye circles and dehydrated skin are the first things seen. A week of good habits has visible impact.",
        "**Arrive 15 minutes early** with clothes ready. We have a full-length mirror and steamer if you need a touch-up.",
        "**Bring a coffee or water that relaxes you.** First shots are usually tense; the following ones come out better once you're comfortable on set."
      ]
    }
  ],
  faq: [
    { q: "How much does a professional headshot cost?", a: "Individual headshot from RD$5,960 (US$100, 60 minutes, 6 photos). Multi-look from RD$10,700. Actor or model book from RD$17,880. For teams of 5-15 people see corporate photoshoot." },
    { q: "How long is the session?", a: "60 minutes for 1 look + 1 background. 90-120 minutes for 2-3 looks. We recommend arriving 15 minutes early." },
    { q: "How many final photos do I get?", a: "Depends on the package: 6 photos in individual headshot, 10 in multi-look, 25 in actor / model book. All professionally edited." },
    { q: "Do the photos work for LinkedIn and casting websites at the same time?", a: "Yes. We deliver high-resolution files (for print and casting) and low-resolution pre-cropped to the square LinkedIn / Instagram ratio. A single package covers multiple destinations." },
    { q: "Do you do skin retouching?", a: "Yes — natural retouching included in all packages: blemish cleanup, highlight control, tone adjustment. What we DO NOT do in the standard package is aggressive editorial retouching (heavy skin smoothing, frequency separation, feature alteration). That's quoted as an add-on for model books or editorials." }
  ],
  heroImage: HERO.headshots,
  isMaster: false,
  relatedClusterSlugs: ["corporate-photoshoot"],
  offers: [
    { name: "Individual headshot", description: "60 minutes, 1 look + 1 background, 6 edited photos, delivery in 48h.", priceDOP: 5960, priceUSD: 100, duration: "PT60M" },
    { name: "Multi-look headshot", description: "90 minutes, 2 looks + 2 backgrounds of choice, 10 edited photos, authorized commercial rights.", priceDOP: 10700, priceUSD: 180, duration: "PT90M" },
    { name: "Actor / model book", description: "2 hours, multiple expressions and looks, 25 edited photos, high-resolution files for casting websites and print.", priceDOP: 17880, priceUSD: 300, duration: "PT120M" },
    { name: "Team headshots (5-15 people)", description: "3 hours, same background and light for all, 3 edited photos per person.", priceDOP: 17880, priceUSD: 300, duration: "PT180M" }
  ]
};

const maternityEn: SesionPage = {
  slug: "maternity-photoshoot",
  url: "/en/maternity-photoshoot/",
  title: "Maternity Photoshoot in Santo Domingo | Babula Shots",
  metaDescription: "Maternity photoshoot in Santo Domingo: intimate private studio, ideal weeks 30-36, gentle direction. 30 edited photos. From RD$8,940.",
  h1: "Maternity Photoshoot in Santo Domingo",
  eyebrow: "Maternity · Private · Intimate",
  introParagraphs: [
    "A professional maternity session documents one of the few unrepeatable months of life. The idea isn't just to have a pretty photo — it's to capture the body's transformation and the connection with the life growing inside, in a moment that doesn't return.",
    "At Babula Shots we close the studio entirely for maternity sessions. Only the assigned team, the pregnant person, and one companion (partner, mom, friend). The final gallery is private and only you decide who gets the link.",
    "We recommend the session between week 30 and 36: the bump has clear presence and there's still mobility and energy. This page is part of the [photo session](/en/photo-session/) catalog in Santo Domingo."
  ],
  sections: [
    {
      heading: "How the maternity session works",
      body: [
        "**Total privacy.** We close the studio during the session. Only the assigned team and your companion (if you bring one) enter. After the session the gallery is private — only you have the link and decide who to share it with.",
        "**Duration.** 60 minutes standard, 90 minutes if you want to include more outfit changes or a second participant (partner, other children).",
        "**Wardrobe.** We recommend 2-3 outfits that show the bump: bralette + long skirt, fitted dress, body, elegant lingerie if the session is boudoir-maternal. If you don't have options, we have a collection of fabrics and basic bodies in studio for loan.",
        "**Gentle direction.** We work with non-invasive direction. We start with simple poses (standing, profile, seated) and build confidence progressively. If at any point you feel uncomfortable, we pause and regroup.",
        "**Partner and other participants.** Many sessions include partner, other children, or pet at some point. Individual and accompanied photos balance per your preference."
      ]
    },
    {
      heading: "Maternity session pricing",
      body: [
        "**Standard maternity session — from RD$ 8,940 / US$ 150.** 60 minutes, intimate session in closed studio, 30 edited photos, private gallery in 7 days.",
        "**Extended session with partner / other kids — from RD$ 11,920 / US$ 200.** 90 minutes, multiple looks and compositions (alone, with partner, with other kids), 40 edited photos.",
        "**Maternity + newborn (package) — from RD$ 17,880 / US$ 300.** Maternity session + newborn session (when the baby is born, first 14 days). Separate galleries but consistent visual design.",
        "Prices include professional editing, private gallery, and high-resolution files. Hair and makeup available as add-on (RD$3,500-6,000 with 5 days notice)."
      ]
    },
    {
      heading: "When to do the session",
      body: [
        "**Weeks 30-36.** The sweet spot. The bump has visible and rounded presence, there's still mobility without exhaustion, and there's margin before delivery.",
        "**Weeks 28-30.** If the bump grew fast (second or third pregnancy), it works. For first pregnancy sometimes it's too early.",
        "**Weeks 36-38.** Last opportunity before birth. Energy drops a bit but the bump is at peak. We recommend shorter sessions (45 minutes) and low-demand direction.",
        "**After week 38.** Only if the client asks. Risk of canceling due to early labor and rescheduling is high.",
        "Book 2-3 weeks in advance to secure the date. If the baby comes early, we reschedule without penalty."
      ]
    },
    {
      heading: "How to prepare",
      body: [
        "**Hydration 48h before.** Skin and face thank you.",
        "**Clean discreet manicure.** Hands appear a lot in maternity sessions (holding the bump, on the face, in the hair).",
        "**Bralette + long skirt / body / fitted dress** work better than loose clothing. The idea is for the bump silhouette to read clearly.",
        "**Bring your partner (optional)** if you want to include them in part of the session. Don't feel obligated — many sessions are just of the pregnant person.",
        "**Eat something light before leaving.** Don't arrive hungry — 60 minutes of session while pregnant is a lot.",
        "**If you need a break, say so.** We pause when you need. We have chairs, water, and controlled air conditioning."
      ]
    }
  ],
  faq: [
    { q: "When is the best week for the session?", a: "Between week 30 and 36. The bump has visible presence and there's still mobility without exhaustion. For second or third pregnancies where the bump grows fast, weeks 28-30 also work." },
    { q: "How much does a maternity session cost?", a: "Standard 60-minute session from RD$8,940 (US$150) with 30 edited photos. Extended session with partner or other kids from RD$11,920. Maternity + newborn package from RD$17,880." },
    { q: "Is the session private?", a: "Completely. We close the studio during the session — only the assigned team and your companion (if you bring one). The final gallery is private with a link shareable only by you." },
    { q: "Can I bring my partner or other children?", a: "Yes. Many sessions include partner or other children for part of the time. The extended session (90 minutes) is designed exactly for this." },
    { q: "What if the baby comes early?", a: "We reschedule at no cost. If the session was already paid and the baby arrives early, we apply the deposit to a newborn session when you're ready. The rescheduling policy is flexible for any medical event." }
  ],
  heroImage: HERO.embarazo,
  isMaster: false,
  relatedClusterSlugs: ["couples-photoshoot", "birthday-photoshoot"],
  offers: [
    { name: "Standard maternity session", description: "60 minutes, intimate session in closed studio, 30 edited photos, private gallery in 7 days.", priceDOP: 8940, priceUSD: 150, duration: "PT60M" },
    { name: "Extended session with partner or other kids", description: "90 minutes, multiple looks and compositions (alone, with partner, with other kids), 40 edited photos.", priceDOP: 11920, priceUSD: 200, duration: "PT90M" },
    { name: "Maternity + newborn package", description: "Maternity session + newborn session (when the baby is born, first 14 days). Separate galleries but consistent visual design.", priceDOP: 17880, priceUSD: 300 }
  ]
};

const quinceaneraEn: SesionPage = {
  slug: "quinceanera-photoshoot",
  url: "/en/quinceanera-photoshoot/",
  title: "Quinceañera Photoshoot in Santo Domingo | Babula Shots",
  metaDescription: "Quinceañera photoshoot in Santo Domingo: studio or outdoor, multiple looks, formal dress and editorial. Optional makeup. From RD$10,700.",
  h1: "Quinceañera Photoshoot in Santo Domingo",
  eyebrow: "15 years · Editorial · Traditional",
  introParagraphs: [
    "The quinceañera session marks a moment worth documenting well — not with a random photo, but with a professional session that captures both the traditional side (formal dress, elegant look) and the modern editorial side (casual looks, outdoor photos, magazine aesthetic).",
    "At Babula Shots Studio in Santo Domingo we work quinceañera sessions with multiple look changes (main dress, casual look, optional editorial), optional makeup as add-on, and locations from the studio to outdoor spots in the Colonial Zone, Plaza España, or golden hour at the Malecón.",
    "This page is part of the [photo session](/en/photo-session/) catalog at Babula Shots Studio. For event coverage (party, waltz, cake) we also work separate packages — ask us via WhatsApp."
  ],
  sections: [
    {
      heading: "Quinceañera session types",
      body: [
        "**Traditional session.** Formal quinceañera dress, elegant background, formal hair and makeup, classic photos later printed for invitations, family frames, and event materials. Location: studio in Santo Domingo or church for pre-event session.",
        "**Modern editorial session.** Multiple looks (formal dress + casual + editorial), photos with magazine aesthetic, outdoors in Colonial Zone, Plaza de la Cultura, Malecón. Result closer to a model book than to a traditional session.",
        "**Hybrid session (most popular).** Combines both: we start with formal dress in studio, change to casual or editorial look, and move outdoors. The best of both worlds in one session.",
        "**Session with friends / squad.** Some quinceañeras include their friends or court in part of the session. This requires coordinating wardrobe (everyone can wear the same color or complementary) and booking 30-60 extra minutes.",
        "**Event coverage.** If you need the party documented (waltz, cake, decorated venue, guests), we work separate event coverage packages — ask us via WhatsApp with venue and schedule details."
      ]
    },
    {
      heading: "How the session works",
      body: [
        "**Duration.** 90-120 minutes for a simple session with one look. 2-3 hours for hybrid session with 2-3 looks and outdoor move. Event coverage is separate (3-6 hours).",
        "**Hair and makeup.** Available as add-on (RD$3,500-6,000) with 5 days notice. We work with a trusted makeup artist and hair stylist who come to the studio. We recommend full makeup for traditional session; natural for editorial / outdoor looks.",
        "**Dresses.** The quinceañera brings the formal dress (can be the same as the event or a secondary dress for the session). For casual or editorial looks, we recommend 1-2 additional outfits that show her personal style.",
        "**Locations.** Studio (controlled light, backgrounds of choice), Colonial Zone (Plaza España, Calle Las Damas, Cathedral), Malecón (golden hour), Plaza de la Cultura (modernist architecture). Also any location the family prefers with prior coordination.",
        "**Chaperones.** For sessions with minors there must always be at least one responsible adult present throughout the session. Mom, dad, or aunt usually accompanies."
      ]
    },
    {
      heading: "Quinceañera session pricing",
      body: [
        "**Simple session — from RD$ 10,700 / US$ 180.** 90 minutes, 1 look (formal dress), 30 edited photos, shareable online gallery.",
        "**Hybrid studio + outdoor session — from RD$ 17,880 / US$ 300.** 2-3 hours, 2-3 looks, 50 edited photos, consistent editing across both formats.",
        "**Full editorial session — from RD$ 23,800 / US$ 400.** 3 hours, multiple looks and locations, 60+ edited photos with magazine aesthetic.",
        "**Event coverage (party) — from RD$ 17,880 / US$ 300.** 3 hours at the venue, 80+ edited photos, waltz, cake, key moments, guests.",
        "**Session + coverage package — from RD$ 35,760 / US$ 600.** Photo session before the event + party coverage. Separate galleries but unified aesthetic.",
        "Hair and makeup add-on: RD$3,500-6,000 based on service. Professional print add-on (poster, frames, album): quoted based on format."
      ]
    },
    {
      heading: "Tips for a good session",
      body: [
        "**Pre-planned wardrobe.** Define looks 1-2 weeks before with the quinceañera. If there will be changes, coordinate the order (formal first, casual after is easier than the reverse).",
        "**Hair and makeup trial** a week before. This avoids surprises on session day and allows adjusting if something doesn't convince.",
        "**Arrival with time.** If the session is at 10 AM, arriving at 9:15 AM gives margin to dress, hydrate, adjust hair, and start relaxed.",
        "**Light snack before leaving.** 2-3 hours of session without eating is exhausting, especially in a structured formal dress.",
        "**Review visual references** on Pinterest or Instagram with the quinceañera. Knowing what she likes visually gives us clear direction and the session comes out on the first take.",
        "**Pet or sentimental accessories.** If the quinceañera has a pet or an important accessory for her (grandmother's necklace, for example), including it in some photos gives emotional significance to the material."
      ]
    }
  ],
  faq: [
    { q: "How much does a quinceañera photoshoot cost?", a: "Simple session from RD$10,700 (90 minutes, 1 look, 30 photos). Hybrid studio + outdoor from RD$17,880 (2-3 hours, 2-3 looks). Full editorial from RD$23,800. Event coverage (separate) from RD$17,880. Combined session + coverage package from RD$35,760." },
    { q: "How many looks can she use?", a: "1 look in simple session, 2-3 in hybrid, 3-4+ in full editorial. We recommend coordinating the order (formal first for hair/makeup logistics, casual after)." },
    { q: "Do you include hair and makeup?", a: "As add-on. RD$3,500-6,000 based on service. We work with trusted makeup artist and hair stylist. Book with 5 days notice. We recommend a trial one week before to avoid surprises." },
    { q: "Do you do sessions with friends / court?", a: "Yes. For group sessions (quinceañera + 4-8 friends) we book 30-60 extra minutes. Coordinating complementary wardrobe or the same color tone works well visually." },
    { q: "Do you cover the party too?", a: "Yes, as a separate service or as a combined package with the session. Event coverage (3 hours) covers waltz, cake, moments with family and guests, decorated venue. The combined package gives the best price." }
  ],
  heroImage: HERO.quinceanera,
  isMaster: false,
  relatedClusterSlugs: ["birthday-photoshoot", "couples-photoshoot"],
  offers: [
    { name: "Simple session", description: "90 minutes, 1 look (formal dress), 30 edited photos, shareable online gallery.", priceDOP: 10700, priceUSD: 180, duration: "PT90M" },
    { name: "Hybrid studio + outdoor session", description: "2-3 hours, 2-3 looks, 50 edited photos, consistent editing across both formats.", priceDOP: 17880, priceUSD: 300, duration: "PT180M" },
    { name: "Full editorial session", description: "3 hours, multiple looks and locations, 60+ edited photos with magazine aesthetic.", priceDOP: 23800, priceUSD: 400, duration: "PT180M" },
    { name: "Event coverage (party)", description: "3 hours at the venue, 80+ edited photos, waltz, cake, key moments, guests.", priceDOP: 17880, priceUSD: 300, duration: "PT180M" },
    { name: "Session + coverage package", description: "Photo session before the event + party coverage. Separate galleries but unified aesthetic.", priceDOP: 35760, priceUSD: 600 }
  ]
};

export const enSesionPages: Record<string, SesionPage> = {
  "photo-session": masterEn,
  "couples-photoshoot": couplesEn,
  "birthday-photoshoot": birthdayEn,
  "corporate-photoshoot": corporateEn,
  "professional-headshots": headshotsEn,
  "maternity-photoshoot": maternityEn,
  "quinceanera-photoshoot": quinceaneraEn
};

export const enSesionSlugs = Object.keys(enSesionPages);
