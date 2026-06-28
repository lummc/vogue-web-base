import type { Article, LookVote, PromoArticle, ReelItem } from './mockContent';
import { imageMap } from './imageMap';

export type SectionHeroData = {
  category: string;
  title: string;
  author: string;
  date: string;
  imageAlt: string;
  imageTone: 'warm' | 'rose' | 'dark' | 'ivory';
  href?: string;
  imageSrc?: string;
};

export type CompactNewsItemData = {
  category: string;
  title: string;
  author: string;
  date: string;
  imageAlt: string;
  imageTone: 'warm' | 'rose' | 'dark' | 'ivory';
  imageSrc?: string;
};

export type SectionBlock =
  | {
      type: 'featureStory';
      title: string;
      story: PromoArticle;
      secondary: PromoArticle;
    }
  | {
      type: 'joinUs';
      item: PromoArticle;
      secondaryItems?: PromoArticle[];
    }
  | {
      type: 'videoCarousel';
      title: string;
      layout?: 'wide' | 'poster';
      items: ReelItem[];
    }
  | {
      type: 'featuredGrid';
      title: string;
      articles: Article[];
      featured: Article;
    }
  | {
      type: 'trendCarousel';
      title: string;
      subtitle?: string;
      looks: LookVote[];
    }
  | {
      type: 'articleCarousel';
      title: string;
      articles: PromoArticle[];
    }
  | {
      type: 'mixedFeatureGrid';
      title: string;
      articles: PromoArticle[];
      featured: PromoArticle;
    }
  | {
      type: 'newsList';
      title: string;
      items: CompactNewsItemData[];
    };

export type SectionPageData = {
  slug: string;
  hero: SectionHeroData;
  blocks: SectionBlock[];
};

