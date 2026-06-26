import type { LookVote, PromoArticle } from './mockContent';
import { imageMap } from './imageMap';

export type ArticleVoteOption = {
  label: string;
  percent: number;
};

export type ArticleContent = {
  slug: string;
  variant?: 'feature' | 'longform';
  hero: {
    category: string;
    title: string;
    subtitle: string;
    author: string;
    date: string;
    imageAlt: string;
    imageTone: 'warm' | 'rose' | 'dark' | 'ivory';
    imageSrc?: string;
  };
  intro: string[];
  quoteImage: {
    quote: string;
    attribution: string;
    caption: string;
    imageAlt: string;
    imageTone: 'warm' | 'rose' | 'dark' | 'ivory';
    imageSrc?: string;
  };
  body: string[];
  fullImage: {
    imageAlt: string;
    imageTone: 'warm' | 'rose' | 'dark' | 'ivory';
    imageSrc?: string;
  };
  vote?: {
    question: string;
    options: ArticleVoteOption[];
  };
  recommendations: {
    title: string;
    featuredTitle: string;
    featuredImageAlt: string;
    featuredImageTone: 'warm' | 'rose' | 'dark' | 'ivory';
    featuredImageSrc?: string;
    favoriteCarousel?: {
      title: string;
      subtitle: string;
      looks: LookVote[];
    };
    eyebrow: string;
    articles: PromoArticle[];
  };
  longform?: {
    blocks: LongArticleBlock[];
    favoriteCarousel: {
      title: string;
      subtitle: string;
      looks: LookVote[];
    };
    relatedEyebrow: string;
    relatedArticles: PromoArticle[];
  };
};

export type LongArticleBlock =
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'heading';
      text: string;
    }
  | {
      type: 'image';
      imageAlt: string;
      imageTone: 'warm' | 'rose' | 'dark' | 'ivory';
      imageSrc?: string;
      caption?: string;
    };

const guadalajaraArticlePlaceholderLooks: LookVote[] = [
  {
    id: 'guadalajara-fav-01',
    imageAlt: 'Empathy Store',
    imageTone: 'charcoal',
    imageSrc: imageMap.articles.guadalajara.carousel[0],
  },
  {
    id: 'guadalajara-fav-02',
    imageAlt: 'Studio Conchita Guadalajara',
    imageTone: 'ivory',
    imageSrc: imageMap.articles.guadalajara.carousel[1],
  },
  {
    id: 'guadalajara-fav-03',
    imageAlt: 'Ugga Concept Store',
    imageTone: 'copper',
    imageSrc: imageMap.articles.guadalajara.carousel[2],
  },
  {
    id: 'guadalajara-fav-04',
    imageAlt: 'Albergue Transitorio',
    imageTone: 'wine',
    imageSrc: imageMap.articles.guadalajara.carousel[3],
  },
];

const bafweekArticlePlaceholderLooks: LookVote[] = [
  {
    id: 'bafweek-look-01',
    imageAlt: 'Look azul de BAFWEEK',
    imageTone: 'copper',
    imageSrc: imageMap.articles.bafweek.carousel[0],
  },
  {
    id: 'bafweek-look-02',
    imageAlt: 'Look pasarela BAFWEEK',
    imageTone: 'wine',
    imageSrc: imageMap.articles.bafweek.carousel[1],
  },
  {
    id: 'bafweek-look-03',
    imageAlt: 'Look oscuro BAFWEEK',
    imageTone: 'charcoal',
    imageSrc: imageMap.articles.bafweek.carousel[2],
  },
  {
    id: 'bafweek-look-04',
    imageAlt: 'Look claro BAFWEEK',
    imageTone: 'silver',
    imageSrc: imageMap.articles.bafweek.carousel[3],
  },
];

