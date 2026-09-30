"use client";

import Link from "next/link";
import wines from "../../data/wines";
import "./FeaturedWines.css";
import Image from "next/image";

const getRandomFeaturedWines = () => {
  const availableWines = wines.filter((wine) => wine.featured === true);

  const shuffled = [...availableWines];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled.slice(0, 4);
};

const featuredWines = getRandomFeaturedWines();

export default function FeaturedWines() {
  return (
    <section className="featured-wines">
      <div className="featured-wines__container">
        <div className="featured-wines__header">
          <div>
            <p className="featured-wines__eyebrow">Nuestra selección</p>

            <h2 className="featured-wines__title">Vinos destacados</h2>

            <p className="featured-wines__description">
              Una selección de etiquetas que vale la pena descubrir.
            </p>
          </div>

          <Link href="/catalogo" className="featured-wines__all">
            Ver todos
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="featured-wines__arrow"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="featured-wines__grid">
          {featuredWines.map((wine) => (
            <Link
              key={wine.id}
              href={`/catalogo/${wine.slug}`}
              className="featured-wine"
            >
              <div className="featured-wine__image-wrapper">
                <Image
                  src={wine.image}
                  alt={wine.name}
                  className="featured-wine__image"
                  width={800}
                  height={800}
                />

                <span className="featured-wine__badge">Destacado</span>
              </div>

              <div className="featured-wine__info">
                <div className="featured-wine__top">
                  <span className="featured-wine__type">{wine.type}</span>

                  <span className="featured-wine__arrow">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />

                      <path
                        d="M13 6L19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <h3 className="featured-wine__name">{wine.name}</h3>

                <p className="featured-wine__winery">{wine.winery}</p>

                <div className="featured-wine__bottom">
                  <span className="featured-wine__varietal">
                    {wine.varietal}
                  </span>

                  <span className="featured-wine__price">
                    ${wine.price.toLocaleString("es-AR")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
