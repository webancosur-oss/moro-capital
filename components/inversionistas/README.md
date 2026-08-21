# CSS separado por componente — Moro Capital

Este paquete fue separado desde tu CSS original, que contenía desktop, laptop, tablet y mobile en un único archivo.

## Uso

Copia todos los `.css` a:

`components/inversionistas/`

No necesitas agregar un import en cada TSX. Mantén solamente este import en `app/inversionistas/page.tsx`:

```tsx
import "@/components/inversionistas/investors.css";
```

`investors.css` ahora es únicamente un agregador con `@import`.

- `investors-base.css`: variables, reset, container, tipografía, botones y reglas globales compartidas.
- `NombreComponente.css`: CSS desktop + media queries exclusivas de ese componente.
- `investors-shared-responsive.css`: únicamente reglas responsive que en el CSS original estaban combinadas para varios componentes. Está separado para evitar duplicar exactamente la misma regla en 4 o 5 archivos y se importa al final para mantener el cascade correcto.
- `Reveal.css`: no contiene reglas porque `Reveal.tsx` se anima con Framer Motion y el CSS original no tenía estilos propios para ese componente.

Puedes eliminar el contenido anterior de `investors.css` y reemplazarlo por el agregador incluido.