export const camilaArticle: ArticleContent = {
  slug: 'camila',
  hero: {
    category: 'Estilo de vida',
    title: 'Camila Cabello accesa su energia de mala e invita a Drake para nuevo album inspirado en Miami',
    subtitle: 'Inspirada en la ciudad a la que llama su hogar, hace una audaz declaracion creativa en C,XOXO.',
    author: 'Por Maria Torres',
    date: '10 de Junio 2026.',
    imageAlt: 'Camila Cabello editorial',
    imageTone: 'dark',
    imageSrc: imageMap.articles.camila.hero,
  },
  intro: [
    'Camila Cabello crecio en miami y al igual que la propia artista, esta en constante transformacion. Es una ciudad que se expresa a traves de una fantasia rubia platino, donde las raices oscuras emergen bajo una superficie brillante.',
    'Vive en las franjas de colores neon que cubren el cielo al amanecer, cuando los ultimos asistentes a las fiestas regresan a casa por las calles del centro.',
  ],
  quoteImage: {
    quote: 'Miami es el unico lugar que realmente siento como mi hogar.',
    attribution: 'Camila Cabello',
    caption: 'Blazer de Moschino, Vestido de TTSWTRS, Collar de Dorsey, Guantes de Seymoure, Botas de Brandon Blackwood.',
    imageAlt: 'Camila Cabello sentada en silla',
    imageTone: 'ivory',
    imageSrc: imageMap.articles.camila.body[0],
  },
  body: [
    'Con su ultimo album C,XOXO, Cabello busco transformar esos recuerdos en un homenaje caleidoscopico a su ciudad natal.',
    '“Recuerdo haber escuchado Un Verano Sin Ti de Bad Bunny, un álbum profundamente ligado a Puerto Rico”, cuenta. “No soy de Puerto Rico, pero me hizo enamorarme del lugar de donde vengo. Me gusta esa sensación contagiosa de orgullo por tus raíces. Miami es el único lugar que realmente siento como mi hogar. Amo Londres y amo Nueva York, pero no me siento completamente yo misma allí. Mi pasado, mi presente y mi futuro están en Miami”.',
    'Sin embargo, Los Ángeles ocupa un lugar diferente en su vida. Aunque conserva un pequeño departamento en la ciudad, la considera principalmente un espacio de trabajo. Nos encontramos en una tarde templada de octubre, en la terraza del Soho House de West Hollywood. Minutos antes de comenzar la entrevista, aparece vestida para una clase de pilates, con un suéter gris y una vincha de estampado animal.',
  ],
  fullImage: {
    imageAlt: 'Camila Cabello recostada en sofa',
    imageTone: 'ivory',
    imageSrc: imageMap.articles.camila.body[1],
  },
  vote: {
    question: '¿Que esperas del nuevo album de Camila Cabello?',
    options: [
      { label: 'Mas sonidos latinos', percent: 42 },
      { label: 'Letras mas personales', percent: 34 },
      { label: 'Sonido totalmente distinto', percent: 24 },
    ],
  },
  recommendations: {
    title: 'Recomendaciones',
    featuredTitle: '24 horas con Camila Cabello',
    featuredImageAlt: 'Video 24 horas con Camila Cabello',
    featuredImageTone: 'dark',
    featuredImageSrc: imageMap.articles.camila.body[2],
    eyebrow: 'Tambien te podria interesar:',
    articles: [
      {
        category: 'Hollywood',
        title: 'Eiza Gonzalez se roba los reflectores en el afterparty de los Oscars',
        imageAlt: 'Eiza Gonzalez look rojo',
        imageTone: 'rose',
        imageSrc: imageMap.hollywood.looks[0],
      },
      {
        category: 'Hollywood',
        title: 'Gigi Hadid & Camila Cabello deslumbran en un evento de MIU MIU en Miami',
        imageAlt: 'Gigi Hadid y Camila Cabello',
        imageTone: 'dark',
        imageSrc: imageMap.hollywood.looks[1],
      },
      {
        category: 'Hollywood',
        title: 'Ana de Armas lleva botines en tendencia',
        imageAlt: 'Ana de Armas look editorial',
        imageTone: 'ivory',
        imageSrc: imageMap.hollywood.looks[2],
      },
    ],
  },
};

