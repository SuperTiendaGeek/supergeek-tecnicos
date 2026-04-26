# Guía Visual Oficial - Sistema Técnico SUPER GEEK

## 1. Objetivo

Este documento define la identidad visual oficial del sistema técnico SUPER GEEK.
Su propósito es evitar improvisaciones visuales y asegurar que todas las pantallas,
componentes y futuras modificaciones mantengan una apariencia consistente, profesional y premium.

Toda modificación de UI debe respetar esta guía.

---

## 2. Principios visuales del sistema

### 2.1 Identidad general
El sistema debe transmitir:

- profesionalismo
- orden
- claridad
- enfoque técnico
- estética premium oscura
- coherencia visual entre módulos

### 2.2 Estilo base
El estilo visual del sistema es:

- oscuro
- elegante
- limpio
- técnico
- moderno
- con acentos verde lima
- con jerarquía clara
- con paneles y tarjetas bien definidos
- con sombras suaves y degradados sutiles

### 2.3 Qué NO se debe hacer
No se debe:

- improvisar nuevos colores fuera de la paleta oficial
- usar verdes distintos al verde lima oficial del proyecto
- crear componentes con estilos aislados que no sigan esta guía
- usar tarjetas internas innecesarias cuando una rejilla con divisores internos es suficiente
- usar iconos tipo emoji o de estilos inconsistentes
- mezclar tipografías sin criterio
- sobredimensionar botones, títulos o métricas respecto al resto del sistema

---

## 3. Paleta oficial de colores

### 3.1 Color principal de marca
**IMPORTANTE:** El verde principal del sistema NO es el verde de las imágenes de referencia.
Debe usarse SIEMPRE el verde lima oficial de SUPER GEEK.

#### Verde lima principal
- Hex sugerido actual: `#E3FC02`
- Uso:
  - botones primarios
  - bordes focus
  - indicadores de estado destacados
  - títulos o acentos importantes
  - iconos destacados
  - elementos activos del menú

#### Verde lima suave
- `rgba(227, 252, 2, 0.14)`
- Uso:
  - fondos suaves de énfasis
  - glow sutil
  - estados hover suaves
  - paneles destacados

---

### 3.2 Neutros oscuros
#### Fondo global
- `#111111`
- Uso:
  - fondo general de la app

#### Fondo de panel / contenedor principal
- `#181818`
- Uso:
  - contenedores grandes
  - zonas de contenido

#### Fondo de tarjeta
- `#1F1F1F`
- Uso:
  - cards
  - paneles laterales
  - bloques informativos

#### Fondo de tarjeta elevado
- `#252525`
- Uso:
  - overlays suaves
  - hover de tarjetas
  - elementos destacados sin salir del sistema

#### Borde sutil
- `rgba(255, 255, 255, 0.10)`
- Uso:
  - bordes generales
  - divisores
  - inputs
  - tablas
  - contenedores vacíos

#### Línea interna de rejilla
- `rgba(255, 255, 255, 0.14)`
- Uso:
  - divisores internos de métricas
  - separaciones entre columnas o filas
  - tablas compactas

---

### 3.3 Textos
#### Texto principal
- `#F5F5F5`

#### Texto secundario
- `#B8B8B8`

#### Texto tenue / auxiliar
- `#8F8F8F`

#### Texto sobre acento lima
- `#101010`

---

### 3.4 Colores semánticos
#### Éxito
- Color: `#56E3A4`
- Fondo suave: `rgba(86, 227, 164, 0.16)`
- Uso:
  - mensajes de éxito
  - acciones confirmadas
  - estados positivos

#### Advertencia / resalte medio
- Color: `#F0C75E`
- Fondo suave: `rgba(240, 199, 94, 0.16)`
- Uso:
  - saldo
  - métricas que requieren atención moderada
  - avisos no críticos

#### Peligro / urgente
- Color: `#FF5A4F`
- Fondo suave: `rgba(255, 90, 79, 0.16)`
- Uso:
  - alertas críticas
  - errores
  - urgencias
  - aging orders críticos
  - acciones destructivas

#### Información
- Color: `#78B7FF`
- Fondo suave: `rgba(120, 183, 255, 0.14)`
- Uso:
  - mensajes informativos
  - ayudas contextuales

---

## 4. Tipografía