export const modaSection: SectionPageData = {
  slug: 'moda',
  hero: {
    category: 'Moda',
    title: 'BAFWEEK 2026: del maximalismo nocturno al universo F1, las claves de la temporada',
    author: 'Por Flor Lopez',
    date: '1 de Junio de 2026',
    imageAlt: 'Editorial BAFWEEK 2026',
    imageTone: 'dark',
    href: '/articulo/bafweek',
    imageSrc: imageMap.moda.hero,
  },
  blocks: [
    {
      type: 'featuredGrid',
      title: 'Moda Latinoamericana',
      articles: [
        {
          category: 'Moda',
          title: 'La guia Vogue de donde comprar en Buenos Aires',
          author: 'Por Luz Garcia',
          date: '15 de junio de 2026',
          imageAlt: 'Moda urbana latinoamericana',
          imageTone: 'warm',
          href: '/articulo/guadalajara',
          imageSrc: imageMap.moda.latinoamericana[0],
        },
        {
          category: 'Moda',
          title: 'Como llevar camisetas colombianas en el Mundial 2026',
          author: 'Por Luz Garcia',
          date: '15 de junio de 2026',
          imageAlt: 'Camiseta editorial de futbol',
          imageTone: 'dark',
          imageSrc: imageMap.moda.latinoamericana[1],
        },
      ],
      featured: {
        category: 'Moda',
        title: 'Cazzu luce las sandalias gladiadoras que son tendencia en primavera 2026',
        author: 'Por Fernanda Perez',
        date: '15 de junio de 2026',
        imageAlt: 'Look editorial blanco',
        imageTone: 'rose',
        imageSrc: imageMap.moda.latinoamericana[2],
      },
    },
    {
      type: 'trendCarousel',
      title: 'Tendencias',
      subtitle: '¿A que tendencias te sumas? Dale like',
      looks: [
        {
          id: 'moda-trend-01',
          imageAlt: 'Tendencia pantalones y faldos',
          imageTone: 'charcoal',
          imageSrc: imageMap.moda.tendencias[0],
        },
        {
          id: 'moda-trend-02',
          imageAlt: 'Sandalias taco comodo',
          imageTone: 'ivory',
          imageSrc: imageMap.moda.tendencias[1],
        },
        {
          id: 'moda-trend-03',
          imageAlt: 'Combinacion oro y denim',
          imageTone: 'copper',
          imageSrc: imageMap.moda.tendencias[2],
        },
        {
          id: 'moda-trend-04',
          imageAlt: 'Color de temporada',
          imageTone: 'silver',
          imageSrc: imageMap.moda.tendencias[3],
        },
      ],
    },
    {
      type: 'articleCarousel',
      title: 'Moda en eventos',
      articles: [
        {
          category: 'Moda',
          title: 'Belinda en el mundial 2026',
          author: 'Por Vogue',
          date: '13 de junio de 2026',
          imageAlt: 'Belinda en evento',
          imageTone: 'dark',
          imageSrc: imageMap.moda.eventos[0],
        },
        {
          category: 'Moda',
          title: 'Taylor Swift en el salon de la fama',
          author: 'Por Vogue',
          date: '13 de junio de 2026',
          imageAlt: 'Taylor Swift editorial',
          imageTone: 'rose',
          imageSrc: imageMap.moda.eventos[1],
        },
        {
          category: 'Moda',
          title: 'Rosalia regresa con un look inesperado',
          author: 'Por Vogue',
          date: '12 de junio de 2026',
          imageAlt: 'Rosalia editorial',
          imageTone: 'ivory',
          imageSrc: imageMap.moda.eventos[2],
        },
      ],
    },
    {
      type: 'mixedFeatureGrid',
      title: 'Diseno latino emergente',
      articles: [
        {
          category: 'Moda',
          title: 'Encuentros Latinos: por esto marca Miguelina replanteo una bolsa a Rosalia',
          author: 'Por Luz Garcia',
          date: '23 de junio de 2026',
          imageAlt: 'Diseno latino con bolso',
          imageTone: 'dark',
          imageSrc: imageMap.moda.disenoLatino[0],
        },
        {
          category: 'Moda',
          title: 'Encuentros Latinos: Gabrielle Venner confirma que la moda mexicana es experimentar',
          author: 'Por Luz Garcia',
          date: '23 de junio de 2026',
          imageAlt: 'Moda emergente urbana',
          imageTone: 'warm',
          imageSrc: imageMap.moda.disenoLatino[1],
        },
        {
          category: 'Moda',
          title: 'Encuentros Latinos: los hongos pueden ser aliados en la moda sostenible',
          author: 'Por Luz Garcia',
          date: '23 de junio de 2026',
          imageAlt: 'Moda sostenible',
          imageTone: 'rose',
          imageSrc: imageMap.moda.disenoLatino[2],
        },
        {
          category: 'Moda',
          title: 'Encuentros Latinos: Chamader, la marca colombiana que hace moda a partir de arte grafico',
          author: 'Por Luz Garcia',
          date: '23 de junio de 2026',
          imageAlt: 'Arte grafico y moda',
          imageTone: 'ivory',
          imageSrc: imageMap.moda.disenoLatino[3],
        },
      ],
      featured: {
        category: 'Moda',
        title: 'Encuentros Latinos: desde Republica Dominicana, grabares hacen frente al fast fashion con tradicion artesanal',
        author: 'Por Luz Garcia',
        date: '23 de junio de 2026',
        imageAlt: 'Diseno latino destacado',
        imageTone: 'dark',
        imageSrc: imageMap.moda.disenoLatino[4],
      },
    },
    {
      type: 'articleCarousel',
      title: '¿Que usan los famosos?',
      articles: [
        {
          category: 'Moda',
          title: 'Karol G conquista Capri con el look que define el verano 2026',
          author: 'Por Vogue',
          date: '17 de junio de 2026',
          imageAlt: 'Karol G look verano',
          imageTone: 'ivory',
          imageSrc: imageMap.moda.famosos[0],
        },
        {
          category: 'Moda',
          title: 'Zapatos de tacon con pulsera en el tobillo: la eleccion del verano',
          author: 'Por Vogue',
          date: '17 de junio de 2026',
          imageAlt: 'Zapatos de celebridad',
          imageTone: 'rose',
          imageSrc: imageMap.moda.famosos[1],
        },
        {
          category: 'Moda',
          title: 'Sandalias de tacon y bolso naranja para salir de noche',
          author: 'Por Vogue',
          date: '17 de junio de 2026',
          imageAlt: 'Sandalias de tacon',
          imageTone: 'dark',
          imageSrc: imageMap.moda.famosos[2],
        },
        {
          category: 'Moda',
          title: 'La reina Letizia apuesta por el nuevo minimalismo con zapatos metalizados y vestido de flores en verano 2026',
          imageAlt: 'Reina Letizia con vestido de flores',
          imageTone: 'dark',
          imageSrc: imageMap.moda.famosos[3],
        },
      ],
    },
    {
      type: 'newsList',
      title: 'Ultimas noticias',
      items: [
        {
          category: 'Moda',
          title: 'Las sandalias de tacon mas elegantes para llevar en verano 2026',
          author: 'Por Renata Joffre',
          date: '17 de junio de 2026',
          imageAlt: 'Sandalias elegantes',
          imageTone: 'warm',
          imageSrc: imageMap.moda.noticias[0],
        },
        {
          category: 'Moda',
          title: 'Vestido sin tiras y gafas de aviador, Angelina Jolie regresa a los 2000',
          author: 'Por Maricux Anaguba',
          date: '17 de junio de 2026',
          imageAlt: 'Angelina Jolie look 2000',
          imageTone: 'dark',
          imageSrc: imageMap.moda.noticias[1],
        },
        {
          category: 'Moda',
          title: 'Los zapatos con moños que las mas elegantes llevaran en verano 2026',
          author: 'Por Maria Marin',
          date: '17 de junio de 2026',
          imageAlt: 'Zapatos con moños',
          imageTone: 'ivory',
          imageSrc: imageMap.moda.noticias[2],
        },
        {
          category: 'Moda',
          title: 'La clave Y2K para brillar en verano 2026, segun Olivia Rodrigo',
          author: 'Por Maria Diez',
          date: '17 de junio de 2026',
          imageAlt: 'Olivia Rodrigo look verano',
          imageTone: 'rose',
          imageSrc: imageMap.moda.noticias[3],
        },
      ],
    },
  ],
};

