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
  title: "Sesión de Fotos en Santo Domingo | Babula Shots Estudio",
  metaDescription:
    "Sesión de fotos en Santo Domingo con Babula Shots: estudio profesional, retratos, parejas, corporativo, embarazo, quinceañera. WhatsApp +1 809 720 9547.",
  h1: "Sesión de Fotos en Santo Domingo",
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
