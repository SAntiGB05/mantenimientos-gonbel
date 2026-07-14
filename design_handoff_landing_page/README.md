
# Handoff: Landing Page — Mantenimientos Gonbel

## Overview
Landing page de una sola página para Mantenimientos Gonbel, empresa de mantenimiento, reparación e instalación de estufas y lavadoras en el departamento del Quindío (Colombia). Objetivo: presentar los servicios, generar confianza y convertir visitantes en contactos por WhatsApp (CTA principal en todo el sitio).

## About the Design Files
Los archivos de este paquete son **referencias de diseño creadas en HTML** — un prototipo de alta fidelidad que muestra el look final y el comportamiento esperado, no código de producción para copiar directamente. La tarea es **recrear este diseño en el entorno del proyecto de destino** (React, Vue, HTML/CSS estático, WordPress, etc.) usando las convenciones y librerías ya existentes en ese codebase — o, si no existe un entorno aún, elegir el framework más apropiado para el sitio (una landing simple de una sola página probablemente no necesita más que HTML/CSS/JS estático, o un framework ligero).

## Fidelity
**Alta fidelidad (hifi)**: colores, tipografía, espaciados e interacciones están definidos y listos para producción. Recrear pixel-perfect usando las herramientas del codebase de destino.

## Screens / Views
Es una sola página (`Mantenimientos Gonbel.dc.html`) con las siguientes secciones, en este orden:

### 1. Navbar (sticky)
- **Propósito**: navegación + CTA de WhatsApp siempre visible.
- **Layout**: `display:flex; justify-content:space-between; align-items:center`. Padding `22px 6vw` en estado normal.
- **Comportamiento de scroll**: al hacer scroll > 40px, la barra se transforma en una píldora flotante centrada: `max-width:1100px`, `margin:0 auto`, `padding:12px 26px`, `border-radius:100px`, con sombra `0 20px 40px -14px oklch(0.28 0.08 250 / 0.35)`, y se despega del top (`top:14px`). Transición `0.35s cubic-bezier(0.22,1,0.36,1)`.
- **Contenido**: logo (`assets/logo-light.png`, 30px alto) + wordmark "Mantenimientos **Gonbel**" (la palabra "Gonbel" en color acento). Links: Quiénes somos, Servicios, Cobertura, Contacto. Botón WhatsApp a la derecha (pill, fondo azul oscuro).
- **Responsive** (`≤1100px`): nav de links y CTA se ocultan, aparece un botón hamburguesa (3 líneas que se animan a X al abrir) que despliega un menú full-width debajo de la navbar con los mismos links + CTA de WhatsApp.

### 2. Hero
- **Layout**: `display:flex; gap:5vw`, columna izquierda (texto) 1fr, columna derecha (imagen) 1fr. `min-height:640px`. En `≤880px` se apila en columna invertida (imagen arriba, texto abajo).
- **Columna izquierda**: eyebrow ninguno; H1 (58px clamp, weight 800, color azul oscuro) "Tu estufa y tu lavadora, funcionando como nuevas."; párrafo descriptivo (18px); dos CTAs — botón sólido "Solicitar servicio" (WhatsApp) y link con subrayado "Ver servicios →"; fila de 3 stats (9 municipios / 100% a domicilio / Garantía).
- **Columna derecha**: contenedor `aspect-ratio:3/2, max-width:600px` con:
  - Foto de un técnico (`assets/hero-tecnico.png`) — **PNG con fondo transparente** (el fondo blanco original fue removido), `object-fit:contain; object-position:center bottom`.
  - 5 figuras geométricas decorativas posicionadas ABSOLUTAS detrás de la foto (z-index 0, la foto tiene z-index 1) para que se vean "recortadas" alrededor de la silueta: un cuadrado redondeado azul claro, un círculo grande azul oscuro translúcido, un cuadrado rotado 45° teal, un anillo (círculo solo borde), y un blob orgánico (border-radius asimétrico) — colores tomados de la paleta de acento.
  - Card flotante inferior "Diagnóstico confiable" con icono check, animación `float-card` (translateY loop, 3.2s).
