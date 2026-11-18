const conversation = document.querySelector("#conversation");
const form = document.querySelector("#chat-form");
const input = document.querySelector("#message-input");
const resetButton = document.querySelector("#reset-chat");

const initialMessage =
  "¡Hola! Soy EcoCampus. Te ayudo a separar tus residuos y a encontrar opciones más sostenibles. ¿Qué quieres desechar?";

const responses = [
  {
    matches: ["hola", "buenas", "buenos dias", "buenas tardes", "buenas noches"],
    reply: "¡Hola! 🌱 Cuéntame qué residuo tienes o pregúntame por reciclaje, reutilización o compostaje."
  },
  {
    matches: ["plastico", "pet", "envase de plastico"],
    reply: "🧴 Las botellas de plástico suelen ir al contenedor de reciclables. Vacíala y, si es posible, aplástala; revisa si tu campus pide separar la tapa. Si tiene restos de químicos, no la mezcles con envases comunes."
  },
  {
    matches: ["lata", "aluminio", "metal", "refresco"],
    reply: "🥫 Las latas limpias y vacías suelen aceptarse con los metales reciclables. Enjuágala si tiene restos y consulta la señalización de los contenedores de tu campus."
  },
  {
    matches: ["papel", "carton", "cuaderno", "caja"],
    reply: "📄 El papel y cartón limpios y secos normalmente se reciclan juntos. Retira restos de comida y partes muy sucias o con grasa; esas suelen ir a residuos no reciclables."
  },
  {
    matches: ["comida", "organico", "restos", "cascara", "cascaras", "compostar", "compost"],
    reply: "🍌 Los restos de frutas y verduras pueden ir al contenedor orgánico o de compostaje, si tu campus cuenta con uno. Servilletas muy sucias también podrían aceptarse, pero depende de las reglas locales."
  },
  {
    matches: ["pila", "bateria", "baterias"],
    reply: "🔋 No tires pilas ni baterías a la basura común: pueden contener materiales peligrosos. Guárdalas sin mezclar y llévalas al punto de recolección de pilas o residuos electrónicos."
  },
  {
    matches: ["electronico", "celular", "telefono", "computadora", "cable", "cargador", "audifonos", "teclado", "mouse"],
    reply: "💻 Los aparatos y accesorios electrónicos no van al reciclaje común. Busca una campaña o punto de acopio de residuos electrónicos; si aún funciona, considera repararlo o donarlo."
  },
  {
    matches: ["vidrio", "frasco", "botella de vidrio"],
    reply: "🍾 El vidrio limpio suele separarse para reciclaje, pero algunos sistemas no aceptan espejos, focos, cerámica ni vidrio roto en el mismo contenedor. Consulta la señalización local y manipula los fragmentos con cuidado."
  },
  {
    matches: ["tetra", "leche", "jugo", "carton de leche"],
    reply: "🧃 Los envases de bebidas tipo cartón pueden tener un contenedor específico o aceptarse con reciclables, según la localidad. Vacíalo y revisa la guía del campus antes de depositarlo."
  },
  {
    matches: ["aceite", "pintura", "quimico", "medicamento", "peligroso"],
    reply: "⚠️ No viertas aceite, pintura, medicamentos ni productos químicos por el desagüe o en la basura común. Mantén el producto en su envase, no lo mezcles y pregunta por el punto municipal o institucional de residuos especiales."
  },
  {
    matches: ["ropa", "zapato", "textil"],
    reply: "👕 Si la ropa todavía sirve, una donación o intercambio alarga su vida. Si está dañada, busca un punto de recolección textil; no todos los programas aceptan textiles en el contenedor de reciclaje."
  },
  {
    matches: ["reutilizar", "reusar", "reducir", "consejo", "sostenible"],
    reply: "🌿 Tres ideas sencillas: lleva una botella rellenable, usa una bolsa reutilizable y prefiere materiales duraderos. Reutilizar y reducir residuos es mejor que reciclar cuando sea posible."
  },
  {
    matches: ["gracias", "muchas gracias", "conclusion"],
    reply: "En conclusión, EcoCampus es un prototipo web sencillo que demuestra cómo un chatbot basado en reglas puede orientar sobre la separación de residuos. El siguiente paso sería validarlo con usuarios y fuentes oficiales para adaptarlo a las necesidades reales del campus. ¡Gracias!"
  },
  {
    matches: ["ayuda", "que puedes", "que sabes", "opciones"],
    reply: "Puedo orientarte sobre papel y cartón, plástico, latas, vidrio, restos orgánicos, pilas, electrónicos, envases y residuos especiales. Escribe, por ejemplo: “¿Dónde tiro una botella de plástico?”"
  }
];

