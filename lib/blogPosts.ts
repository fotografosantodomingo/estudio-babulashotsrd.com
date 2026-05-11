// Native Next.js blog posts (separate from the WordPress-imported posts in estudioContent.ts).
// To add a new post: append an entry to BLOG_POSTS, then it shows on /blog/, gets its own
// /blog/<slug>/ page via app/blog/[slug]/page.tsx, and is added to sitemap.ts automatically.

export type BlogPostImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BlogPostSection = {
  heading: string;
  body: string[];
};

export type BlogPostFaq = {
  q: string;
  a: string;
};

export type BlogPostRelated = {
  href: string;
  label: string;
  description: string;
};

// English variant of a blog post — when present, an /en/blog/<enSlug>/ page is generated.
export type BlogPostEn = {
  enSlug: string;                // becomes /en/blog/<enSlug>/
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  introParagraphs: string[];
  sections: BlogPostSection[];
  faq: BlogPostFaq[];
  related: BlogPostRelated[];
  ogImageAlt?: string;
};

export type BlogPost = {
  slug: string;                  // becomes /blog/<slug>/  (Spanish canonical)
  title: string;                 // <title>  (Spanish)
  metaDescription: string;
  h1: string;                    // visible page heading  (Spanish)
  eyebrow: string;               // small label above the H1
  // Full ISO 8601 datetime with timezone, e.g. "2026-05-10T12:00:00-04:00".
  // Bare "YYYY-MM-DD" works (auto-promoted in the route) but Google Rich Results
  // flags it as "Invalid datetime / Missing timezone". Always prefer the full form.
  datePublished: string;
  dateModified: string;
  hero: BlogPostImage;
  introParagraphs: string[];     // first paragraphs after the hero, before sections
  sections: BlogPostSection[];   // body sections (h2 + paragraphs)
  faq: BlogPostFaq[];            // FAQ schema entries
  related: BlogPostRelated[];    // 3-5 related internal links shown at the end
  ogImageAlt?: string;
  // Optional English variant — when present, a parallel /en/blog/<enSlug>/ page is
  // generated and hreflang alternates are emitted on both Spanish + English pages.
  en?: BlogPostEn;
};

