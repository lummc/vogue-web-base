import { imageMap } from './imageMap';
import { routePath } from '../utils/routes';

export type Article = {
  category: string;
  title: string;
  author: string;
  date: string;
  imageAlt: string;
  imageTone?: 'warm' | 'rose' | 'dark';
  href?: string;
  imageSrc?: string;
};

export type LookVote = {
  id: string;
  imageAlt: string;
  imageTone: 'copper' | 'silver' | 'ivory' | 'wine' | 'charcoal';
  liked?: boolean;
  likesCount?: number;
  imageSrc?: string;
};

export type ReelItem = {
  id: string;
  title: string;
  imageAlt: string;
  imageTone: 'warm' | 'rose' | 'dark' | 'ivory';
  imageSrc?: string;
  videoSrc?: string;
};

export type PromoArticle = {
  category: string;
  title: string;
  kicker?: string;
  author?: string;
  date?: string;
  imageAlt: string;
  imageTone: 'warm' | 'rose' | 'dark' | 'ivory';
  href?: string;
  imageSrc?: string;
};

export const navItems = [
  { label: 'Moda', href: routePath('/moda') },
  { label: 'Belleza', href: routePath('/belleza') },
  { label: 'Estilo de vida', href: routePath('/estilo-de-vida') },
  { label: 'Hollywood', href: routePath('/hollywood') },
  { label: 'Vogue media', href: routePath('/vogue-media') },
  { label: 'Convocatorias', href: routePath('/convocatorias') },
];

