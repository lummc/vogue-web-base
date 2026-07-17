import type { LookVote, PromoArticle } from './mockContent';
import { imageMap } from './imageMap';

export const communityContent = {
  saved: [
    {
      category: 'Latinoamerica',
      title: 'La moda latinoamericana conquista Milan Fashion Week a traves de esta exhibicion',
      imageAlt: 'Exhibicion de moda latinoamericana',
      imageTone: 'rose',
      imageSrc: imageMap.convocatorias.talento[0],
    },
    {
      category: 'Belleza',
      title: 'Latinos influyentes: ellos redefinen la moda, las artes, la musica y la cultura en America Latina',
      imageAlt: 'Editorial de bienestar',
      imageTone: 'ivory',
      imageSrc: imageMap.belleza.bienestar[1],
    },
    {
      category: 'Moda',
      title: 'Karol G conquista Capri con el look que define el verano 2026',
      imageAlt: 'Look de verano',
      imageTone: 'warm',
      imageSrc: imageMap.moda.famosos[0],
    },
  ] satisfies PromoArticle[],
  likedLooks: [
    {
      id: 'community-like-01',
      imageAlt: 'Tenis negros con pantalones y faldos',
      imageTone: 'charcoal',
      liked: true,
      imageSrc: imageMap.moda.tendencias[0],
    },
    {
      id: 'community-like-02',
      imageAlt: 'Viudas Negras',
      imageTone: 'wine',
      liked: true,
      imageSrc: imageMap.hollywood.recomendaciones[0],
    },
    {
      id: 'community-like-03',
      imageAlt: 'Combinacion de oro precioso y acero industrial',
      imageTone: 'copper',
      liked: true,
      imageSrc: imageMap.moda.tendencias[2],
    },
    {
      id: 'community-like-04',
      imageAlt: 'Diseno de unas',
      imageTone: 'ivory',
      liked: true,
      imageSrc: imageMap.belleza.unas[0],
    },
  ] satisfies LookVote[],
  likedArticles: [
    {
      category: 'Hollywood',
      title: 'Gigi Hadid & Camila Cabello deslumbran en un evento de MIU MIU en Miami',
      imageAlt: 'Gigi Hadid y Camila Cabello',
      imageTone: 'dark',
    },
    {
      category: 'Belleza',
      title: '14 habitos japoneses para vivir mas y mejor: desde beber te hasta levantarte con sol',
      imageAlt: 'Bienestar editorial',
      imageTone: 'ivory',
    },
    {
      category: 'Moda',
      title: 'Esta mitica firma italiana regresara a la Semana de la Alta Costura en 2027',
      imageAlt: 'Moda italiana',
      imageTone: 'rose',
    },
  ] satisfies PromoArticle[],
  mostViewed: [
    {
      category: 'Edicion Especial',
      title: 'Sus nombres los conoces, sus trayectos tambien',
      imageAlt: 'Edicion especial',
      imageTone: 'dark',
      metric: '25.500',
      imageSrc: imageMap.hollywood.aniversario[0],
    },
    {
      category: 'Moda',
      title: 'Como llevar camisetas colombianas en el Mundial 2026: Guia de estilo Vogue',
      imageAlt: 'Camiseta colombiana',
      imageTone: 'warm',
      metric: '23.800',
      imageSrc: imageMap.moda.latinoamericana[1],
    },
    {
      category: 'Hollywood',
      title: 'Eiza Gonzalez nos habla del estreno de su nueva serie',
      imageAlt: 'Estreno Hollywood',
      imageTone: 'rose',
      metric: '22.300',
      imageSrc: imageMap.hollywood.estrenos[1],
    },
    {
      category: 'Estilo de vida',
      title: 'Horoscopo de hoy: 18 de junio de 2026',
      imageAlt: 'Horoscopo',
      imageTone: 'ivory',
      metric: '22.100',
      imageSrc: imageMap.estiloDeVida.horoscopo[0],
    },
    {
      category: 'Moda',
      title: 'Nicki Nicole sorprende con un look de jeans color cafe que son tendencia del 2026',
      imageAlt: 'Look cafe',
      imageTone: 'warm',
      metric: '21.200',
      imageSrc: imageMap.moda.eventos[0],
    },
    {
      category: 'Hollywood',
      title: 'Que significa ser un referente latino? Pedro Pascal sobre ser un referente latino',
      imageAlt: 'Pedro Pascal',
      imageTone: 'dark',
      metric: '20.700',
      imageSrc: imageMap.hollywood.voces[0],
    },
  ] satisfies Array<PromoArticle & { metric: string }>,
  mostSaved: [
    {
      category: 'Moda',
      title: 'Como llevar camisetas colombianas en el Mundial 2026: Guia de estilo Vogue',
      imageAlt: 'Camiseta de moda',
      imageTone: 'warm',
      metric: '11.800',
      imageSrc: imageMap.moda.latinoamericana[1],
    },
    {
      category: 'Moda',
      title: 'Disenos de unas para el Mundial 2026 que debes probar este verano',
      imageAlt: 'Unas editorial',
      imageTone: 'dark',
      metric: '11.500',
      imageSrc: imageMap.belleza.unas[1],
    },
    {
      category: 'Belleza',
      title: 'Por que vivir el colageno como tomarlo y mejores suplementos',
      imageAlt: 'Belleza suplementos',
      imageTone: 'ivory',
      metric: '9.300',
      imageSrc: imageMap.belleza.destacado[0],
    },
    {
      category: 'Belleza',
      title: 'Malasana, la postura de yoga en cuclillas, que alarga tu vida y mejora tu salud',
      imageAlt: 'Yoga editorial',
      imageTone: 'rose',
      metric: '8.900',
      imageSrc: imageMap.belleza.bienestar[2],
    },
    {
      category: 'Belleza',
      title: 'Danna lleva el corte midi con rizos naturales que sera tendencia en verano 2026',
      imageAlt: 'Corte midi',
      imageTone: 'dark',
      metric: '8.600',
      imageSrc: imageMap.belleza.hero,
    },
    {
      category: 'Belleza',
      title: 'Agrega proteina a tu comida: 6 trucos faciles y deliciosos',
      imageAlt: 'Proteina editorial',
      imageTone: 'ivory',
      metric: '5.000',
      imageSrc: imageMap.belleza.destacado[0],
    },
  ] satisfies Array<PromoArticle & { metric: string }>,
  mostLiked: [
    {
      category: 'Hollywood',
      title: 'Que significa ser un referente latino? Pedro Pascal sobre ser un referente latino',
      imageAlt: 'Pedro Pascal',
      imageTone: 'dark',
      metric: '14.600',
      imageSrc: imageMap.hollywood.voces[0],
    },
    {
      category: 'Moda',
      title: 'Como llevar camisetas colombianas en el Mundial 2026: Guia de estilo Vogue',
      imageAlt: 'Camiseta colombiana',
      imageTone: 'warm',
      metric: '11.800',
      imageSrc: imageMap.moda.latinoamericana[1],
    },
    {
      category: 'Belleza',
      title: 'Malasana, la postura de yoga en cuclillas, que alarga tu vida y mejora tu salud',
      imageAlt: 'Yoga editorial',
      imageTone: 'ivory',
      metric: '11.700',
      imageSrc: imageMap.belleza.bienestar[2],
    },
    {
      category: 'Estilo de vida',
      title: 'Ellas son las chefs que redefinen el mundo culinario de la Ciudad de Mexico en 2025',
      imageAlt: 'Chef latina',
      imageTone: 'ivory',
      metric: '10.500',
      imageSrc: imageMap.estiloDeVida.gastronomia[1],
    },
    {
      category: 'Moda',
      title: 'Encuentros Latinos: Gabrielle Venner confirma que la moda mexicana es experimentar',
      imageAlt: 'Moda mexicana',
      imageTone: 'warm',
      metric: '8.500',
      imageSrc: imageMap.moda.disenoLatino[1],
    },
    {
      category: 'Moda',
      title: 'Nicki Nicole sorprende con un look de jeans color cafe que son tendencia del 2026',
      imageAlt: 'Nicki Nicole look',
      imageTone: 'warm',
      metric: '5.500',
      imageSrc: imageMap.moda.eventos[0],
    },
  ] satisfies Array<PromoArticle & { metric: string }>,
};

