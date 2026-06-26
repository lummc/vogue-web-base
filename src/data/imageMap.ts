const imagePath = (folder: string, file: string) => `/images/${folder}/${file}`;

export const imageMap = {
  home: {
    hero: imagePath('Home', 'PORTADA HOME_.jpg'),
    actualidad: [
      imagePath('Home', 'ACTUALIDAD IMG 1.jpg'),
      imagePath('Home', 'ACTUALIDAD IMG 2.jpg'),
      imagePath('Home', 'ACTUALIDAD IMG 3.jpg'),
    ],
    vogueChoice: [
      imagePath('Home', 'VOGUE CHOICE 1.jpg'),
      imagePath('Home', 'VOGUE CHOICE 2.jpg'),
      imagePath('Home', 'VOGUE CHOICE 3.jpg'),
      imagePath('Home', 'VOGUE CHOICE 4.jpg'),
      imagePath('Home', 'VOGUE CHOICE 5.jpg'),
    ],
    joinUs: [
      imagePath('Home', 'SE PARTE DE NOSOTROS 1.jpg'),
      imagePath('Home', 'SE PARTE DE NOSOTROS 2.jpg'),
      imagePath('Home', 'SE PARTE DE NOSOTROS 3.jpg'),
    ],
    modaBelleza: [
      imagePath('Home', 'MODA Y BELLEZA 1.jpg'),
      imagePath('Home', 'MODA Y BELLEZA 2.jpg'),
      imagePath('Home', 'MODA Y BELLEZA 3.jpg'),
      imagePath('Home', 'MODA Y BELLEZA 4.jpg'),
    ],
    noTeLoPierdas: [
      imagePath('Home', 'NO TE LO PIERDAS 1.jpg'),
      imagePath('Home', 'NO TE LO PIERDAS 2.jpg'),
      imagePath('Home', 'NO TE LO PIERDAS 3.jpg'),
      imagePath('Home', 'NO TE LO PIERDAS 4.jpg'),
      imagePath('Home', 'NO TE LO PIERDAS 5.jpg'),
    ],
  },
  moda: {
    hero: imagePath('Moda', 'PORTADA MODA.jpg'),
    latinoamericana: [
      imagePath('Moda', 'MODA LATINOAMERICANA 1.jpg'),
      imagePath('Moda', 'MODA LATINOAMERICANA 2.jpg'),
      imagePath('Moda', 'MODA LATINOAMERICANA 3.jpg'),
    ],
    tendencias: [
      imagePath('Moda', 'TENDENCIAS 1.jpg'),
      imagePath('Moda', 'TENDENCIAS 2.jpg'),
      imagePath('Moda', 'TENDENCIAS 3.jpg'),
      imagePath('Moda', 'TENDENCIAS 4.jpg'),
      imagePath('Moda', 'TENDENCIAS 5.jpg'),
    ],
    eventos: [
      imagePath('Moda', 'MODA EN EVENTOS 1.jpg'),
      imagePath('Moda', 'MODA EN EVENTOS 2.jpg'),
      imagePath('Moda', 'MODA EN EVENTOS 3.jpg'),
      imagePath('Moda', 'MODA EN EVENTOS 4.jpg'),
    ],
    disenoLatino: [
      imagePath('Moda', 'DISEÑO LATINO 1.jpg'),
      imagePath('Moda', 'DISEÑO LATINO 2.jpg'),
      imagePath('Moda', 'DISEÑO LATINO 3.jpg'),
      imagePath('Moda', 'DISEÑO LATINO 4.jpg'),
      imagePath('Moda', 'DISEÑO LATINO 5.jpg'),
    ],
    famosos: [
      imagePath('Moda', 'QUEUSANLOS FAMOSOS_ 1.jpg'),
      imagePath('Moda', 'QUEUSANLOS FAMOSOS_2.jpg'),
      imagePath('Moda', 'QUEUSANLOS FAMOSOS_3.jpg'),
      imagePath('Moda', 'QUEUSANLOS FAMOSOS_4.jpg'),
    ],
    noticias: [
      imagePath('Moda', 'ULTIMAS NOTICIAS 1.jpg'),
      imagePath('Moda', 'ULTIMAS NOTICIAS 2.jpg'),
      imagePath('Moda', 'ULTIMAS NOTICIAS 3.jpg'),
      imagePath('Moda', 'ULTIMAS NOTICIAS 4.jpg'),
    ],
  },
  belleza: {
    hero: imagePath('Belleza', 'PORTADA-BELLEZA.png'),
    tendencias: [
      imagePath('Belleza', 'ÚLTIMAS-TENDENCIAS-1.jpg'),
      imagePath('Belleza', 'ÚLTIMAS-TENDENCIAS-2.jpg'),
      imagePath('Belleza', 'ÚLTIMAS-TENDENCIAS-3.jpg'),
    ],
    unas: [
      imagePath('Belleza', 'UÑAS-1.png'),
      imagePath('Belleza', 'UÑAS-2.png'),
      imagePath('Belleza', 'UÑAS-3.png'),
      imagePath('Belleza', 'UÑAS-4.jpg'),
    ],
    cabello: [
      imagePath('Belleza', 'CABELLO-1.jpg'),
      imagePath('Belleza', 'CABELLO-2.jpg'),
      imagePath('Belleza', 'CABELLO-3.jpg'),
      imagePath('Belleza', 'CABELLO-4.jpg'),
    ],
    bienestar: [
      imagePath('Belleza', 'BIENESTAR-1.jpg'),
      imagePath('Belleza', 'BIENESTAR-2.jpg'),
      imagePath('Belleza', 'BIENESTAR-3.jpg'),
      imagePath('Belleza', 'BIENESTAR-4.jpg'),
    ],
    perfumes: [
      imagePath('Belleza', 'PERFUMES-1.jpg'),
      imagePath('Belleza', 'PERFUMES-2.jpg'),
      imagePath('Belleza', 'PERFUMES-3.jpg'),
      imagePath('Belleza', 'PERFUMES-4.jpg'),
      imagePath('Belleza', 'PERFUMES-5.jpg'),
    ],
    destacado: [
      imagePath('Belleza', 'LO-MÁS-DESTACADO-1.jpg'),
      imagePath('Belleza', 'LO-MÁS-DESTACADO-2.jpg'),
      imagePath('Belleza', 'LO-MÁS-DESTACADO-3.jpg'),
      imagePath('Belleza', 'LO-MÁS-DESTACADO-4.jpg'),
    ],
  },
  estiloDeVida: {
    hero: imagePath('Estilo de vida', 'PORTADAESTILODEVIDA.jpg'),
    musica: [
      imagePath('Estilo de vida', 'MUSICA-1.jpg'),
      imagePath('Estilo de vida', 'MUSICA-2.jpg'),
      imagePath('Estilo de vida', 'MUSICA-3.jpg'),
    ],
    gastronomia: [
      imagePath('Estilo de vida', 'GASTRONOMIA-1.jpg'),
      imagePath('Estilo de vida', 'GASTRONOMIA-2.jpg'),
      imagePath('Estilo de vida', 'GASTRONOMIA-3.jpg'),
      imagePath('Estilo de vida', 'GASTRONOMIA-4.jpg'),
    ],
    arte: [
      imagePath('Estilo de vida', 'ARTE-Y-CULTURA-1.jpg'),
      imagePath('Estilo de vida', 'ARTE-Y-CULTURA-2.jpg'),
      imagePath('Estilo de vida', 'ARTE-Y-CULTURA-3.jpg'),
      imagePath('Estilo de vida', 'ARTE-Y-CULTURA-4.jpg'),
      imagePath('Estilo de vida', 'ARTE-Y-CULTURA-5.jpg'),
    ],
    queHacer: [
      imagePath('Estilo de vida', 'QUE-HACER-EN LATINOAMÉRICA-1.jpg'),
      imagePath('Estilo de vida', 'QUE-HACER-EN LATINOAMÉRICA-2.jpg'),
      imagePath('Estilo de vida', 'QUE-HACER-EN LATINOAMÉRICA-3.jpg'),
      imagePath('Estilo de vida', 'QUE-HACER-EN LATINOAMÉRICA-4.jpg'),
    ],
    horoscopo: [
      imagePath('Estilo de vida', 'HOROSCOPO-1.jpg'),
      imagePath('Estilo de vida', 'HOROSCOPO-2.jpg'),
      imagePath('Estilo de vida', 'HOROSCOPO-3.jpg'),
      imagePath('Estilo de vida', 'HOROSCOPO-4.jpg'),
    ],
  },
  hollywood: {
    hero: imagePath('Hollywood', 'PORTADA-HOLLYWOOD.jpg'),
    aniversario: [
      imagePath('Hollywood', 'EDICION-ANIVERSARIO-1.jpg'),
      imagePath('Hollywood', 'EDICION-ANIVERSARIO-2.jpg'),
    ],
    estrenos: [
      imagePath('Hollywood', 'ESTRENOS-1.jpg'),
      imagePath('Hollywood', 'ESTRENOS-2.jpg'),
      imagePath('Hollywood', 'ESTRENOS-3.jpg'),
    ],
    recomendaciones: [
      imagePath('Hollywood', 'RECOMENDACIONES-1.jpg'),
      imagePath('Hollywood', 'RECOMENDACIONES-2.jpg'),
      imagePath('Hollywood', 'RECOMENDACIONES-3.jpg'),
      imagePath('Hollywood', 'RECOMENDACIONES-4.jpg'),
      imagePath('Hollywood', 'RECOMENDACIONES-5.jpg'),
    ],
    voces: [
      imagePath('Hollywood', 'VOCES-LATINAS-1.jpg'),
      imagePath('Hollywood', 'VOCES-LATINAS-2.jpg'),
      imagePath('Hollywood', 'VOCES-LATINAS-3.jpg'),
      imagePath('Hollywood', 'VOCES-LATINAS-4.jpg'),
      imagePath('Hollywood', 'VOCES-LATINAS-5.jpg'),
    ],
    looks: [
      imagePath('Hollywood', 'LOOKS-DESTACADOS-1.jpg'),
      imagePath('Hollywood', 'LOOKS-DESTACADOS-2.jpg'),
      imagePath('Hollywood', 'LOOKS-DESTACADOS-3.jpg'),
      imagePath('Hollywood', 'LOOKS-DESTACADOS-4.jpg'),
    ],
  },
  convocatorias: {
    hero: imagePath('Convocatorias', 'PORTADA-CONVOCATORIAS.jpg'),
    photovogue: [
      imagePath('Convocatorias', 'PHOTOVOGUE-1.jpg'),
      imagePath('Convocatorias', 'PHOTOVOGUE-2.jpg'),
      imagePath('Convocatorias', 'PHOTOVOGUE-3.jpg'),
      imagePath('Convocatorias', 'PHOTOVOGUE-4.jpg'),
    ],
    talento: [
      imagePath('Convocatorias', 'TALENTO-1.jpg'),
      imagePath('Convocatorias', 'TALENTO-2.jpg'),
      imagePath('Convocatorias', 'TALENTO-3.jpg'),
      imagePath('Convocatorias', 'TALENTO-4.jpg'),
    ],
  },
  vogueMedia: {
    hero: imagePath('Vogue Media', 'PORTADA VOGUE MEDIA_.jpg'),
    talentoLatino: [
      imagePath('Vogue Media', 'TALENTO LATINO 1.jpg'),
      imagePath('Vogue Media', 'TALENTO LATINO 2.jpg'),
      imagePath('Vogue Media', 'TALENTO LATINO 3.jpg'),
    ],
    preguntas: [
      imagePath('Vogue Media', '73 PREGUNTAS 1.jpg'),
      imagePath('Vogue Media', '73 PREGUNTAS 2.jpg'),
      imagePath('Vogue Media', '73 PREGUNTAS 3.jpg'),
      imagePath('Vogue Media', '73 PREGUNTAS 4.jpg'),
    ],
    bolso: [
      imagePath('Vogue Media', 'EL BOLSO DE 1.jpg'),
      imagePath('Vogue Media', 'EL BOLSO DE 2.jpg'),
      imagePath('Vogue Media', 'EL BOLSO DE 3.jpg'),
      imagePath('Vogue Media', 'EL BOLSO DE 4.jpg'),
    ],
    secretos: [
      imagePath('Vogue Media', 'SECRETOS DE BELLEZA 1.jpg'),
      imagePath('Vogue Media', 'SECRETOS DE BELLEZA 2.jpg'),
      imagePath('Vogue Media', 'SECRETOS DE BELLEZA 3.jpg'),
      imagePath('Vogue Media', 'SECRETOS DE BELLEZA 4.jpg'),
    ],
  },
  articles: {
    camila: {
      hero: imagePath('Articulo Camila', 'PORTADA-CAMILA.jpg'),
      body: [
        imagePath('Articulo Camila', 'FOTO-1.jpg'),
        imagePath('Articulo Camila', 'FOTO-2.jpg'),
        imagePath('Articulo Camila', 'FOTO-3.jpg'),
      ],
    },
    guadalajara: {
      hero: imagePath('Articulo Guadalajara', 'PORTADA-GUADALAJARA.jpg'),
      body: [
        imagePath('Articulo Guadalajara', 'IMG-2.jpg'),
        imagePath('Articulo Guadalajara', 'IMG-3.jpg'),
        imagePath('Articulo Guadalajara', 'IMG-4.jpg'),
        imagePath('Articulo Guadalajara', 'IMG-5.jpg'),
        imagePath('Articulo Guadalajara', 'IMG-6.jpg'),
      ],
      carousel: [
        imagePath('Articulo Guadalajara', 'CARRUSEL-1.png'),
        imagePath('Articulo Guadalajara', 'CARRUSEL-2.png'),
        imagePath('Articulo Guadalajara', 'CARRUSEL-3.png'),
        imagePath('Articulo Guadalajara', 'CARRUSEL-4.png'),
      ],
    },
    bafweek: {
      hero: imagePath('Artículo Bafweek', 'PORTADA-BAFWEEK.jpg'),
      body: [
        imagePath('Artículo Bafweek', '1.jpg'),
        imagePath('Artículo Bafweek', '2.jpg'),
        imagePath('Artículo Bafweek', '3.jpg'),
        imagePath('Artículo Bafweek', '4.jpg'),
      ],
      carousel: [
        imagePath('Artículo Bafweek', 'CARRUSEL-B-1.jpg'),
        imagePath('Artículo Bafweek', 'CARRUSEL-B-2.jpg'),
        imagePath('Artículo Bafweek', 'CARRUSEL-B-3.png'),
        imagePath('Artículo Bafweek', 'CARRUSEL-B-5.png'),
        imagePath('Artículo Bafweek', 'CARRUSEL-B-6.jpg'),
      ],
    },
  },
};