### 4.1 Fuente base
Usar una sola familia tipográfica consistente en toda la app.

Preferencia:
- `Inter`
- fallback: `system-ui, sans-serif`

### 4.2 Estilo general
- Tipografía limpia
- Pesos medios y semibold
- Alto contraste
- Buena legibilidad sobre fondo oscuro

### 4.3 Escalas tipográficas recomendadas

#### Título principal de pantalla
- Tamaño: `40px`
- Peso: `800`
- Tracking: `-0.02em`
- Color: texto principal
- Uso: títulos de módulos principales

#### Título de tarjeta grande
- Tamaño: `18px` a `22px`
- Peso: `800`
- Transformación: mayúsculas opcional según el módulo
- Uso: encabezados de paneles importantes

#### Subtítulo / descripción de tarjeta
- Tamaño: `14px` a `16px`
- Peso: `400` o `500`
- Color: texto secundario

#### Label de campo
- Tamaño: `13px` a `15px`
- Peso: `600`

#### Texto normal
- Tamaño: `14px` a `16px`
- Peso: `400`

#### Métrica / valor principal
- Tamaño: `22px` a `28px`
- Peso: `800`

#### Texto auxiliar pequeño
- Tamaño: `12px` a `13px`
- Peso: `400`
- Color: texto tenue

---

## 5. Layout general

### 5.1 Sidebar
- Ancho aproximado: `230px - 260px`
- Fondo oscuro sólido o degradado muy sutil
- Logo arriba
- Menú vertical con icono + label
- Item activo con fondo lima suave y/o borde/acento claro
- Items inactivos sobrios, limpios y consistentes

### 5.2 Zona principal
- Padding exterior generoso
- Separación clara entre header y contenido
- Paneles organizados en grid
- Evitar saturación visual

### 5.3 Paneles laterales
- Deben verse como cards altas y limpias
- Muy útiles para:
  - quick actions
  - attachments
  - resumen financiero
  - activity side feed

---

## 6. Tarjetas / cards

### 6.1 Estilo general de tarjeta
Cada tarjeta debe tener:

- fondo oscuro premium
- borde sutil
- radio suave
- sombra ligera
- degradado muy leve
- padding generoso
- jerarquía interna clara

### 6.2 Reglas
- No abusar de tarjetas dentro de tarjetas
- Si una sección puede resolverse con divisores internos, hacerlo así
- Evitar cajas innecesarias

### 6.3 Radios
- Radio general: `18px - 22px`
- Elementos pequeños: `12px - 14px`

### 6.4 Sombras
- Sombras suaves, nunca exageradas
- Ejemplo:
  - `0 12px 30px rgba(0, 0, 0, 0.28)`

### 6.5 Fondo
- Permitido usar degradados muy sutiles dentro de tarjetas
- Nunca usar degradados chillones
- Debe sentirse sobrio y premium

---

## 7. Botones

### 7.1 Botón primario
Uso:
- acción principal del módulo
- guardar
- registrar
- crear
- confirmar

Estilo:
- fondo verde lima oficial
- texto oscuro
- peso semibold o bold
- borde sutil
- radio mediano
- hover ligeramente más brillante
- sombra suave opcional

### 7.2 Botón secundario
Uso:
- acciones alternativas
- abrir modal
- editar
- acciones no destructivas

Estilo:
- fondo oscuro
- borde sutil
- texto claro
- hover con borde/acento lima suave

### 7.3 Botón destructivo
Uso:
- eliminar
- borrar
- anular

Estilo:
- rojo
- o icono rojo sobre fondo oscuro
- debe verse claramente riesgoso

### 7.4 Tamaño
Los botones nunca deben verse sobredimensionados respecto al resto de la UI.
Deben verse compactos, alineados y proporcionados.

---

## 8. Inputs, selects y formularios

### 8.1 Inputs
- fondo oscuro
- borde sutil
- texto claro
- placeholder tenue
- focus con borde lima
- altura consistente

### 8.2 Selectores
- mismo lenguaje visual que inputs
- nada de estilos nativos desalineados
- mantener coherencia en iconos de flecha

### 8.3 Textareas
- mismo sistema visual
- padding generoso
- borde sutil
- foco lima

### 8.4 Formularios
- labels arriba
- spacing consistente
- grid limpio
- campos alineados

---

## 9. Tablas