- **Animación de entrada**: todo el hero hace fade-in + translateY al montar el componente (no usa IntersectionObserver, se dispara con un pequeño timeout tras el mount).

### 3. Quiénes somos (fondo azul oscuro, full-bleed, rotación automática cada 20s)
- **Layout**: sección con `border-radius:40px 40px 0 0` que se solapa con el hero (`margin-top:-48px`). Fondo azul oscuro con overlays de color que hacen fade in/out según el "stage" activo (0,1,2) + gradientes radiales decorativos fijos.
- **Contenido**: ilustración de electrodoméstico (lavadora o estufa, dibujados en CSS/divs, con animación de flotación y — para la lavadora — un tambor que gira) a la izquierda, y bloque de texto a la derecha (eyebrow + H2 + párrafo) que cambia entre 3 "stages":
  1. Quiénes somos
  2. Nuestra misión
  3. Nuestra propuesta de valor
- Al cambiar de stage la ilustración se desliza fuera/dentro (lavadora ⇄ estufa) y el texto hace fade-out/fade-in (280ms). En el stage "estufa" el orden de columnas se invierte (`order`).
- 3 dots de navegación centrados abajo (ancho 28px el activo, 8px los demás) para saltar manualmente a un stage; auto-avanza cada 20s (se resetea el timer al interactuar).
- **Responsive** (`≤860px`): columnas se apilan centradas.

### 4. Galería / Proceso (carrusel tipo "coverflow")
- **Propósito**: mostrar 9 fotos reales del proceso de un mantenimiento (paso a paso), no "trabajos" sino el proceso mismo.
- **Contenido**: eyebrow "Nuestro proceso" + H2 "Así se ve un mantenimiento, paso a paso." (texto editado por el cliente).
- **Carrusel**: 9 imágenes (`uploads/mantenimiento1.jpg` … `mantenimiento9.jpg`), la activa centrada a escala 1, las adyacentes escaladas y desplazadas horizontalmente (`translateX` ±190px por posición) con opacidad decreciente según distancia al centro (imágenes a 3+ posiciones de distancia quedan invisibles). Transición `0.6s cubic-bezier(0.22,1,0.36,1)`.
- Flechas prev/next circulares a los lados; dots debajo (igual patrón ancho/opacidad que el carrusel de "quiénes somos"). Auto-avanza cada 6s, se resetea con cualquier interacción manual.
- Cada imagen: 280×380px, `border-radius:22px`, sombra pronunciada.
- **Responsive** (`≤640px`): stage de carrusel baja a 340px de alto, flechas se reducen a 40×40px.

### 5. Servicios (fondo azul sólido `#004160`)
- **Layout**: eyebrow + H2 + párrafo arriba; debajo grid de 4 tarjetas `repeat(2, 1fr)` (1 columna en `≤760px`).
- **Tarjetas** (Mantenimiento preventivo, Reparación especializada, Diagnóstico técnico profesional, Instalación y puesta en marcha): fondo azul oscuro con borde, icono en cuadrado redondeado (color acento) arriba, título + descripción. Al hover: la tarjeta se invierte a fondo claro (color acento), escala 1.045, sombra pronunciada, y los textos/iconos invierten su color. Cada tarjeta es clicable y abre WhatsApp con un mensaje predefinido.

### 6. Cobertura (fondo beige claro)
- **Layout**: `display:flex; gap:6vw; flex-wrap:wrap`. Columna izquierda: eyebrow + H2 + párrafo + CTA "Consultar disponibilidad" (WhatsApp). Columna derecha: grid `repeat(3, 1fr)` (2 columnas en `≤640px`) con 9 chips de municipios (Armenia, Buenavista, Calarcá, Circasia, Filandia, La Tebaida, Montenegro, Quimbaya, Salento), cada chip con un punto de color y el nombre; el chip de "Quimbaya" (sede) está resaltado con fondo/borde de color acento y texto en negrita.