export type CommunityMetricKind = 'saved' | 'likes' | 'views';
export type CommunityRegion = {
  title: string;
  subtitle?: string;
  sets: Record<CommunityMetricKind, Array<PromoArticle & { metric: string }>>;
};

const rotateArticles = (articles: Array<PromoArticle & { metric: string }>, offset: number) => [
  ...articles.slice(offset),
  ...articles.slice(0, offset),
];

export const communityHero = {
  category: 'Vogue Media',
  title: 'Willy Chavarria es el primer editor invitado para Vogue Latinoamerica',
  imageSrc: imageMap.vogueMedia.hero,
  imageAlt: 'Comunidad Vogue hero',
};

export const communityRegions: CommunityRegion[] = [
  {
    title: 'Popular en tu pais',
    subtitle: 'Tambien te puede interesar',
    sets: {
      saved: communityContent.mostSaved,
      likes: communityContent.mostLiked,
      views: communityContent.mostViewed,
    },
  },
  {
    title: 'Popular en Latinoamerica esta semana',
    sets: {
      saved: rotateArticles(communityContent.mostSaved, 0),
      likes: rotateArticles(communityContent.mostLiked, 1),
      views: rotateArticles(communityContent.mostViewed, 2),
    },
  },
  {
    title: 'Popular en Mexico esta semana',
    sets: {
      saved: [
        { ...communityContent.mostViewed[5], metric: '11.200' },
        { ...communityContent.mostViewed[1], metric: '9.800' },
        { ...communityContent.mostViewed[2], metric: '7.100' },
      ],
      likes: rotateArticles(communityContent.mostLiked, 2).slice(0, 3),
      views: rotateArticles(communityContent.mostViewed, 1).slice(0, 3),
    },
  },
  {
    title: 'Popular en Chile esta semana',
    sets: {
      saved: [
        { ...communityContent.mostSaved[3], metric: '11.000' },
        { ...communityContent.mostLiked[3], metric: '9.500' },
        { ...communityContent.mostSaved[2], metric: '8.500' },
      ],
      likes: rotateArticles(communityContent.mostLiked, 3).slice(0, 3),
      views: rotateArticles(communityContent.mostViewed, 3).slice(0, 3),
    },
  },
  {
    title: 'Popular en Brasil esta semana',
    sets: {
      saved: [
        { ...communityContent.mostViewed[3], metric: '13.500' },
        { ...communityContent.mostViewed[0], metric: '10.700' },
        { ...communityContent.mostSaved[0], metric: '9.500' },
      ],
      likes: rotateArticles(communityContent.mostLiked, 4).slice(0, 3),
      views: rotateArticles(communityContent.mostViewed, 4).slice(0, 3),
    },
  },
  {
    title: 'Popular en Colombia esta semana',
    sets: {
      saved: [
        { ...communityContent.saved[0], metric: '11.000' },
        { ...communityContent.mostSaved[4], metric: '9.800' },
        { ...communityContent.mostSaved[5], metric: '7.800' },
      ],
      likes: rotateArticles(communityContent.mostLiked, 5).slice(0, 3),
      views: rotateArticles(communityContent.mostViewed, 5).slice(0, 3),
    },
  },
];

