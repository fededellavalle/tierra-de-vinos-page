export const steps = [
  {
    id: "type",
    title: "¿Qué tipo de vino te gustaría?",
    description: "Elegí el estilo que más te guste.",
  },
  {
    id: "body",
    title: "¿Qué intensidad preferís?",
    description: "Desde algo ligero y fresco hasta un vino con más presencia.",
  },
  {
    id: "sweetness",
    title: "¿Cómo lo preferís?",
    description: "Elegí el nivel de dulzor que más disfrutás.",
  },
  {
    id: "occasion",
    title: "¿Para qué ocasión estás buscando?",
    description: "Así podemos encontrar un vino que vaya con el momento.",
  },
  {
    id: "price",
    title: "¿Cuánto querés gastar?",
    description: "Indicá aproximadamente cuánto querés invertir.",
  },
];

export const occasionOptions = [
  {
    value: "cena",
    label: "Una cena",
    description: "Para acompañar una buena comida.",
  },
  {
    value: "asado",
    label: "Un asado",
    description: "Para disfrutar con una buena parrilla.",
  },
  {
    value: "reunion",
    label: "Reunión con amigos",
    description: "Un vino para compartir.",
  },
  {
    value: "pareja",
    label: "Una noche en pareja",
    description: "Algo especial para dos.",
  },
  {
    value: "regalo",
    label: "Para regalar",
    description: "Quiero quedar bien.",
  },
  {
    value: "solo",
    label: "Para disfrutar",
    description: "Una copa para mí.",
  },
  {
    value: "amigos",
    label: "Juntada",
    description: "Para compartir entre amigos.",
  },
  {
    value: "pescados",
    label: "Con pescados",
    description: "Para acompañar platos de mar.",
  },
  {
    value: "pastas",
    label: "Con pastas",
    description: "Para acompañar una buena pasta.",
  },
  {
    value: "postres",
    label: "Con postre",
    description: "Algo dulce para cerrar la comida.",
  },
  {
    value: "celebracion",
    label: "Una celebración",
    description: "Para brindar por algo especial.",
  },
];

export const typeOptions = [
  {
    value: "tinto",
    label: "Tinto",
    description: "Intensos, elegantes y con carácter.",
  },
  {
    value: "blanco",
    label: "Blanco",
    description: "Frescos, aromáticos y equilibrados.",
  },
  {
    value: "rosado",
    label: "Rosado",
    description: "Frescos, frutales y versátiles.",
  },
  {
    value: "espumante",
    label: "Espumante",
    description: "Frescos, elegantes y especiales.",
  },
];

export const bodyOptions = [
  {
    value: "ligero",
    label: "Ligero",
    description: "Fresco y fácil de tomar.",
  },
  {
    value: "medio",
    label: "Medio",
    description: "Equilibrado y versátil.",
  },
  {
    value: "intenso",
    label: "Intenso",
    description: "Con cuerpo y mucha presencia.",
  },
];

export const sweetnessOptions = [
  {
    value: "seco",
    label: "Seco",
    description: "Sin sensación dulce.",
  },
  {
    value: "medio",
    label: "Equilibrado",
    description: "Un punto intermedio.",
  },
  {
    value: "dulce",
    label: "Dulce",
    description: "Con una sensación más dulce.",
  },
];

export const MIN_PRICE = 10000;
export const MAX_PRICE = 60000;