### 7. Contacto (fondo azul muy oscuro `#002A4F`)
- **Layout**: `display:flex; gap:6vw; flex-wrap:wrap`. En `≤820px` el formulario pasa a `order:1` y el texto a `order:2` (formulario primero).
- **Columna texto**: eyebrow + H2 + párrafo + 2 filas de datos de contacto (teléfono/WhatsApp, ubicación) con icono en cuadrado color acento.
- **Formulario** (tarjeta clara con sombra, `border-radius:24px`): campos Nombre (text), Teléfono (tel), Equipo (select: Lavadora/Estufa/Otro), Cuéntanos qué pasa (textarea 4 filas), botón "Enviar por WhatsApp" (pill, azul oscuro). Al enviar, construye un mensaje con los datos y abre `https://wa.me/573203444654?text=...` en una pestaña nueva — **no hay backend, es 100% client-side vía WhatsApp**.

### 8. Footer (fondo azul oscuro `oklch(0.24 0.07 250)`)
- **Layout**: fila superior con 3 columnas (`flex-wrap:wrap; justify-content:space-between`): marca (logo `assets/logo-color.png` + nombre + descripción corta), navegación (mismos 4 links), contacto (teléfono, ubicación, cobertura). Línea divisoria. Fila inferior: copyright + listado de los 9 municipios, `justify-content:space-between; flex-wrap:wrap`.

## Interactions & Behavior
- **Navbar**: se transforma en píldora flotante al hacer scroll > 40px (listener de `scroll` en `window`, throttle implícito vía comparación de estado).
- **Menú móvil**: toggle de hamburguesa anima sus 3 líneas a una X; el panel se muestra/oculta condicionalmente (no hay animación de altura, aparece/desaparece).
- **Hero**: fade-in + slide-up al montar (una sola vez, ~50ms de delay).
- **Quiénes somos**: rotación automática cada 20s entre 3 estados de contenido; navegación manual vía 3 dots; transición de contenido con fade 280ms; la ilustración de electrodoméstico se desliza ±280px y rota ligeramente al cambiar.
- **Galería**: rotación automática cada 6s; navegación manual vía flechas prev/next y dots; efecto coverflow (escala + traslación + opacidad según distancia al slide activo); cualquier interacción manual resetea el temporizador de autoplay.
- **Tarjetas de servicios**: hover invierte los colores (fondo claro/oscuro) y aplica un leve zoom; click abre WhatsApp con un mensaje predefinido (el mismo mensaje genérico para las 4 tarjetas en esta versión).
- **Formulario de contacto**: sin validación de campos obligatorios; al enviar compone un mensaje de texto con los valores no vacíos y abre WhatsApp Web/App en pestaña nueva. Los campos son controlados (estado de React/JS) pero no persisten ni se envían a ningún servidor.
- **Todos los CTAs de WhatsApp** apuntan al mismo número: `+57 320 344 4654` (`https://wa.me/573203444654`).

## State Management
Estado necesario (nivel de página/componente único, sin backend):
- `menuOpen: boolean` — visibilidad del menú móvil.
- `heroVisible: boolean` — dispara la animación de entrada del hero (se pone en `true` ~50ms tras montar).
- `navScrolled: boolean` — controla el estilo "píldora" de la navbar (`scrollY > 40`).
- `aboutStage: 0 | 1 | 2` — stage activo de la sección "Quiénes somos"; `aboutTextFading: boolean` — controla el fade intermedio al cambiar de stage.
- `galleryIndex: number (0–8)` — imagen activa del carrusel.
- Formulario: `contactName`, `contactPhone`, `contactAppliance` (default `'Lavadora'`), `contactMessage` — todos strings controlados.
- Dos `setInterval` en curso mientras la página está montada: uno para `aboutStage` (cada 20000ms) y otro para `galleryIndex` (cada 6000ms); ambos se resetean (clearInterval + nuevo setInterval) cuando el usuario interactúa manualmente con los dots/flechas correspondientes, y se limpian al desmontar.