export const estiloDeVidaSection: SectionPageData = {
  slug: 'estilo-de-vida',
  hero: {
    category: 'Estilo de vida',
    title: 'Camila Cabello accesa su ‘energía de mala’ (e invita a Drake) para nuevo álbum inspirado en Miami',
    author: 'POR MARÍA TORRES',
    date: '1 de Junio de 2026',
    imageAlt: 'Editorial de estilo de vida en sofa',
    imageTone: 'ivory',
    href: '/articulo/camila',
    imageSrc: imageMap.estiloDeVida.hero,
  },
  blocks: [
    {
      type: 'featuredGrid',
      title: 'Musica',
      articles: [
        {
          category: 'Musica',
          title: 'Como Shakira se convirtio en la reina de las canciones de los Mundiales',
          author: 'Por Fernanda Perez',
          date: '8 de junio de 2026',
          imageAlt: 'Shakira en escenario',
          imageTone: 'warm',
          imageSrc: imageMap.estiloDeVida.musica[0],
        },
        {
          category: 'Musica',
          title: 'Como se crea la musica de una pasarela? Yissel revela las claves detras del proceso',
          author: 'Por Luz Garcia',
          date: '5 de junio de 2026',
          imageAlt: 'Musica de pasarela',
          imageTone: 'rose',
          imageSrc: imageMap.estiloDeVida.musica[1],
        },
      ],
      featured: {
        category: 'Musica',
        title: 'Belinda brilla en la inauguracion del Mundial 2026',
        author: 'Por Fernanda Rodriguez',
        date: '5 de junio de 2026',
        imageAlt: 'Belinda en inauguracion',
        imageTone: 'dark',
        imageSrc: imageMap.estiloDeVida.musica[2],
      },
    },
    {
      type: 'articleCarousel',
      title: 'Gastronomia Latinoamericana',
      articles: [
        {
          category: 'Estilo de vida',
          title: 'Que tiene de especial la carne de Wagyu?, esto responde un chef japones en Mexico',
          author: 'Por Vogue',
          date: '22 de junio de 2026',
          imageAlt: 'Platillo latinoamericano',
          imageTone: 'warm',
          imageSrc: imageMap.estiloDeVida.gastronomia[0],
        },
        {
          category: 'Estilo de vida',
          title: 'Ellas son las chefs que redefinen el mundo culinario de la Ciudad de Mexico en 2025',
          author: 'Por Vogue',
          date: '20 de junio de 2026',
          imageAlt: 'Chef latinoamericana',
          imageTone: 'ivory',
          imageSrc: imageMap.estiloDeVida.gastronomia[1],
        },
        {
          category: 'Estilo de vida',
          title: '10 preguntas sobre cocina mexicana que debes conocer antes de viajar',
          author: 'Por Vogue',
          date: '19 de junio de 2026',
          imageAlt: 'Cocina mexicana verde',
          imageTone: 'rose',
          imageSrc: imageMap.estiloDeVida.gastronomia[2],
        },
      ],
    },
    {
      type: 'mixedFeatureGrid',
      title: 'Arte y Cultura',
      articles: [
        {
          category: 'Estilo de vida',
          title: 'Muere David Hockney a los 88 anos, icono del arte del siglo XX',
          author: 'Por Luz Garcia',
          date: '24 de junio de 2026',
          imageAlt: 'Retrato artistico',
          imageTone: 'rose',
          imageSrc: imageMap.estiloDeVida.arte[0],
        },
        {
          category: 'Estilo de vida',
          title: 'Noches de Verano MARCO 2026: arte, musica y cultura en Monterrey durante el Mundial',
          author: 'Por Luz Garcia',
          date: '24 de junio de 2026',
          imageAlt: 'Museo y pantallas',
          imageTone: 'dark',
          imageSrc: imageMap.estiloDeVida.arte[1],
        },
        {
          category: 'Estilo de vida',
          title: 'Monai Elena Pombo, la artista venezolana en Greater New York: la muestra aniversario del MoMA PS1',
          author: 'Por Luz Garcia',
          date: '19 de marzo de 2026',
          imageAlt: 'Exhibicion roja',
          imageTone: 'warm',
          imageSrc: imageMap.estiloDeVida.arte[2],
        },
        {
          category: 'Estilo de vida',
          title: 'Un balon para el museo: la iniciativa que busca crear conciencia sobre la riqueza de Mexico',
          author: 'Por Luz Garcia',
          date: '19 de febrero de 2026',
          imageAlt: 'Instalacion de museo',
          imageTone: 'ivory',
          imageSrc: imageMap.estiloDeVida.arte[3],
        },
      ],
      featured: {
        category: 'Estilo de vida',
        title: 'La Muestra de Cine Espanol en CDMX regresa',
        author: 'Por Vogue',
        date: '18 de junio de 2026',
        imageAlt: 'Libreria y cultura visual',
        imageTone: 'ivory',
        imageSrc: imageMap.estiloDeVida.arte[4],
      },
    },
    {
      type: 'articleCarousel',
      title: '¿Que hacer en Latinoamerica?',
      articles: [
        {
          category: 'Estilo de vida',
          title: 'Que hacer en Medellin: La guia Vogue para descubrirla',
          author: 'Por Vogue',
          date: '18 de junio de 2026',
          imageAlt: 'Ilustracion botanica Medellin',
          imageTone: 'rose',
          imageSrc: imageMap.estiloDeVida.queHacer[0],
        },
        {
          category: 'Estilo de vida',
          title: 'Que hacer en Bolivia: La guia Vogue para descubrirla',
          author: 'Por Vogue',
          date: '18 de junio de 2026',
          imageAlt: 'Ilustracion botanica Bolivia',
          imageTone: 'warm',
          imageSrc: imageMap.estiloDeVida.queHacer[1],
        },
        {
          category: 'Estilo de vida',
          title: 'Que hacer en Latinoamerica: destinos para mirar con calma',
          author: 'Por Vogue',
          date: '18 de junio de 2026',
          imageAlt: 'Flores latinoamericanas',
          imageTone: 'ivory',
          imageSrc: imageMap.estiloDeVida.queHacer[2],
        },
      ],
    },
    {
      type: 'newsList',
      title: 'Horoscopos',
      items: [
        {
          category: 'Estilo de vida',
          title: 'Horoscopo de hoy: 18 de junio de 2026',
          author: 'Por Mereath Astrology',
          date: '18 de junio de 2026',
          imageAlt: 'Ilustracion de horoscopo',
          imageTone: 'ivory',
          imageSrc: imageMap.estiloDeVida.horoscopo[0],
        },
        {
          category: 'Estilo de vida',
          title: 'Horoscopo de hoy: 17 de junio de 2026',
          author: 'Por Mereath Astrology',
          date: '17 de junio de 2026',
          imageAlt: 'Ilustracion astrologica',
          imageTone: 'dark',
          imageSrc: imageMap.estiloDeVida.horoscopo[1],
        },
        {
          category: 'Estilo de vida',
          title: 'Horoscopo de hoy: 16 de junio de 2026',
          author: 'Por Mereath Astrology',
          date: '16 de junio de 2026',
          imageAlt: 'Ilustracion roja de horoscopo',
          imageTone: 'rose',
          imageSrc: imageMap.estiloDeVida.horoscopo[2],
        },
        {
          category: 'Estilo de vida',
          title: 'Horoscopo semanal del 8 al 15 de junio de 2026',
          author: 'Por Mereath Astrology',
          date: '15 de junio de 2026',
          imageAlt: 'Ilustracion semanal de horoscopo',
          imageTone: 'warm',
          imageSrc: imageMap.estiloDeVida.horoscopo[3],
        },
      ],
    },
  ],
};

