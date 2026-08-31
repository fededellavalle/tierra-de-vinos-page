"use client";

import Link from "next/link";
import Image from "next/image";

import "./WineDetail.css";

export default function WineDetail({ wine }) {
  return (
    <main className="wine-detail">
      {/* =====================================
          BREADCRUMB
      ===================================== */}

      <div className="wine-detail__top">
        <div className="wine-detail__container">
          <Link href="/catalogo" className="wine-detail__back">
            ← Volver al catálogo
          </Link>
        </div>
      </div>

      {/* =====================================
          PRODUCT
      ===================================== */}

      <section className="wine-detail__product">
        <div className="wine-detail__container">
          <div className="wine-detail__grid">
            {/* IMAGE */}

            <div className="wine-detail__image-wrapper">
              {wine.image ? (
                <Image
                  src={wine.image}
                  alt={wine.name}
                  className="wine-detail__image"
                  fill
                  sizes="(max-width: 900px) 92vw, 50vw"
                  priority
                />
              ) : (
                <div className="wine-detail__placeholder">
                  <span>TIERRA</span>
                  <strong>DE VINOS</strong>
                </div>
              )}
            </div>

            {/* INFORMATION */}

            <div className="wine-detail__info">
              <p className="wine-detail__eyebrow">{wine.type}</p>

              <h1 className="wine-detail__title">{wine.name}</h1>

              <p className="wine-detail__winery">{wine.winery}</p>

              <div className="wine-detail__line" />

              {/* DESCRIPTION */}

              <p className="wine-detail__description">{wine.description}</p>

              {/* DETAILS */}

              <div className="wine-detail__details">
                <div className="wine-detail__detail">
                  <span>Varietal</span>
                  <strong>{wine.varietal}</strong>
                </div>

                <div className="wine-detail__detail">
                  <span>Región</span>
                  <strong>{wine.region}</strong>
                </div>

                <div className="wine-detail__detail">
                  <span>Tipo</span>
                  <strong>{wine.type}</strong>
                </div>
              </div>

              {/* CHARACTERISTICS */}

              <div className="wine-detail__characteristics">
                <h2>Características</h2>

                <div className="wine-detail__characteristics-grid">
                  <div>
                    <span>Cuerpo</span>
                    <strong>{wine.characteristics.body}</strong>
                  </div>

                  <div>
                    <span>Dulzor</span>
                    <strong>{wine.characteristics.sweetness}</strong>
                  </div>

                  <div>
                    <span>Acidez</span>
                    <strong>{wine.characteristics.acidity}</strong>
                  </div>
                </div>
              </div>

              {/* PRICE */}

              <div className="wine-detail__purchase">
                <div>
                  <span>Precio</span>

                  <strong>${wine.price.toLocaleString("es-AR")}</strong>
                </div>

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wine-detail__whatsapp"
                >
                  <span>Consultar disponibilidad</span>

                  <svg
                    className="wine-detail__whatsapp-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 6L19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
