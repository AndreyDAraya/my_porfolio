# Optimizaciones SEO Implementadas

## 1. Meta Tags Principales

Los meta tags son etiquetas HTML que proporcionan información sobre tu sitio web a los navegadores y motores de búsqueda.

```html
<meta name="description" content="..." />
```

- **¿Qué hace?** Proporciona una descripción de tu sitio que aparece en los resultados de búsqueda.
- **¿Por qué es importante?** Ayuda a mejorar el CTR (Click Through Rate) en los resultados de búsqueda.

```html
<meta name="keywords" content="..." />
```

- **¿Qué hace?** Lista palabras clave relevantes para tu sitio.
- **¿Por qué es importante?** Aunque no tiene tanto peso como antes en SEO, ayuda a definir el contexto del sitio.

## 2. Open Graph Meta Tags

Los Open Graph meta tags mejoran cómo se ve tu sitio cuando se comparte en redes sociales como Facebook y LinkedIn.

```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
```

- **¿Qué hace?** Define cómo se mostrará tu sitio cuando alguien lo comparta en redes sociales.
- **¿Por qué es importante?** Mejora la presentación visual y la información en las redes sociales.

## 3. Twitter Card Meta Tags

```html
<meta property="twitter:card" content="summary_large_image" />
```

- **¿Qué hace?** Similar a Open Graph, pero específico para Twitter.
- **Nota:** Aunque no uses Twitter, estos meta tags son útiles porque:
  1. Algunos sitios y aplicaciones usan estos meta tags para mostrar previsualizaciones
  2. Ayuda en la indexación general del sitio
  3. Mejora la compatibilidad con diferentes plataformas que puedan usar estos meta tags

## 4. Sitemap (sitemap.xml)

El sitemap es un archivo XML que lista todas las páginas de tu sitio web.

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://andrey-d-araya.dev/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

- **¿Qué hace?**

  - `loc`: URL de la página
  - `lastmod`: Última fecha de modificación
  - `changefreq`: Frecuencia de actualización
  - `priority`: Importancia relativa de la página (1.0 es la más alta)

- **¿Por qué es importante?**
  1. Ayuda a los motores de búsqueda a encontrar y rastrear todas tus páginas
  2. Mejora la indexación de tu sitio
  3. Informa a Google sobre la estructura de tu sitio

## 5. Robots.txt

```txt
User-agent: *
Allow: /
Sitemap: https://andrey-d-araya.dev/sitemap.xml
```

- **¿Qué hace?**

  - `User-agent: *`: Se aplica a todos los robots de búsqueda
  - `Allow: /`: Permite rastrear todo el sitio
  - `Sitemap`: Indica la ubicación de tu sitemap

- **¿Por qué es importante?**
  1. Guía a los bots de búsqueda sobre qué pueden y no pueden rastrear
  2. Ayuda a optimizar el rastreo de tu sitio

## 6. JSON-LD (Datos Estructurados)

```json
{
  "@type": "Person",
  "name": "Andrey Araya",
  "jobTitle": "Software Engineer",
  ...
}
```

- **¿Qué hace?** Proporciona información estructurada sobre ti y tu trabajo en un formato que los motores de búsqueda pueden entender fácilmente.
- **¿Por qué es importante?**
  1. Mejora la comprensión de tu contenido por parte de los motores de búsqueda
  2. Puede resultar en rich snippets en los resultados de búsqueda
  3. Aumenta la visibilidad en búsquedas relevantes

## Recomendación Pendiente

Para completar la optimización, se recomienda crear una imagen Open Graph:

- Dimensiones: 1200x630px
- Formato: JPG o PNG
- Contenido sugerido: Tu nombre, título profesional y elementos visuales de tu marca
- Ubicación: /public/og-image.jpg

Esta imagen se usará cuando tu sitio se comparta en redes sociales, mejorando significativamente su presentación visual.
