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
