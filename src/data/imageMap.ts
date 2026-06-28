export const assetPath = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.replace(/^\/+/, '');
  return `${cleanBase}${cleanPath}`;
};

export const imageMap = {
  home: {
    hero: assetPath('images/Home/PORTADA HOME_.jpg'),
    reels: [
      assetPath('images/Reels/REEL 1.mp4'),
      assetPath('images/Reels/REEL 2.mp4'),
      assetPath('images/Reels/REEL 3.mp4'),
      assetPath('images/Reels/REEL 4.mp4'),
    ],
    actualidad: [
      assetPath('images/Home/ACTUALIDAD IMG 1.jpg'),
      assetPath('images/Home/ACTUALIDAD IMG 2.jpg'),
      assetPath('images/Home/ACTUALIDAD IMG 3.jpg'),
    ],
    vogueChoice: [
      assetPath('images/Home/VOGUE CHOICE 1.jpg'),
      assetPath('images/Home/VOGUE CHOICE 2.jpg'),
      assetPath('images/Home/VOGUE CHOICE 3.jpg'),
      assetPath('images/Home/VOGUE CHOICE 4.jpg'),
      assetPath('images/Home/VOGUE CHOICE 5.jpg'),
    ],
    joinUs: [
      assetPath('images/Home/SE PARTE DE NOSOTROS 1.jpg'),
      assetPath('images/Home/SE PARTE DE NOSOTROS 2.jpg'),
      assetPath('images/Home/SE PARTE DE NOSOTROS 3.jpg'),
    ],
    modaBelleza: [
      assetPath('images/Home/MODA Y BELLEZA 1.jpg'),
      assetPath('images/Home/MODA Y BELLEZA 2.jpg'),
      assetPath('images/Home/MODA Y BELLEZA 3.jpg'),
      assetPath('images/Home/MODA Y BELLEZA 4.jpg'),
    ],
    noTeLoPierdas: [
      assetPath('images/Home/NO TE LO PIERDAS 1.jpg'),
      assetPath('images/Home/NO TE LO PIERDAS 2.jpg'),
      assetPath('images/Home/NO TE LO PIERDAS 3.jpg'),
      assetPath('images/Home/NO TE LO PIERDAS 4.jpg'),
      assetPath('images/Home/NO TE LO PIERDAS 5.jpg'),
    ],
  },
  moda: {
    hero: assetPath('images/Moda/PORTADA MODA.jpg'),
    latinoamericana: [
      assetPath('images/Moda/MODA LATINOAMERICANA 1.jpg'),
      assetPath('images/Moda/MODA LATINOAMERICANA 2.jpg'),
      assetPath('images/Moda/MODA LATINOAMERICANA 3.jpg'),
    ],
    tendencias: [
      assetPath('images/Moda/TENDENCIAS 1.jpg'),
      assetPath('images/Moda/TENDENCIAS 2.jpg'),
      assetPath('images/Moda/TENDENCIAS 3.jpg'),
      assetPath('images/Moda/TENDENCIAS 4.jpg'),
      assetPath('images/Moda/TENDENCIAS 5.jpg'),
    ],
    eventos: [
      assetPath('images/Moda/MODA EN EVENTOS 1.jpg'),
      assetPath('images/Moda/MODA EN EVENTOS 2.jpg'),
      assetPath('images/Moda/MODA EN EVENTOS 3.jpg'),
      assetPath('images/Moda/MODA EN EVENTOS 4.jpg'),
    ],
    disenoLatino: [
      assetPath('images/Moda/DISEÑO LATINO 1.jpg'),
      assetPath('images/Moda/DISEÑO LATINO 2.jpg'),
      assetPath('images/Moda/DISEÑO LATINO 3.jpg'),
      assetPath('images/Moda/DISEÑO LATINO 4.jpg'),
      assetPath('images/Moda/DISEÑO LATINO 5.jpg'),
    ],
    famosos: [
      assetPath('images/Moda/QUEUSANLOS FAMOSOS_ 1.jpg'),
      assetPath('images/Moda/QUEUSANLOS FAMOSOS_2.jpg'),
      assetPath('images/Moda/QUEUSANLOS FAMOSOS_3.jpg'),
      assetPath('images/Moda/QUEUSANLOS FAMOSOS_4.jpg'),
    ],
    noticias: [
      assetPath('images/Moda/ULTIMAS NOTICIAS 1.jpg'),
      assetPath('images/Moda/ULTIMAS NOTICIAS 2.jpg'),
      assetPath('images/Moda/ULTIMAS NOTICIAS 3.jpg'),
      assetPath('images/Moda/ULTIMAS NOTICIAS 4.jpg'),
    ],
  },
  belleza: {
    hero: assetPath('images/Belleza/PORTADA-BELLEZA.png'),
    tendencias: [
      assetPath('images/Belleza/ÚLTIMAS-TENDENCIAS-1.jpg'),
      assetPath('images/Belleza/ÚLTIMAS-TENDENCIAS-2.jpg'),
      assetPath('images/Belleza/ÚLTIMAS-TENDENCIAS-3.jpg'),
    ],
    unas: [
      assetPath('images/Belleza/UÑAS-1.png'),
      assetPath('images/Belleza/UÑAS-2.png'),
      assetPath('images/Belleza/UÑAS-3.png'),
      assetPath('images/Belleza/UÑAS-4.jpg'),
    ],
    cabello: [
      assetPath('images/Belleza/CABELLO-1.jpg'),
      assetPath('images/Belleza/CABELLO-2.jpg'),
      assetPath('images/Belleza/CABELLO-3.jpg'),
      assetPath('images/Belleza/CABELLO-4.jpg'),
    ],
    bienestar: [
      assetPath('images/Belleza/BIENESTAR-1.jpg'),
      assetPath('images/Belleza/BIENESTAR-2.jpg'),
      assetPath('images/Belleza/BIENESTAR-3.jpg'),
      assetPath('images/Belleza/BIENESTAR-4.jpg'),
    ],
    perfumes: [
      assetPath('images/Belleza/PERFUMES-1.jpg'),
      assetPath('images/Belleza/PERFUMES-2.jpg'),
      assetPath('images/Belleza/PERFUMES-3.jpg'),
      assetPath('images/Belleza/PERFUMES-4.jpg'),
      assetPath('images/Belleza/PERFUMES-5.jpg'),
    ],
    destacado: [
      assetPath('images/Belleza/LO-MÁS-DESTACADO-1.jpg'),
      assetPath('images/Belleza/LO-MÁS-DESTACADO-2.jpg'),
      assetPath('images/Belleza/LO-MÁS-DESTACADO-3.jpg'),
      assetPath('images/Belleza/LO-MÁS-DESTACADO-4.jpg'),
    ],
  },
  estiloDeVida: {
    hero: assetPath('images/Estilo de vida/PORTADAESTILODEVIDA.jpg'),
    musica: [
      assetPath('images/Estilo de vida/MUSICA-1.jpg'),
      assetPath('images/Estilo de vida/MUSICA-2.jpg'),
      assetPath('images/Estilo de vida/MUSICA-3.jpg'),
    ],
    gastronomia: [
      assetPath('images/Estilo de vida/GASTRONOMIA-1.jpg'),
      assetPath('images/Estilo de vida/GASTRONOMIA-2.jpg'),
      assetPath('images/Estilo de vida/GASTRONOMIA-3.jpg'),
      assetPath('images/Estilo de vida/GASTRONOMIA-4.jpg'),
    ],
    arte: [
      assetPath('images/Estilo de vida/ARTE-Y-CULTURA-1.jpg'),
      assetPath('images/Estilo de vida/ARTE-Y-CULTURA-2.jpg'),
      assetPath('images/Estilo de vida/ARTE-Y-CULTURA-3.jpg'),
      assetPath('images/Estilo de vida/ARTE-Y-CULTURA-4.jpg'),
      assetPath('images/Estilo de vida/ARTE-Y-CULTURA-5.jpg'),
    ],
    queHacer: [
      assetPath('images/Estilo de vida/QUE-HACER-EN LATINOAMÉRICA-1.jpg'),
      assetPath('images/Estilo de vida/QUE-HACER-EN LATINOAMÉRICA-2.jpg'),
      assetPath('images/Estilo de vida/QUE-HACER-EN LATINOAMÉRICA-3.jpg'),
      assetPath('images/Estilo de vida/QUE-HACER-EN LATINOAMÉRICA-4.jpg'),
    ],
    horoscopo: [
      assetPath('images/Estilo de vida/HOROSCOPO-1.jpg'),
      assetPath('images/Estilo de vida/HOROSCOPO-2.jpg'),
      assetPath('images/Estilo de vida/HOROSCOPO-3.jpg'),
      assetPath('images/Estilo de vida/HOROSCOPO-4.jpg'),
    ],
  },
  hollywood: {
    hero: assetPath('images/Hollywood/PORTADA-HOLLYWOOD.jpg'),
    aniversario: [
      assetPath('images/Hollywood/EDICION-ANIVERSARIO-1.jpg'),
      assetPath('images/Hollywood/EDICION-ANIVERSARIO-2.jpg'),
    ],
    estrenos: [
      assetPath('images/Hollywood/ESTRENOS-1.jpg'),
      assetPath('images/Hollywood/ESTRENOS-2.jpg'),
      assetPath('images/Hollywood/ESTRENOS-3.jpg'),
    ],
    recomendaciones: [
      assetPath('images/Hollywood/RECOMENDACIONES-1.jpg'),
      assetPath('images/Hollywood/RECOMENDACIONES-2.jpg'),
      assetPath('images/Hollywood/RECOMENDACIONES-3.jpg'),
      assetPath('images/Hollywood/RECOMENDACIONES-4.jpg'),
      assetPath('images/Hollywood/RECOMENDACIONES-5.jpg'),
    ],
    voces: [
      assetPath('images/Hollywood/VOCES-LATINAS-1.jpg'),
      assetPath('images/Hollywood/VOCES-LATINAS-2.jpg'),
      assetPath('images/Hollywood/VOCES-LATINAS-3.jpg'),
      assetPath('images/Hollywood/VOCES-LATINAS-4.jpg'),
      assetPath('images/Hollywood/VOCES-LATINAS-5.jpg'),
    ],
    looks: [
      assetPath('images/Hollywood/LOOKS-DESTACADOS-1.jpg'),
      assetPath('images/Hollywood/LOOKS-DESTACADOS-2.jpg'),
      assetPath('images/Hollywood/LOOKS-DESTACADOS-3.jpg'),
      assetPath('images/Hollywood/LOOKS-DESTACADOS-4.jpg'),
    ],
  },
  convocatorias: {
    hero: assetPath('images/Convocatorias/PORTADA-CONVOCATORIAS.jpg'),
    photovogue: [
      assetPath('images/Convocatorias/PHOTOVOGUE-1.jpg'),
      assetPath('images/Convocatorias/PHOTOVOGUE-2.jpg'),
      assetPath('images/Convocatorias/PHOTOVOGUE-3.jpg'),
      assetPath('images/Convocatorias/PHOTOVOGUE-4.jpg'),
    ],
    talento: [
      assetPath('images/Convocatorias/TALENTO-1.jpg'),
      assetPath('images/Convocatorias/TALENTO-2.jpg'),
      assetPath('images/Convocatorias/TALENTO-3.jpg'),
      assetPath('images/Convocatorias/TALENTO-4.jpg'),
    ],
  },
  vogueMedia: {
    hero: assetPath('images/Vogue Media/PORTADA VOGUE MEDIA_.jpg'),
    metGala: [
      assetPath('images/Vogue Media/CamilaCabello.webp'),
      assetPath('images/Vogue Media/AnneHathaway.webp'),
      assetPath('images/Vogue Media/CamilaMorrone.jpg'),
      assetPath('images/Vogue Media/AnyaTaylorJoy.webp'),
    ],
    talentoLatino: [
      assetPath('images/Vogue Media/TALENTO LATINO 1.jpg'),
      assetPath('images/Vogue Media/TALENTO LATINO 2.jpg'),
      assetPath('images/Vogue Media/TALENTO LATINO 3.jpg'),
    ],
    preguntas: [
      assetPath('images/Vogue Media/73 PREGUNTAS 1.jpg'),
      assetPath('images/Vogue Media/73 PREGUNTAS 2.jpg'),
      assetPath('images/Vogue Media/73 PREGUNTAS 3.jpg'),
      assetPath('images/Vogue Media/73 PREGUNTAS 4.jpg'),
    ],
    bolso: [
      assetPath('images/Vogue Media/EL BOLSO DE 1.jpg'),
      assetPath('images/Vogue Media/EL BOLSO DE 2.jpg'),
      assetPath('images/Vogue Media/EL BOLSO DE 3.jpg'),
      assetPath('images/Vogue Media/EL BOLSO DE 4.jpg'),
    ],
    secretos: [
      assetPath('images/Vogue Media/SECRETOS DE BELLEZA 1.jpg'),
      assetPath('images/Vogue Media/SECRETOS DE BELLEZA 2.jpg'),
      assetPath('images/Vogue Media/SECRETOS DE BELLEZA 3.jpg'),
      assetPath('images/Vogue Media/SECRETOS DE BELLEZA 4.jpg'),
    ],
  },
  articles: {
    camila: {
      hero: assetPath('images/Articulo Camila/PORTADA-CAMILA.jpg'),
      body: [
        assetPath('images/Articulo Camila/FOTO-1.jpg'),
        assetPath('images/Articulo Camila/FOTO-2.jpg'),
        assetPath('images/Articulo Camila/FOTO-3.jpg'),
      ],
    },
    guadalajara: {
      hero: assetPath('images/Articulo Guadalajara/PORTADA-GUADALAJARA.jpg'),
      body: [
        assetPath('images/Articulo Guadalajara/IMG-2.jpg'),
        assetPath('images/Articulo Guadalajara/IMG-3.jpg'),
        assetPath('images/Articulo Guadalajara/IMG-4.jpg'),
        assetPath('images/Articulo Guadalajara/IMG-5.jpg'),
        assetPath('images/Articulo Guadalajara/IMG-6.jpg'),
      ],
      carousel: [
        assetPath('images/Articulo Guadalajara/CARRUSEL-1.png'),
        assetPath('images/Articulo Guadalajara/CARRUSEL-2.png'),
        assetPath('images/Articulo Guadalajara/CARRUSEL-3.png'),
        assetPath('images/Articulo Guadalajara/CARRUSEL-4.png'),
      ],
    },
    bafweek: {
      hero: assetPath('images/Artículo Bafweek/PORTADA-BAFWEEK.jpg'),
      body: [
        assetPath('images/Artículo Bafweek/1.jpg'),
        assetPath('images/Artículo Bafweek/2.jpg'),
        assetPath('images/Artículo Bafweek/3.jpg'),
        assetPath('images/Artículo Bafweek/4.jpg'),
      ],
      carousel: [
        assetPath('images/Artículo Bafweek/CARRUSEL-B-1.jpg'),
        assetPath('images/Artículo Bafweek/CARRUSEL-B-2.jpg'),
        assetPath('images/Artículo Bafweek/CARRUSEL-B-3.png'),
        assetPath('images/Artículo Bafweek/CARRUSEL-B-5.png'),
        assetPath('images/Artículo Bafweek/CARRUSEL-B-6.jpg'),
      ],
    },
  },
  icons: {
    google: assetPath('images/Iconos/Google.svg'),
    apple: assetPath('images/Iconos/Apple.svg'),
    facebook: assetPath('images/Iconos/Facebook.svg'),
    instagram: assetPath('images/Iconos/Instagram.svg'),
    x: assetPath('images/Iconos/X.svg'),
    youtube: assetPath('images/Iconos/Youtube.svg'),
    pinterest: assetPath('images/Iconos/Pinterest.svg'),
    tiktok: assetPath('images/Iconos/TikTok.svg'),
  },
};