function normalize(text) {
  return text
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!,.;:]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getReply(message) {
  const normalizedMessage = normalize(message);
  const match = responses.find(({ matches }) =>
    matches.some((term) => normalizedMessage.includes(normalize(term)))
  );

  return match
    ? match.reply
    : "No estoy seguro de ese residuo. Dime de qué material es o si es un aparato, alimento o producto químico. También puedo ayudarte con papel, plástico, vidrio, pilas y compostaje. Recuerda que las reglas pueden variar según tu localidad.";
}

function addMessage(text, sender) {
  const row = document.createElement("div");
  row.className = `message-row ${sender}-row`;

  if (sender === "bot") {
    const avatar = document.createElement("div");
    avatar.className = "message-avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = "🌱";
    row.append(avatar);
  }

  const content = document.createElement("div");
  content.className = "message-content";

  const bubble = document.createElement("p");
  bubble.className = "message-bubble";
  bubble.textContent = text;

  const time = document.createElement("span");
  time.className = "message-time";
  time.textContent = new Intl.DateTimeFormat("es", {
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date());

  content.append(bubble, time);
  row.append(content);
  conversation.append(row);
  conversation.scrollTop = conversation.scrollHeight;
}

function sendMessage(text) {
  const message = text.trim();
  if (!message) return;

  conversation.querySelector(".suggestions")?.remove();
  addMessage(message, "user");
  input.value = "";

  window.setTimeout(() => {
    addMessage(getReply(message), "bot");
    input.focus();
  }, 250);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage(input.value);
});

conversation.addEventListener("click", (event) => {
  const button = event.target.closest("[data-prompt]");
  if (button) sendMessage(button.dataset.prompt);
});

resetButton.addEventListener("click", () => {
  conversation.replaceChildren();
  const row = document.createElement("div");
  row.className = "message-row bot-row";
  const avatar = document.createElement("div");
  avatar.className = "message-avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = "🌱";
  const content = document.createElement("div");
  content.className = "message-content";
  const bubble = document.createElement("p");
  bubble.className = "message-bubble";
  bubble.textContent = initialMessage;
  const time = document.createElement("span");
  time.className = "message-time";
  time.textContent = "Ahora";
  content.append(bubble, time);
  row.append(avatar, content);
  conversation.append(row);

  const newSuggestions = document.createElement("div");
  newSuggestions.className = "suggestions";
  newSuggestions.id = "suggestions";
  newSuggestions.setAttribute("aria-label", "Preguntas sugeridas");
  [
    ["🧴 Botella de plástico", "¿Dónde tiro una botella de plástico?"],
    ["🍌 Restos de comida", "¿Qué hago con restos de comida?"],
    ["🔋 Pilas usadas", "¿Dónde llevo pilas usadas?"]
  ].forEach(([label, prompt]) => {
    const button = document.createElement("button");
    button.className = "suggestion";
    button.type = "button";
    button.dataset.prompt = prompt;
    button.textContent = label;
    newSuggestions.append(button);
  });
  conversation.append(newSuggestions);
  conversation.scrollTop = 0;
});