export const hollywoodSection: SectionPageData = {
  slug: 'hollywood',
  hero: {
    category: 'Hollywood',
    title: 'Valeria Mazza, Adriana Lima y otras celebridades brillan en una noche inolvidable',
    author: 'Por Flor Lopez',
    date: '1 de Junio de 2026',
    imageAlt: 'Alfombra roja de celebridades',
    imageTone: 'dark',
    imageSrc: imageMap.hollywood.hero,
  },
  blocks: [
    {
      type: 'featureStory',
      title: 'Edicion Aniversario',
      story: {
        category: 'Hollywood',
        title: 'Vogue celebra una nueva era de historias, talento latino y memorias de cine',
        kicker: 'Una conversacion editorial sobre los rostros que marcaron la cultura visual de la temporada.',
        author: 'Por Vogue Mexico',
        date: '12 de junio de 2026',
        imageAlt: 'Portada editorial aniversario',
        imageTone: 'ivory',
        imageSrc: imageMap.hollywood.aniversario[0],
      },
      secondary: {
        category: '',
        title: '',
        kicker: '',
        author: 'Por Vogue',
        date: '12 de junio de 2026',
        imageAlt: 'Video editorial aniversario',
        imageTone: 'dark',
        imageSrc: imageMap.hollywood.aniversario[1],
      },
    },
    {
      type: 'featuredGrid',
      title: 'Estrenos',
      articles: [
        {
          category: 'Hollywood',
          title: 'Las peliculas que llegan para dominar la conversacion del verano',
          author: 'Por Luz Garcia',
          date: '10 de junio de 2026',
          imageAlt: 'Estreno cinematografico',
          imageTone: 'rose',
          imageSrc: imageMap.hollywood.estrenos[0],
        },
        {
          category: 'Hollywood',
          title: 'Series, documentales y nuevos personajes para mirar esta semana',
          author: 'Por Vogue',
          date: '9 de junio de 2026',
          imageAlt: 'Serie de estreno',
          imageTone: 'warm',
          imageSrc: imageMap.hollywood.estrenos[1],
        },
      ],
      featured: {
        category: 'Hollywood',
        title: 'La historia que todos esperan ver en pantalla grande este 2026',
        author: 'Por Fernanda Perez',
        date: '9 de junio de 2026',
        imageAlt: 'Cartel destacado de pelicula',
        imageTone: 'dark',
        imageSrc: imageMap.hollywood.estrenos[2],
      },
    },
    {
      type: 'trendCarousel',
      title: 'Recomendaciones de la comunidad',
      subtitle: 'Dale like a tu favorita',
      looks: [
        {
          id: 'hollywood-community-01',
          imageAlt: 'Poster recomendado por la comunidad',
          imageTone: 'charcoal',
          imageSrc: imageMap.hollywood.recomendaciones[0],
        },
        {
          id: 'hollywood-community-02',
          imageAlt: 'Poster de drama recomendado',
          imageTone: 'wine',
          imageSrc: imageMap.hollywood.recomendaciones[1],
        },
        {
          id: 'hollywood-community-03',
          imageAlt: 'Poster de comedia recomendado',
          imageTone: 'copper',
          imageSrc: imageMap.hollywood.recomendaciones[2],
        },
        {
          id: 'hollywood-community-04',
          imageAlt: 'Poster de documental recomendado',
          imageTone: 'silver',
          imageSrc: imageMap.hollywood.recomendaciones[3],
        },
      ],
    },
    {
      type: 'mixedFeatureGrid',
      title: 'Voces Latinas en Hollywood',
      articles: [
        {
          category: 'Hollywood',
          title: 'La actriz mexicana que redefine el suspenso desde Los Angeles',
          author: 'Por Luz Garcia',
          date: '8 de junio de 2026',
          imageAlt: 'Actriz latina en retrato',
          imageTone: 'rose',
          imageSrc: imageMap.hollywood.voces[0],
        },
        {
          category: 'Hollywood',
          title: 'Directoras latinas y las historias que cambiaron el mapa del cine',
          author: 'Por Vogue',
          date: '8 de junio de 2026',
          imageAlt: 'Directora latina en set',
          imageTone: 'dark',
          imageSrc: imageMap.hollywood.voces[1],
        },
        {
          category: 'Hollywood',
          title: 'Nuevas voces de la musica que cruzan al universo audiovisual',
          author: 'Por Vogue',
          date: '7 de junio de 2026',
          imageAlt: 'Artista latina en escenario',
          imageTone: 'warm',
          imageSrc: imageMap.hollywood.voces[2],
        },
        {
          category: 'Hollywood',
          title: 'Talentos emergentes que transforman alfombras rojas en manifiestos',
          author: 'Por Vogue',
          date: '7 de junio de 2026',
          imageAlt: 'Talento emergente en alfombra roja',
          imageTone: 'ivory',
          imageSrc: imageMap.hollywood.voces[3],
        },
      ],
      featured: {
        category: 'Hollywood',
        title: 'La presencia latina que marca una nueva temporada de Hollywood',
        author: 'Por Vogue Mexico',
        date: '7 de junio de 2026',
        imageAlt: 'Figura latina destacada',
        imageTone: 'dark',
        imageSrc: imageMap.hollywood.voces[4],
      },
    },
    {
      type: 'articleCarousel',
      title: 'Looks destacados de nuestras celebridades favoritas',
      articles: [
        {
          category: 'Hollywood',
          title: 'El vestido plateado que brillo en la alfombra roja',
          author: 'Por Vogue',
          date: '6 de junio de 2026',
          imageAlt: 'Look plateado de celebridad',
          imageTone: 'ivory',
          imageSrc: imageMap.hollywood.looks[0],
        },
        {
          category: 'Hollywood',
          title: 'Trajes negros, joyas y siluetas clasicas que nunca fallan',
          author: 'Por Vogue',
          date: '6 de junio de 2026',
          imageAlt: 'Look negro de celebridad',
          imageTone: 'dark',
          imageSrc: imageMap.hollywood.looks[1],
        },
        {
          category: 'Hollywood',
          title: 'El color rojo vuelve a la alfombra con fuerza cinematografica',
          author: 'Por Vogue',
          date: '5 de junio de 2026',
          imageAlt: 'Look rojo de celebridad',
          imageTone: 'rose',
          imageSrc: imageMap.hollywood.looks[2],
        },
      ],
    },
  ],
};

