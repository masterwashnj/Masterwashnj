# Mantenimiento — Master Wash NJ

**Este repo es la ÚNICA fuente oficial del sitio.** Todo cambio se hace aquí.

## Flujo de actualización (siempre igual)

```
editar archivos → npm run build (verificar) → git commit → git push
```

El push a `main` dispara **auto-deploy en Netlify** (cuenta del cliente, sitio
`masterwashnj1.netlify.app` → dominio `masterwashnj.com`). No hay que tocar
Netlify para publicar — solo push.

```bash
cd ~/Desktop/masterwash-nj-web
# ...editar...
npm run build          # verificar que compila antes de subir
git add -A
git commit -m "Descripción del cambio"
git push
```

## Infraestructura

| Pieza | Dónde | Dueño / acceso |
|---|---|---|
| Código | github.com/masterwashnj/Masterwashnj | Cliente (dueño) · `luisda7` colaborador |
| Hosting | Netlify del cliente (auto-deploy desde GitHub) | Cliente (no requiere acceso para publicar) |
| Dominio + DNS | Cloudflare del cliente (`masterwashnj.com`) | Cliente (dueño) · luisda7.lz11@gmail.com miembro |
| Formulario | Netlify Forms (`contacto-masterwash`) | Se ve en el panel Netlify del cliente → Forms |

DNS configurado: `A @ → 75.2.60.5` y `CNAME www → masterwashnj1.netlify.app`
(ambos **DNS only** / nube gris — NO activar proxy naranja o el SSL de Netlify falla).

## Dónde editar qué

| Cambio | Archivo |
|---|---|
| Precios, servicios, add-ons, FAQ, galería | `src/lib/data.ts` |
| Teléfono, email, Instagram, URL, zonas | `src/lib/site.ts` |
| Textos de interfaz (EN/ES) | `src/lib/i18n.ts` |
| Fotos y videos | `public/img/` (optimizar: JPG ≤1400px q82, MP4 ≤1MB) |
| SEO global / headers de seguridad | `src/app/layout.tsx` / `next.config.ts` |

## Datos pendientes de activar (cuando existan)

- **Stats reales** (autos detallados, años): `src/lib/data.ts` → `TRUST_STATS`
  → poner números reales y `isReal: true` (hoy oculto por honestidad).
- **Reseñas reales de Google**: `REVIEWS` → `isReal: true` + link oficial del
  Google Business Profile en `src/lib/site.ts` → `googleReviews`.
- **Horario**: `src/lib/site.ts` → `hours`.

## Reglas

1. **Nunca publicar datos inventados** (precios/reseñas/stats) — solo datos reales del cliente.
2. **Verificar `npm run build` antes de cada push** (si falla local, falla el deploy).
3. Fotos/videos: siempre material real del cliente, optimizado.
4. No subir secretos/API keys al repo (es del cliente y puede ser público).
