const wines = [
  {
    id: 1,
    slug: "norton-reserva-malbec",
    name: "Norton Reserva Malbec",
    winery: "Bodega Norton",
    type: "Tinto",
    varietal: "Malbec",
    region: "Mendoza",
    price: 14200,
    image: "/images/wines/1.webp",

    description:
      "Un Malbec equilibrado y expresivo, con buena concentración, frescura y notas frutales.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 2,
    slug: "salentein-reserva-chardonnay",
    name: "Salentein Reserva Chardonnay",
    winery: "Bodega Salentein",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Valle de Uco, Mendoza",
    price: 18500,
    image: "/images/wines/2.jpg",

    description:
      "Un Chardonnay fresco y aromático, con notas cítricas, florales y una buena persistencia.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 3,
    slug: "luigi-bosca-malbec",
    name: "Luigi Bosca Malbec",
    winery: "Luigi Bosca",
    type: "Tinto",
    varietal: "Malbec",
    region: "Mendoza",
    price: 23000,
    image: "/images/wines/3.jpg",

    description:
      "Un Malbec de gran expresión, con frutas rojas, notas florales y especiadas y un final profundo.",

    characteristics: {
      body: "medio-alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 4,
    slug: "rutini-coleccion-malbec",
    name: "Rutini Colección Malbec",
    winery: "Rutini Wines",
    type: "Tinto",
    varietal: "Malbec",
    region: "Mendoza",
    price: 38000,
    image: "/images/wines/4.webp",

    description:
      "Un Malbec concentrado y estructurado, con fruta intensa, notas de vainilla y especias.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 5,
    slug: "trapiche-vineyards-cabernet-sauvignon",
    name: "Trapiche Vineyards Cabernet Sauvignon",
    winery: "Bodega Trapiche",
    type: "Tinto",
    varietal: "Cabernet Sauvignon",
    region: "Mendoza",
    price: 12500,
    image: "/images/wines/5.jpg",

    description:
      "Un Cabernet Sauvignon de perfil frutado y estructurado, ideal para acompañar carnes y pastas.",

    characteristics: {
      body: "medio-alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 6,
    slug: "el-esteco-torrontes-tardio",
    name: "El Esteco Torrontés Tardío",
    winery: "Bodega El Esteco",
    type: "Blanco",
    varietal: "Torrontés",
    region: "Cafayate, Salta",
    price: 15000,
    image: "/images/wines/6.jpeg",

    description:
      "Un Torrontés dulce y aromático, con intensas notas florales y una expresión fresca y frutada.",

    characteristics: {
      body: "medio",
      sweetness: "dulce",
      acidity: "media",
    },
  },

  {
    id: 7,
    slug: "zuccardi-q-malbec",
    name: "Zuccardi Q Malbec",
    winery: "Zuccardi Wines",
    type: "Tinto",
    varietal: "Malbec",
    region: "Valle de Uco, Mendoza",
    price: 27000,
    image: "/images/wines/7.webp",

    description:
      "Un Malbec de gran frescura, con fruta roja, hierbas y especias y taninos jugosos.",

    characteristics: {
      body: "medio-alto",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 8,
    slug: "rutini-coleccion-chardonnay",
    name: "Rutini Colección Chardonnay",
    winery: "Rutini Wines",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Mendoza",
    price: 32000,
    image: "/images/wines/8.webp",

    description:
      "Un Chardonnay elegante y complejo, con fruta madura, notas tropicales, vainilla y buena mineralidad.",

    characteristics: {
      body: "medio-alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 9,
    slug: "rutini-coleccion-rose-malbec",
    name: "Rutini Colección Rosé de Malbec",
    winery: "Rutini Wines",
    type: "Rosado",
    varietal: "Malbec",
    region: "Valle de Uco, Mendoza",
    price: 49500,
    image: "/images/wines/9.Webp",

    description:
      "Un rosado sofisticado y aterciopelado, con aromas florales y suaves notas de vainilla y coco.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 10,
    slug: "luigi-bosca-de-sangre-malbec-doc",
    name: "Luigi Bosca De Sangre Malbec D.O.C.",
    winery: "Luigi Bosca",
    type: "Tinto",
    varietal: "Malbec",
    region: "Luján de Cuyo, Mendoza",
    price: 42000,
    image: "/images/wines/10.png",

    description:
      "Un Malbec elegante y profundo, con frutas rojas y negras, especias dulces y taninos finos.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "media",
    },
  },
  {
    id: 11,
    slug: "luigi-bosca-chardonnay",
    name: "Luigi Bosca Chardonnay",
    winery: "Luigi Bosca",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Mendoza",
    price: 18500,
    image: "/images/wines/11.jpg",

    description:
      "Un Chardonnay elegante y fresco, con buena expresión frutal, notas cítricas y una textura equilibrada.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 12,
    slug: "dv-catena-chardonnay",
    name: "DV Catena Chardonnay",
    winery: "Bodega Catena Zapata",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Mendoza",
    price: 24000,
    image: "/images/wines/12.jpg",

    description:
      "Un Chardonnay complejo y elegante, con fruta madura, notas minerales y una acidez fresca.",

    characteristics: {
      body: "medio-alto",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 13,
    slug: "el-enemigo-chardonnay",
    name: "El Enemigo Chardonnay",
    winery: "El Enemigo",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Mendoza",
    price: 29500,
    image: "/images/wines/13.webp",

    description:
      "Un Chardonnay complejo y expresivo, con fruta madura, notas minerales y una marcada personalidad.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 14,
    slug: "zuccardi-q-chardonnay",
    name: "Zuccardi Q Chardonnay",
    winery: "Zuccardi Wines",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Valle de Uco, Mendoza",
    price: 23500,
    image: "/images/wines/14.jpeg",

    description:
      "Un Chardonnay fresco y elegante, con notas de frutas blancas, cítricos y una marcada mineralidad.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 15,
    slug: "trapiche-reserva-chardonnay",
    name: "Trapiche Reserva Chardonnay",
    winery: "Bodega Trapiche",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Mendoza",
    price: 9500,
    image: "/images/wines/15.png",

    description:
      "Un Chardonnay fresco y amable, con aromas frutales, notas cítricas y un final equilibrado.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 16,
    slug: "la-mascota-chardonnay",
    name: "La Mascota Chardonnay",
    winery: "La Mascota Vineyards",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Mendoza",
    price: 16500,
    image: "/images/wines/16.jpg",

    description:
      "Un Chardonnay equilibrado y aromático, con frutas tropicales, cítricos y una textura agradable.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 17,
    slug: "terrazas-reserva-chardonnay",
    name: "Terrazas de los Andes Reserva Chardonnay",
    winery: "Terrazas de los Andes",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Mendoza",
    price: 17500,
    image: "/images/wines/17.jpeg",

    description:
      "Un Chardonnay fresco y elegante, con notas de frutas blancas, cítricos y una textura cremosa.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 18,
    slug: "salentein-primus-chardonnay",
    name: "Salentein Primus Chardonnay",
    winery: "Bodega Salentein",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Valle de Uco, Mendoza",
    price: 45000,
    image: "/images/wines/18.jpg",

    description:
      "Un Chardonnay de alta gama, complejo y elegante, con fruta madura, notas minerales y gran persistencia.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 19,
    slug: "saint-felicien-chardonnay",
    name: "Saint Felicien Chardonnay Roble",
    winery: "Catena Zapata",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Mendoza",
    price: 15500,
    image: "/images/wines/19.jpg",

    description:
      "Un Chardonnay equilibrado con notas de frutas tropicales, vainilla y un delicado paso por madera.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 20,
    slug: "animal-chardonnay-organico",
    name: "Animal Chardonnay Orgánico",
    winery: "Mendoza Vineyards",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Mendoza",
    price: 12500,
    image: "/images/wines/20.jpg",

    description:
      "Un Chardonnay fresco y frutado, con notas de manzana, pera y cítricos.",

    characteristics: {
      body: "ligero",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 21,
    slug: "la-linda-chardonnay",
    name: "La Linda Chardonnay",
    winery: "Luigi Bosca",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Mendoza",
    price: 10500,
    image: "/images/wines/21.jpg",

    description:
      "Un Chardonnay fresco, ligero y aromático, ideal para disfrutar bien frío.",

    characteristics: {
      body: "ligero",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 22,
    slug: "santa-julia-chardonnay",
    name: "Santa Julia Chardonnay",
    winery: "Santa Julia",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Mendoza",
    price: 7500,
    image: "/images/wines/22.png",

    description:
      "Un Chardonnay joven y fresco, con aromas de frutas blancas y buena acidez.",

    characteristics: {
      body: "ligero",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 23,
    slug: "alamos-chardonnay",
    name: "Alamos Chardonnay",
    winery: "Bodega Catena Zapata",
    type: "Blanco",
    varietal: "Chardonnay",
    region: "Mendoza",
    price: 9500,
    image: "/images/wines/23.jpg",

    description:
      "Un Chardonnay fresco y frutado, con notas de manzana, pera y cítricos.",

    characteristics: {
      body: "ligero",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 24,
    slug: "luigi-bosca-malbec",
    name: "Luigi Bosca Malbec",
    winery: "Luigi Bosca",
    type: "Tinto",
    varietal: "Malbec",
    region: "Mendoza",
    price: 25000,
    image: "/images/wines/24.png",

    description:
      "Un Malbec elegante y expresivo, con frutas rojas, especias y taninos suaves.",

    characteristics: {
      body: "medio-alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 25,
    slug: "zuccardi-q-malbec",
    name: "Zuccardi Q Malbec",
    winery: "Zuccardi Wines",
    type: "Tinto",
    varietal: "Malbec",
    region: "Valle de Uco, Mendoza",
    price: 28000,
    image: "/images/wines/25.webp",

    description:
      "Un Malbec fresco y expresivo, con frutas rojas, hierbas y taninos jugosos.",

    characteristics: {
      body: "medio-alto",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 26,
    slug: "trapiche-medalla-malbec",
    name: "Trapiche Medalla Malbec",
    winery: "Bodega Trapiche",
    type: "Tinto",
    varietal: "Malbec",
    region: "Mendoza",
    price: 25000,
    image: "/images/wines/26.jpg",

    description:
      "Un Malbec estructurado y elegante, con frutas negras, especias y un final persistente.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 27,
    slug: "rutini-malbec",
    name: "Rutini Malbec",
    winery: "Rutini Wines",
    type: "Tinto",
    varietal: "Malbec",
    region: "Mendoza",
    price: 30000,
    image: "/images/wines/27.jpg",

    description:
      "Un Malbec elegante y equilibrado, con frutas maduras, especias y taninos redondos.",

    characteristics: {
      body: "medio-alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 28,
    slug: "norton-privada-malbec",
    name: "Norton Privada Malbec",
    winery: "Bodega Norton",
    type: "Tinto",
    varietal: "Malbec",
    region: "Mendoza",
    price: 42000,
    image: "/images/wines/28.jpg",

    description:
      "Un Malbec complejo y profundo, con frutas negras, especias y taninos elegantes.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 29,
    slug: "catena-malbec",
    name: "Catena Malbec",
    winery: "Catena Zapata",
    type: "Tinto",
    varietal: "Malbec",
    region: "Mendoza",
    price: 22000,
    image: "/images/wines/29.jpg",

    description:
      "Un Malbec clásico y expresivo, con frutas negras, violetas y especias.",

    characteristics: {
      body: "medio-alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 30,
    slug: "angelica-zapata-malbec",
    name: "Angélica Zapata Malbec",
    winery: "Catena Zapata",
    type: "Tinto",
    varietal: "Malbec",
    region: "Mendoza",
    price: 45000,
    image: "/images/wines/30.webp",

    description:
      "Un Malbec elegante y complejo, con gran concentración de fruta, especias y taninos refinados.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 31,
    slug: "el-enemigo-malbec",
    name: "El Enemigo Malbec",
    winery: "El Enemigo",
    type: "Tinto",
    varietal: "Malbec",
    region: "Mendoza",
    price: 32000,
    image: "/images/wines/31.webp",

    description:
      "Un Malbec de gran personalidad, con fruta negra, hierbas, especias y una estructura marcada.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 32,
    slug: "kaiken-ultra-malbec",
    name: "Kaiken Ultra Malbec",
    winery: "Kaiken Wines",
    type: "Tinto",
    varietal: "Malbec",
    region: "Mendoza",
    price: 29000,
    image: "/images/wines/32.jpg",

    description:
      "Un Malbec intenso y estructurado, con frutas negras, especias y taninos maduros.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 33,
    slug: "terrazas-reserva-malbec",
    name: "Terrazas de los Andes Reserva Malbec",
    winery: "Terrazas de los Andes",
    type: "Tinto",
    varietal: "Malbec",
    region: "Mendoza",
    price: 18000,
    image: "/images/wines/33.jpg",

    description:
      "Un Malbec fresco y equilibrado, con notas de ciruela, frutos rojos y especias.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 34,
    slug: "norton-cosecha-malbec",
    name: "Norton Cosecha Malbec",
    winery: "Bodega Norton",
    type: "Tinto",
    varietal: "Malbec",
    region: "Mendoza",
    price: 8500,
    image: "/images/wines/34.webp",

    description:
      "Un Malbec joven, frutado y fácil de beber, con notas de ciruela y frutos rojos.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 35,
    slug: "cabernet-sauvignon-trapiche-reserva",
    name: "Trapiche Reserva Cabernet Sauvignon",
    winery: "Bodega Trapiche",
    type: "Tinto",
    varietal: "Cabernet Sauvignon",
    region: "Mendoza",
    price: 10500,
    image: "/images/wines/35.jpg",

    description:
      "Un Cabernet Sauvignon equilibrado, con frutas negras, especias y taninos firmes.",

    characteristics: {
      body: "medio-alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 36,
    slug: "catena-cabernet-sauvignon",
    name: "Catena Cabernet Sauvignon",
    winery: "Catena Zapata",
    type: "Tinto",
    varietal: "Cabernet Sauvignon",
    region: "Mendoza",
    price: 23000,
    image: "/images/wines/36.jpg",

    description:
      "Un Cabernet Sauvignon elegante y estructurado, con cassis, especias y taninos firmes.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 37,
    slug: "luigi-bosca-cabernet-sauvignon",
    name: "Luigi Bosca Cabernet Sauvignon",
    winery: "Luigi Bosca",
    type: "Tinto",
    varietal: "Cabernet Sauvignon",
    region: "Mendoza",
    price: 25000,
    image: "/images/wines/37.jpg",

    description:
      "Un Cabernet Sauvignon elegante, con frutas negras, especias y taninos sedosos.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 38,
    slug: "rutini-cabernet-malbec",
    name: "Rutini Cabernet Malbec",
    winery: "Rutini Wines",
    type: "Tinto",
    varietal: "Cabernet Sauvignon / Malbec",
    region: "Mendoza",
    price: 29000,
    image: "/images/wines/38.jpg",

    description:
      "Un blend equilibrado y estructurado, con frutas maduras, especias y taninos elegantes.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 39,
    slug: "salentein-reserva-cabernet-sauvignon",
    name: "Salentein Reserva Cabernet Sauvignon",
    winery: "Bodega Salentein",
    type: "Tinto",
    varietal: "Cabernet Sauvignon",
    region: "Valle de Uco, Mendoza",
    price: 18500,
    image: "/images/wines/39.jpg",

    description:
      "Un Cabernet Sauvignon intenso y elegante, con frutas negras, especias y buena estructura.",

    characteristics: {
      body: "medio-alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 40,
    slug: "el-enemigo-cabernet-franc",
    name: "El Enemigo Cabernet Franc",
    winery: "El Enemigo",
    type: "Tinto",
    varietal: "Cabernet Franc",
    region: "Mendoza",
    price: 35000,
    image: "/images/wines/40.jpg",

    description:
      "Un Cabernet Franc profundo y complejo, con notas herbales, fruta negra y especias.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 41,
    slug: "salentein-reserva-cabernet-franc",
    name: "Salentein Reserva Cabernet Franc",
    winery: "Bodega Salentein",
    type: "Tinto",
    varietal: "Cabernet Franc",
    region: "Valle de Uco, Mendoza",
    price: 19000,
    image: "/images/wines/41.webp",

    description:
      "Un Cabernet Franc fresco y estructurado, con frutas negras, hierbas y especias.",

    characteristics: {
      body: "medio-alto",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 42,
    slug: "trapiche-medalla-cabernet-franc",
    name: "Trapiche Medalla Cabernet Franc",
    winery: "Bodega Trapiche",
    type: "Tinto",
    varietal: "Cabernet Franc",
    region: "Mendoza",
    price: 26000,
    image: "/images/wines/42.jpg",

    description:
      "Un Cabernet Franc elegante y estructurado, con notas de frutas negras, hierbas y especias.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 43,
    slug: "santa-julia-reserva-bonarda",
    name: "Santa Julia Reserva Bonarda",
    winery: "Santa Julia",
    type: "Tinto",
    varietal: "Bonarda",
    region: "Mendoza",
    price: 11000,
    image: "/images/wines/43.webp",

    description:
      "Una Bonarda frutada y amable, con notas de moras, ciruelas y especias suaves.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 44,
    slug: "norton-bonarda",
    name: "Norton Bonarda",
    winery: "Bodega Norton",
    type: "Tinto",
    varietal: "Bonarda",
    region: "Mendoza",
    price: 9000,
    image: "/images/wines/44.webp",

    description:
      "Una Bonarda joven y frutada, con buena frescura y notas de frutos rojos.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 45,
    slug: "luigi-bosca-pinot-noir",
    name: "Luigi Bosca Pinot Noir",
    winery: "Luigi Bosca",
    type: "Tinto",
    varietal: "Pinot Noir",
    region: "Mendoza",
    price: 24000,
    image: "/images/wines/45.jpg",

    description:
      "Un Pinot Noir elegante y delicado, con frutos rojos, especias suaves y una textura sedosa.",

    characteristics: {
      body: "ligero",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 46,
    slug: "salentein-reserva-pinot-noir",
    name: "Salentein Reserva Pinot Noir",
    winery: "Bodega Salentein",
    type: "Tinto",
    varietal: "Pinot Noir",
    region: "Valle de Uco, Mendoza",
    price: 19000,
    image: "/images/wines/46.webp",

    description:
      "Un Pinot Noir fresco y aromático, con frutos rojos, especias y buena acidez.",

    characteristics: {
      body: "ligero",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 47,
    slug: "norton-pinot-noir",
    name: "Norton Pinot Noir",
    winery: "Bodega Norton",
    type: "Tinto",
    varietal: "Pinot Noir",
    region: "Mendoza",
    price: 11000,
    image: "/images/wines/47.jpg",

    description:
      "Un Pinot Noir joven, fresco y frutado, con notas de cerezas y frutos rojos.",

    characteristics: {
      body: "ligero",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 48,
    slug: "trapiche-reserva-syrah",
    name: "Trapiche Reserva Syrah",
    winery: "Bodega Trapiche",
    type: "Tinto",
    varietal: "Syrah",
    region: "Mendoza",
    price: 10500,
    image: "/images/wines/48.jpg",

    description:
      "Un Syrah intenso y especiado, con frutas negras, pimienta y taninos equilibrados.",

    characteristics: {
      body: "medio-alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 49,
    slug: "luigi-bosca-syrah",
    name: "Luigi Bosca Syrah",
    winery: "Luigi Bosca",
    type: "Tinto",
    varietal: "Syrah",
    region: "Mendoza",
    price: 24000,
    image: "/images/wines/49.jpg",

    description:
      "Un Syrah expresivo y elegante, con frutos negros, especias y notas de pimienta.",

    characteristics: {
      body: "alto",
      sweetness: "seco",
      acidity: "media",
    },
  },

  {
    id: 50,
    slug: "norton-torrontes",
    name: "Norton Torrontés",
    winery: "Bodega Norton",
    type: "Blanco",
    varietal: "Torrontés",
    region: "Mendoza",
    price: 8500,
    image: "/images/wines/50.jpg",

    description:
      "Un Torrontés aromático y fresco, con intensas notas florales y frutas blancas.",

    characteristics: {
      body: "ligero",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 51,
    slug: "santa-julia-torrontes",
    name: "Santa Julia Torrontés",
    winery: "Santa Julia",
    type: "Blanco",
    varietal: "Torrontés",
    region: "Mendoza",
    price: 7500,
    image: "/images/wines/51.jpg",

    description:
      "Un Torrontés fresco y aromático, con notas florales, cítricas y de frutas blancas.",

    characteristics: {
      body: "ligero",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 52,
    slug: "el-esteco-torrontes",
    name: "El Esteco Torrontés",
    winery: "Bodega El Esteco",
    type: "Blanco",
    varietal: "Torrontés",
    region: "Cafayate, Salta",
    price: 10500,
    image: "/images/wines/52.jpeg",

    description:
      "Un Torrontés intenso y aromático, con flores blancas, cítricos y frutas tropicales.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 53,
    slug: "alamos-sauvignon-blanc",
    name: "Alamos Sauvignon Blanc",
    winery: "Catena Zapata",
    type: "Blanco",
    varietal: "Sauvignon Blanc",
    region: "Mendoza",
    price: 9500,
    image: "/images/wines/53.webp",

    description:
      "Un Sauvignon Blanc fresco y aromático, con cítricos, hierbas y una acidez vibrante.",

    characteristics: {
      body: "ligero",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 54,
    slug: "terrazas-reserva-sauvignon-blanc",
    name: "Terrazas de los Andes Reserva Sauvignon Blanc",
    winery: "Terrazas de los Andes",
    type: "Blanco",
    varietal: "Sauvignon Blanc",
    region: "Mendoza",
    price: 13500,
    image: "/images/wines/54.jpg",

    description:
      "Un Sauvignon Blanc fresco y expresivo, con cítricos, hierbas y notas minerales.",

    characteristics: {
      body: "ligero",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 55,
    slug: "norton-sauvignon-blanc",
    name: "Norton Sauvignon Blanc",
    winery: "Bodega Norton",
    type: "Blanco",
    varietal: "Sauvignon Blanc",
    region: "Mendoza",
    price: 8500,
    image: "/images/wines/55.jpg",

    description:
      "Un Sauvignon Blanc fresco y ligero, con aromas cítricos y herbales.",

    characteristics: {
      body: "ligero",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 56,
    slug: "rutini-sauvignon-blanc",
    name: "Rutini Sauvignon Blanc",
    winery: "Rutini Wines",
    type: "Blanco",
    varietal: "Sauvignon Blanc",
    region: "Mendoza",
    price: 18000,
    image: "/images/wines/56.jpg",

    description:
      "Un Sauvignon Blanc elegante y fresco, con notas cítricas, herbales y minerales.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 57,
    slug: "rutini-extra-brut",
    name: "Rutini Extra Brut",
    winery: "Rutini Wines",
    type: "Espumante",
    varietal: "Chardonnay / Pinot Noir",
    region: "Mendoza",
    price: 22000,
    image: "/images/wines/57.webp",

    description:
      "Un espumante elegante y fresco, con burbujas delicadas, frutas blancas y buena acidez.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 58,
    slug: "salentein-extra-brut",
    name: "Salentein Extra Brut",
    winery: "Bodega Salentein",
    type: "Espumante",
    varietal: "Chardonnay / Pinot Noir",
    region: "Valle de Uco, Mendoza",
    price: 19000,
    image: "/images/wines/58.jpg",

    description:
      "Un espumante fresco y elegante, con notas de frutas blancas, cítricos y una fina burbuja.",

    characteristics: {
      body: "ligero",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 59,
    slug: "luigi-bosca-extra-brut",
    name: "Luigi Bosca Extra Brut",
    winery: "Luigi Bosca",
    type: "Espumante",
    varietal: "Chardonnay / Pinot Noir",
    region: "Mendoza",
    price: 28000,
    image: "/images/wines/59.jpg",

    description:
      "Un espumante sofisticado y equilibrado, con fruta fresca, notas cítricas y excelente persistencia.",

    characteristics: {
      body: "medio",
      sweetness: "seco",
      acidity: "alta",
    },
  },

  {
    id: 60,
    slug: "norton-cosecha-tardia",
    name: "Norton Cosecha Tardía Blanco",
    winery: "Bodega Norton",
    type: "Blanco",
    varietal: "Sauvignon Blanc / Semillón",
    region: "Mendoza",
    price: 12000,
    image: "/images/wines/60.jpg",

    description:
      "Un vino dulce y aromático, con notas de frutas maduras, miel y flores.",

    characteristics: {
      body: "medio",
      sweetness: "dulce",
      acidity: "media",
    },
  },
];

export default wines;
