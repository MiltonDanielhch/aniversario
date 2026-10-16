# Beni 184 Aniversario

Sitio estático en [Astro](https://astro.build) por los 184 años de creación del departamento del Beni (18 de noviembre de 1842 – 2026).

- Cuenta regresiva hasta las 00:00 del 18 de noviembre, hora de Bolivia (UTC−4).
- El 18 de noviembre, de 00:00 a 23:59, se muestran fuegos artificiales con un botón **Apagar fuegos / Animar fuegos**. La elección queda guardada en el navegador del visitante. Con "reducir movimiento" activado en el sistema, empiezan apagados.
- Cronograma oficial en texto, con filtro por día y estado de cada acto (Próximo, En curso, Finalizado).
- Descarga del cronograma en PDF.
- Responsive, y sigue el tema claro u oscuro del sistema.

## Uso

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```

Requiere Node 22 o superior.

## Probar el día 18 antes de tiempo

Agregar `?simular=` con una fecha y hora de Bolivia:

- `/?simular=2026-11-17T23:59:50`: la cuenta llega a cero y arrancan los fuegos.
- `/?simular=2026-11-18T09:40:00`: día central, con el desfile en curso.
- `/?simular=2026-11-19T08:00:00`: después de la fiesta, mensaje de agradecimiento y sin fuegos.

## Dónde cambiar cosas

| Qué | Archivo |
|---|---|
| Actos del cronograma, fechas, provincias | `src/data/cronograma.ts` |
| Imágenes y sus textos alternativos | `src/data/assets.ts` (ver `ASSETS.md`) |
| Colores y tipografías | `src/styles/global.css` (variables en `:root`) |
| Cuenta regresiva y estados | `src/scripts/celebracion.ts` |
| Fuegos artificiales | `src/scripts/fuegos.ts` |
| Dominio para Open Graph | `astro.config.mjs` → `site` |

## Despliegue

Es un sitio 100 % estático: subir la carpeta `dist/` a cualquier hosting (Netlify, Vercel, Cloudflare Pages, Coolify con Nginx, o un hosting compartido).

## Pendiente de confirmar con el GAD Beni

- El Foro Económico Empresarial figura el lunes 16 y el martes 17 a las 08:00. ¿Son dos jornadas?
- Los actos de las 19:00 y 22:00 de la segunda lámina no tienen fecha; se asumieron el martes 17.
- Se corrigieron tildes y erratas de las láminas ("Mamoré", "1.ª Sesión", una comilla suelta).
