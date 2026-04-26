<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Instrucciones visuales para Codex y agentes

Antes de modificar cualquier parte visual del proyecto, debes leer:

- `/docs/guia-visual-supergeek.md`

## Reglas obligatorias
- No improvisar estilos visuales.
- No crear nuevos colores fuera de la guía.
- Usar siempre el verde lima oficial del proyecto como color de acento principal.
- Mantener consistencia entre tarjetas, tablas, formularios, paneles laterales y botones.
- Reutilizar componentes y clases existentes cuando sea posible.
- Si una pantalla nueva requiere UI nueva, debe seguir la misma jerarquía visual, spacing, radios, sombras y paleta definidos en la guía.
- Antes de entregar cambios UI, validar que el resultado se vea coherente con el resto del sistema.

## Para cambios visuales
Cada vez que se haga un cambio de UI:
1. Revisar la guía visual
2. Revisar componentes existentes
3. Ajustar sin romper la lógica funcional
4. Evitar diseños improvisados o inconsistentes