## Design Tokens

### Colores (definidos en OKLCH; se listan con su uso)
- **Fondo general / crema**: `oklch(0.97 0.012 75)` — fondo de body, sección de hero y galería.
- **Fondo crema secundario (cobertura)**: `oklch(0.93 0.02 75)`.
- **Azul marca (texto/CTA principal)**: `oklch(0.28 0.08 250)` — títulos, botones sólidos, navbar.
- **Azul marca hover**: `oklch(0.36 0.09 248)`.
- **Azul oscuro títulos hero**: `oklch(0.24 0.07 250)` — también color del footer.
- **Acento celeste**: `oklch(0.75 0.09 230)` — figuras decorativas, iconos, dots activos, chip "Quimbaya".
- **Acento celeste 2 (eyebrows/links)**: `oklch(0.55 0.1 225)`.
- **Acento celeste claro (textos sobre fondo oscuro)**: `oklch(0.78 0.09 230)`.
- **Servicios — fondo**: `#004160`.
- **Contacto — fondo**: `#002A4F`.
- **Texto secundario sobre claro**: `oklch(0.4 0.03 250)` / `oklch(0.45 0.02 250)`.
- **Texto secundario sobre oscuro**: `oklch(0.85 0.02 240)` / `#C2D0DA`.
- **Blanco cálido (texto sobre oscuro / fondo tarjetas)**: `oklch(0.98 0.01 80)` / `#FDF8F1`.
- **Bordes claros**: `oklch(0.87–0.91 0.015–0.02 75)`.

### Tipografía
- **Encabezados**: `Manrope`, weight 800, `letter-spacing:-0.01em` a `-0.02em`. Tamaños con `clamp()`: H1 hero `clamp(34px,4.6vw,58px)`; H2 de sección `clamp(28px,3.2–3.4vw,40–42px)`.
- **Cuerpo / UI**: `Inter`, weights 400/500/600/700. Tamaño base párrafos 17–18px, line-height 1.6–1.65. Labels/eyebrows: 13px, weight 700, `letter-spacing:0.06–0.08em`, uppercase.
- Ambas vía Google Fonts: `Manrope:wght@400;500;600;700;800` y `Inter:wght@400;500;600`.

### Espaciado / radios
- Padding de sección estándar: `100–110px 6vw` (vertical/horizontal).
- Border-radius: pills/CTAs `100px`; tarjetas grandes `20–24px`; iconos/chips `12–14px`; imágenes de galería `22px`; sección "Quiénes somos" `40px 40px 0 0` (esquinas superiores, se solapa con el hero).
- Sombras: CTAs y tarjetas usan sombras suaves y difusas con el azul marca como color, ej. `0 20px 40px -14px oklch(0.28 0.08 250 / 0.35)`.

## Assets
- `assets/logo-light.png` — logo para navbar (fondo claro).
- `assets/logo-color.png` — logo para footer (fondo oscuro).
- `assets/hero-tecnico.png` — foto de un técnico en overol azul, **fondo removido (transparente)**; imagen proporcionada por el cliente y procesada para quitar el fondo blanco original.
- `uploads/mantenimiento1.jpg` … `mantenimiento9.jpg` — 9 fotos reales del proceso de un mantenimiento (desmontaje, limpieza, reparación de una lavadora/secadora), usadas en orden en el carrusel de la sección "Nuestro proceso". Fotos proporcionadas por el cliente.
- Iconos: no se usan sets de iconos externos; los pocos "iconos" (✓, ✆, ⚲) son caracteres Unicode, y las formas de servicios/geometría decorativa están hechas con `div`s y CSS puro (círculos, cuadrados rotados, bordes) — no hay SVGs que recrear.

## Files
- `Mantenimientos Gonbel.dc.html` — archivo único con todo el diseño (HTML + estilos inline + lógica de interacción). Es el prototipo completo de referencia; ábrelo en un navegador para ver el comportamiento real (scroll de navbar, rotación de "Quiénes somos", carrusel, formulario).
