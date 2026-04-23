# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a: Mayra Joselin Limachi Callisaya** 
**Fecha: 23/04/2026** 

---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
  "Cuando estaba trabajando en la parte de CSS y no recordaba bien cómo implementar el layout principal con grid-template-areas para header, main y footer."
-->
```

### Lo que le pedí a la IA

```
<!-- Me ayudas a definir un layout con grid-template-areas para header main y footer en css -->
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
  - Empezó a orientarme y darme unos punteos o pasos a seguir para que yo lo aplique.
  - Si porque me recordo que es lo que tenia que hacer y fue lo que me ayudo a completarlo.
  - Me resulto util que me dijo que tenia que poner un display y un grid-template-areas en body, y luego conectarlo con las clases header, main y footer. Me ayudo como punto de partida para recordar lo que tenia que hacer.
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.

  - Estaba incorrecto porque definir layout macro con grid-template-areas era una consigna.
  - La Ia me dio los pasos e implemente el display y el grid-template-areas, y luego en cada clase de header, main y footer agregue las propiedades grid-area para conectarlas.
-->
```

---

## Prompt 2

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."

  Cuando estaba corrigiendo los inputs y selects del formulario y no sabia como hacerlos accesibles ni como indicar el foco correctamente
-->
```

### Lo que le pedí a la IA

```
<!-- Me ayudas a hacer inputs accesibles con indicador de foco visible y le pase el codigo de input,selec{...}-->
```

### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
  - Esta vez se enfoco en decirme lo que faltaba agregar como focus y hover
  - Si fue lo que esperaba porque me recomendo que agregar
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
  -El error era que no habia focus y no habia cambios al interactuar
  -Cuando probe el codigo recomendado se noto la diferencia en la pagina al pasar por los select
  -Agregue el inpu:focus, select:focus, input:hover y select: hover para lograr el efecto al interactuar.
-->
```

---

## Reflexión final

```
<!--
  Mínimo 3 oraciones. Respondé:
  - ¿Qué tipo de errores repitió la IA que tuviste que corregir?
  - ¿Hubo algo que la IA resolvió bien a la primera sin que necesitaras tocarlo?
  - ¿Cambiarías la forma en que le pedís cosas a la IA la próxima vez? ¿Por qué?
  - Al pedir cosas muy especificas esta vez no vi algun error.
  - Si resolvio bien mas que nada lo de los inputs y selects.
  - Por el momento me ayudo correctamente mas que nada pido cosas que no recuerdo bien como iban, asi que no cambiaria la forma en la que pido, muchas veces pido ayuda para que me oriente al principio y no me de la respuesta exacta y copie y pegue sin saber que estaba mal.
-->
```