export const guadalajaraArticle: ArticleContent = {
  slug: 'guadalajara',
  variant: 'longform',
  hero: {
    category: 'Moda',
    title: 'Donde comprar marcas de moda mexicana en Guadalajara',
    subtitle: 'Ademas de ser la ciudad vibrante por su gastronomia, arquitectura y artesania, Guadalajara es el punto de encuentro de las marcas de moda para tener en la mira.',
    author: 'Por Luz Garcia',
    date: 'Dato pendiente.',
    imageAlt: 'Editorial de moda mexicana en Guadalajara',
    imageTone: 'warm',
    imageSrc: imageMap.articles.guadalajara.hero,
  },
  intro: [
    'Guadalajara se ha convertido en la ciudad donde converge arquitectura, arte, gastronomia y diseno.',
    'Texto pendiente del articulo.',
  ],
  quoteImage: {
    quote: '¿Donde comprar marcas de moda en Guadalajara?',
    attribution: 'Dato pendiente.',
    caption: 'Lazaro',
    imageAlt: 'Interior de tienda de moda mexicana',
    imageTone: 'warm',
    imageSrc: imageMap.articles.guadalajara.body[0],
  },
  body: [
    'EMPATHY STORE',
    'La curaduria de marcas mexicanas en Empathy Store no es convencional y eso es lo que lo hace unico y especial.',
    'Imperdible en Empathy Store',
    'Texto pendiente del articulo.',
    'STUDIO CONCHITA GUADALAJARA',
    'Texto pendiente del articulo.',
    'UGGA CONCEPT STORE',
    'Texto pendiente del articulo.',
    'ALBERGUE TRANSITORIO',
    'Texto pendiente del articulo.',
  ],
  fullImage: {
    imageAlt: 'Interior de concept store en Guadalajara',
    imageTone: 'ivory',
    imageSrc: imageMap.articles.guadalajara.body[1],
  },
  recommendations: {
    title: 'Guadalajara',
    featuredTitle: 'Concept stores de Guadalajara',
    featuredImageAlt: 'Video de Guadalajara',
    featuredImageTone: 'warm',
    favoriteCarousel: {
      title: 'Guadalajara',
      subtitle: '¿Cual es tu marca favorita?',
      looks: [
        {
          id: 'guadalajara-fav-01',
          imageAlt: 'Empathy Store',
          imageTone: 'charcoal',
        },
        {
          id: 'guadalajara-fav-02',
          imageAlt: 'Studio Conchita Guadalajara',
          imageTone: 'ivory',
        },
        {
          id: 'guadalajara-fav-03',
          imageAlt: 'Ugga Concept Store',
          imageTone: 'copper',
        },
        {
          id: 'guadalajara-fav-04',
          imageAlt: 'Albergue Transitorio',
          imageTone: 'wine',
        },
      ],
    },
    eyebrow: 'Tambien te podria interesar:',
    articles: camilaArticle.recommendations.articles,
  },
  longform: {
    blocks: [
      {
        type: 'paragraph',
        text: 'Guadalajara se ha convertido en la ciudad donde converge arquitectura, arte, gastronomia y diseno. En este panorama, visitar la Perla Tapatia tambien permite una experiencia de compras que suma todos los sentidos.',
      },
      {
        type: 'paragraph',
        text: 'Texto pendiente del articulo.',
      },
      {
        type: 'heading',
        text: '¿Donde comprar marcas de moda en Guadalajara?',
      },
      {
        type: 'heading',
        text: 'EMPATHY STORE',
      },
      {
        type: 'paragraph',
        text: 'La curaduria de marcas mexicanas en Empathy Store no es convencional y eso es lo que lo hace unico y especial.',
      },
      {
        type: 'image',
        imageAlt: 'Interior de Empathy Store',
        imageTone: 'warm',
        caption: 'Lazaro',
        imageSrc: imageMap.articles.guadalajara.body[0],
      },
      {
        type: 'paragraph',
        text: 'Empathy es LA tienda de moda mexicana. Texto pendiente del articulo.',
      },
      {
        type: 'heading',
        text: 'Imperdible en Empathy Store',
      },
      {
        type: 'paragraph',
        text: 'El Látaming Room de Marqués Grupo, un espacio dedicado a la escucha de alta fidelidad creado por uno de los expertos mas importantes en la historia del audio en Mexico. Texto pendiente del articulo.',
      },
      {
        type: 'heading',
        text: 'STUDIO CONCHITA GUADALAJARA',
      },
      {
        type: 'paragraph',
        text: 'Fue nuestro primer flagship store. Cada detalle, desde la paleta de colores hasta el mobiliario hecho a medida, fue pensado para reflejar nuestro universo de manera intencional.',
      },
      {
        type: 'image',
        imageAlt: 'Studio Conchita Guadalajara',
        imageTone: 'ivory',
        caption: 'Clara Araujo',
        imageSrc: imageMap.articles.guadalajara.body[1],
      },
      {
        type: 'paragraph',
        text: 'Texto pendiente del articulo.',
      },
      {
        type: 'heading',
        text: 'UGGA CONCEPT STORE',
      },
      {
        type: 'paragraph',
        text: 'Texto pendiente del articulo.',
      },
      {
        type: 'image',
        imageAlt: 'Ugga Concept Store',
        imageTone: 'dark',
        caption: 'Pilar Bofillios',
        imageSrc: imageMap.articles.guadalajara.body[2],
      },
      {
        type: 'paragraph',
        text: 'Texto pendiente del articulo.',
      },
      {
        type: 'heading',
        text: 'ALBERGUE TRANSITORIO',
      },
      {
        type: 'paragraph',
        text: 'Este espacio, curado por los diseñadores mexicanos Julia y Renata, es un lugar imprescindible para encontrar diseño contemporaneo mexicano.',
      },
      {
        type: 'image',
        imageAlt: 'Albergue Transitorio',
        imageTone: 'rose',
        caption: 'Cortesía Albergue Transitorio | Julia y Renata',
        imageSrc: imageMap.articles.guadalajara.body[3],
      },
      {
        type: 'paragraph',
        text: 'Texto pendiente del articulo.',
      },
    ],
    favoriteCarousel: {
      title: 'Guadalajara',
      subtitle: '¿Cual es tu marca favorita?',
      looks: guadalajaraArticlePlaceholderLooks,
    },
    relatedEyebrow: 'Tambien te podria interesar:',
    relatedArticles: camilaArticle.recommendations.articles,
  },
};

