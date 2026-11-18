# EcoCampus

Chatbot en español que orienta sobre la separación y reducción de residuos en el campus. Funciona directamente en el navegador; no necesita servidor, cuenta ni conexión a una API.

## Cómo probarlo

Abre `index.html` en un navegador moderno. También puedes iniciar un servidor local desde esta carpeta con `python -m http.server 8000` y visitar `http://localhost:8000`.

Prueba preguntas como:

- ¿Dónde tiro una botella de plástico?
- ¿Qué hago con restos de comida?
- ¿Dónde llevo pilas usadas?
- ¿Se recicla una caja de cartón?
- ¿Qué hago con un celular viejo?
- ¿Cómo puedo reducir residuos?

El bot responde usando coincidencia de palabras clave, no inteligencia artificial generativa. Las recomendaciones son generales: los puntos de acopio y las reglas de separación varían por localidad.

## Cuestionario y autoevaluación

Abre `cuestionario.html` desde el navegador o mediante el enlace **Cuestionario** de la página principal. Incluye 15 preguntas de selección múltiple con única respuesta sobre historia y tipos de chatbots, intenciones, entidades, flujos, NLP básico, diseño conversacional, integración, pruebas y retroalimentación. También permite valorar siete aspectos del trabajo y escribir una reflexión sobre el rol, los aportes, las dificultades y la gestión del tiempo.

Al completar el formulario, **Revisar respuestas** muestra el puntaje, la clave comentada y el promedio de autoevaluación. Se puede imprimir el resultado. No hay servidor: las respuestas no se envían ni se guardan en la aplicación. Completa las preguntas reflexivas con tu experiencia real; la escala es de autoevaluación, no una calificación objetiva.

## Ficha del proyecto

| Campo | Descripción |
|---|---|
| **Identificación** | **EcoCampus**, versión **1.0**. Estudiante: **Silvia Mora**. |
| **Problema y usuarios** | En el campus, estudiantes, docentes y personal pueden tener dudas al separar residuos. Una clasificación incorrecta dificulta el reciclaje; la solución ofrece orientación rápida desde una conversación sencilla. |
| **Objetivo y alcance** | Orientar sobre residuos comunes y opciones para reducirlos, reutilizarlos o llevarlos a puntos especiales. Incluye papel y cartón, plástico, latas, vidrio, restos orgánicos, pilas, electrónicos, envases, residuos especiales y textiles. No identifica físicamente objetos, no localiza contenedores, no sustituye las normas locales y no ofrece asesoría para emergencias o exposición a sustancias peligrosas. |
| **Funciones y criterios de aceptación** | Recibe preguntas de hasta 300 caracteres; reconoce palabras clave con o sin acentos; responde sobre los temas incluidos; presenta sugerencias rápidas; pide más detalles si no reconoce la consulta; permite reiniciar la conversación. Se considera funcional si una pregunta de cada tema produce su respuesta correspondiente, una consulta desconocida muestra la orientación alternativa y el reinicio restaura el saludo y las sugerencias. |
| **Conocimiento** | Base de respuestas predefinidas en `app.js`, redactada para este prototipo y basada en orientación general; no se importan documentos, preguntas frecuentes institucionales ni datos externos. **Fuente:** contenido de demostración elaborado para EcoCampus, aún sin validación por la institución o municipio. **Fecha de registro:** 18 de noviembre de 2026. Antes de presentarlo como guía oficial, completar y validar esta base con la normativa y los puntos de acopio de la localidad, indicando aquí el nombre y enlace de cada fuente y su fecha de consulta. |
| **Conversación** | Saludo amable; tono claro, breve y respetuoso; respuesta temática o pregunta de aclaración cuando falta información; seguimiento mediante nuevas preguntas; al agradecer o escribir “conclusión”, presenta el cierre del proyecto y agradece a la persona. |
| **Tecnología** | Chatbot web basado en reglas y coincidencia de palabras clave, con HTML, CSS y JavaScript nativos. Se ejecuta en el navegador; no usa modelos generativos, cuentas, bibliotecas, API ni servicios externos. |
| **Datos y publicación** | No solicita datos personales ni guarda la conversación: los mensajes permanecen en la página abierta y desaparecen al recargar o cerrar. Puede compartirse como sitio estático; el alojamiento dependerá de la plataforma elegida y podría ser gratuito o tener costo. No requiere servidor de aplicación. |
| **Aporte propio** | **Silvia Mora** definió el tema, el problema y el público objetivo; organizó el flujo de conversación, revisó las respuestas, probó el funcionamiento y preparó la presentación. Para la programación contó con apoyo de un asistente de programación y verificó el resultado. |

### Fuentes locales por completar

La información actual no está respaldada por una normativa de una ciudad o institución específica. Para convertirla en una guía confiable para tu campus, agrega fuentes oficiales (por ejemplo, la guía de separación de residuos de tu municipio y la página institucional de puntos de acopio), registra la fecha en que las consultaste y ajusta las respuestas en `app.js`. No presentes los ejemplos generales como instrucciones oficiales.

## Guion para la presentación

### 1. Presentación formal del equipo — máximo 10 minutos

Como el proyecto es individual, **Silvia Mora** presenta los distintos roles asumidos:

1. **Investigación y análisis:** Silvia Mora identificó el problema de las dudas al separar residuos y definió como público a estudiantes, docentes y personal del campus.
2. **Diseño y metodología:** Silvia Mora organizó el flujo del diálogo, eligió un tono claro y amable y definió respuestas para preguntas frecuentes y consultas no reconocidas.
3. **Programación y verificación:** Silvia Mora trabajó en la implementación con apoyo de un asistente de programación y probó preguntas reconocidas, errores y reinicio.
4. **Documentación y presentación:** Silvia Mora preparó la explicación del alcance, las limitaciones y las mejoras futuras.

**Texto breve para exponer:** “Mi nombre es Silvia Mora y asumí los roles de investigación, diseño conversacional, desarrollo con apoyo de un asistente de programación, pruebas y documentación de EcoCampus.”

### 2. Demostración funcional — máximo 5 minutos

1. **0:00–0:30:** mostrar la pantalla inicial y explicar el objetivo.
2. **0:30–1:30:** preguntar dónde va una botella de plástico y mostrar una sugerencia rápida.
3. **1:30–2:30:** preguntar qué hacer con restos de comida y pilas; comparar residuos orgánicos y especiales.
4. **2:30–3:30:** probar una pregunta fuera de los ejemplos para mostrar cómo pide más información cuando no reconoce el residuo.
5. **3:30–4:30:** mostrar el botón para reiniciar la conversación y probar el diseño en pantalla estrecha.
6. **4:30–5:00:** cerrar explicando el beneficio y el siguiente paso: adaptar respuestas a los contenedores y reglas reales de la institución.

### 3. Ronda de preguntas del panel — máximo 5 minutos

Preguntas posibles y respuestas breves:

- **¿Cómo decide qué contestar?** Busca términos relacionados con materiales y tipos de residuo en una lista de respuestas predefinidas.
- **¿El chatbot usa una IA o envía datos a un servicio externo?** No; esta versión es un prototipo local y no envía las preguntas a un servidor.
- **¿Qué pasa si no entiende?** Solicita el material o tipo de residuo y ofrece ejemplos que sí reconoce.
- **¿Las instrucciones sirven en cualquier ciudad?** Son orientación general. La separación y los puntos de acopio dependen de la localidad y deben verificarse.
- **¿Cómo podría mejorarse?** Incorporando las normas y ubicaciones verificadas del campus, más materiales y pruebas con estudiantes.