const POSTS: BlogPost[] = [
  {
    slug: "poses-fotos-quinceanera",
    title:
      "10 Mejores Poses para Fotos de Quinceañera | Guía 2026 — Babula Shots Estudio",
    metaDescription:
      "Las 10 poses esenciales para tu sesión de fotos de quinceañera: clásicas, editoriales modernas y momentos espontáneos. Guía 2026 con tips de fotógrafo profesional en Santo Domingo.",
    h1: "10 Mejores Poses para Fotos de Quinceañera (Guía 2026)",
    eyebrow: "Quinceañera · Guía de poses",
    datePublished: "2026-05-10T12:00:00-04:00",
    dateModified: "2026-05-10T12:00:00-04:00",
    hero: {
      src: "/wp-content/uploads/2024/06/Santo-Domingo-Fotografo-estudio.png",
      alt: "Quinceañera posando para sesión de fotos profesional en estudio en Santo Domingo",
      width: 1600,
      height: 1067
    },
    introParagraphs: [
      "Las fotos de quinceañera son uno de los pocos materiales visuales que una mujer va a conservar 30, 40, 50 años. No son fotos para Instagram — son el registro definitivo de un momento que solo pasa una vez. Por eso las poses no se improvisan: las buenas poses convierten una sesión normal en un álbum que se ve profesional, intencional y atemporal.",
      "Esta guía cubre las 10 poses que usamos con más éxito en nuestras sesiones de quinceañera en [Babula Shots Estudio en Santo Domingo](/sesion-de-fotos-quinceanera/). La mezcla incluye lo clásico (vestido formal, retrato elegante), lo editorial moderno (estética de revista, mirada confident) y los momentos espontáneos que muchas veces terminan siendo las fotos favoritas de la familia.",
      "Antes de empezar: estas poses funcionan en estudio o en exterior, en sesión sencilla o en sesión híbrida. Lo importante es practicarlas mentalmente antes de la sesión y comunicarlas al fotógrafo. Si quieres ver cómo se traducen en una sesión real, puedes [agendar tu sesión de fotos de quinceañera](/sesion-de-fotos-quinceanera/) o pedirnos referencias por WhatsApp."
    ],
    sections: [
      {
        heading: "Antes de la sesión: cómo preparar tus poses de quinceañera",
        body: [
          "**Investiga referencias visuales** una semana antes. Pinterest e Instagram son tu mejor recurso: busca términos como `fotos de quinceañeras`, `poses para quinceañeras`, `sesión de fotos de 15 años modernas`. Guarda 8-12 imágenes que te gusten y compártelas con tu fotógrafo. Esto evita que llegues a la sesión sin saber qué pedir.",
          "**Practica frente al espejo.** No para memorizar (las poses tiesas se notan), sino para descubrir qué ángulos te favorecen. Cabeza ligeramente inclinada, hombros relajados, peso del cuerpo en una pierna — pequeños ajustes que transforman una foto. Saber cómo se ve tu rostro en distintas posiciones te da seguridad el día de la sesión.",
          "**Habla con tu fotógrafo antes.** Comparte tus referencias 2-3 días antes de la sesión. Un buen fotógrafo te dirá cuáles son realistas con la luz y locación que tendremos, y cuáles tendría que adaptar. Esto evita decepción si esperabas algo específico que no se puede replicar.",
          "**Confía en la dirección durante la sesión.** Aunque hayas practicado, durante la sesión vas a recibir instrucciones — `gira un poco la cabeza`, `mano en la cintura`, `mirada hacia la ventana`. Confía. Estamos viendo la cámara, tú no. La mayoría de las mejores fotos salen cuando la quinceañera deja de sobre-pensar y se deja dirigir."
        ]
      },
      {
        heading: "1. Retrato sentada con falda extendida",
        body: [
          "La pose más clásica para fotos de quinceañera con vestido formal. Se realiza sentada en una silla, banco o escalón, con la falda del vestido extendida hacia adelante o hacia los lados para mostrar el volumen del diseño. La quinceañera mira a la cámara con expresión serena (no sonrisa amplia — más bien una sonrisa contenida o mirada elegante).",
          "**Por qué funciona:** destaca el vestido como protagonista, transmite formalidad y tradición, es la pose que mejor queda enmarcada para imprimir o regalar a familiares.",
          "**Tip de ejecución:** asegúrate de que la falda quede simétrica. Pide a tu mamá o al fotógrafo que ajuste los pliegues antes de cada toma. Hombros ligeramente atrás, manos relajadas en el regazo o apoyadas en la silla."
        ]
      },
      {
        heading: "2. Caminar mirando al frente",
        body: [
          "Pose dinámica: la quinceañera camina hacia la cámara con paso natural, mirada al frente, vestido en movimiento. Se hacen varias tomas mientras camina — algunas con sonrisa, otras con expresión confident.",
          "**Por qué funciona:** introduce movimiento (rompe la rigidez de las poses estáticas), muestra el vestido en acción y comunica seguridad. Es una de las poses que más se ven en sesiones editoriales modernas.",
          "**Tip de ejecución:** camina lento, no como para llegar a un lugar. Mira un punto fijo detrás del fotógrafo, no la cámara directamente (a menos que el fotógrafo lo pida). Si llevas tacones, practica caminar con ellos antes de la sesión — las fotos se notan cuando hay incomodidad en los pies."
        ]
      },
      {
        heading: "3. Risa espontánea con cabeza ligeramente inclinada",
        body: [
          "El opuesto de la pose formal: una risa real, espontánea, generada por algo gracioso (broma del fotógrafo, recuerdo, conversación). La cabeza se inclina ligeramente hacia atrás o hacia un lado, los hombros se relajan, los ojos pueden estar cerrados o entrecerrados.",
          "**Por qué funciona:** estas son siempre las fotos favoritas de la familia. Capturan personalidad, no solo apariencia. Son las que cuelgas en la pared, no las que metes en el álbum formal.",
          "**Tip de ejecución:** no se posa — se provoca. Un buen fotógrafo va a hablar contigo durante la sesión para generar risas reales. Si te dicen `ríe`, va a salir falso. Mejor: pídele al fotógrafo que te haga reír, o piensa en una memoria divertida segundos antes del clic."
        ]
      },
      {
        heading: "4. Mirada lateral con perfil iluminado",
        body: [
          "Pose editorial: la quinceañera de perfil (90 grados respecto a la cámara), mirada hacia la dirección de la luz, expresión serena o ligeramente seria. La luz cae de un lado iluminando la mitad del rostro y dejando la otra mitad en sombra suave.",
          "**Por qué funciona:** es la pose que más se acerca a una portada de revista. Funciona excepcionalmente bien con peinados elaborados (la luz lateral revela detalles del recogido) y con pendientes o coronas (el contraste destaca el accesorio).",
          "**Tip de ejecución:** la luz tiene que venir de un lado, no de frente ni de arriba. En estudio se logra con un solo flash lateral. En exterior, busca una ventana grande o trabájala en hora dorada (5-6 PM en RD) cuando la luz del sol es horizontal."
        ]
      },
      {
        heading: "5. Manos en el pelo o tocando la corona",
        body: [
          "Pose detallista: una o ambas manos suben hacia el pelo, la corona, los pendientes o la cara. Puede ser un gesto sutil (rozar el pelo) o más marcado (ajustar la corona, tocar el escote del vestido).",
          "**Por qué funciona:** introduce las manos en la composición (las manos cuentan tanto como la cara), muestra los detalles del peinado o accesorios, transmite feminidad y elegancia. Excelente para fotos en formato vertical para invitaciones o redes.",
          "**Tip de ejecución:** las manos deben verse relajadas, no rígidas. Dedos ligeramente curvados, muñeca natural. Si vas a tocar la corona, hazlo con la yema de los dedos, no con la palma. Si llevas anillo o pulsera, asegúrate de que el ángulo lo muestre."
        ]
      },
      {
        heading: "6. Sentada en escalera con composición de color",
        body: [
          "Pose con locación protagonista: la quinceañera sentada en una escalera (interior o exterior), con el vestido cayendo en cascada por los escalones. La composición usa la línea diagonal de la escalera para guiar la mirada hacia la quinceañera.",
          "**Por qué funciona:** las escaleras crean composición instantánea (líneas, capas, profundidad). Funciona excepcionalmente bien en locaciones como Zona Colonial, Plaza España, hoteles con escaleras imperiales, o incluso en escaleras simples bien iluminadas. El vestido extendido por los escalones es visualmente impactante.",
          "**Tip de ejecución:** sentada con la espalda recta, una pierna ligeramente cruzada o una mano apoyada en el escalón superior. Mirada puede ser hacia la cámara o hacia abajo (más editorial). Importante: el fotógrafo se posiciona abajo de la escalera y dispara hacia arriba para captar todo el vestido."
        ]
      },
      {
        heading: "7. Vista de espalda mostrando el vestido",
        body: [
          "Pose que destaca el diseño del vestido: la quinceañera dando la espalda a la cámara, mirando hacia un punto distante (ventana, paisaje, columna). Muestra el escote trasero, los detalles del corset, los amarres o los lazos del vestido.",
          "**Por qué funciona:** muchas veces el detalle más bonito del vestido está en la espalda — los corsets formales, los lazos, los detalles bordados. Esta pose es la única que los muestra. También transmite misterio y elegancia.",
          "**Tip de ejecución:** cabeza ligeramente girada hacia un hombro (3/4 de perfil) — muestra parte del rostro. Una mano puede acariciar el escote, la otra puede sostener la falda o estar relajada. Locación clave: ventana grande, jardín con paisaje atrás, balcón con vista."
        ]
      },
      {
        heading: "8. Pose con flores o ramo",
        body: [
          "La quinceañera sostiene un ramo, una sola flor, o se acerca a un arreglo floral grande. Las flores pueden ser parte del decorado del salón, de la iglesia, o un prop traído específicamente para la sesión (recomendamos un ramo blanco o pastel para no competir con el color del vestido).",
          "**Por qué funciona:** las flores son universales en sesiones de quinceañera — están culturalmente asociadas con feminidad, juventud, celebración. También son una excelente excusa para introducir color en una sesión donde el vestido y la piel son los únicos elementos cromáticos. Excelente para fotos en formato cuadrado para Instagram.",
          "**Tip de ejecución:** sostén el ramo cerca del pecho, no abajo (las flores tapan el vestido). Mira las flores, no la cámara — esto crea una sensación contemplativa. Si vas a oler una flor, hazlo con los ojos cerrados — siempre se ve mejor que mirar la flor."
        ]
      },
      {
        heading: "9. Foto con familia o damas de honor",
        body: [
          "La quinceañera con padres, hermanos, abuela o damas de honor / amigas. Pueden ser fotos formales (todos mirando a la cámara, peso del cuerpo distribuido para que el grupo se vea balanceado) o espontáneas (riéndose, abrazándose, en una conversación).",
          "**Por qué funciona:** estas fotos son las que la familia más valora a largo plazo — la quinceañera es protagonista, pero el contexto familiar es lo que da significado emocional. Muchas veces son las fotos que más se enmarcan o que más se comparten en redes después del evento.",
          "**Tip de ejecución:** para fotos formales, alinea las cabezas en una diagonal (no todos a la misma altura). Para fotos con damas, puedes hacer una pose tipo 'cover de revista' (todas en línea, mirada al frente, manos en cintura). Coordinen wardrobe — si las damas van todas del mismo color, el grupo se ve cohesivo y la quinceañera resalta."
        ]
      },
      {
        heading: "10. Pose editorial moderna: mirada al frente, contraluz",
        body: [
          "La pose más moderna y atrevida: la quinceañera de pie, mirada directamente a la cámara con expresión confident (no sonriente — más bien intensa o serena), iluminada en contraluz (la luz viene desde atrás creando un halo alrededor de la silueta).",
          "**Por qué funciona:** es la pose que más se distingue de las fotos tradicionales. Es la pose que se ve en sesiones editoriales de fashion. Funciona excepcionalmente bien en hora dorada al exterior (la luz del sol detrás genera un halo natural) o en estudio con flash a contraluz.",
          "**Tip de ejecución:** posición frontal, peso del cuerpo en una pierna (la otra ligeramente flexionada para dar movimiento), una mano puede estar en la cintura o sosteniendo el vestido. Mirada fija, ni sonrisa amplia ni cara seria — más bien intensidad serena. La quinceañera tiene que sentir esta pose; si no se siente confident, no funciona."
        ]
      },
      {
        heading: "Tips para una sesión exitosa con estas poses",
        body: [
          "**Llega 30 minutos antes** de la hora de inicio. Esto te da margen para vestirte sin prisa, hidratarte, ajustar el peinado y empezar relajada. Una sesión que empieza apurada se nota en las primeras 50 fotos.",
          "**Snack ligero antes de salir.** Una sesión de 90-120 minutos con vestido formal estructurado es agotadora. Algo simple — fruta, yogurt, una barra — te mantiene con energía. Evita comidas pesadas o bebidas con azúcar (te van a dar sed durante la sesión).",
          "**No bebas mucha agua justo antes.** La sesión es larga, ir al baño con un vestido voluminoso y maquillaje completo es complicado. Hidrátate bien la noche antes y de la mañana, y modera los líquidos en las 2 horas antes de la sesión.",
          "**Practica relajación rápida.** Entre toma y toma, baja los hombros, suelta la mandíbula, respira profundo. La tensión se ve en las fotos — sobre todo en el cuello, los hombros y las manos. Si te sientes tensa, dilo al fotógrafo para que pause un minuto.",
          "**Pregunta por la galería completa.** Algunos fotógrafos entregan solo las fotos editadas que ellos seleccionan. Pregunta cuántas vas a recibir, en qué formato (digital, impreso), si hay derechos de uso para redes sociales y si puedes pedir ediciones específicas (por ejemplo, una en blanco y negro, una con corte cuadrado para Instagram, etc.)."
        ]
      }
    ],
    faq: [
      {
        q: "¿Cuántas poses se hacen en una sesión de quinceañera?",
        a: "Entre 15 y 30 poses distintas en una sesión de 90-120 minutos, dependiendo del paquete. Cada pose se fotografía 5-10 veces con pequeños ajustes (cambio de mirada, ajuste de manos, micro-cambios de ángulo). El fotógrafo selecciona las mejores 30-60 para edición final. Si quieres una pose específica, comunícala al inicio para reservar tiempo."
      },
      {
        q: "¿Necesito practicar las poses antes?",
        a: "No es obligatorio, pero ayuda mucho. Practicar frente al espejo te da seguridad, te ayuda a descubrir qué ángulos te favorecen y reduce la rigidez en las primeras tomas. No memorices las poses (eso se nota), pero familiarízate con ellas. Pinterest e Instagram son las mejores referencias: guarda 10-15 imágenes que te gusten y compártelas con tu fotógrafo antes de la sesión."
      },
      {
        q: "¿Qué pasa si no me siento cómoda con una pose?",
        a: "Dilo. Un buen fotógrafo va a adaptar la pose o pasar a la siguiente — no hay nada peor que una foto donde se nota la incomodidad. Algunas poses (como la editorial moderna #10) requieren una actitud específica que no todas las quinceañeras quieren proyectar. Está perfectamente bien quedarse con las poses más clásicas si esas son las que se sienten naturales."
      },
      {
        q: "¿Cuánto tiempo dura una sesión que cubre estas 10 poses?",
        a: "Las 10 poses básicas se pueden cubrir en 90-120 minutos en estudio. Si vas a hacer cambio de look o moverte a exterior, suma 30-60 minutos por cada cambio. Una sesión híbrida completa (estudio + exterior + 2-3 cambios de look) toma 2-3 horas. Pregunta en tu sesión de fotos de quinceañera por los detalles del paquete que escojas."
      },
      {
        q: "¿Las poses son las mismas para sesión moderna y tradicional?",
        a: "La estructura es la misma, pero la ejecución cambia. En sesiones tradicionales se enfatizan las poses 1, 2, 5, 8 y 9 (clásicas, formales, familia). En sesiones editoriales modernas se enfatizan las poses 3, 4, 6, 7 y 10 (movimiento, perfil, contraluz, espontaneidad). En sesiones híbridas (la opción más popular en RD) se hacen todas, distribuidas entre estudio y exterior."
      }
    ],
    related: [
      {
        href: "/sesion-de-fotos-quinceanera/",
        label: "Sesión de fotos de quinceañera",
        description:
          "Servicio completo de sesión de quinceañera en Santo Domingo. Estudio, exterior, múltiples looks, paquetes desde RD$10,700."
      },
      {
        href: "/sesion-de-fotos/",
        label: "Sesión de fotos en estudio",
        description:
          "Catálogo completo de sesiones que cubrimos: retratos, parejas, embarazo, corporativo, headshots, cumpleaños y quinceañera."
      },
      {
        href: "/precios/",
        label: "Precios y paquetes",
        description:
          "Tarifas publicadas para todos nuestros servicios de fotografía en estudio. Sin sorpresas."
      }
    ],
    ogImageAlt: "Poses para fotos de quinceañera — Babula Shots Estudio Santo Domingo"
  },
  {
    slug: "zona-colonial-fotos",
    title:
      "Las 10 Mejores Locaciones en la Zona Colonial para tu Sesión de Fotos | Guía 2026 — Babula Shots Estudio",
    metaDescription:
      "Las 10 mejores locaciones en la Zona Colonial de Santo Domingo para sesión de fotos profesional: Plaza España, Calle Las Damas, Catedral Primada y más. Guía 2026 con horarios, tips y permisos.",
    h1: "Las 10 Mejores Locaciones en la Zona Colonial para tu Sesión de Fotos",
    eyebrow: "Locaciones · Guía Zona Colonial",
    datePublished: "2026-05-10T14:00:00-04:00",
    dateModified: "2026-05-10T14:00:00-04:00",
    hero: {
      src: "/wp-content/uploads/2025/03/Sesion-Fotos-Corporativas-Urbanas-Santo-Domingo-1-768x512.webp",
      alt: "Sesión de fotos profesional en la Zona Colonial de Santo Domingo — Babula Shots Estudio",
      width: 768,
      height: 512
    },
    introParagraphs: [
      "La Zona Colonial de Santo Domingo es el casco histórico más antiguo del Nuevo Mundo — declarada Patrimonio de la Humanidad por la UNESCO en 1990 — y por mucha distancia la mejor locación al aire libre para una sesión de fotos en República Dominicana. Calles empedradas, fachadas de piedra del siglo XVI, plazas amplias, ruinas atmosféricas, columnas, balcones de madera, jardines tropicales — todo a 15 minutos a pie de un punto a otro.",
      "En Babula Shots Estudio trabajamos sesiones en Zona Colonial varias veces por semana. Esta guía recoge las 10 locaciones específicas que producen las mejores fotos: con qué tipo de sesión funciona cada una, a qué hora ir, qué permisos necesitas (spoiler: ninguno para uso personal), y los detalles prácticos que solo se aprenden trabajando en la zona.",
      "Si llegas con una sesión planificada — [parejas](/sesion-de-fotos-pareja/), [quinceañera](/sesion-de-fotos-quinceanera/), [embarazo](/sesion-de-fotos-embarazo/), editorial, retrato individual o [corporativo](/sesion-de-fotos-corporativas/) — estas 10 locaciones cubren cualquier estética que busques: desde clásico atemporal hasta editorial moderno con textura."
    ],
    sections: [
      {
        heading: "Por qué la Zona Colonial es la mejor locación al aire libre",
        body: [
          "**Variedad visual en 1 km².** En menos de 15 minutos a pie pasas de empedrados estrechos del siglo XVI a plazas amplias con columnas, ruinas con vegetación, fachadas en colores pastel, balcones de madera, jardines tropicales y vista al río Ozama. Una sola sesión cubre 4-5 escenarios distintos sin que tengas que moverte en carro.",
          "**Luz dramática a cualquier hora.** A 7-9 AM la luz rebota suave entre las paredes claras, perfecta para retratos. A mediodía las plazas se llenan de luz dura — ideal solo si buscas estética editorial con sombras marcadas. La hora dorada (5-6 PM) ilumina las fachadas en tonos miel — la mejor luz del día para parejas, quinceañeras y editoriales.",
          "**Permisos.** Para sesiones de uso personal (boda, quinceañera, embarazo, retratos), no se requiere permiso formal. Para producciones comerciales (publicidad, video con equipo grande, locaciones cerradas como museos) se solicita permiso al Ministerio de Cultura — gestionable en 5-10 días hábiles. Babula Shots gestiona el permiso si tu sesión lo requiere.",
          "**Acceso.** Estacionamiento limitado. Recomendamos llegar en Uber, parking en Calle Padre Billini, o desde el Centro de los Héroes (10 min a pie). En weekend llegar antes de 8 AM para evitar turistas en las locaciones más populares."
        ]
      },
      {
        heading: "1. Plaza España + Alcázar de Colón",
        body: [
          "La plaza más amplia del casco histórico, dominada por el Alcázar de Colón (palacio renacentista de 1511, residencia del hijo de Cristóbal Colón). Suelo de piedra, columnas de piedra coralina, escalinatas, vista directa al río Ozama y al puente flotante. Es la locación más fotografiada del casco — con razón.",
          "**Mejor para:** quinceañeras, parejas, sesiones editoriales formales, fotos de boda pre-evento, retratos clásicos. La amplitud permite usar lentes largos (85mm, 135mm) sin problema de fondo.",
          "**Mejor hora:** 7-9 AM (sombra suave de las edificaciones, casi vacía) o golden hour 5-6 PM (las piedras toman color cálido). Mediodía evítalo — luz vertical fea para retratos.",
          "**Permisos:** ninguno para uso personal. La entrada al museo del Alcázar tiene tarifa (RD$100), pero la plaza exterior es de acceso libre."
        ]
      },
      {
        heading: "2. Calle Las Damas — la calle más antigua del Nuevo Mundo",
        body: [
          "Construida en 1502, la primera calle empedrada del continente americano. Empedrada original, fachadas de piedra y mampostería, faroles antiguos, balcones de madera, ambiente íntimo. Conecta Plaza España con la Catedral, atravesando el corazón histórico.",
          "**Mejor para:** parejas (pre-boda especialmente), retratos editoriales, sesiones de moda con estética vintage, fotos de paseo más espontáneas. La estrechez de la calle obliga a usar lentes de 35-50mm — composición íntima.",
          "**Mejor hora:** 7-8 AM (vacía, sombra fría agradable) o 4-5 PM (luz cálida que rebota entre las fachadas). Evitar 11 AM - 3 PM por turistas y luz dura.",
          "**Tip de ejecución:** las fachadas son irregulares — una sesión de 30 minutos cubre 4-5 looks distintos cambiando solo de portal en portal."
        ]
      },
      {
        heading: "3. Catedral Primada de América",
        body: [
          "La primera catedral del Nuevo Mundo (consagrada en 1546). Fachada gótico-renacentista de piedra coralina con detalles tallados extraordinarios, gran portada principal, plaza interior con palmeras y bancas de hierro. Imagen icónica del casco.",
          "**Mejor para:** sesiones de boda (pre-evento), quinceañeras, sesiones formales con vestidos grandes, fotos de familia con aire institucional. La fachada es alta — usa lente angular (24-35mm) si quieres incluirla completa.",
          "**Mejor hora:** 6-8 AM (la fachada principal recibe sol directo cálido) o golden hour. El interior de la catedral está cerrado a sesiones de fotos sin permiso especial del clero — para uso personal trabajamos solo el exterior.",
          "**Tip:** si tu sesión tiene un componente religioso (boda, bautizo, primera comunión), el contraste entre el vestido formal y la piedra antigua produce el resultado más atemporal posible."
        ]
      },
      {
        heading: "4. Ruinas del Hospital San Nicolás de Bari",
        body: [
          "Las ruinas del primer hospital del Nuevo Mundo (construido en 1503-1508), abandonado tras un terremoto. Arcos colapsados, paredes gruesas medio derrumbadas, vegetación creciendo entre las piedras — estética atmosférica con peso histórico. Está en plena Calle Hostos, accesible al público.",
          "**Mejor para:** sesiones editoriales con estética dramática, retratos con textura, sesiones de moda alternativa, fotos atmosféricas en blanco y negro, libros de actor o modelo donde la quinceañera/cliente quiere algo distinto a lo clásico.",
          "**Mejor hora:** 4-6 PM cuando el sol baja y las sombras de los arcos cruzan el suelo. Mediodía también funciona aquí — las ruinas se ven brutales con luz dura.",
          "**Tip:** las paredes son inestables — no apoyarse. La capa de polvo es alta, evita ropa muy clara o usar la sesión como excusa para outfit más editorial / texturizado."
        ]
      },
      {
        heading: "5. Calle El Conde — el paseo peatonal",
        body: [
          "Calle peatonal principal del casco, conecta Parque Colón con Parque Independencia. Tiendas, cafés, edificaciones del siglo XIX-XX en colores pastel, faroles, bancas, vida urbana real. Locación menos formal pero con ambiente vibrante.",
          "**Mejor para:** sesiones más casuales (parejas, retratos personales, branding personal), fotos de estilo de vida, contenido para redes sociales, sesiones donde el cliente quiere movimiento y vida real (no solo fondo arquitectónico).",
          "**Mejor hora:** 7-9 AM (vacía, perfecta para fotos limpias sin turistas) o 5-7 PM (vida urbana, luces de tienda encendiéndose, ambiente). Evitar weekends por la tarde si quieres composiciones limpias.",
          "**Tip:** mezcla bien con sesiones que después se mueven a Plaza Colón o Catedral — son 3 minutos a pie."
        ]
      },
      {
        heading: "6. Parque Colón + estatua del Almirante",
        body: [
          "El parque central del casco, con la estatua de Cristóbal Colón en el centro, palmeras altas, bancas de hierro forjado, jardines y vista directa a la Catedral. Es la locación más versátil del casco porque tiene cielo abierto, sombra natural, color verde, y la fachada de la Catedral como fondo.",
          "**Mejor para:** retratos individuales, parejas, sesiones de familia con niños (espacio para correr), sesiones de embarazo (bancas para sentarse, sombra para descanso). Las palmeras filtran la luz dura del mediodía bastante bien.",
          "**Mejor hora:** flexible. 8-10 AM y 4-6 PM son las mejores. El contraste entre las palmeras verdes, el cielo azul y la Catedral beige genera composiciones de mucho color.",
          "**Tip:** el parque tiene tráfico turístico constante — en weekends sé paciente y aprovecha los momentos de calma entre tours."
        ]
      },
      {
        heading: "7. Fortaleza Ozama — Torre del Homenaje",
        body: [
          "La fortaleza militar más antigua del Nuevo Mundo (1502), con la Torre del Homenaje de 18 metros y vista panorámica al río Ozama y al puente flotante. Murallas gruesas, patio interior, terrazas con cañones antiguos.",
          "**Mejor para:** sesiones editoriales con vista panorámica, fotos con drama (la torre alta de fondo), sesiones de boda donde se busca algo distinto a las locaciones más fotografiadas, fotos de aniversario o boda destino.",
          "**Mejor hora:** golden hour 5-6:30 PM — la torre dorada con el río al fondo produce las fotos más memorables de cualquier sesión en el casco. Si la sesión es por la mañana, 7-9 AM con la luz rebotando en las murallas también funciona excelente.",
          "**Tip:** la entrada tiene tarifa (RD$100 para nacionales, RD$200 para extranjeros). Vale la pena. Llevar lentes 24-35mm para el panorámico y 85mm para retratos con la torre desenfocada de fondo."
        ]
      },
      {
        heading: "8. Casas Reales — Museo + plaza interior",
        body: [
          "Edificio renacentista del siglo XVI que alberga el Museo de las Casas Reales. Plaza interior con un pozo central, arcos, suelo empedrado, fachada de piedra. Es de las locaciones menos descubiertas por turistas — perfecta cuando quieres composiciones sin gente de fondo.",
          "**Mejor para:** retratos editoriales, sesiones de moda, fotos de pareja con estética íntima, sesiones de book de modelo. La plaza interior funciona como un set semi-controlado.",
          "**Mejor hora:** 9 AM - 5 PM (el museo está abierto y se puede acceder al patio). Evitar lunes (cerrado) y feriados.",
          "**Tip:** entrada al museo tiene tarifa baja (RD$100). Para uso personal/no comercial, el guardia suele permitir 15-20 minutos en la plaza interior sin problema. Para uso comercial pedir permiso por escrito al Ministerio de Cultura."
        ]
      },
      {
        heading: "9. Plaza de los Curas + Iglesia de la Tercera Orden Dominica",
        body: [
          "Plaza pequeña pero hermosa con la fachada barroca de la iglesia, banco circular en el centro, árboles altos y suelo de adoquines. Casi nunca hay turistas. Locación favorita para sesiones íntimas.",
          "**Mejor para:** parejas, sesiones de embarazo, retratos íntimos, sesiones donde el cliente busca tranquilidad y calidad atmosférica sin fondo monumental abrumador.",
          "**Mejor hora:** 8-10 AM (luz suave que filtra entre los árboles) o 4-5 PM. La fachada barroca toma color en golden hour.",
          "**Tip:** combinar con Calle Las Damas (a 1 minuto a pie) para una sesión con dos atmósferas distintas en una sola hora."
        ]
      },
      {
        heading: "10. Malecón de Santo Domingo (continuación natural del casco)",
        body: [
          "Técnicamente fuera de la Zona Colonial pero a 5 minutos a pie por la avenida George Washington. Vista al mar Caribe, palmeras alineadas, bancas en mármol, la avenida amplia con la brisa marina. Es el cierre perfecto de una sesión que empieza en el casco.",
          "**Mejor para:** golden hour absoluto. Quinceañeras (las fotos al mar quedan icónicas), sesiones de pareja, anuncios de embarazo, sesiones románticas en general, fotos de boda destino con el mar de fondo.",
          "**Mejor hora:** 5-6:30 PM exclusivamente — el sol cae directamente sobre el horizonte marino y produce siluetas y contraluces espectaculares. A otras horas no funciona tan bien.",
          "**Tip:** evitar viernes y sábado por la noche — el Malecón se llena de tráfico y vida nocturna. Mejor entresemana o domingos por la tarde."
        ]
      },
      {
        heading: "Tips prácticos para sesión en Zona Colonial",
        body: [
          "**Calzado.** Los empedrados son irregulares. Si la quinceañera/clienta lleva tacones, traer un segundo par cómodo para los traslados entre locaciones — y posar en tacones solo en los momentos clave. Para sesiones largas (2-3 horas) los pies cansados se notan en las fotos.",
          "**Hidratación + clima.** El casco no tiene mucha sombra entre 11 AM y 3 PM — y Santo Domingo es húmedo. Llevar agua, evitar sesiones largas a mediodía en verano (junio-septiembre). Si la sesión es de boda o quinceañera con vestido formal, agendar antes de las 9 AM o después de las 4 PM.",
          "**Tráfico turístico.** Los weekends entre 10 AM y 4 PM la zona se llena. Para fotos limpias sin gente de fondo: entresemana antes de 9 AM o después de 6 PM. Domingos por la mañana también funciona.",
          "**Permisos comerciales.** Si la sesión es publicitaria (con marca, equipo grande, modelos contratados), el Ministerio de Cultura tramita el permiso en 5-10 días hábiles. Babula Shots gestiona el permiso incluido cuando reservas el paquete editorial / comercial.",
          "**Combinación con estudio.** Las sesiones más completas combinan 60-90 minutos en estudio (set controlado, fondos limpios, primer look) con 60-90 minutos en Zona Colonial (segundo look, atmósfera, contexto). Esta opción está en nuestros paquetes híbridos — ver detalles en [sesión de fotos en estudio](/sesion-de-fotos/)."
        ]
      }
    ],
    faq: [
      {
        q: "¿Necesito permiso para fotografiar en la Zona Colonial?",
        a: "Para uso personal (boda, quinceañera, embarazo, retratos individuales o familiares) no se necesita permiso — el casco es de acceso libre. Para uso comercial (publicidad de marca, modelos contratados, equipo de filmación grande, locaciones cerradas como museos) sí se requiere permiso del Ministerio de Cultura, gestionable en 5-10 días hábiles. Babula Shots gestiona el permiso cuando reservas un paquete editorial/comercial."
      },
      {
        q: "¿Cuál es la mejor hora para una sesión en la Zona Colonial?",
        a: "Depende del tipo de sesión. Para retratos y sesiones formales: 7-9 AM (luz suave, casco vacío) o golden hour 5-6:30 PM (luz cálida, fachadas doradas). Evitar 11 AM - 3 PM por luz vertical dura y tráfico turístico. Para sesiones editoriales con sombras dramáticas, mediodía puede funcionar en locaciones específicas como las Ruinas del Hospital San Nicolás de Bari."
      },
      {
        q: "¿Cuánto cuesta una sesión de fotos en la Zona Colonial con Babula Shots?",
        a: "Igual que cualquier sesión en exterior: desde RD$5,960 (US$100) para sesión estándar de 60 minutos. La sesión híbrida estudio + Zona Colonial cuesta desde RD$14,900 (US$250) para 2 horas con 2-3 looks. Sesiones editoriales completas (3 horas, múltiples locaciones del casco, 60+ fotos editadas) desde RD$23,800. Ver tarifas completas en [precios](/precios/)."
      },
      {
        q: "¿Qué tipos de sesión funcionan mejor en la Zona Colonial?",
        a: "Casi cualquier tipo: parejas (preboda especialmente), quinceañeras (locaciones tradicionales y editoriales), embarazo (bancas, jardines, ambiente sereno), retratos individuales, branding personal con estética vintage, fotos corporativas con fondo no-oficina, sesiones de boda pre-evento. La única excepción son sesiones de bebés/newborn que requieren estudio cerrado y climatizado."
      },
      {
        q: "¿Pueden combinar varias locaciones del casco en una sesión?",
        a: "Sí — y es lo más común. En 90-120 minutos cubrimos cómodamente 3-4 locaciones distintas (por ejemplo: Plaza España → Calle Las Damas → Catedral → Parque Colón). Para sesiones de 2-3 horas cubrimos 5-7 locaciones con 2-3 cambios de look. Coordinamos la ruta antes de la sesión para optimizar tiempo y luz."
      }
    ],
    related: [
      {
        href: "/sesion-de-fotos/",
        label: "Sesión de fotos — catálogo completo",
        description: "Todos los tipos de sesión que cubrimos en estudio y exterior, con precios y detalles por servicio."
      },
      {
        href: "/sesion-de-fotos-pareja/",
        label: "Sesión de fotos para pareja",
        description: "Sesiones de pareja en Zona Colonial — preboda, aniversario, anuncio. Estudio + exterior híbrido."
      },
      {
        href: "/sesion-de-fotos-quinceanera/",
        label: "Sesión de fotos de quinceañera",
        description: "Sesiones de quinceañera con múltiples looks. Híbrida estudio + Zona Colonial es la opción más popular."
      },
      {
        href: "/blog/poses-fotos-quinceanera/",
        label: "10 mejores poses para quinceañera",
        description: "Guía complementaria con las poses específicas que aplicamos en cada locación del casco."
      }
    ],
    ogImageAlt: "Las mejores locaciones en la Zona Colonial de Santo Domingo para sesión de fotos — Babula Shots Estudio",
    en: {
      enSlug: "santo-domingo-pictures",
      title:
        "10 Best Photo Locations in Santo Domingo's Colonial Zone | 2026 Photographer's Guide — Babula Shots",
      metaDescription:
        "The 10 best locations to photograph in Santo Domingo, Dominican Republic — Plaza España, Calle Las Damas, Cathedral, Fortaleza Ozama and more. UNESCO World Heritage colonial zone, with timing tips, permits and practical advice.",
      h1: "10 Best Photo Locations in Santo Domingo's Colonial Zone",
      eyebrow: "Locations · Santo Domingo Photo Guide",
      introParagraphs: [
        "Santo Domingo's Colonial Zone (Zona Colonial) is the oldest preserved European settlement in the Americas — declared a UNESCO World Heritage Site in 1990 — and by some distance the best outdoor photo location in the Dominican Republic. Cobblestone streets from 1502, 16th-century stone facades, broad plazas, atmospheric ruins, columns, wooden balconies, tropical gardens — all within 15 minutes' walking distance of each other.",
        "At Babula Shots Studio we shoot in the Colonial Zone several times a week. This guide covers the 10 specific locations that consistently produce the best photos: which type of session each one is best for, what time to go, what permits you need (spoiler: none for personal use), and the practical details only learned by working the area regularly.",
        "Whether you arrive with a planned session — engagement, quinceañera, maternity, editorial, individual portrait, or corporate branding — these 10 locations cover any aesthetic you might want: from timeless classic to modern editorial with texture and history."
      ],
      sections: [
        {
          heading: "Why the Colonial Zone is the best outdoor location in Santo Domingo",
          body: [
            "**Visual variety in 1 km².** In under 15 minutes on foot you move from narrow 16th-century cobblestone alleys to wide plazas with columns, ruined hospitals overgrown with vegetation, pastel facades, wooden balconies, tropical gardens, and views of the Ozama River. A single session covers 4-5 distinct backdrops without ever needing a car.",
            "**Dramatic light at any hour.** From 7-9 AM the morning light bounces softly between the pale walls — perfect for portraits. At noon the plazas fill with hard light — only useful if you specifically want editorial sharp shadows. Golden hour (5-6 PM) lights the facades in honey tones — the best light of the day for couples, quinceañeras, and editorials.",
            "**Permits.** For personal use (wedding, quinceañera, maternity, portrait sessions) no formal permit is required. For commercial productions (brand advertising, large equipment, enclosed locations like museums) you request a permit from the Ministry of Culture — typically issued in 5-10 business days. Babula Shots handles the permit if your session needs one.",
            "**Access.** Parking is limited. We recommend arriving by Uber, parking on Calle Padre Billini, or walking from the Centro de los Héroes (10 min). On weekends arrive before 8 AM to avoid tourists at the most popular spots."
          ]
        },
        {
          heading: "1. Plaza España + Alcázar de Colón",
          body: [
            "The largest plaza in the colonial district, dominated by the Alcázar de Colón (a 1511 Renaissance palace, residence of Christopher Columbus's son Diego). Stone-paved floor, coral limestone columns, grand staircases, and direct view of the Ozama River and floating bridge. The most photographed location in the colonial zone — for good reason.",
            "**Best for:** quinceañeras, couples, formal editorial sessions, pre-wedding photos, classic portraits. The wide-open space makes long lenses (85mm, 135mm) work perfectly without background clutter.",
            "**Best time:** 7-9 AM (soft shade from the surrounding buildings, almost empty) or golden hour 5-6 PM (the stones turn warm gold). Avoid noon — vertical light is unflattering for portraits.",
            "**Permits:** none required for personal use. The Alcázar museum has an entrance fee (RD$100) but the exterior plaza is free public access."
          ]
        },
        {
          heading: "2. Calle Las Damas — the oldest street in the New World",
          body: [
            "Built in 1502, the first paved street on the American continent. Original cobblestones, stone-and-mortar facades, antique lanterns, wooden balconies, intimate atmosphere. Connects Plaza España to the Cathedral, running through the heart of the historic core.",
            "**Best for:** couples (especially engagement sessions), editorial portraits, fashion sessions with vintage aesthetic, more spontaneous walking-style photos. The narrow street forces 35-50mm lenses — naturally intimate composition.",
            "**Best time:** 7-8 AM (empty, pleasant cool shade) or 4-5 PM (warm light bouncing between facades). Avoid 11 AM - 3 PM due to tourists and harsh light.",
            "**Pro tip:** the facades are irregular — a 30-minute session covers 4-5 distinct looks just by changing from one doorway to the next."
          ]
        },
        {
          heading: "3. Catedral Primada de América",
          body: [
            "The first cathedral in the New World (consecrated 1546). A Gothic-Renaissance facade in coral limestone with extraordinary carved details, grand main portal, interior plaza with palm trees and iron benches. The iconic image of Santo Domingo.",
            "**Best for:** wedding sessions (pre-event), quinceañeras, formal sessions with large dresses, family photos with institutional grandeur. The facade is tall — use a wide lens (24-35mm) if you want it fully in frame.",
            "**Best time:** 6-8 AM (the main facade catches direct warm sun) or golden hour. The cathedral interior is closed to photo sessions without special clergy permission — for personal use we shoot only the exterior.",
            "**Pro tip:** if your session has a religious component (wedding, baptism, first communion), the contrast between formal attire and the ancient stone produces the most timeless possible result."
          ]
        },
        {
          heading: "4. Ruins of Hospital San Nicolás de Bari",
          body: [
            "The ruins of the first hospital in the New World (built 1503-1508), abandoned after an earthquake. Collapsed arches, thick half-ruined walls, vegetation growing between the stones — atmospheric aesthetic with historical weight. Located on Calle Hostos, freely accessible to the public.",
            "**Best for:** editorial sessions with dramatic aesthetic, portraits with texture, alternative fashion sessions, atmospheric black-and-white photos, model/actor portfolios where the client wants something distinct from the classic look.",
            "**Best time:** 4-6 PM as the sun lowers and the arch shadows cross the floor. Noon also works here — the ruins look brutal under hard light.",
            "**Pro tip:** the walls are unstable — don't lean on them. Dust is heavy in this location, so avoid very light clothing or use the session as an excuse for a more editorial / textured outfit."
          ]
        },
        {
          heading: "5. Calle El Conde — the pedestrian street",
          body: [
            "The main pedestrian street of the colonial zone, connecting Parque Colón with Parque Independencia. Shops, cafés, 19th-20th century buildings in pastel colors, lanterns, benches, real urban life. Less formal location but with vibrant atmosphere.",
            "**Best for:** more casual sessions (couples, personal portraits, personal branding), lifestyle photos, social media content, sessions where the client wants movement and real life (not just architectural backdrop).",
            "**Best time:** 7-9 AM (empty, perfect for clean shots without tourists) or 5-7 PM (urban life, shop lights coming on, atmosphere). Avoid weekend afternoons if you want clean compositions.",
            "**Pro tip:** mixes well with sessions that move on to Plaza Colón or the Cathedral — they're 3 minutes' walk away."
          ]
        },
        {
          heading: "6. Parque Colón + Christopher Columbus statue",
          body: [
            "The central park of the colonial zone, with the Columbus statue at its center, tall palms, wrought-iron benches, gardens, and direct view of the Cathedral. The most versatile location in the colonial zone because it has open sky, natural shade, green color, and the Cathedral facade as backdrop.",
            "**Best for:** individual portraits, couples, family sessions with children (room to run), maternity sessions (benches to sit, shade for breaks). The palm trees filter harsh midday light surprisingly well.",
            "**Best time:** flexible. 8-10 AM and 4-6 PM are best. The contrast between green palms, blue sky, and the beige Cathedral generates compositions full of color.",
            "**Pro tip:** the park has constant tourist traffic — on weekends be patient and use the calm moments between guided tours."
          ]
        },
        {
          heading: "7. Fortaleza Ozama — Tower of Homage",
          body: [
            "The oldest military fortress in the New World (1502), with the 18-meter Torre del Homenaje and panoramic view of the Ozama River and floating bridge. Thick walls, interior courtyard, terraces with antique cannons.",
            "**Best for:** editorial sessions with panoramic backdrop, dramatic photos (the tall tower in background), wedding sessions seeking something distinct from the most-photographed locations, anniversary or destination wedding photos.",
            "**Best time:** golden hour 5-6:30 PM — the gilded tower with the river behind produces the most memorable photos of any colonial-zone session. If the session is in the morning, 7-9 AM with light bouncing off the walls also works excellently.",
            "**Pro tip:** entrance has a fee (RD$100 for nationals, RD$200 for foreigners). Worth it. Bring 24-35mm lenses for panoramic shots and 85mm for portraits with the tower softly defocused behind."
          ]
        },
        {
          heading: "8. Casas Reales — Museum + interior plaza",
          body: [
            "16th-century Renaissance building housing the Museum of the Royal Houses. Interior plaza with a central well, arches, cobblestone floor, stone facade. One of the least-discovered locations by tourists — perfect when you want compositions without people in the background.",
            "**Best for:** editorial portraits, fashion sessions, intimate couple photos, model book sessions. The interior plaza functions like a semi-controlled set.",
            "**Best time:** 9 AM - 5 PM (the museum is open and the patio is accessible). Avoid Mondays (closed) and holidays.",
            "**Pro tip:** museum entrance has a low fee (RD$100). For personal/non-commercial use, the guard usually allows 15-20 minutes in the interior plaza without issue. For commercial use request written permission from the Ministry of Culture."
          ]
        },
        {
          heading: "9. Plaza de los Curas + Iglesia de la Tercera Orden Dominica",
          body: [
            "Small but beautiful plaza with the Baroque facade of the church, a circular bench at the center, tall trees, and cobblestone ground. Almost never has tourists. A favorite location for intimate sessions.",
            "**Best for:** couples, maternity sessions, intimate portraits, sessions where the client wants tranquility and atmospheric quality without overwhelming monumental backdrop.",
            "**Best time:** 8-10 AM (soft light filtering through the trees) or 4-5 PM. The Baroque facade catches color in golden hour.",
            "**Pro tip:** combine with Calle Las Damas (1 minute away on foot) for a session with two distinct atmospheres in a single hour."
          ]
        },
        {
          heading: "10. Malecón of Santo Domingo (natural extension of the colonial zone)",
          body: [
            "Technically outside the Colonial Zone but a 5-minute walk down Avenida George Washington. View of the Caribbean Sea, palm trees lined up along the boulevard, marble benches, the wide avenue with sea breeze. The perfect closing location for a session that starts in the colonial core.",
            "**Best for:** absolute golden hour. Quinceañeras (sea photos look iconic), couple sessions, pregnancy announcements, romantic sessions in general, destination wedding photos with the sea behind.",
            "**Best time:** 5-6:30 PM exclusively — the sun sets directly over the marine horizon and produces spectacular silhouettes and backlight. Other times don't work as well here.",
            "**Pro tip:** avoid Friday and Saturday nights — the Malecón fills with traffic and nightlife. Better midweek or Sunday afternoons."
          ]
        },
        {
          heading: "Practical tips for shooting in the Colonial Zone",
          body: [
            "**Footwear.** The cobblestones are uneven. If the quinceañera/client wears heels, bring a comfortable second pair for transitions between locations — and pose in heels only at key moments. For long sessions (2-3 hours) tired feet show in the photos.",
            "**Hydration + climate.** The colonial zone has limited shade between 11 AM and 3 PM — and Santo Domingo is humid. Bring water, avoid long midday sessions in summer (June-September). For wedding or quinceañera sessions with formal dresses, schedule before 9 AM or after 4 PM.",
            "**Tourist traffic.** Weekends from 10 AM to 4 PM the area fills up. For clean photos without people in the background: weekdays before 9 AM or after 6 PM. Sunday mornings also work.",
            "**Commercial permits.** If the session is advertising (with brand, large equipment, contracted models), the Ministry of Culture issues the permit in 5-10 business days. Babula Shots handles permits as part of editorial / commercial packages.",
            "**Combination with studio.** The most complete sessions combine 60-90 minutes in studio (controlled set, clean backdrops, first look) with 60-90 minutes in the Colonial Zone (second look, atmosphere, context). This option is in our hybrid packages."
          ]
        }
      ],
      faq: [
        {
          q: "Do I need a permit to photograph in Santo Domingo's Colonial Zone?",
          a: "For personal use (wedding, quinceañera, maternity, individual or family portraits) no permit is required — the colonial zone is freely accessible. For commercial use (brand advertising, contracted models, large filming equipment, enclosed locations like museums) you do need a permit from the Ministry of Culture, typically issued in 5-10 business days. Babula Shots handles the permit when you book an editorial/commercial package."
        },
        {
          q: "What's the best time of day for a Colonial Zone photo session?",
          a: "Depends on the session type. For portraits and formal sessions: 7-9 AM (soft light, empty colonial zone) or golden hour 5-6:30 PM (warm light, golden facades). Avoid 11 AM - 3 PM due to harsh vertical light and tourist traffic. For editorial sessions with dramatic shadows, midday can work in specific locations like the Hospital San Nicolás de Bari ruins."
        },
        {
          q: "How much does a Colonial Zone photo session cost with Babula Shots?",
          a: "Same as any outdoor session: from RD$5,960 (US$100) for a standard 60-minute session. Hybrid studio + Colonial Zone session costs from RD$14,900 (US$250) for 2 hours with 2-3 looks. Complete editorial sessions (3 hours, multiple colonial-zone locations, 60+ edited photos) from RD$23,800."
        },
        {
          q: "What types of sessions work best in the Colonial Zone?",
          a: "Almost any type: couples (especially engagement), quinceañeras (both traditional and editorial locations), maternity (benches, gardens, serene atmosphere), individual portraits, personal branding with vintage aesthetic, corporate photos with non-office backdrop, pre-wedding sessions. The only exception is baby/newborn sessions, which require a closed climate-controlled studio."
        },
        {
          q: "Can you combine multiple colonial-zone locations in one session?",
          a: "Yes — and it's the most common approach. In 90-120 minutes we comfortably cover 3-4 distinct locations (e.g. Plaza España → Calle Las Damas → Cathedral → Parque Colón). For 2-3 hour sessions we cover 5-7 locations with 2-3 outfit changes. We coordinate the route before the session to optimize time and light."
        }
      ],
      related: [
        {
          href: "/en/services/",
          label: "Studio services",
          description: "Coverage, deliverables and turnaround per studio service: portraits, corporate, food, product, maternity, fashion editorial."
        },
        {
          href: "/en/locations/",
          label: "Locations we cover",
          description: "Studio + outdoor locations across Santo Domingo, Punta Cana and the rest of the Dominican Republic."
        },
        {
          href: "/en/prices/",
          label: "Prices and packages",
          description: "Published rates for all studio photography services. No surprises."
        }
      ],
      ogImageAlt: "Best photo locations in Santo Domingo's Colonial Zone — Babula Shots Studio guide"
    }
  }
];

export const blogPosts: BlogPost[] = POSTS;

export const blogPostBySlug = new Map<string, BlogPost>(POSTS.map((p) => [p.slug, p]));

const blogPostByEnSlug = new Map<string, BlogPost>(
  POSTS.filter((p) => p.en?.enSlug).map((p) => [p.en!.enSlug, p])
);

export function findBlogPost(slug: string): BlogPost | undefined {
  return blogPostBySlug.get(slug);
}

export function findBlogPostByEnSlug(enSlug: string): BlogPost | undefined {
  return blogPostByEnSlug.get(enSlug);
}

// Posts that have an English variant — drives the /en/blog/[slug]/ generateStaticParams.
export const blogPostsWithEn: BlogPost[] = POSTS.filter((p) => Boolean(p.en?.enSlug));