export const bellezaSection: SectionPageData = {
  slug: 'belleza',
  hero: {
    category: 'Belleza',
    title: 'Danna lleva el corte midi con rizos naturales que sera tendencia en verano 2026',
    author: 'Por Maria Diez',
    date: '15 de Junio de 2026',
    imageAlt: 'Retrato editorial de belleza con corte midi',
    imageTone: 'rose',
    imageSrc: imageMap.belleza.hero,
  },
  blocks: [
    {
      type: 'featuredGrid',
      title: 'Ultimas Tendencias',
      articles: [
        {
          category: 'Belleza',
          title: 'Priscila Fodal habla de su marca argentina de belleza limpia',
          author: 'Por Maria Diez',
          date: '28 de mayo de 2026',
          imageAlt: 'Belleza limpia editorial',
          imageTone: 'warm',
          imageSrc: imageMap.belleza.tendencias[0],
        },
        {
          category: 'Belleza',
          title: 'Cazzu y las unas animal print que todos queremos llevar en las fiestas',
          author: 'Por Michel Mejia',
          date: '18 de abril de 2026',
          imageAlt: 'Unas animal print',
          imageTone: 'rose',
          imageSrc: imageMap.belleza.tendencias[1],
        },
      ],
      featured: {
        category: 'Belleza',
        title: 'Dua Lipa revive el peinado de media cola frances en su boda y es tendencia para verano 2026',
        author: 'Por Fernanda Perez Sanchez',
        date: '29 de junio de 2026',
        imageAlt: 'Peinado media cola frances',
        imageTone: 'dark',
        imageSrc: imageMap.belleza.tendencias[2],
      },
    },
    {
      type: 'trendCarousel',
      title: 'Unas',
      subtitle: 'Ultimas tendencias, dale me gusta al diseno que usarias',
      looks: [
        {
          id: 'belleza-unas-01',
          imageAlt: 'Unas rojas minimalistas',
          imageTone: 'ivory',
          imageSrc: imageMap.belleza.unas[0],
        },
        {
          id: 'belleza-unas-02',
          imageAlt: 'Unas con flores de colores',
          imageTone: 'rose',
          imageSrc: imageMap.belleza.unas[1],
        },
        {
          id: 'belleza-unas-03',
          imageAlt: 'Unas naturales elegantes',
          imageTone: 'copper',
          imageSrc: imageMap.belleza.unas[2],
        },
        {
          id: 'belleza-unas-04',
          imageAlt: 'Unas naranja verano',
          imageTone: 'silver',
          imageSrc: imageMap.belleza.unas[3],
        },
      ],
    },
    {
      type: 'articleCarousel',
      title: 'Cabello',
      articles: [
        {
          category: 'Belleza',
          title: 'Eiza Gonzalez lleva las sandalias de tiras que mejor lucen con jeans acampanados en junio 2026',
          author: 'Por Vogue',
          date: '12 de junio de 2026',
          imageAlt: 'Cabello largo en salon',
          imageTone: 'warm',
          imageSrc: imageMap.belleza.cabello[0],
        },
        {
          category: 'Belleza',
          title: 'Jennifer Lopez cambia el clasico slick back bun por un chongo de bailarina, el peinado mas elegante del verano 2026',
          author: 'Por Vogue',
          date: '11 de junio de 2026',
          imageAlt: 'Peinado elegante de bailarina',
          imageTone: 'rose',
          imageSrc: imageMap.belleza.cabello[1],
        },
        {
          category: 'Belleza',
          title: 'Kim Kardashian estrena el bob italiano que todas quieren probar',
          author: 'Por Vogue',
          date: '10 de junio de 2026',
          imageAlt: 'Bob italiano editorial',
          imageTone: 'dark',
          imageSrc: imageMap.belleza.cabello[2],
        },
      ],
    },
    {
      type: 'articleCarousel',
      title: 'Bienestar',
      articles: [
        {
          category: 'Belleza',
          title: 'Datiles: beneficios, propiedades y cuantos puedes comer al dia, segun una nutriologa',
          author: 'Por Vogue',
          date: '9 de junio de 2026',
          imageAlt: 'Mercado de frutas y bienestar',
          imageTone: 'warm',
          imageSrc: imageMap.belleza.bienestar[0],
        },
        {
          category: 'Belleza',
          title: '14 habitos japoneses para vivir mas y mejor: desde beber te hasta levantarte con sol',
          author: 'Por Vogue',
          date: '8 de junio de 2026',
          imageAlt: 'Bienestar y habitos japoneses',
          imageTone: 'rose',
          imageSrc: imageMap.belleza.bienestar[1],
        },
        {
          category: 'Belleza',
          title: 'Yoga: como empezar una practica amable para el cuerpo',
          author: 'Por Vogue',
          date: '8 de junio de 2026',
          imageAlt: 'Yoga y bienestar',
          imageTone: 'ivory',
          imageSrc: imageMap.belleza.bienestar[2],
        },
      ],
    },
    {
      type: 'mixedFeatureGrid',
      title: 'Perfumes',
      articles: [
        {
          category: 'Belleza',
          title: 'Perfumes de sandalo para mujeres, los mejores para llevar esta temporada',
          author: 'Por Vogue',
          date: '7 de junio de 2026',
          imageAlt: 'Perfume de sandalo',
          imageTone: 'warm',
          imageSrc: imageMap.belleza.perfumes[0],
        },
        {
          category: 'Belleza',
          title: 'El elegante vestido transparente que Dua Lipa lucio en el brunch despues de su boda',
          author: 'Por Vogue',
          date: '7 de junio de 2026',
          imageAlt: 'Look transparente de brunch',
          imageTone: 'ivory',
          imageSrc: imageMap.belleza.perfumes[1],
        },
        {
          category: 'Belleza',
          title: 'Los perfumes que estaran de moda en Primavera-Verano 2026',
          author: 'Por Vogue',
          date: '6 de junio de 2026',
          imageAlt: 'Perfumes de temporada',
          imageTone: 'rose',
          imageSrc: imageMap.belleza.perfumes[2],
        },
        {
          category: 'Belleza',
          title: 'Le decimos adios a aquellos perfumes que ya no estaran de moda en 2026',
          author: 'Por Vogue',
          date: '6 de junio de 2026',
          imageAlt: 'Perfume editorial',
          imageTone: 'dark',
          imageSrc: imageMap.belleza.perfumes[3],
        },
      ],
      featured: {
        category: 'Perfumes',
        title: 'Perfume, Santal Blush Eau de Parfum, 50 ml Unisex',
        author: 'Por Vogue',
        date: '5 de junio de 2026',
        imageAlt: 'Frasco de perfume destacado',
        imageTone: 'ivory',
        imageSrc: imageMap.belleza.perfumes[4],
      },
    },
    {
      type: 'newsList',
      title: 'Lo mas destacado',
      items: [
        {
          category: 'Belleza',
          title: '6 trucos faciles y deliciosos para alcanzar tus objetivos de proteina todos los dias',
          author: 'Por Audrey Noble',
          date: '8 de junio de 2026',
          imageAlt: 'Nutricion y proteina',
          imageTone: 'warm',
          imageSrc: imageMap.belleza.destacado[0],
        },
        {
          category: 'Belleza',
          title: 'Malasana, la postura de yoga en cuclillas, que alarga tu vida y mejora tu salud',
          author: 'Por Ana Morales',
          date: '15 de junio de 2026',
          imageAlt: 'Postura de yoga',
          imageTone: 'ivory',
          imageSrc: imageMap.belleza.destacado[1],
        },
        {
          category: 'Belleza',
          title: '¿Raya del cabello al centro o de lado, a la izquierda o a la derecha?',
          author: 'Por Maria Diez',
          date: '10 de junio de 2026',
          imageAlt: 'Raya de cabello editorial',
          imageTone: 'dark',
          imageSrc: imageMap.belleza.destacado[2],
        },
        {
          category: 'Belleza',
          title: '3 peinados elegantes inspirados en celebridades para probar en junio 2026',
          author: 'Por Maria Diez',
          date: '2 de junio de 2026',
          imageAlt: 'Peinado de celebridad',
          imageTone: 'rose',
          imageSrc: imageMap.belleza.destacado[3],
        },
      ],
    },
  ],
};

