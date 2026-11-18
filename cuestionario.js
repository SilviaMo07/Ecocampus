const questions = [
  {
    topic: "Historia y tipos",
    prompt: "¿Qué sistema conversacional creado por Joseph Weizenbaum en el MIT en la década de 1960 es considerado uno de los primeros chatbots?",
    options: ["ELIZA", "Siri", "EcoCampus", "ChatGPT"],
    answer: 0,
    explanation: "ELIZA fue creado por Joseph Weizenbaum en el MIT entre 1964 y 1966."
  },
  {
    topic: "Historia y tipos",
    prompt: "¿Qué describe mejor la diferencia entre un chatbot basado en reglas y uno generativo?",
    options: [
      "El basado en reglas selecciona respuestas definidas; el generativo produce texto usando un modelo.",
      "El basado en reglas siempre necesita internet; el generativo nunca lo necesita.",
      "Son iguales: ambos solo muestran botones.",
      "El generativo no puede mantener una conversación."
    ],
    answer: 0,
    explanation: "EcoCampus usa reglas y respuestas predefinidas; no genera texto con un modelo de IA."
  },
  {
    topic: "Historia y tipos",
    prompt: "¿Qué tipo de chatbot es EcoCampus en su versión actual?",
    options: [
      "Un agente autónomo conectado a una base de datos en la nube.",
      "Un chatbot basado en reglas y coincidencia de palabras clave.",
      "Un chatbot de voz que usa reconocimiento de audio.",
      "Un modelo generativo entrenado con datos del municipio."
    ],
    answer: 1,
    explanation: "Las respuestas se eligen comparando el texto con palabras clave en JavaScript."
  },
  {
    topic: "Intenciones y entidades",
    prompt: "En “¿Dónde llevo pilas usadas?”, ¿cuál es la intención más probable?",
    options: [
      "Pedir orientación para desechar pilas.",
      "Consultar el horario de clases.",
      "Solicitar que el bot compre pilas.",
      "Reiniciar la conversación."
    ],
    answer: 0,
    explanation: "La intención es la necesidad comunicativa: saber dónde depositar pilas usadas."
  },
  {
    topic: "Intenciones y entidades",
    prompt: "En esa misma pregunta, ¿cuál es una entidad que EcoCampus puede reconocer?",
    options: ["Dónde", "Usadas", "Pilas", "Pregunta"],
    answer: 2,
    explanation: "“Pilas” nombra el residuo sobre el que se pregunta; es una entidad simple identificada por palabra clave."
  },
  {
    topic: "Flujos conversacionales",
    prompt: "¿Cuál es un flujo adecuado cuando el bot no reconoce el residuo?",
    options: [
      "Finalizar la página sin explicación.",
      "Inventar una instrucción específica.",
      "Pedir más detalles, sugerir ejemplos reconocidos y permitir continuar.",
      "Borrar el mensaje y reiniciar automáticamente."
    ],
    answer: 2,
    explanation: "La respuesta alternativa de EcoCampus reconoce la incertidumbre, pide detalles y da ejemplos."
  },
  {
    topic: "NLP y herramientas",
    prompt: "¿Para qué normaliza el texto EcoCampus antes de buscar palabras clave?",
    options: [
      "Para convertir la pregunta en una imagen.",
      "Para facilitar coincidencias al ignorar mayúsculas, tildes y algunos signos.",
      "Para traducir automáticamente todo a inglés.",
      "Para guardar la pregunta en una base de datos."
    ],
    answer: 1,
    explanation: "La función normaliza mayúsculas, acentos, puntuación y espacios para comparar términos."
  },
  {
    topic: "NLP y herramientas",
    prompt: "¿Cuál es una limitación del reconocimiento por palabras clave usado en EcoCampus?",
    options: [
      "Puede no entender sinónimos o frases cuyo término no esté previsto.",
      "No puede mostrar letras en español.",
      "Necesita una cámara para responder.",
      "Guarda obligatoriamente todos los mensajes."
    ],
    answer: 0,
    explanation: "Las coincidencias simples no comprenden el contexto como un modelo avanzado y dependen de términos previstos."
  },
  {
    topic: "NLP y herramientas",
    prompt: "¿Qué tecnología se encarga principalmente de buscar coincidencias y mostrar la respuesta?",
    options: ["HTML", "CSS", "JavaScript", "Una hoja de cálculo"],
    answer: 2,
    explanation: "JavaScript implementa la normalización, la selección de respuestas y la interacción del chat."
  },
  {
    topic: "Diseño conversacional",
    prompt: "¿Qué principio de diseño aplica el mensaje alternativo cuando el bot no está seguro?",
    options: [
      "Ocultar siempre las limitaciones.",
      "Ser claro sobre la incertidumbre y ayudar a la persona a continuar.",
      "Rechazar toda pregunta que no coincida exactamente.",
      "Cambiar de tema sin avisar."
    ],
    answer: 1,
    explanation: "Una buena respuesta alternativa evita aparentar certeza y ofrece un siguiente paso útil."
  },
  {
    topic: "Integración a plataformas",
    prompt: "¿Cómo se abre EcoCampus en su implementación actual?",
    options: [
      "Como sitio web estático en un navegador; también puede alojarse en un servicio de páginas estáticas.",
      "Solo desde una aplicación móvil instalada desde una tienda.",
      "Mediante un bot de WhatsApp ya conectado.",
      "Requiere una base de datos de pago para iniciar."
    ],
    answer: 0,
    explanation: "La aplicación usa HTML, CSS y JavaScript en el navegador; todavía no está conectada a mensajería."
  },
  {
    topic: "Integración a plataformas",
    prompt: "¿Qué afirmación sobre servicios externos y privacidad es correcta para esta versión?",
    options: [
      "Envía cada mensaje a una API de IA.",
      "Guarda el historial en una cuenta del usuario.",
      "No usa una API ni un backend; la conversación vive en la página abierta.",
      "Publica las preguntas en redes sociales."
    ],
    answer: 2,
    explanation: "El prototipo no hace solicitudes a servicios de chatbot ni persiste el historial."
  },
  {
    topic: "Pruebas y retroalimentación",
    prompt: "¿Qué conjunto de pruebas comprueba mejor funciones importantes del chatbot?",
    options: [
      "Solo abrir la página y comprobar el color.",
      "Probar preguntas conocidas de varios temas, una desconocida y el reinicio.",
      "Enviar la misma pregunta una sola vez.",
      "Probar únicamente en el editor de código."
    ],
    answer: 1,
    explanation: "Estas pruebas comprueban respuestas temáticas, manejo de consultas no reconocidas y reinicio."
  },
  {
    topic: "Pruebas y retroalimentación",
    prompt: "Después de recibir comentarios de estudiantes, ¿qué paso mejora el proyecto de forma responsable?",
    options: [
      "Cambiar todas las respuestas sin verificar fuentes.",
      "Ignorar los comentarios que no coincidan con la idea inicial.",
      "Agrupar las dudas recurrentes, verificar información local y volver a probar los cambios.",
      "Presentar las recomendaciones generales como normativa oficial."
    ],
    answer: 2,
    explanation: "La retroalimentación ayuda a priorizar mejoras, pero la información sobre residuos debe verificarse con fuentes locales."
  },
  {
    topic: "Pruebas y retroalimentación",
    prompt: "¿Qué cambio atendería mejor una limitación detectada por usuarios que escriben sin usar las palabras previstas?",
    options: [
      "Ampliar sinónimos y expresiones, validar las respuestas y volver a probar con usuarios.",
      "Eliminar el mensaje de ayuda.",
      "Aumentar el tamaño del logotipo.",
      "Impedir que las personas escriban preguntas."
    ],
    answer: 0,
    explanation: "Ampliar el vocabulario reconocido aborda la limitación; las pruebas verifican que la mejora funcione."
  }
];

