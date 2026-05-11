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

export type BlogPost = {
  slug: string;                  // becomes /blog/<slug>/
  title: string;                 // <title>
  metaDescription: string;
  h1: string;                    // visible page heading
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
  }
];

export const blogPosts: BlogPost[] = POSTS;

export const blogPostBySlug = new Map<string, BlogPost>(POSTS.map((p) => [p.slug, p]));

export function findBlogPost(slug: string): BlogPost | undefined {
  return blogPostBySlug.get(slug);
}