export const bafweekArticle: ArticleContent = {
  slug: 'bafweek',
  variant: 'longform',
  hero: {
    category: 'Moda',
    title: 'BAFWEEK 2026: del maximalismo nocturno al universo F1, las claves de la temporada',
    subtitle: 'La semana de la moda porteña volvio a reunir desfiles, performances y puestas escenicas que reflejaron las distintas direcciones que atraviesa hoy el diseno local.',
    author: 'Por Maria Torres',
    date: 'Dato pendiente.',
    imageAlt: 'BAFWEEK 2026 editorial',
    imageTone: 'dark',
    imageSrc: imageMap.articles.bafweek.hero,
  },
  intro: [
    'BAFWEEK volvio a consolidarse como una de las semanas de la moda mas importantes del pais.',
    'Texto pendiente del articulo.',
  ],
  quoteImage: {
    quote: 'Texto pendiente del articulo.',
    attribution: 'Dato pendiente.',
    caption: 'Kosiuko y su coleccion Retrofreaks.',
    imageAlt: 'Backstage BAFWEEK',
    imageTone: 'warm',
    imageSrc: imageMap.articles.bafweek.body[0],
  },
  body: [
    'Night club: excesos y brillos para una noche portena',
    'El maximalismo esta de vuelta. Brillos, tonos contrastantes, accesorios protagonistas, texturas en dialogo y superposicion de capas dominaron las colecciones.',
    'Texto pendiente del articulo.',
    'La velocidad llega a la pasarela: el universo Formula 1',
    'Texto pendiente del articulo.',
  ],
  fullImage: {
    imageAlt: 'Pasarela urbana BAFWEEK',
    imageTone: 'ivory',
    imageSrc: imageMap.articles.bafweek.body[3],
  },
  recommendations: {
    title: 'BAFWEEK',
    featuredTitle: 'BAFWEEK 2026',
    featuredImageAlt: 'Video BAFWEEK',
    featuredImageTone: 'dark',
    favoriteCarousel: {
      title: 'BAFWEEK',
      subtitle: '¿Cual es tu look favorito?',
      looks: [
        {
          id: 'bafweek-look-01',
          imageAlt: 'Look azul de BAFWEEK',
          imageTone: 'copper',
        },
        {
          id: 'bafweek-look-02',
          imageAlt: 'Look pasarela BAFWEEK',
          imageTone: 'wine',
        },
        {
          id: 'bafweek-look-03',
          imageAlt: 'Look oscuro BAFWEEK',
          imageTone: 'charcoal',
        },
        {
          id: 'bafweek-look-04',
          imageAlt: 'Look claro BAFWEEK',
          imageTone: 'silver',
        },
      ],
    },
    eyebrow: 'Tambien te podria interesar:',
    articles: camilaArticle.recommendations.articles,
  },
  longform: {
    blocks: [
      {
        type: 'paragraph',
        text: 'BAFWEEK volvio a consolidarse como una de las semanas de la moda mas importantes del pais. En sus 25 aniversario, el evento reunio a firmas consagradas y emergentes.',
      },
      {
        type: 'paragraph',
        text: 'Texto pendiente del articulo.',
      },
      {
        type: 'image',
        imageAlt: 'Kosiuko BAFWEEK',
        imageTone: 'warm',
        caption: 'Kosiuko y su coleccion Retrofreaks.',
        imageSrc: imageMap.articles.bafweek.body[0],
      },
      {
        type: 'heading',
        text: 'Night club: excesos y brillos para una noche porteña',
      },
      {
        type: 'paragraph',
        text: 'El maximalismo esta de vuelta. Brillos, tonos contrastantes, accesorios protagonistas, texturas en dialogo y superposicion de capas dominaron las colecciones.',
      },
      {
        type: 'paragraph',
        text: 'Texto pendiente del articulo.',
      },
      {
        type: 'image',
        imageAlt: 'Mishka BAFWEEK',
        imageTone: 'ivory',
        caption: 'Mishka, eligio el Arena Studio en La Boca para presentar Sweet Dreams FW26',
        imageSrc: imageMap.articles.bafweek.body[1],
      },
      {
        type: 'paragraph',
        text: 'Las Pepas revolucionaron la pasarela con Out & About. Texto pendiente del articulo.',
      },
      {
        type: 'image',
        imageAlt: 'Bulbenny BAFWEEK',
        imageTone: 'rose',
        caption: 'Bulbenny, que celebro sus quince años con la Coleccion XV',
        imageSrc: imageMap.articles.bafweek.body[2],
      },
      {
        type: 'heading',
        text: 'La velocidad llega a la pasarela: el universo Formula 1',
      },
      {
        type: 'paragraph',
        text: 'Los autos de carrera tambien estacionaron en la pasarela. Texto pendiente del articulo.',
      },
      {
        type: 'image',
        imageAlt: 'Revolver BAFWEEK',
        imageTone: 'dark',
        caption: 'Revolver presento su nueva coleccion en la cancha de futbol del Club Atletico Excursionistas',
        imageSrc: imageMap.articles.bafweek.body[3],
      },
      {
        type: 'paragraph',
        text: 'Texto pendiente del articulo.',
      },
    ],
    favoriteCarousel: {
      title: 'BAFWEEK',
      subtitle: '¿Cual es tu look favorito?',
      looks: bafweekArticlePlaceholderLooks,
    },
    relatedEyebrow: 'Tambien te podria interesar:',
    relatedArticles: camilaArticle.recommendations.articles,
  },
};