const ratingCriteria = [
  ["participation", "Participación y cumplimiento de responsabilidades"],
  ["role", "Claridad y cumplimiento del rol desempeñado"],
  ["technical", "Aportes técnicos al chatbot y sus pruebas"],
  ["conflict", "Resolución de dificultades o desacuerdos"],
  ["time", "Gestión del tiempo y entrega de productos"],
  ["communication", "Comunicación con otras personas"],
  ["leadership", "Iniciativa y liderazgo durante el proyecto"]
];

const questionsContainer = document.querySelector("#questions");
const ratingsContainer = document.querySelector("#ratings");
const form = document.querySelector("#assessment-form");
const results = document.querySelector("#results");
const reviewContainer = document.querySelector("#answer-review");

function renderQuestions() {
  questions.forEach((question, index) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "question-card";

    const legend = document.createElement("legend");
    const number = document.createElement("span");
    number.className = "question-number";
    number.textContent = `${index + 1}.`;
    legend.append(number, document.createTextNode(` ${question.prompt}`));

    const options = document.createElement("div");
    options.className = "option-list";

    question.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "option-label";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `q${index + 1}`;
      radio.value = String(optionIndex);
      radio.required = true;
      const text = document.createElement("span");
      text.textContent = option;
      label.append(radio, text);
      options.append(label);
    });

    fieldset.append(legend, options);
    questionsContainer.append(fieldset);
  });
}