export const convocatoriasSection: SectionPageData = {
  slug: 'convocatorias',
  hero: {
    category: 'Convocatorias',
    title: 'PhotoVogue 2026, "Brave New Visions: La creatividad como rebelion"',
    author: 'Por Maria Diez',
    date: '15 de Junio de 2026',
    imageAlt: 'PhotoVogue convocatoria editorial',
    imageTone: 'ivory',
    imageSrc: imageMap.convocatorias.hero,
  },
  blocks: [
    {
      type: 'joinUs',
      item: {
        category: 'Convocatorias',
        title: 'Se parte de nosotros',
        kicker: 'Se abre la primera convocatoria de Vogue Ficcion 2026 para escritoras latinoamericanas',
        author: 'Por Camila Colina',
        date: '1 de abril de 2026',
        imageAlt: 'Convocatoria Vogue Ficcion',
        imageTone: 'ivory',
        imageSrc: imageMap.home.joinUs[0],
      },
      secondaryItems: [
        {
          category: 'Convocatorias',
          title: 'Panorama MENA: Convocatoria regional abierta de PhotoVogue',
          author: 'Por PhotoVogue',
          date: '21 de mayo de 2026',
          imageAlt: 'Panorama MENA PhotoVogue',
          imageTone: 'rose',
          imageSrc: imageMap.home.joinUs[1],
        },
        {
          category: 'Convocatorias',
          title: 'Buscamos marcas que deseen conectar con nuestra audiencia',
          author: 'Por Vogue + Casa AD',
          date: '7 de junio de 2026',
          imageAlt: 'Convocatoria para marcas',
          imageTone: 'dark',
          imageSrc: imageMap.home.joinUs[2],
        },
      ],
    },
    {
      type: 'trendCarousel',
      title: 'PhotoVogue',
      subtitle: 'Dale like a tu ganador favorito',
      looks: [
        {
          id: 'photovogue-01',
          imageAlt: 'Retrato participante PhotoVogue',
          imageTone: 'ivory',
          imageSrc: imageMap.convocatorias.photovogue[0],
        },
        {
          id: 'photovogue-02',
          imageAlt: 'Fotografia documental PhotoVogue',
          imageTone: 'copper',
          imageSrc: imageMap.convocatorias.photovogue[1],
        },
        {
          id: 'photovogue-03',
          imageAlt: 'Retrato cultural PhotoVogue',
          imageTone: 'silver',
          imageSrc: imageMap.convocatorias.photovogue[2],
        },
        {
          id: 'photovogue-04',
          imageAlt: 'Paisaje editorial PhotoVogue',
          imageTone: 'charcoal',
          imageSrc: imageMap.convocatorias.photovogue[3],
        },
      ],
    },
    {
      type: 'articleCarousel',
      title: 'Talento Latinoamericano',
      articles: [
        {
          category: 'Latinoamerica',
          title: 'La moda latinoamericana conquista Milan Fashion Week a traves de esta exhibicion',
          author: 'Por Vogue',
          date: '10 de junio de 2026',
          imageAlt: 'Exhibicion de moda latinoamericana',
          imageTone: 'rose',
          imageSrc: imageMap.convocatorias.talento[0],
        },
        {
          category: 'Latinoamerica',
          title: 'Latinos influyentes: ellos redefinen la moda, las artes, la musica y la cultura en America Latina',
          author: 'Por Vogue',
          date: '9 de junio de 2026',
          imageAlt: 'Talento latinoamericano en entrevista',
          imageTone: 'ivory',
          imageSrc: imageMap.convocatorias.talento[1],
        },
        {
          category: 'Latinoamerica',
          title: '30+ disenadores que estan cambiando las nuevas reglas creativas',
          author: 'Por Vogue',
          date: '8 de junio de 2026',
          imageAlt: 'Disenadores latinoamericanos',
          imageTone: 'dark',
          imageSrc: imageMap.convocatorias.talento[2],
        },
      ],
    },
  ],
};