export type CommunityPngCard = {
  imageSrc: string;
  imageAlt: string;
};

export type CommunityPngRegion = {
  title: string;
  subtitle?: string;
  sets: Record<CommunityMetricKind, CommunityPngCard[]>;
};

const pngCard = (imageSrc: string, imageAlt: string): CommunityPngCard => ({
  imageSrc,
  imageAlt,
});

const toPngCards = (paths: string[], label: string) => paths.map((path, index) => pngCard(path, `${label} ${index + 1}`));

export const communityVogueHero = {
  category: 'VOGUE MEDIA',
  title: 'Willy Chavarria es el primer editor invitado para Vogue Latinoamérica',
  author: 'POR ANYA ISIM',
  date: '20 de junio de 2025',
  imageSrc: imageMap.communityVogue.hero,
  imageAlt: 'Portada Comunidad Vogue',
};

const latamSaved = toPngCards(imageMap.communityVogue.latam.saved, 'Mas guardados Latinoamerica');
const latamLikes = toPngCards(imageMap.communityVogue.latam.likes, 'Mas likes Latinoamerica');
const latamViews = toPngCards(imageMap.communityVogue.latam.views, 'Mas vistos Latinoamerica');
const mexicoSaved = toPngCards(imageMap.communityVogue.mexico.saved, 'Mas guardados Mexico');
const mexicoLikes = toPngCards(imageMap.communityVogue.mexico.likes, 'Mas likes Mexico');
const mexicoViews = toPngCards(imageMap.communityVogue.mexico.views, 'Mas vistos Mexico');
const chileSaved = toPngCards(imageMap.communityVogue.chile.saved, 'Mas guardados Chile');
const chileLikes = toPngCards(imageMap.communityVogue.chile.likes, 'Mas likes Chile');
const chileViews = toPngCards(imageMap.communityVogue.chile.views, 'Mas vistos Chile');
const brasilSaved = toPngCards(imageMap.communityVogue.brasil.saved, 'Mas guardados Brasil');
const brasilLikes = toPngCards(imageMap.communityVogue.brasil.likes, 'Mas likes Brasil');
const brasilViews = toPngCards(imageMap.communityVogue.brasil.views, 'Mas vistos Brasil');

export const communityVogueRegions: CommunityPngRegion[] = [
  {
    title: 'Popular en tu pais',
    subtitle: 'Tambien te puede interesar',
    sets: {
      saved: [...mexicoSaved.slice(0, 2), ...latamSaved.slice(0, 1)],
      likes: latamLikes,
      views: latamViews,
    },
  },
  {
    title: 'Popular en Latinoamerica esta semana',
    sets: {
      saved: latamSaved,
      likes: latamLikes,
      views: latamViews,
    },
  },
  {
    title: 'Popular en Mexico esta semana',
    sets: {
      saved: mexicoSaved,
      likes: mexicoLikes,
      views: mexicoViews,
    },
  },
  {
    title: 'Popular en Chile esta semana',
    sets: {
      saved: chileSaved,
      likes: chileLikes,
      views: chileViews,
    },
  },
  {
    title: 'Popular en Brasil esta semana',
    sets: {
      saved: brasilSaved,
      likes: brasilLikes,
      views: brasilViews,
    },
  },
  {
    title: 'Popular en Colombia esta semana',
    sets: {
      saved: latamSaved.slice(0, 3),
      likes: latamLikes,
      views: latamViews,
    },
  },
];
