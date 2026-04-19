# Guzman Tax Accounting — Astro Project

Sitio web profesional migrado a Astro desde HTML estático.

## Estructura

```
src/
  components/
    Header.astro        ← Nav compartido (editar UNA vez afecta todo el sitio)
    Footer.astro        ← Footer compartido
    BlogSidebar.astro   ← Sidebar de blog posts
  layouts/
    Layout.astro        ← Layout base con <head>, scripts y meta tags
  pages/
    index.astro         ← Página de inicio ES
    servicios.astro
    taxes.astro
    blog.astro
    contacto.astro
    consulta-gratuita.astro
    nuestro-equipo.astro
    portal-de-clientes.astro
    [blog posts ES]...
    [legal pages ES]...
    en/
      index.astro       ← Página de inicio EN
      services.astro
      taxes.astro
      ...
  styles/
    global.css          ← Todo el CSS combinado
  scripts/
    lang.js             ← Detección/cambio de idioma
    menu.js             ← Hamburger + overlay
    nav.js              ← Link activo en navbar
    form.js             ← Formulario de contacto
    animations.js       ← Scroll reveal + contadores
public/
  assets/               ← IMPORTANTE: copiar aquí todas las imágenes del sitio original
  robots.txt
```

## ⚠️ IMPORTANTE: Copiar Assets

Antes del deploy, copiar la carpeta `/assets` del sitio original a `/public/assets/`.

## Deploy en Render (Static Site)

| Campo            | Valor           |
|------------------|-----------------|
| Build Command    | `npm run build` |
| Publish Directory| `dist`          |
| Node Version     | 18+             |

## Desarrollo Local

```bash
npm install
npm run dev
```

## Cambios Comunes

- **Cambiar el nav** → editar `src/components/Header.astro`
- **Cambiar el footer** → editar `src/components/Footer.astro`
- **Cambiar el lang switch** → en `Header.astro`, buscar `.lang-switch`
- **Añadir una página nueva** → crear `src/pages/nueva-pagina.astro`
- **Cambiar CSS** → editar `src/styles/global.css`
