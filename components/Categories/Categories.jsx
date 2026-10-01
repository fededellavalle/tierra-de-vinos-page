import Link from "next/link";
import "./Categories.css";

const categories = [
  {
    name: "Tintos",
    description: "Intensos, elegantes y con carácter.",
    href: "/catalogo?tipo=tinto",
    image: "/images/categories/tintos.jpg",
  },
  {
    name: "Blancos",
    description: "Frescos, aromáticos y equilibrados.",
    href: "/catalogo?tipo=blanco",
    image: "/images/categories/blancos.jpg",
  },
  {
    name: "Rosados",
    description: "Frescos, delicados y versátiles.",
    href: "/catalogo?tipo=rosado",
    image: "/images/categories/rosados.webp",
  },
  {
    name: "Espumantes",
    description: "Para brindar y celebrar.",
    href: "/catalogo?tipo=espumante",
    image: "/images/categories/espumantes.jpg",
  },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__container">
        <div className="categories__header">
          <div>
            <p className="categories__eyebrow">Nuestra selección</p>

            <h2 className="categories__title">Descubrí nuestros vinos</h2>
          </div>

          <Link href="/catalogo" className="categories__all">
            <span>Ver todo</span>

            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 8H13"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M9 4L13 8L9 12"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="categories__grid">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="category-card"
            >
              <div
                className="category-card__image"
                style={{
                  backgroundImage: `url(${category.image})`,
                }}
              />

              <div className="category-card__overlay"></div>

              <div className="category-card__content">
                <div>
                  <p className="category-card__description">
                    {category.description}
                  </p>

                  <h3 className="category-card__title">{category.name}</h3>
                </div>

                <span className="category-card__arrow" aria-hidden="true">
                  <span>Ver</span>

                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8H13"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 4L13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
