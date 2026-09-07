# Guzman Tax Accounting & Multi Services — Sitio Web

Sitio web bilingüe (Español / Inglés) para **Guzman Tax Accounting & Multi Services**, firma de contabilidad y preparación de impuestos en Las Vegas, NV, enfocada en atender a la comunidad latina.

🔗 **Producción:** [guzmantaxaccounting.com](https://www.guzmantaxaccounting.com)

## Descripción

Sitio de marketing estático construido con [Astro](https://astro.build), diseñado para posicionamiento SEO local con páginas dedicadas por servicio y por término de búsqueda (preparación de impuestos, bookkeeping, formación de LLC, cartas del IRS, créditos fiscales, etc.), disponible por completo en español e inglés.

## Características

- 🌐 **Bilingüe completo** — cada página en español tiene su equivalente en `/en/`, con detección automática del idioma del navegador y selector manual persistente (`localStorage`)
- 🔍 **SEO local avanzado** — datos estructurados Schema.org (`AccountingService` / `Organization`), etiquetas `hreflang` ES/EN, Open Graph, Twitter Cards y `robots.txt`
- 📄 **56 páginas** de contenido: landing pages por servicio, blog fiscal, planes de precios, testimonios y páginas legales (aviso legal, privacidad, términos)
- 🎨 **Animaciones on-scroll** (reveal de tarjetas + contadores animados) con `IntersectionObserver`, sin dependencias externas
- 📱 **Menú móvil a pantalla completa** construido en JavaScript vanilla, generado dinámicamente desde el menú de escritorio
- 🕒 **Indicador de horario de oficina en vivo**, calculado según zona horaria de Las Vegas
- 💬 **Portal de clientes** y formulario de contacto (ver *Pendientes*)
- 🖼️ Imágenes optimizadas en formato WebP

## Stack técnico

| Área | Tecnología |
|---|---|
| Framework | [Astro](https://astro.build) 4.15 (salida 100% estática) |
| Lenguaje | TypeScript (props de componentes) + JavaScript vanilla |
| Estilos | CSS puro (`global.css`), sin frameworks de UI |
| i18n | Objetos de traducción tipados (`src/i18n/es.ts`, `src/i18n/en.ts`) |
| Hosting | [Render](https://render.com) (Static Site) |

## Estructura del proyecto

```
├── public/
│   ├── assets/          # Imágenes (WebP/PNG) y fotos del equipo
│   └── robots.txt
├── src/
│   ├── components/      # Header, Footer, BlogSidebar
│   ├── layouts/         # Layout.astro (base) y HomeLayout.astro
│   ├── pages/           # ~28 páginas en español (raíz) + 28 en /en/
│   ├── scripts/         # Módulos JS de referencia (ver Pendientes)
│   ├── styles/          # global.css
│   └── i18n/            # Traducciones es.ts / en.ts
├── astro.config.mjs
└── package.json
```

## Requisitos

- Node.js 18+
- npm

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo → http://localhost:4321
npm run dev

# Build de producción → /dist
npm run build

# Previsualizar el build de producción
npm run preview
```

## Editar contenido

La mayor parte del texto del home vive en `src/i18n/es.ts` y `src/i18n/en.ts` como objetos tipados (`HomeTranslations`) — para cambiar precios, servicios, estadísticas o testimonios no hace falta tocar el markup. Las páginas internas (`servicios.astro`, `taxes.astro`, etc.) tienen su contenido escrito directamente en cada archivo `.astro`.

## Despliegue

Configurado para **Render** como Static Site:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

## Pendientes

- [ ] Conectar el formulario de contacto a un servicio real (Formspree / EmailJS). Actualmente simula el envío con un `setTimeout` — hay un `TODO` dejado en el propio código (`src/scripts/form.js`)
- [ ] Generar el `sitemap.xml` que ya se referencia en `robots.txt` (aún no existe en `public/`), por ejemplo con `@astrojs/sitemap`
- [ ] Consolidar `src/scripts/*.js`: son versiones tempranas (solo en español), ya superadas por los scripts inline en `Layout.astro` que sí soportan ambos idiomas. Conviene eliminarlos o volver a extraerlos como fuente única para evitar mantener dos versiones de la misma lógica

## Licencia

Proyecto privado — todos los derechos reservados a Guzman Tax Accounting & Multi Services.