### 9.1 Estilo
- header claramente diferenciado
- filas limpias
- divisores sutiles
- hover elegante
- acciones alineadas a la derecha cuando aplique

### 9.2 Reglas
- evitar exceso de bordes pesados
- mantener aire entre columnas
- usar badges para estados

---

## 10. Badges y estados

### 10.1 Badge de estado
- padding compacto
- bordes suaves
- texto legible
- colores semánticos claros

Estados sugeridos:
- En progreso: lima suave / verde
- Completado: verde éxito
- En espera: amarillo suave
- Crítico: rojo

---

## 11. Alertas y mensajes

### 11.1 Alertas de éxito
- fondo semitransparente verde/éxito
- borde sutil
- icono opcional
- texto claro y legible

### 11.2 Alertas de advertencia
- usar amarillo/dorado

### 11.3 Alertas de error
- usar rojo

---

## 12. Estado vacío

### 12.1 Estilo
- contenedor con borde sutil o punteado
- fondo muy tenue
- icono centrado
- texto principal y secundario bien jerarquizados
- no exagerar tamaño

### 12.2 Uso
Para listas vacías, abonos sin registros, attachments sin archivos, etc.

---

## 13. Reglas específicas para “Presupuesto y Abonos”

Esta tarjeta es una referencia importante del sistema.

### 13.1 Estructura
Debe contener:
- título
- subtítulo
- alerta opcional
- bloque de métricas
- sección de abonos registrados
- estado vacío o lista de abonos
- botón principal “Registrar abono”

### 13.2 Bloque de métricas
Las métricas NO deben representarse como tarjetas independientes cerradas.

Debe usarse:
- un único bloque visual
- con divisores internos tipo rejilla
- sin cajas internas separadas
- con dos filas

Distribución:
- fila 1: Repuestos | Servicios | Saldo
- fila 2: Total a pagar | Total abonado

### 13.3 Colores de métricas
- Repuestos: claro / neutro
- Servicios: claro / neutro
- Saldo: amarillo/dorado
- Total a pagar: verde lima oficial
- Total abonado: claro / neutro

### 13.4 Estado vacío
- elegante
- centrado
- con borde sutil
- con ícono limpio
- bien espaciado

### 13.5 Botón registrar abono
- centrado abajo
- color verde lima oficial
- tamaño mediano
- CTA principal claro
- sin verse gigante ni desproporcionado

---

## 14. Attachments / comprobantes

### 14.1 Miniaturas
- pequeñas
- limpias
- sin romper el layout
- pueden mostrar acciones al hover

### 14.2 Acciones
- ver
- descargar
- eliminar
- renombrar (si se implementa)

### 14.3 Modal / visor
Si se abre un archivo:
- debe abrirse dentro de la app si es posible
- overlay oscuro / desenfocado
- toolbar consistente
- evitar mandar al usuario fuera del flujo principal

---

## 15. Iconografía

- usar un set consistente de iconos
- idealmente outline o lineal
- tamaño uniforme
- evitar iconos tipo emoji
- usar iconos limpios y modernos

---

## 16. Espaciado

### 16.1 Escala recomendada
Usar una escala repetible:
- 4
- 8
- 12
- 16
- 20
- 24
- 32

### 16.2 Regla general
Si dos componentes equivalentes no tienen el mismo spacing,
debe corregirse para mantener consistencia.

---

## 17. Consistencia obligatoria

Toda nueva pantalla, tarjeta, modal, formulario, tabla o dashboard debe respetar:

- esta paleta
- esta jerarquía
- este estilo de sombras
- estos radios
- este tratamiento de botones
- este tratamiento de tarjetas
- esta lógica de estados

No se deben introducir estilos nuevos sin actualizar esta guía.

---

## 18. Prioridad de implementación

Si existe conflicto entre una implementación vieja y esta guía visual,
la implementación debe migrarse progresivamente hacia esta guía.

---

## 19. Regla para asistentes / Codex

Todo asistente o agente que modifique la UI debe:

1. Leer este documento antes de proponer cambios visuales.
2. Respetar la paleta oficial.
3. No inventar nuevos estilos.
4. No cambiar el verde lima oficial.
5. Mantener coherencia entre módulos.
6. Priorizar reutilización de componentes.
7. Seguir el estilo de las imágenes de referencia adoptadas por este sistema.