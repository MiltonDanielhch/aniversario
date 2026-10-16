// Imágenes del sitio. Si el archivo no existe en `public/`, se muestra un placeholder
// con la descripción y la medida pedida. Al copiar el archivo con ese nombre, el
// placeholder desaparece en el siguiente `npm run dev` / `npm run build`.
// Lista completa y especificaciones: ASSETS.md

export interface Asset {
  src: string;
  alt: string;
  falta: string;
  medida: string;
}

export const ASSETS = {
  logo: {
    src: '/img/logo-gad-beni.svg',
    alt: 'Gobierno Autónomo Departamental del Beni',
    falta: 'Logo oficial del GAD Beni (escudo + "BENI" + 8 estrellas), fondo transparente',
    medida: 'SVG, o PNG de 600 × 240 px',
  },
  cacao: {
    src: '/img/cacao.webp',
    alt: 'Mazorcas de cacao amazónico del Beni',
    falta: 'Foto de mazorcas de cacao',
    medida: 'Cuadrada, mínimo 800 × 800 px',
  },
  castana: {
    src: '/img/castana.webp',
    alt: 'Manos sosteniendo castaña amazónica',
    falta: 'Foto de castaña (nuez amazónica) en manos',
    medida: 'Cuadrada, mínimo 800 × 800 px',
  },
  granos: {
    src: '/img/granos.webp',
    alt: 'Granos de soya recién cosechados',
    falta: 'Foto de cosecha de granos (soya)',
    medida: 'Cuadrada, mínimo 800 × 800 px',
  },
  machetero: {
    src: '/img/machetero.webp',
    alt: 'Machetero de Moxos con tocado de plumas',
    falta: 'Foto de un machetero de Moxos (con autorización de uso de imagen)',
    medida: 'Cuadrada, mínimo 800 × 800 px',
  },
} satisfies Record<string, Asset>;