function renderRatings() {
  ratingCriteria.forEach(([name, labelText]) => {
    const row = document.createElement("div");
    row.className = "rating-row";

    const label = document.createElement("span");
    label.className = "rating-label";
    label.textContent = labelText;

    const options = document.createElement("div");
    options.className = "rating-options";
    options.setAttribute("role", "radiogroup");
    options.setAttribute("aria-label", labelText);

    for (let value = 1; value <= 5; value += 1) {
      const choice = document.createElement("label");
      choice.className = "rating-choice";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `rating-${name}`;
      radio.value = String(value);
      radio.required = true;
      const visibleValue = document.createElement("span");
      visibleValue.textContent = String(value);
      choice.append(radio, visibleValue);
      options.append(choice);
    }

    row.append(label, options);
    ratingsContainer.append(row);
  });
}

function getSelectedValue(name) {
  return Number(form.querySelector(`input[name="${name}"]:checked`).value);
}

function showResults() {
  let correctCount = 0;
  reviewContainer.replaceChildren();

  questions.forEach((question, index) => {
    const selected = getSelectedValue(`q${index + 1}`);
    const isCorrect = selected === question.answer;
    if (isCorrect) correctCount += 1;

    const item = document.createElement("div");
    item.className = "review-item";
    const heading = document.createElement("p");
    heading.className = isCorrect ? "review-correct" : "review-incorrect";
    heading.textContent = `${index + 1}. ${isCorrect ? "Correcta" : "Revisa esta respuesta"} · ${question.topic}`;

    const chosen = document.createElement("p");
    chosen.textContent = `Tu respuesta: ${question.options[selected]}`;

    const answer = document.createElement("p");
    answer.textContent = `Respuesta correcta: ${question.options[question.answer]}. ${question.explanation}`;

    item.append(heading, chosen, answer);
    reviewContainer.append(item);
  });

  const ratingsTotal = ratingCriteria.reduce(
    (total, [name]) => total + getSelectedValue(`rating-${name}`),
    0
  );
  const ratingsAverage = (ratingsTotal / ratingCriteria.length).toFixed(1);
  const studentName = document.querySelector("#student-name").value.trim();
  const resultTitle = document.querySelector("#result-title");
  resultTitle.textContent = `${studentName ? `${studentName}: ` : ""}${correctCount} de ${questions.length} respuestas correctas`;

  const summary = document.querySelector("#result-summary");
  summary.textContent = `Autoevaluación promedio: ${ratingsAverage} de 5 en ${ratingCriteria.length} aspectos. Esta escala es reflexiva y no representa una calificación objetiva.`;

  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

renderQuestions();
renderRatings();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  showResults();
});

form.addEventListener("reset", () => {
  results.hidden = true;
  reviewContainer.replaceChildren();
});

document.querySelector("#print-results").addEventListener("click", () => {
  window.print();
});