export const homePage = {
  hero: {
    category: 'Convocatorias',
    title: 'Se parte de nosotros participando en estos eventos en ciudad de Mexico',
    author: 'Por Flor Lopez',
    date: '1 de Junio de 2026',
    imageAlt: 'Editorial de convocatorias Vogue',
    imageSrc: imageMap.home.hero,
  },
  actualidad: {
    smallCards: [
      {
        category: 'Moda',
        title: 'Tenis inspirados en el futbol para anotar un gol de estilo con faldas y vestidos',
        author: 'Por Michel Mejia',
        date: '6 de junio de 2026',
        imageAlt: 'Editorial de tenis y moda',
        imageTone: 'warm',
        imageSrc: imageMap.home.actualidad[0],
      },
      {
        category: 'Moda',
        title: 'Juana Martin en su paso por Mexico: "Yo veia de pequena como las artistas folcloricas espanolas aterrizaban y salian en television"',
        author: 'Por Luz Garcia',
        date: '7 de junio de 2026',
        imageAlt: 'Retrato editorial de Juana Martin',
        imageTone: 'rose',
        imageSrc: imageMap.home.actualidad[1],
      },
    ] satisfies Article[],
    featured: {
      category: 'Moda',
      title: 'Tenis inspirados en el futbol para anotar un gol de estilo con faldas y vestidos',
      author: 'Por Michel Mejia',
      date: '6 de junio de 2026',
      imageAlt: 'Editorial destacado de moda',
      imageTone: 'dark',
      imageSrc: imageMap.home.actualidad[2],
    } satisfies Article,
  },
  vogueChoice: {
    eyebrow: 'Vogue Choice',
    title: 'Met Gala 2026',
    subtitle: 'Dale like a tu look favorito',
    looks: [
      {
        id: 'look-01',
        imageAlt: 'Look editorial Met Gala 2026 uno',
        imageTone: 'copper',
        imageSrc: imageMap.home.vogueChoice[0],
      },
      {
        id: 'look-02',
        imageAlt: 'Look editorial Met Gala 2026 dos',
        imageTone: 'silver',
        imageSrc: imageMap.home.vogueChoice[1],
      },
      {
        id: 'look-03',
        imageAlt: 'Look editorial Met Gala 2026 tres',
        imageTone: 'ivory',
        imageSrc: imageMap.home.vogueChoice[2],
      },
      {
        id: 'look-04',
        imageAlt: 'Look editorial Met Gala 2026 cuatro',
        imageTone: 'wine',
        imageSrc: imageMap.home.vogueChoice[3],
      },
      {
        id: 'look-05',
        imageAlt: 'Look editorial Met Gala 2026 cinco',
        imageTone: 'charcoal',
        imageSrc: imageMap.home.vogueChoice[4],
      },
    ] satisfies LookVote[],
  },
  reels: [
    {
      id: 'reel-01',
      title: 'Camiseta Mexico Mundial',
      imageAlt: 'Video editorial de moda',
      imageTone: 'warm',
      videoSrc: imageMap.home.reels[0],
    },
    {
      id: 'reel-02',
      title: 'Cannes 2026',
      imageAlt: 'Video editorial de belleza',
      imageTone: 'rose',
      videoSrc: imageMap.home.reels[1],
    },
    {
      id: 'reel-03',
      title: 'Gotico en la pasarela',
      imageAlt: 'Video editorial urbano',
      imageTone: 'dark',
      videoSrc: imageMap.home.reels[2],
    },
    {
      id: 'reel-04',
      title: '6 preguntas',
      imageAlt: 'Video editorial de pasarela',
      imageTone: 'ivory',
      videoSrc: imageMap.home.reels[3],
    },
  ] satisfies ReelItem[],
  joinUs: {
    category: 'Convocatorias',
    title: 'Se parte de nosotros',
    kicker: 'Participa en experiencias, eventos y encuentros editoriales de Vogue Mexico y Latinoamerica.',
    author: 'Por Vogue Mexico',
    date: 'Junio 2026',
    imageAlt: 'Convocatoria editorial Vogue',
    imageTone: 'dark',
    imageSrc: imageMap.home.joinUs[0],
  } satisfies PromoArticle,
  modaBelleza: [
    {
      category: 'Moda',
      title: 'Las tendencias que marcaran el verano con siluetas ligeras',
      author: 'Por Luz Garcia',
      date: '8 de junio de 2026',
      imageAlt: 'Editorial de moda verano',
      imageTone: 'warm',
      imageSrc: imageMap.home.modaBelleza[0],
    },
    {
      category: 'Belleza',
      title: 'El maquillaje luminoso que vuelve a sentirse natural',
      author: 'Por Camila Colina',
      date: '8 de junio de 2026',
      imageAlt: 'Editorial de belleza luminosa',
      imageTone: 'rose',
      imageSrc: imageMap.home.modaBelleza[1],
    },
    {
      category: 'Moda',
      title: 'Vestidos, sandalias y accesorios para una agenda completa',
      author: 'Por Michel Mejia',
      date: '7 de junio de 2026',
      imageAlt: 'Editorial de accesorios',
      imageTone: 'ivory',
      imageSrc: imageMap.home.modaBelleza[2],
    },
  ] satisfies PromoArticle[],
  noTeLoPierdas: [
    {
      category: 'Hollywood',
      title: 'Los momentos de estilo que nadie dejo de comentar esta semana',
      author: 'Por Vogue Mexico',
      date: '6 de junio de 2026',
      imageAlt: 'Editorial Hollywood',
      imageTone: 'dark',
      imageSrc: imageMap.home.noTeLoPierdas[0],
    },
    {
      category: 'Estilo de vida',
      title: 'La guia para preparar una escapada con piezas esenciales',
      author: 'Por Redaccion Vogue',
      date: '5 de junio de 2026',
      imageAlt: 'Editorial estilo de vida',
      imageTone: 'warm',
      imageSrc: imageMap.home.noTeLoPierdas[1],
    },
    {
      category: 'Belleza',
      title: 'El corte de cabello que favorece a todas las texturas',
      author: 'Por Flor Lopez',
      date: '5 de junio de 2026',
      imageAlt: 'Editorial cabello',
      imageTone: 'rose',
      imageSrc: imageMap.home.noTeLoPierdas[2],
    },
    {
      category: 'Vogue Media',
      title: 'Historias para guardar, compartir y volver a mirar',
      author: 'Por Vogue Media',
      date: '4 de junio de 2026',
      imageAlt: 'Editorial Vogue Media',
      imageTone: 'ivory',
      imageSrc: imageMap.home.noTeLoPierdas[3],
    },
  ] satisfies PromoArticle[],
};

