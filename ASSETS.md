# Imágenes pendientes

El sitio funciona sin estas imágenes: donde falta una, se muestra un **placeholder rayado
naranja** con la descripción, la medida y la ruta donde va el archivo. Al copiar el archivo
con el nombre exacto, el placeholder desaparece en el siguiente `npm run dev` o `npm run build`.
Las rutas y textos alternativos se definen en `src/data/assets.ts`.

| Archivo | Qué es | Medida | Dónde se ve |
|---|---|---|---|
| `public/img/logo-gad-beni.svg` | Logo oficial del GAD Beni (escudo + "BENI" + 8 estrellas), fondo transparente. Pedirlo a Comunicación del GAD. | SVG, o PNG 600 × 240 px | Cabecera |
| `public/img/cacao.webp` | Foto de mazorcas de cacao | Cuadrada, mín. 800 × 800 px | Portada, círculo 1 |
| `public/img/castana.webp` | Foto de castaña (nuez amazónica) en manos | Cuadrada, mín. 800 × 800 px | Portada, círculo 2 |
| `public/img/granos.webp` | Foto de cosecha de granos (soya) | Cuadrada, mín. 800 × 800 px | Portada, círculo 3 |
| `public/img/machetero.webp` | Foto de un machetero de Moxos, con autorización de uso de imagen | Cuadrada, mín. 800 × 800 px | Portada, círculo 4 |
| `public/img/og-beni-184.jpg` | Imagen para compartir en WhatsApp/Facebook (logo + "Beni 184" + fecha) | 1200 × 630 px, JPG < 300 KB | Vista previa al compartir el enlace (no se ve en la página) |

Las fotos de las láminas oficiales son de baja resolución y vienen recortadas en semicírculo,
por eso no se reutilizaron. Si el GAD entrega los originales, sirven tal cual.

## Ya incluidos

- `public/cronograma-beni-184.pdf`: las dos láminas oficiales en un PDF de 2 páginas, en orden cronológico.
- `public/img/cronograma-p1.webp` y `cronograma-p2.webp`: miniaturas de esas láminas.
- `public/favicon.svg`: estrella dorada sobre verde.

Si cambia el PDF, reemplazar el archivo con el mismo nombre; el peso que muestra el botón se calcula al compilar.