export const vogueMediaSection: SectionPageData = {
  slug: 'vogue-media',
  hero: {
    category: 'Belleza',
    title: 'Los videos mas relevantes de celebridades en 2026',
    author: 'Por Maria Diez',
    date: '15 de Junio de 2026',
    imageAlt: 'Portada Vogue Media',
    imageTone: 'warm',
    imageSrc: imageMap.vogueMedia.hero,
  },
  blocks: [
    {
      type: 'videoCarousel',
      title: 'Talento Latino',
      layout: 'wide',
      items: [
        {
          id: 'talento-latino-01',
          title: 'Florencia Cuenca',
          imageAlt: 'Vogue On con Florencia Cuenca',
          imageTone: 'warm',
          imageSrc: imageMap.vogueMedia.talentoLatino[0],
        },
        {
          id: 'talento-latino-02',
          title: 'Yalitza Aparicio',
          imageAlt: 'Vogue On con Yalitza Aparicio',
          imageTone: 'ivory',
          imageSrc: imageMap.vogueMedia.talentoLatino[1],
        },
      ],
    },
    {
      type: 'videoCarousel',
      title: '73 Preguntas',
      layout: 'wide',
      items: [
        {
          id: 'preguntas-01',
          title: 'Bad Bunny',
          imageAlt: '73 preguntas con Bad Bunny',
          imageTone: 'ivory',
          imageSrc: imageMap.vogueMedia.preguntas[0],
        },
        {
          id: 'preguntas-02',
          title: 'Jennifer Lopez',
          imageAlt: '73 preguntas con Jennifer Lopez',
          imageTone: 'rose',
          imageSrc: imageMap.vogueMedia.preguntas[1],
        },
      ],
    },
    {
      type: 'videoCarousel',
      title: 'Met Gala 2026',
      layout: 'poster',
      items: [
        {
          id: 'met-gala-media-01',
          title: 'Camila Cabello',
          imageAlt: 'Video Met Gala Camila Cabello',
          imageTone: 'dark',
          imageSrc: imageMap.vogueMedia.metGala[0],
        },
        {
          id: 'met-gala-media-02',
          title: 'Anne Hathaway',
          imageAlt: 'Video Met Gala Anne Hathaway',
          imageTone: 'warm',
          imageSrc: imageMap.vogueMedia.metGala[1],
        },
        {
          id: 'met-gala-media-03',
          title: 'Camila Morrone',
          imageAlt: 'Video Met Gala Camila Morrone',
          imageTone: 'ivory',
          imageSrc: imageMap.vogueMedia.metGala[2],
        },
        {
          id: 'met-gala-media-04',
          title: 'Anya Taylor-Joy',
          imageAlt: 'Video Met Gala Anya Taylor-Joy',
          imageTone: 'rose',
          imageSrc: imageMap.vogueMedia.metGala[3],
        },
      ],
    },
    {
      type: 'videoCarousel',
      title: 'El bolso de',
      layout: 'wide',
      items: [
        {
          id: 'bolso-01',
          title: 'Maca Garcia',
          imageAlt: 'El bolso de Maca Garcia',
          imageTone: 'dark',
          imageSrc: imageMap.vogueMedia.bolso[0],
        },
        {
          id: 'bolso-02',
          title: 'Ariana Grande',
          imageAlt: 'El bolso de Ariana Grande',
          imageTone: 'rose',
          imageSrc: imageMap.vogueMedia.bolso[1],
        },
      ],
    },
    {
      type: 'videoCarousel',
      title: 'Secretos de Belleza',
      layout: 'wide',
      items: [
        {
          id: 'secretos-01',
          title: 'Rutina de skincare y maquillaje ligero',
          imageAlt: 'Secretos de belleza Cassandra Sanchez-Navarro',
          imageTone: 'ivory',
          imageSrc: imageMap.vogueMedia.secretos[0],
        },
        {
          id: 'secretos-02',
          title: 'Maquillaje natural para el verano',
          imageAlt: 'Secretos de belleza Delfina Chaves',
          imageTone: 'warm',
          imageSrc: imageMap.vogueMedia.secretos[1],
        },
      ],
    },
  ],
};