export const homeReadingArgentina = [
  {
    category: 'Moda',
    title: 'Para su coleccion Otono-Invierno 2026, Adrian Appiolaza regresa a un terreno mas intimo: Argentina, su tierra natal',
    author: 'Por Sebastian Cabrices',
    date: '28 de febrero de 2026',
    imageAlt: 'Moda argentina editorial',
    imageTone: 'warm',
    imageSrc: imageMap.home.actualidad[0],
  },
  {
    category: 'Moda',
    title: 'Tenis inspirados en el futbol para anotar un gol de estilo con faldas y vestidos',
    author: 'Por Michel Mejia',
    date: '6 de junio de 2026',
    imageAlt: 'Moda y futbol',
    imageTone: 'rose',
    imageSrc: imageMap.home.actualidad[1],
  },
  {
    category: 'Estilo de vida',
    title: 'Cuando Argentina gano el Mundial Mexico 1986: Con la mano de Dios y el Gol del Siglo',
    author: 'Por Miguel Vicencio',
    date: '3 de junio de 2026',
    imageAlt: 'Archivo de futbol argentino',
    imageTone: 'dark',
    imageSrc: imageMap.home.actualidad[2],
  },
] satisfies PromoArticle[];

export const homeMostReadWeek = [
  {
    category: 'Moda',
    title: 'La coleccion de lujo perdio con las que Fina Holland debuto en el mundial',
    author: 'Por Sebastian Cabrices',
    date: '28 de febrero de 2026',
    imageAlt: 'Moda leida de la semana',
    imageTone: 'warm',
    imageSrc: imageMap.moda.latinoamericana[0],
  },
  {
    category: 'Moda',
    title: 'Grace Abrams solo intento vivir el momento',
    author: 'Por Fernanda Perez',
    date: '8 de junio de 2026',
    imageAlt: 'Retrato editorial de Grace Abrams',
    imageTone: 'ivory',
    imageSrc: imageMap.moda.latinoamericana[2],
  },
  {
    category: 'Moda',
    title: 'Por que deberias deshacerte de vestidos, antes de conservarlos por experiencia',
    author: 'Por Miguel Mejia',
    date: '7 de junio de 2026',
    imageAlt: 'Editorial de lectura semanal',
    imageTone: 'rose',
    imageSrc: imageMap.belleza.bienestar[1],
  },
] satisfies PromoArticle[];

export const homeForYou = [
  {
    category: 'Moda',
    title: 'De Beccar a Paris: quien es Mica Arganaraz, la modelo argentina',
    imageAlt: 'Modelo argentina',
    imageTone: 'rose',
    imageSrc: imageMap.moda.disenoLatino[0],
  },
  {
    category: 'Belleza',
    title: 'Los secretos de TINI para un cabello brilloso',
    imageAlt: 'Belleza personalizada',
    imageTone: 'ivory',
    imageSrc: imageMap.belleza.cabello[1],
  },
  {
    category: 'Estilo de vida',
    title: 'De Dakota Johnson a los invitados de Taylor y Travis Kelce',
    imageAlt: 'Estilo de vida personalizado',
    imageTone: 'warm',
    imageSrc: imageMap.estiloDeVida.queHacer[0],
  },
] satisfies PromoArticle[];

export const homeLoggedOutImageStrips = {
  mostReadWeek: imageMap.home.mostReadWeekExported.map((src, index) => ({
    src,
    alt: `Lo más leído esta semana ${index + 1}`,
  })),
  mostReadLatam: imageMap.home.mostReadLatamExported.map((src, index) => ({
    src,
    alt: `Lo más leído en Latinoamérica ${index + 1}`,
  })),
};

export const homeLoggedInImageStrips = {
  mostReadArgentina: imageMap.home.mostReadArgentinaExported.map((src, index) => ({
    src,
    alt: `Lo más leído en Argentina ${index + 1}`,
    width: [454, 335, 335][index],
  })),
  paraVos: imageMap.home.forYouExported.map((src, index) => ({
    src,
    alt: `Para vos basado en tus intereses ${index + 1}`,
  })),
  mostReadLatam: imageMap.home.mostReadLatamExported.map((src, index) => ({
    src,
    alt: `Lo más leído en Latinoamérica ${index + 1}`,
    width: [454, 335, 335][index],
  })),
};

export type HomePage = typeof homePage;
